export interface ICharacter {
	user: string;
	name: string;
	disUser: string;
	fudgeRoll: number;
	nature: string;
	clan: string;
	demeanor: string;
	attributes: attributeContainer;
	abilities: abilityContainer;
	advantages: advantagesContainer;
	merits: string[] | null;
	flaw: string[] | null;
	path: number;
	permwill: number;
	willpower: number;
	maxbloodpool: number;
	bloodpool: number;
	health: number;
	lastRoll: RollHistory;
}

export class Stat {
	name: string;
	value: number;
}
export interface attributeContainer{
	physical: Map<string, number>
	social: Map<string, number>
	mental: Map<string, number>
}
export interface abilityContainer{
	talents: Map<string, number>
	skills: Map<string, number>
	knowledge: Map<string, number>
}

export interface advantagesContainer extends statContainer{
	disciplines: Map<string, number>
	backgrounds: Map<string, number>
	virtues: Map<string, number>
}

export interface statContainer {
	[key: string]: Map<string, number>;
}

export class RollHistory {
	rolls: number[];
	dc: number;
	reason: string;
}

export const defaultAttributeContainer: attributeContainer = {
    physical: new Map<string, number>([
        ["strength", 0],
        ["dexterity", 0],
        ["stamina", 0],
    ]),
    social: new Map<string, number>([
        ["charisma", 0],
        ["manipulation", 0],
        ["appearance", 0],
    ]),
    mental: new Map<string, number>([
        ["perception", 0],
        ["intelligence", 0],
        ["wits", 0],
    ]),
};

export const defaultAbilityContainer: abilityContainer = {
    talents: new Map<string, number>([
        ["alertness", 0],
        ["athletics", 0],
        ["awareness", 0],
        ["brawl", 0],
        ["empathy", 0],
        ["expression", 0],
        ["intimidation", 0],
        ["leadership", 0],
        ["streetwise", 0],
        ["subterfuge", 0],
    ]),
    skills: new Map<string, number>([
        ["animalKen", 0],
        ["crafts", 0],
        ["drive", 0],
        ["etiquette", 0],
        ["firearms", 0],
        ["melee", 0],
        ["performance", 0],
        ["security", 0],
        ["stealth", 0],
        ["survival", 0],
    ]),
    knowledge: new Map<string, number>([
        ["academics", 0],
        ["computer", 0],
        ["finance", 0],
        ["investigation", 0],
        ["law", 0],
        ["medicine", 0],
        ["occult", 0],
        ["politics", 0],
        ["science", 0],
        ["technology", 0],
    ]),
};

export const defaultAdvantagesContainer: advantagesContainer = {
    disciplines: new Map<string, number>([
        ["animalism", 0],
        ["auspex", 0],
        ["celerity", 0],
        ["dominate", 0],
        ["fortitude", 0],
        ["obfuscate", 0],
        ["potence", 0],
        ["presence", 0],
        ["protean", 0],
        ["thaumaturgy", 0],
    ]),
    backgrounds: new Map<string, number>([
        ["allies", 0],
        ["contacts", 0],
        ["fame", 0],
        ["generation", 0],
        ["herd", 0],
        ["influence", 0],
        ["mentor", 0],
        ["resources", 0],
        ["retainers", 0],
        ["status", 0],
    ]),
    virtues: new Map<string, number>([
        ["conscience", 0],
        ["selfControl", 0],
        ["courage", 0],
    ]),
};
