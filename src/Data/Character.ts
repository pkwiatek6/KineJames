export class Character {
    User         :string;
	Name         :string;
	DiscordUser  :string;
	FudgeRoll    :number;
	Natrue       :string;
	Clan         :string;
	Demeanor     :string;
	Attributes   :Map<string,Stat[]>;
	Abilities    :Map<string,Stat[]>;
	Advantages   :Map<string,Stat[]>;
	Merits       :string[];
	Flaw         :string[];
	Path         :number;
	PermWill     :number;
	Willpower    :number;
	MaxBloodpool :number;
	Bloodpool    :number;
	Health       :number;
	LastRoll     :RollHistory;
}

export class Stat{
    name    :string;
    value   :number;
}

export class RollHistory{
    Rolls   :number[];
    DC      :number;
    Reason  :string;
}