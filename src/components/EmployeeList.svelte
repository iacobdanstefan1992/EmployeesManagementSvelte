<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
	export let employees;
	export let departments;
	export let jobCategories;
	let departmentsMap = {};
	let jobCategoriesMap = {};
	$: {
		departmentsMap = entityArrayToMap(departments);
		console.log(departmentsMap);
		console.log(departments);
		jobCategoriesMap = entityArrayToMap(jobCategories);
	}
	function getDepartmentName(id) {
		return (departmentsMap[id] !== undefined ? departmentsMap[id].name : "-");
	}
	function getJobCategoryName(id) {
		return (jobCategoriesMap[id] !== undefined ? jobCategoriesMap[id].name : "-");
	}
	function entityArrayToMap(entityList) {
		const result = {};
		for (const entity of entityList) {
			result[entity.id] = entity;
		}
		return result;
	}
    
    function formatDate(date) {		
		if (date === null) {
			return "–";
		}
		if (typeof(date) !== Date) {
			date = new Date(date);
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
    
    function onEmployeeClicked(employee) {
		dispatch("click", {
            employee
        });
	}
</script>

<!-- HTML-->

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
                <tr on:click="{() => onEmployeeClicked(employee)}">
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{getDepartmentName(employee.department)}</td>
                    <td>{getJobCategoryName(employee.jobCategory)}</td>
                    <td>{formatDate(employee.startDate)}</td>
                    <td>{formatDate(employee.endDate)}</td>
                    
                    <td class="centered boolean-value" class:yes="{employee.isManager}">{formatBoolean(employee.isManager)}</td>
                    <td class="centered boolean-value" class:yes="{employee.active}">{formatBoolean(employee.active)}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>
    .employees-list table {
		width: 100%;
		border-collapse: collapse;
	}
	.employees-list table th,
	.employees-list table td {
		padding: 0.5em;
		border-bottom: 1px solid rgb(229, 229, 229);
	}
	.employees-list table th {
		color: rgb(57, 66, 91);
		text-transform: uppercase;
		text-align: left;
		border-bottom: 1px solid rgb(204, 204, 204);
	}
	/* Remove the border of the last row. */
	.employees-list tr:last-child td {
		border-bottom: 0;
	}
	/* Add a left padding only to the first column */
	.employees-list th:first-child,
	.employees-list td:first-child {
		padding-left: 0.75em;
	}
	/* Add a right padding only to the last column */
	.employees-list th:last-child,
	.employees-list td:last-child {
		padding-right: 0.75em;
	}
	.employees-list .centered {
		text-align: center;
	}
	.boolean-value {
		text-transform: uppercase;
		font-size: 0.8em;
		font-weight: 600;
		color: red;
	}
	.boolean-value.yes {
		color: green;
	}
	.employees-list tbody tr:hover {
		cursor: pointer;
		background-color: #c0242e;		
	}
	.employees-list tbody tr:hover,
	.employees-list tbody tr:hover .boolean-value {
		color: white;
	}
</style>