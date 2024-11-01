import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto, ENUM_WEAPON } from './dto/create-ninja.dto';
import { PatchNinjaDto } from './dto/patch-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get()
  getAllNinjas(@Query('weapon') weapon?: ENUM_WEAPON) {
    return this.ninjasService.getAllNinjas(weapon);
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    try {
      return this.ninjasService.getOneNinja(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDto);
  }

  @Patch(':id')
  patchNinja(@Param('id') id: string, @Body() patchNinjaDto: PatchNinjaDto) {
    return this.ninjasService.patchNinja(id, patchNinjaDto);
  }

  @Put(':id')
  putNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjasService.putNinja(id, updateNinjaDto);
  }

  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    try {
      return this.ninjasService.deleteNinja(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
