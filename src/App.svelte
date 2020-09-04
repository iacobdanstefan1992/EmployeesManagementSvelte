<script>	
	import ActionButton from "./components/ActionButton.svelte";
	import EmployeeList from "./components/EmployeeList.svelte";
	import AddEditEmployee from "./components/AddEditEmployee.svelte";
	import repositories from "./repository";
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	
	//const employees = repositories.employees.getAll();
	let employees = [];
	let departments = [];
	let jobCategories = [];
	let loadDataPromise;
	function refreshEmployeeList() {
		loadDataPromise = new Promise((resolve, reject) => {
			const employeePromise = repositories.employees.getAll()
				.then((employeesResult) => {
					employees = employeesResult;
				});
			const departmentsPromise = repositories.departments.getAll()
				.then((departmentsResult) => {
					departments = departmentsResult;
				});
			const jobCategoriesPromise = repositories.jobCategories.getAll()
				.then((jobCategoriesResult) => {
					jobCategories = jobCategoriesResult;
				})
			Promise.all([ employeePromise, departmentsPromise, jobCategoriesPromise ]).then(() => {
				resolve();
			}).catch(() => {
				reject();
			});
		});
	}
	
	refreshEmployeeList();
	let showModal = false;
	let selectedEmployee;	
	function onEmployeeClicked(e) {
		const employeeId = e.detail.employee.id;
		repositories.employees.get(employeeId).then((employee) => {
			console.log(employee);
			selectedEmployee = employee;			
			showModal = true;			
		});			
	}
	function onModalClosed() {
		showModal = false;
		employees = employees;
	}
	
	function onModalSubmitted() {
		const onComplete = () => {
			refreshEmployeeList();
			showModal = false;
		};
		const employee = Object.assign({}, selectedEmployee);
		employee.birthday = new Date(employee.birthday);
		employee.startDate = new Date(employee.startDate);
		if (employee.endDate.length > 0) {
			employee.endDate = new Date(employee.endDate);
		} else {
			employee.endDate = null;
		}
		if (!employee.id) {
			repositories.employees.add(employee).then(onComplete);
		} else {
			repositories.employees.update(employee.id, employee).then(onComplete);
		}
	}
	function onEmployeeDelete() {		
		if (!confirm("Are you sure to delete the selected employee?")) {
			return;
		}
		repositories.employees.delete(selectedEmployee.id).then(() => {
			refreshEmployeeList();
			showModal = false;
		});
	}
	function onAddButtonPressed() {
		selectedEmployee = {
			address: "",
			birthday: undefined,
			email: "",
			endDate: undefined,
			firstName: "",
			hasDrivingLicense: false,
			id: undefined,
			isActive: true,
			ifFemale: true,
			isManager: false,
			lastName: "",
			noChildren: 0,
			postalCode: "",
			salary: 0,
			socialSecurityNumber: "",
			startDate: undefined,
			studies: "",
			telephone: ""
		};
		showModal = true;
	}
</script>

<div class="content-wrapper">
	<Header></Header>	
	
	<div class="card">
		{#await loadDataPromise}
		<div class="loading">
			Loading...
		</div>
		{:then}
		<EmployeeList employees={employees} {departments} {jobCategories} on:click="{onEmployeeClicked}" />
		{:catch}
		Error while loading.
		{/await}
	</div>

	<Footer></Footer>
</div>

<ActionButton on:click={onAddButtonPressed} />

{#if showModal}
<AddEditEmployee {selectedEmployee} {departments} {jobCategories} on:close={onModalClosed} on:submit={onModalSubmitted} on:delete={onEmployeeDelete} />
{/if}

<style>
	
	.content-wrapper {
		width: 920px;
		margin: 0 auto;
	}

	.card {
		background-color: white;
		box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
		border-radius: 5px;
	}
	.card .loading {
		padding: 4em;
		text-align: center;
		background: repeating-linear-gradient(
			45deg,
			transparent 0px,
			transparent 15px,
			rgba(0, 0, 0, 0.1) 15px,
			rgba(0, 0, 0, 0.1) 30px
		);
	}
</style>