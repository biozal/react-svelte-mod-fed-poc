<script>
  import ReactWrapper from "./ReactWrapper.svelte";
  import { onMount } from "svelte";
  import { getDatabases } from "../services/database-service.ts"

  let DatabaseList;
  let databases;

  onMount(async () => {
    databases = getDatabases();
    const { default: component } = await import('sharedComponents/DatabaseList');
    DatabaseList = component;
  });
</script>

{#if DatabaseList && databases && databases.length > 0 }
{ console.debug(databases.length) }
  <ReactWrapper component={DatabaseList} props = { {databases}}  />
{:else}
  <p>Loading...</p>
{/if}