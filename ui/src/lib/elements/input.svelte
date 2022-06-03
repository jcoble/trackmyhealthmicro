<script lang="ts">
	export let name;
	export let label = '';
	export let type = 'text';
	export let value = '';
	export let placeholder = '';
	export let errorField = '';
	$: errorField = errorField.toLowerCase().includes(name.toLowerCase()) === true ? errorField : '';
	function handleInput(e) {
		value = type.match(/^(number|range)$/) ? +e.target.value : e.target.value;
	}
</script>

<div>
	<label class="block text-sm font-medium text-gray-700" for={name}> {label} </label>
	<div class="mt-1">
		<input
			class="block shadow-sm focus:ring-indigo-500 rounded-md w-full border-gray-300"
			class:border-red-500={errorField !== ''}
			{type}
			{value}
			{name}
			id={name}
			{placeholder}
			on:input={handleInput}
			{...$$restProps}
		/>
		{#if errorField}
			<p class="text-red-400 py-2">{errorField}</p>
		{/if}
	</div>
</div>
