<script>
	import { createEventDispatcher } from "svelte";
	import Modal from "../Modal.svelte";
	export let selectedEmployee;
	export let departments;
	export let jobCategories;
	const dispatch = createEventDispatcher();
	import { STUDIES } from "../utils/random-person";
	
	const isNewEntry = (selectedEmployee.id === undefined);
	selectedEmployee.salary = formatDecimal(selectedEmployee.salary);
	selectedEmployee.startDate = formatDateIso(selectedEmployee.startDate);
	console.log(selectedEmployee.startDate);
	selectedEmployee.endDate = formatDateIso(selectedEmployee.endDate);
	selectedEmployee.birthday = formatDateIso(selectedEmployee.birthday);
    function formatDateIso(date) {
		if (date == null) {
			return "";
		}
		if (typeof(date) !== Date) {
			date = new Date(date);
		}
		return date.toISOString().substr(0, 10);
    }
    
    function formatDecimal(decimalNumber) {
		return (Math.round(decimalNumber * 100) / 100).toFixed(2);
	}
	
	function onFormSubmitted() {
		selectedEmployee.salary = parseFloat(selectedEmployee.salary);
		dispatch("submit");
	}
	function onDeletePressed() {
		dispatch("delete");
	}
</script>

<Modal on:close>
	<div slot="header">
		{#if isNewEntry}
			Add a new employee
		{:else}
			Edit an existing employee
		{/if}
	</div>

	<slot>
		<form>
			<div class="row">
				<label>
					Id: 
					<input type="text" placeholder="Id" bind:value="{selectedEmployee.id}" required />
				</label>
				<label>
					Full Name: 
					<input type="text" placeholder="Full Name" bind:value="{selectedEmployee.fullName}" required />
				</label>
				<label>
					First Name: 
					<input type="text" placeholder="First Name" bind:value="{selectedEmployee.firstName}" required />
				</label>

				<label>
					Last Name:
					<input type="text" placeholder="Last Name" bind:value="{selectedEmployee.lastName}" required />
				</label>
			</div>

			<div class="row">
				<label>
					Start Date:
					<input type="date" bind:value="{selectedEmployee.startDate}" required />
				</label>

				<label>
					End Date:
					<input type="date" bind:value="{selectedEmployee.endDate}" />
				</label>
			</div>

			<div class="row">
				<label>
					Department:
					<select bind:value="{selectedEmployee.department}">
						{#each departments as department}
						<option value="{department.id}" >{department.name}</option>
						{/each}
					</select>
				</label>

				<label>
					Job Category:
					<select bind:value="{selectedEmployee.jobCategory}">
						{#each jobCategories as jobCategory}
						<option value="{jobCategory.id}" >{jobCategory.name}</option>
						{/each}
					</select>
				</label>
			</div>		

			<div class="row">			
				<label>
					Telephone:
					<input type="tel" bind:value="{selectedEmployee.telephone}" required />
				</label>

				<label>
					E-mail:
					<input type="email" bind:value="{selectedEmployee.email}" />
				</label>
			</div>

			<div class="row">
				<label>
					Birthday:
					<input type="date" bind:value="{selectedEmployee.birthday}" required />
				</label>

				<label>
					Num. children:
					<input type="number" bind:value="{selectedEmployee.noChildren}" required />
				</label>			
			</div>

			<div class="row">
				<label>
					Salary:
					<input type="number" step="0.01" class="no-spinner" bind:value="{selectedEmployee.salary}" required />
				</label>

				<label>
					Social Security Number:
					<input type="number" class="no-spinner" bind:value="{selectedEmployee.socialSecurityNumber}" required />
				</label>
			</div>

			<div class="row">
				<label>
					Studies:
					<input type="text" list="studies" bind:value="{selectedEmployee.studies}" />
				</label>

				<label>
					Postal Code:
					<input type="number" class="no-spinner" bind:value="{selectedEmployee.cp}" required />
				</label>

				<datalist id="studies">
					{#each STUDIES as study}
						<option value="{study}" />
					{/each}
				</datalist>
			</div>

			<div class="row three-cols">
				<label>
					<input type="checkbox" bind:checked="{selectedEmployee.active}" />
					Active
				</label>

				<label id="check">
					<input type="checkbox" bind:checked="{selectedEmployee.isManager}" />
					Manager
				</label>

				<label id="check2">
					<input type="checkbox" bind:checked="{selectedEmployee.hasDrivingLicence}" />
					Has driving license
				</label>
			</div>

			<div class="row">
				<label class="full-row">
					Address:
					<textarea bind:value="{selectedEmployee.address}" required></textarea>
				</label>
			</div>

			<button class="final" on:click={close}>Close</button>
			<input class="final" type="submit" on:click|preventDefault="{onFormSubmitted}" />
			<input class="final" type="button" on:click="{onDeletePressed}" value="Delete" />

		</form>
	</slot>
</Modal>

<style>
    form .row {
		overflow: auto;
		padding: 0.25em 0;
	}
	form .row label {
		display: block;
		width: 50%;
		float: left;
		font-size: 0.85em;
		text-transform: uppercase;
		color: rgb(57, 66, 91);
		font-weight: bold;
	}
	form .row.three-cols label {
		width: 33.33%;
	}
	form .row input,
	form .row select,
	form .row textarea {
		display: block;
		width: 80%;
		box-sizing: border-box;
		border-radius: 5px;
		border:grey 2px solid;
	}
	form .row input[type="checkbox"] {
		display: inline-block;
		width: auto;
	}
	form .row .full-row {
		width: 100%;
	}
	form .row .full-row textarea {
		width: 90%;
	}
	form input.no-spinner::-webkit-outer-spin-button,
	form input.no-spinner::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	form input.no-spinner {
		-moz-appearance: textfield;
	}
	.final{
		margin-right: 20px;
		padding-left:30px;
		padding-right: 30px;
		margin-left: 25px;
		border-radius: 5px;
		border:grey 2px solid;
	}
	#check{
		margin-left: -55px;
	}
	#check2{
		margin-left: -30px;
	}
</style>