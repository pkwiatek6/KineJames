<script lang="ts">
    
    let dotValue: number;
    export let name: string;
    export let defaultSel : number;
    const maxDots = 10;
    dotValue = defaultSel;
    function selectPrevious(selected:number) {
        if (dotValue === selected){
            dotValue = -1
        }else {
            dotValue = selected
        }
    }
</script>
<!--HTML goes here-->
<div class="btn-group" role="group" data-toggle="button" aria-label="dotBar_{name}">
    {#each Array(maxDots + 1) as _, value}
        <input on:click={() => selectPrevious(value)} type="checkbox"
            class="btn-check" id="btncheck{value}_{name}" autocomplete="off" checked="{dotValue >= value ? true : false }">
        <label class="btn btn-outline-primary" for="btncheck{value}_{name}" >
            {value}
        </label>
    {/each}
</div>


<style>
 
</style>