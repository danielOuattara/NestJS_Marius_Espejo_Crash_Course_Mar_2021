import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, max, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlphanumeric()
  @MaxLength(20)
  @MinLength(2)
  name: string;

  @ApiProperty({ required: false })
  age?: number;
}
