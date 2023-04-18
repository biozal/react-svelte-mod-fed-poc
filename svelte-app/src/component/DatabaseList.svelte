<script lang="ts">
	import ReactWrapper from './ReactWrapper.svelte';
	import { onMount } from 'svelte';
	import { getDatabases } from '../services/database-service';
	import type DatabaseList from 'sharedComponents/components/database-list';

	let DatabaseListComponent: typeof import('sharedComponents/components/database-list').default;
	let props: Parameters<typeof DatabaseList>[0] = {
		databases: []
	};
	onMount(async () => {
		props.databases = getDatabases();
		const { default: component } = await import('sharedComponents/components/database-list');
		DatabaseListComponent = component;
	});

	// strictly defined props
</script>

{#if DatabaseListComponent && props.databases && props.databases.length > 0}
	<ReactWrapper component={DatabaseListComponent} {props} />
{:else}
	<p>Loading...</p>
{/if}
