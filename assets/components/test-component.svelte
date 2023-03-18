<svelte:options tag="test-component" />

<script lang="ts">
    export let customprop1 = null;
    export let customprop2 = null;
</script>

<div>
    <h1>Hi from web component</h1>
    <p>customprop1: {customprop1}</p>
    <p>customprop2: {customprop2}</p>
</div>

<style lang="scss">
    p {color: chocolate}
    h1 {color: cornflowerblue}
</style>
