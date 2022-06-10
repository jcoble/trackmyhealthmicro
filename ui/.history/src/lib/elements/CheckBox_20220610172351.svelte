<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { errorResponse, errorResponseExcept } from '@servicestack/client';
	import classNames from 'classnames';

	export let name = '';
	export let className = '';
	export let responseStatus = null;
	export let checked = false;

	let errorField = name && errorResponse.call({ responseStatus }, name);
	let cls = classNames('form-check', { 'is-invalid': errorField, 'form-control': errorField });
	let clsInput = classNames('form-check-input', { 'is-invalid': errorField }, className || '');

	const dispatch = createEventDispatcher();
	const handleChange = (e) => {
		dispatch('change', e.target.checked);
	};
</script>

<!-- <div class={cls}>
	<input
		type="checkbox"
		id={name}
		{name}
		bind:checked
		value="true"
		class="checkbox-accent {{ clsInput }}"
		onChange={handleChange}
	/>

	<label class="form-check-label" for={name}><slot /></label>
</div> -->

<div class="form-control">
	<label class="cursor-pointer label" for={name}>
		<span class="pl-2 ml-0"><slot /></span>
		<input type="checkbox" class="checkbox" id={name} bind:checked />
	</label>

	<!-- <label class="form-check-label" for={name}><slot /></label> -->
</div>

<!-- <div class="form-control">
	<label class="cursor-pointer label">
		<span class="label-text">Remember me</span>
		<input {id} {width} type="checkbox" checked={value} class="checkbox" />
	</label>
</div> -->

{#if errorField}
	<div class="invalid-feedback">{errorField}</div>
{/if}
