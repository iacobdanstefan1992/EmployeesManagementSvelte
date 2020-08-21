<script>
	import repositories from "./repository";
	const employees = repositories.employees.getAll();

	function formatDate(date) {		
		if (date === null) {
			return "–";
		}

		return date.toLocaleDateString();
	}

	function formatBoolean(bool) {
		if (bool) {
			return "Yes";
		} else {
			return "No";
		}
	}

	console.log(employees);
</script>

<div class="content-wrapper">
	<header>
		<h1>EmployeeManagement</h1>
	</header>	

	<div class="employees-list">
		<table>
			<thead>
				<tr>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Department</th>
					<th>Position</th>
					<th>Start Date</th>
					<th>End Date</th>
					<th class="centered">Manager</th>
					<th class="centered">Active</th>
				</tr>
			</thead>
	
			<tbody>
				{#each employees as employee}
					<tr>
						<td>{employee.firstName}</td>
						<td>{employee.lastName}</td>
						<td>&ndash;</td>
						<td>&ndash;</td>
						<td>{formatDate(employee.startDate)}</td>
						<td>{formatDate(employee.endDate)}</td>
						<td class="centered">{formatBoolean(employee.isManager)}</td>
						<td class="centered">{formatBoolean(employee.isActive)}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<footer>
		&copy; 2020 The Trainees at Ausy Technologies Romania.<br />
		Icons provided by Icons8. Powered by Svelte.
	</footer>
</div>


<style>
	header {
		color: white;
	}

	.content-wrapper {
		overflow: hidden;
		width: 920px;
		margin: 0 auto;
	}

	.employees-list table {
		background-color: white;
		width: 100%;
	}

	.employees-list table th {
		color: rgb(57, 66, 91);
		text-transform: uppercase;
		text-align: left;
	}

	.employees-list table th,
	.employees-list table td {
		padding: 0.5em;
	}

	.employees-list .centered {
		text-align: center;
	}

	footer {
		font-size: 0.8em;
		color: rgb(205, 207, 214);
		margin-top: 2em;
	}
</style>