<script>
  import ReactWrapper from "./ReactWrapper.svelte";
  import { onMount } from "svelte";

let ProjectList;

onMount(async () => {
  const { default: component } = await import("sharedComponents/ProjectList");
  ProjectList = component;
});
</script>

{#if ProjectList}
  <ReactWrapper component={ProjectList} />
{:else}
  <p>Loading...</p>
{/if}