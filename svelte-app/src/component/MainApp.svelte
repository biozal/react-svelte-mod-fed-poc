<script>
  import { ContentSwitcher, Switch } from "carbon-components-svelte";
  import ProjectList from './ProjectList.svelte'
  import DatabaseList from './DatabaseList.svelte'

  let selectedIndex = 1;
</script>

<ContentSwitcher bind:selectedIndex size='xl'>
  <Switch text="Database" />
  <Switch text="Projects" />
</ContentSwitcher>
<div style="padding: 20px" id="react-container">
  {#if selectedIndex === 1}
    <ProjectList></ProjectList>
  {:else if selectedIndex === 0}
    <DatabaseList></DatabaseList>
  {/if}
</div>
