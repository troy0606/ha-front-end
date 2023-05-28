export interface IHeroData {
  id: string;
  name: string;
  image: string;
}

export interface IAbility {
  name: TAbility;
  value: number;
}

export type TAbility = 'str' | 'int' | 'agi' | 'luk';

export type TAbilityApi = {
  [k in TAbility]: number;
};

export type TAbilitys = Array<IAbility>;