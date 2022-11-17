<script lang="ts">
	import Attributes from "./Blocks/Attributes.svelte";
	import { Character } from "./Data/Character";
	import type {Stat} from "./Data/Character";
	import Info from "./Blocks/Info.svelte";
	import Head from "./Blocks/Head.svelte";
	import JamesNavbar from "./Blocks/JamesNavbar.svelte";
	
	let data = new Character();
	
	let Physical : Stat[] = [
		{name: "Strength", value:1},
		{name: "Dextrerity", value:3},
		{name: "Stamina", value:3},

	];
	let Social : Stat[] = [
		{name: "Charisma", value:4},
		{name: "Manipulation", value:4},
		{name: "Appearance", value:4},

	];
	let Mental : Stat[] = [
		{name: "Perception", value:3},
		{name: "Intelligence", value:3},
		{name: "Wits", value:2},

	];
	let Talents : Stat[] = [
		{name: "Alertness", value:0},
		{name: "Athletics", value:0},
		{name: "Awareness", value:0},
		{name: "Brawl", value:0},
		{name: "Empathy", value:3},
		{name: "Expression", value:3},
		{name: "Intimidation", value:3},
		{name: "Leadership", value:3},
		{name: "Streetwise", value:0},
		{name: "Subterfuge", value:2},
	];
	let Skills : Stat[] = [
		{name: "Animal Ken", value:0},
		{name: "Crafts", value:0},
		{name: "Etiquette", value:2},
		{name: "Firearms", value:4},
		{name: "Larceny", value:0},
		{name: "Melee", value:0},
		{name: "Performace", value:5},
		{name: "Ride", value:0},
		{name: "Stealth", value:0},
		{name: "Survival", value:0},
	];
	let Knowledge : Stat[] = [
		{name: "Academics", value:2},
		{name: "Enigmas", value:0},
		{name: "Finance", value:4},
		{name: "Investigation", value:3},
		{name: "Law", value:3},
		{name: "Medicine", value:1},
		{name: "Occult", value:1},
		{name: "Politics", value:3},
		{name: "Science", value:3},
		{name: "Technology", value:1},
	];
	let Disciplines : Stat[] = [
		{name: "Fortitude", value:1},
		{name: "Melpominee", value:5},
		{name: "Presence", value:5},
	];
	let Backgrounds : Stat[] = [
		{name: "Resources", value:5},
		{name: "Generation", value:3},
		{name: "Allies", value:1},
		{name: "Haven/Domain", value:3},
		{name: "Fame", value:2},
		{name: "Allies", value:1},

	];
	let Virtues : Stat[] = [
		{name: "Conscience", value:4},
		{name: "Self-Control", value:2},
		{name: "Courage", value:4},
	];
	data.Name="Clara Ashford"
	data.User="Peter"
	data.Natrue="Philosopher"
	data.Demeanor="Artiste"
	data.Clan="Daughter of Cacophony"
	
	data.Attributes = new Map([["Physical",Physical],["Social",Social],["Mental",Mental]]);
	data.Abilities = new Map([["Talents",Talents],
								["Skills",Skills],
								["Knowledge",Knowledge]]);
	data.Advantages = new Map([["Disciplines",Disciplines],
								["Backgrounds",Backgrounds],
								["Virtues",Virtues]]);
</script>

<Head pageTitle="Kine James"/>
<JamesNavbar/>
<main>
	<div class="h1">Vampires the Masquerade</div>
	<Info Character={data}/>
	<div class="h1">Attributes</div>
	<Attributes Attributes={data.Attributes}/>
	<div class="h1">Abilities</div>
	<Attributes Attributes={data.Abilities}/>
	<div class="h1">Advantages</div>
	<Attributes Attributes={data.Advantages}/>
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