export interface IHeroData {
  id: string;
  name: string;
  image: string;
}

interface IAbility {
  name: [keyof typeof ABILITY];
  value: number;
}

enum ABILITY {
  STR = 'str',
  INT = 'int',
  AGI = 'agi',
  LUK = 'luk',
}

export type TAbilitys = Array<IAbility>;