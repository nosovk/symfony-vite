import "./app.scss";

// we need to import all assets to provide manifest for symfony asset tag
import.meta.glob([
    './images/**'
]);

import "./components/test-component.svelte"
import "./components/asset-component.svelte"
import "./components/modal-component.svelte"


console.log("Init js from vite");
