export enum ENUM_WEAPON {
  STARS = 'star',
  SWORDS = 'sword',
  STICK = 'stick',
}

export class CreateNinjaDto {
  id: number;
  name: string;
  weapon: ENUM_WEAPON;
  country?: string;
}
