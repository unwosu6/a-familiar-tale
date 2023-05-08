import { Type } from "../util/enums.js";

// Card Name,Card Type,Card Cost,Card Ability,Quantity,Fulfillment Points
const MainDeckCards = [
  [1,"Diamond Knuckles",Type.RELIC,3,"Gain +1 attack each turn.",3,1], // +1 attack
  [2,"Wellspring of Knowledge",Type.RELIC,7,"Once per turn you may draw a card.",1,3], // draw card
  [3,"Imperfect Wellspring",Type.RELIC,4,"Once per turn you may draw 1 card, then discard 1 card.",2,2], // draw card + discard card
  // [4,"Three-Faced Mask",Type.RELIC,7,"Gain +1 cruelty, cunning, or kindness each turn.",1,3], // +1 karma
  [5,"Philosopher's Stone",Type.RELIC,7,"Gain +2 mana each turn.",1,3], // +2 mana
  [6,"Golden Spindle",Type.RELIC,5,"Gain +1 mana each turn.",2,2], // +1 mana
  // [7,"Throne of Bones",Type.RELIC,4,"Gain +1 cruelty each turn.",3,2], // +1 karma - cruelty
  // [8,"Hero's Medallion",Type.RELIC,4,"Gain +1 kindness each turn.",3,2], // +1 karma - kindness
  // [9,"Creator's Encyclopedia",Type.RELIC,4,"Gain +1 cunning each turn.",3,2], // +1 karma - cunning
  [10,"Berserker Sword",Type.RELIC,7,"Gain +3 attack each turn.",1,3], // +3 attack
  // [11,"Collector's Curio Case",Type.RELIC,6,"Relics cost 1 less mana to acquire from the center row.",1,3], // reduce cost - relic
  // [12,"Visionary's Spectactles",Type.RELIC,3,"Once per turn you may spend an attack to replace a card in the center row.",2,1], // special - spend 1 attack to replace ceter row card
  // [13,"Corrupted Curio Case",Type.RELIC,3,"You may place another player's relic into their discard pile. Effect usable one time only.",2,2], // single use - put other player's card into discard - relic
  // [14,"Ivory Glaive",Type.RELIC,8,"Take a card at random from an opponent's hand. Effect usable one time only.",1,6], // special - single use - transfer card ownership 
  [15,"Rat Infestation",Type.MONSTER,2,"Draw one card.",4,1], // draw card
  [16,"Vengeful Ghoul",Type.MONSTER,3,"Gain +2 attack.",4,1], // +2 attack
  [17,"Magic Duneworm",Type.MONSTER,3,"Gain +1 mana.",4,1], // +1 mana
  [18,"Wendigo",Type.MONSTER,4,"Draw two cards.",3,2], // draw card x2
  // [19,"Headless Horseman",Type.MONSTER,4,"Place another player's relic into their discard pile.",3,3], // put other player's card into discard - relic
  // [20,"Ogre of Silence",Type.MONSTER,5,"Choose one opponent. They cannot use the effects of relic cards on their next turn.",3,4], // special - choose player to loose relic effects on turn
  // [21,"Three-Faced Oni",Type.MONSTER,5,"Gain +2 cruelty, cunning, or kindness.",3,4], // +2 karma 
  // [22,"Corrupted Archbishop",Type.MONSTER,6,"Choose an opponent. They discard one card at random.",2,5], // put other player's card into discard
  [23,"Ouroboros",Type.MONSTER,7,"Draw 3 cards.",1,5], // draw card x3
  // [24,"Cruel Creator",Type.MONSTER,8,"Acquire one legendary familiar.",1,4], // special - gain card - legendary familiar
  [25,"Raid Member",Type.GUILD_MEMBER,2,"Gain +2 attack.",4,1], // +2 attack
  [26,"Raid Leader",Type.GUILD_MEMBER,4,"Gain +3 attack.",4,2], // +3 attack
  [27,"Guild Promoter",Type.GUILD_MEMBER,5,"Gain +2 mana, then gain +1 mana for each other unique guild member you play this turn.",2,2], // +2 mana & special - +1 mana for each unique guild member
  [28,"Mage",Type.GUILD_MEMBER,3,"Gain +2 mana.",4,1], // +2 mana
  [29,"Wizard",Type.GUILD_MEMBER,6,"Gain +3 mana.",2,3], // +3 mana
  [30,"Saboteur",Type.GUILD_MEMBER,3,"Draw a card, then you may banish a card from the center row.",2,1], // draw card & special - replace center row card
  [31,"Collector",Type.GUILD_MEMBER,2,"Draw a card. You can acquire a relic for one less mana this turn.",4,1], // draw card & reduce cost - relic
  // [32,"Mimic",Type.GUILD_MEMBER,5,"Copy the effect of a guild member or spirit you have played this turn.",2,2], // special - copy played card effect - guild or spirit
  // [33,"Three-Faced Apprentice",Type.GUILD_MEMBER,4,"Gain +2 cruelty, cunning, or kindness.",2,2], // +2 karma
  // [34,"Guild Captain",Type.GUILD_MEMBER,8,"Draw a card for each unique guild member you play this turn (including this one).",1,3], // draw card based on player's played cards
  // [35,"Grand Sage",Type.GUILD_MEMBER,7,"Gain +1 mana and +1 attack for each unique guild member you play this turn (including this one).",1,3] // +1 mana and +1 attack based on player's played cards
];

const BasicSpiritCards = [
  [36,"Playful Spirit",Type.BASIC_SPIRIT,0,"Gain +1 mana.",8,0],
  [37,"Vengeful Spirit",Type.BASIC_SPIRIT,0,"Gain +1 attack.",2,0],
  [38,"Greater Playful Spirit",Type.BASIC_SPIRIT,3,"Gain +2 mana.",1,1],
  [39,"Greater Vengeful Spirit",Type.BASIC_SPIRIT,2,"Gain +2 attack.",1,1]
];

export { MainDeckCards, BasicSpiritCards }