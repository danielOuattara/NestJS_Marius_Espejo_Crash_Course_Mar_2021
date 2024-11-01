import { IsEnum, MinLength } from 'class-validator';

// export enum ENUM_WEAPON {
//   STARS = 'star',
//   SWORDS = 'sword',
//   STICK = 'stick',
// }

export class CreateNinjaDto {
  id: number;
  @MinLength(3)
  name?: string;
  @IsEnum(['star', 'stick', 'sword'], {
    message: 'Please use correct enumerated weapon',
  })
  weapon: string;
  country?: string;
}
