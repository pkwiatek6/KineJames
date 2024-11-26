<script lang="ts">
    import DotBar from "../Elements/DotBar.svelte";
    import { Button, Input } from "sveltestrap"; // Import sveltestrap components
    import type { advantagesContainer } from "../Data/Character";
    import { capitalize } from "../utils/Helpers";

    // Accept attributeContainer as a prop
    export let Advantages: advantagesContainer | null;

    // Fallback for null groups
    const ensureMap = (
        group: Map<string, number> | Record<string, number> | null | undefined,
    ): Map<string, number> => {
        if (group instanceof Map) {
            return group;
        }
        if (group && typeof group === "object") {
            return new Map(Object.entries(group));
        }
        return new Map(); // Default to an empty map
    };
    // Store user input for adding new entries
    let newDisciplineKey = "";
    let newBackgroundKey = "";
    let newVirtuesKey = "";

    // Function to add a key-value pair and trigger reactivity
    const addKeyValuePair = (category: keyof advantagesContainer, key: string) => {
        if (!Advantages || !key.trim()) return;

        const map = ensureMap(Advantages[category]);

        if (map.has(key)) {
            console.log(`Key "${key}" already exists in ${category}`);
            return; // Avoid duplicate entries
        }

        map.set(key.trim(), 0); // Add the new entry

        // Update the parent object to trigger reactivity
        Advantages = {
            ...Advantages,
            [category]: new Map(map), // Reassign with a new Map reference
        };

        console.log(`Added "${key}" to ${category}`, Advantages[category]);
        if (category === "disciplines") newDisciplineKey = "";
        if (category === "backgrounds") newBackgroundKey = "";
        if (category === "virtues") newVirtuesKey = "";
    };
</script>

<div class="container">
    {#if Advantages}
        <!-- Disciplines Advantages -->
        <div class="row">
            <div class="col">
                <div class="h4">Disciplines</div>
                {#each Array.from(ensureMap(Advantages.Disciplines).entries()) as [name, value]}
                    <div class="row">
                        <div id="btnGroupAddon">
                            {capitalize(name)}:
                        </div>
                        <DotBar {name} defaultSel={value ?? 0} />
                    </div>
                {/each}
                <!-- Add New Discipline -->
                <div class="row my-2">
                    <div class="input-group">
                        <Input
                            type="text"
                            placeholder="New Discipline"
                            bind:value={newDisciplineKey}
                            class="form-control"
                        />

                        <Button
                            color="success"
                            on:click={() =>
                                addKeyValuePair("Disciplines", newDisciplineKey)}
                            class="input-group-append"
                        >
                            +
                        </Button>
                    </div>
                </div>
            </div>

            <!-- Background Advantages -->

            <div class="col">
                <div class="h4">Background</div>
                {#each Array.from(ensureMap(Advantages.Backgrounds).entries()) as [name, value]}
                    <div class="row">
                        <div id="btnGroupAddon">
                            {capitalize(name)}:
                        </div>
                        <DotBar {name} defaultSel={value ?? 0} />
                    </div>
                {/each}
                <div class="row my-2">
                    <div class="input-group">
                        <Input
                            type="text"
                            placeholder="New Background"
                            bind:value={newBackgroundKey}
                            class="form-control"
                        />
                        <Button
                            color="success"
                            on:click={() =>
                                addKeyValuePair("Backgrounds", newBackgroundKey)}
                            class="input-group-append"
                        >
                            +
                        </Button>
                    </div>
                </div>
            </div>

            <!-- Virtues Advantages -->

            <div class="col">
                <div class="h4">Virtues</div>
                {#each Array.from(ensureMap(Advantages.Virtues).entries()) as [name, value]}
                    <div class="row">
                        <div id="btnGroupAddon">
                            {capitalize(name)}:
                        </div>
                        <DotBar {name} defaultSel={value ?? 0} />
                    </div>
                {/each}
                <div class="row my-2">
                    <div class="input-group">
                        <Input
                            type="text"
                            placeholder="New Virtues"
                            bind:value={newVirtuesKey}
                            class="form-control"
                        />
                        <Button
                            color="success"
                            on:click={() =>
                                addKeyValuePair("Virtues", newVirtuesKey)}
                            class="input-group-append"
                        >
                            +
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    {:else}
        <p>No attributes data available.</p>
    {/if}
</div>

<style>
    #btnGroupAddon {
        text-align: left;
    }
    .my-2 {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
    .rounded-start {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    .rounded-end {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .btn-success {
        border-left: none; /* Remove the border between the input and button */
    }
    /* Ensure input and button share the same border and no separation */
    .input-group-custom {
        display: flex;
        align-items: stretch;
        width: 100%; /* Full width */
    }

    .input-group-custom input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: none; /* Remove the border between input and button */
    }

    .input-group-custom button {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
</style>
