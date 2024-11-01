import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { PatchNinjaDto } from './dto/patch-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get()
  getAllNinjas(@Query('weapon') weapon?: string) {
    return this.ninjasService.getAllNinjas(weapon);
  }

  @Get(':id')
  getOneNinja(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.ninjasService.getOneNinja(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post()
  createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDto);
  }

  @Patch(':id')
  patchNinja(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) patchNinjaDto: PatchNinjaDto,
  ) {
    return this.ninjasService.patchNinja(id, patchNinjaDto);
  }

  @Put(':id')
  updateNinja(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) updateNinjaDto: UpdateNinjaDto,
  ) {
    return this.ninjasService.updateNinja(id, updateNinjaDto);
  }

  @Delete(':id')
  deleteNinja(@Param('id', ParseIntPipe) id: number) {
    try {
      return this.ninjasService.deleteNinja(id);
    } catch (error) {
      throw new NotFoundException();
    }
  }
}
