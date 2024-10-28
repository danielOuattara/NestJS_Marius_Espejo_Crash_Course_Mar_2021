import { PartialType } from '@nestjs/mapped-types';
import { CreateNinjaDto } from './create-ninja.dto';

export class PatchNinjaDto extends PartialType(CreateNinjaDto) {}
