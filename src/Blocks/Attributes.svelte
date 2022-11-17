<script lang="ts">
import type { Stat } from "../Data/Character";
import DotBar from "../Elements/DotBar.svelte";
export let Attributes: Map<string,Stat[]>;

let defaultSel: number;
defaultSel = 5;

</script>
<!--HTLM goes here-->
<div class="container">
    <div class="row">
        {#each [...Attributes] as [key, value]}
        <div class="col">
            <div class="h4">{key}</div>
            {#each value as item}
                <div class="row">
                    <div id="btnGroupAddon">
                        {item.name}:
                    </div>
                    <DotBar name="{item.name}" defaultSel={item.value}/>
                </div>
            {/each}
        </div>
        {/each}
    </div>
</div>

<style>
    #btnGroupAddon {
        text-align: left;
    }
</style>