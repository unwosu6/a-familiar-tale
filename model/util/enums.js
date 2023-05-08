const Type = {
  BASIC_SPIRIT: 0,
  GREATER_BASIC_SPIRIT: 1,
  RELIC: 2,
  GUILD_MEMBER: 3,
  MONSTER: 4,
};

const BasicType = {
  MANA: 0,
  ATTACK: 1,
};

const SingleUseRelicIDs = new Set([13, 14]);

const MainDeckCardIDs = {};

export { Type, BasicType, MainDeckCardIDs, SingleUseRelicIDs };
