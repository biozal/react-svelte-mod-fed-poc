<script>
	import ReactWrapper from './ReactWrapper.svelte';
	import { onMount } from 'svelte';

	let NewProject;

	onMount(async () => {
		const { default: component } = await import('sharedComponents/components/new-project');
		NewProject = component;
	});
</script>

{#if NewProject}
	<ReactWrapper component={NewProject} />
{:else}
	<p>Loading...</p>
{/if}
