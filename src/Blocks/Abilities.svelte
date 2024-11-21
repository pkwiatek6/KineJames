<script lang="ts">
    import DotBar from "../Elements/DotBar.svelte";
    import type { abilityContainer } from "../Data/Character";
    import { capitalize } from "../utils/Helpers";

    // Accept attributeContainer as a prop
    export let Abillities: abilityContainer | null;

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
        let newTalentKey = "";
    let newSkillKey = "";
    let newKnowledgeKey = "";

    const addKeyValuePair = (map: Map<string, number>, key: string) => {
        if (key.trim()) {
            map.set(key.trim(), 0); // Add a new key with default value 0
            key = ""; // Clear the input field
        }
    };
</script>

<div class="container">
    {#if Abillities}
        <!-- Talents Abillities -->
        <div class="row">
            <div class="col">
                <div class="h4">Physical</div>
                {#each Array.from(ensureMap(Abillities.talents).entries()) as [name, value]}
                    <div class="row">
                        <div id="btnGroupAddon">
                            {capitalize(name)}:
                        </div>
                        <DotBar {name} defaultSel={value ?? 0} />
                    </div>
                {/each}
            </div>

            <!-- Skill Abillities -->

            <div class="col">
                <div class="h4">Social</div>
                {#each Array.from(ensureMap(Abillities.skills).entries()) as [name, value]}
                    <div class="row">
                        <div id="btnGroupAddon">
                            {capitalize(name)}:
                        </div>
                        <DotBar {name} defaultSel={value ?? 0} />
                    </div>
                {/each}
            </div>

            <!-- Knowledge Abillities -->

            <div class="col">
                <div class="h4">Mental</div>
                {#each Array.from(ensureMap(Abillities.knowledge).entries()) as [name, value]}
                    <div class="row">
                        <div id="btnGroupAddon">
                            {capitalize(name)}:
                        </div>
                        <DotBar {name} defaultSel={value ?? 0} />
                    </div>
                {/each}
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
</style>
