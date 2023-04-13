<!-- src/ReactWrapper.svelte -->
<script>
    import { onMount, onDestroy } from "svelte";
    import * as React from "react";
    // todo: replace ReactDom.render with new 18.x API
    // import * as ReactDOM from "react-dom/client";
    import * as ReactDom from "react-dom"
    export let component;
    export let props = {};

    let container;

    onMount(() => {
        ReactDom.render(React.createElement(component, props), container);
    });

    onDestroy(() => {
        ReactDom.unmountComponentAtNode(container);
    });
</script>

<div bind:this={container}></div>