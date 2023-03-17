<svelte:options tag="asset-component" />

<script>
    import svg from "../images/vector/github.svg"
    import children1 from "../images/children/1.jpg"
    export let customprop1 = null;
    export let customprop2 = null;
</script>

<div>
    <img src={svg} />
    <img src={children1} />
</div>

<style lang="scss">
    p {color: chocolate}
    h1 {color: cornflowerblue}
</style>
