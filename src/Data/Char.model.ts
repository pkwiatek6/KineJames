
import mongoose from 'mongoose';


const characterSchema = new mongoose.Schema({
	"_id": {
	  "$oid": {
		"type": "ObjectId"
	  }
	},
	"user": {
	  "type": "String"
	},
	"name": {
	  "type": "String"
	},
	"disUser": {
	  "type": "String"
	},
	"fudgeRoll": {
	  "type": "Number"
	},
	"natrue": {
	  "type": "String"
	},
	"clan": {
	  "type": "String"
	},
	"demeanor": {
	  "type": "String"
	},
	"attributes": {
	  "stength": {
		"type": "Number"
	  },
	  "dexterity": {
		"type": "Number"
	  },
	  "stamina": {
		"type": "Number"
	  },
	  "charisma": {
		"type": "Number"
	  },
	  "manipulation": {
		"type": "Number"
	  },
	  "appearance": {
		"type": "Number"
	  },
	  "perception": {
		"type": "Number"
	  },
	  "intelligence": {
		"type": "Number"
	  },
	  "wits": {
		"type": "Number"
	  }
	},
	"abilities": {
	  "talents": {
		"type": "Mixed"
	  },
	  "skills": {
		"type": "Mixed"
	  },
	  "knowledge": {
		"type": "Mixed"
	  }
	},
	"advantages": {
	  "disciplines": {
		"type": "Mixed"
	  },
	  "backgrounds": {
		"type": "Mixed"
	  },
	  "virtues": {
		"type": "Mixed"
	  }
	},
	"merits": {
	  "type": "Mixed"
	},
	"flaw": {
	  "type": "Mixed"
	},
	"path": {
	  "type": "Number"
	},
	"permwill": {
	  "type": "Number"
	},
	"willpower": {
	  "type": "Number"
	},
	"maxbloodpool": {
	  "type": "Number"
	},
	"bloodpool": {
	  "type": "Number"
	},
	"health": {
	  "type": "Number"
	},
	"lastroll": {
	  "rolls": {
		"type": [
		  "Number"
		]
	  },
	  "dc": {
		"type": "Number"
	  },
	  "reason": {
		"type": "String"
	  }
	}
  });

  const CharacterModel = mongoose.model("Character", characterSchema);
  export default CharacterModel;