<script>
	import ReactWrapper from "./ReactWrapper.svelte";
	import { INewProject }  from "../models/new-project.ts";
	import { onMount } from "svelte";
	
	let NewProject;
  
	onMount(async () => {
	  const { default: component } = await import('sharedComponents/NewProject');
	  NewProject = component;
	});
  </script>
  
  {#if NewProject }
	<ReactWrapper component={NewProject} />
  {:else}
	<p>Loading...</p>
  {/if}