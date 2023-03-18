<svelte:options tag="modal-component" />

<script lang="ts">
let dialog;
</script>
<button on:click={dialog.showModal()}>open</button>
<dialog bind:this={dialog}>
    <slot />
    <button on:click={dialog.close()}>close</button>
</dialog>

<style lang="scss">

</style>
