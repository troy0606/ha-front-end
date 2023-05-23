export interface IHeroData {
  id: string;
  name: string;
  image: string;
}

export interface IAbility {
  name: TABILITY[keyof TABILITY];
  value: number;
}

type TABILITY = {
  STR: 'str';
  INT: 'int';
  AGI: 'agi';
  LUK: 'luk';
}

export type TAbilityApi = {
  [k in TABILITY[keyof TABILITY]]: number;
};


export type TAbilitys = Array<IAbility>;