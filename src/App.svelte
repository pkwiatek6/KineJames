<script lang="ts">
	import Attributes from "./Blocks/Attributes.svelte";
	import Abilities from "./Blocks/Abilities.svelte";
	import Advantages from "./Blocks/Advantages.svelte";
	import Info from "./Blocks/Info.svelte";
	import Head from "./Blocks/Head.svelte";
	import JamesNavbar from "./Blocks/JamesNavbar.svelte";
	import { GetChar } from "./Data/DatabaseActions";
	import {
		defaultAttributeContainer,
		defaultAbilityContainer,
		defaultAdvantagesContainer,
		statContainer,
	} from "./Data/Character";
	let charPromise = GetChar("Baroness Clara Ashford", "265672314450870293");
</script>

<Head pageTitle="Kine James" />
<JamesNavbar userid="265672314450870293" bind:charPromise />
<main>
	<div class="h1">Vampires the Masquerade</div>
	<div>
		{#await charPromise}
			<div class="h1">Loading...</div>
		{:then characterData}
			<Info Character={characterData} />
			<div class="h1">Attributes</div>
			<Attributes
				Attributes={characterData.attributes ||
					defaultAttributeContainer}
			/>
			<div class="h1">Abilities</div>
			<Abilities
				Abillities={characterData.abilities || defaultAbilityContainer}
			/>
			<div class="h1">Advantages</div>
			<Advantages
				Advantages={characterData.advantages ||
					defaultAdvantagesContainer}
			/>
		{:catch error}
			<div class="h1">
				Something went wrong: {error?.message || "Unknown error"}
			</div>
		{/await}
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 480px;
		margin: 0 auto;
	}
	.h1 {
		color: red;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
