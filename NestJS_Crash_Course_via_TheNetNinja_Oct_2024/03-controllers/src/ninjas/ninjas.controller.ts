import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { PatchNinjaDto } from './dto/patch-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('ninjas')
export class NinjasController {
  @Get()
  getAllNinjas(@Query('type') type?: string, @Query('weapon') weapon?: string) {
    return [{}, type, weapon];
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    return { id };
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return {
      message: 'ninja created successfully',
      ...createNinjaDto,
    };
  }

  @Patch(':id')
  patchNinja(@Param('id') id: string, @Body() patchNinjaDto: PatchNinjaDto) {
    return {
      id,
      message: 'ninja created successfully',
      ...patchNinjaDto,
    };
  }

  @Put(':id')
  putNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return {
      id,
      message: 'ninja created successfully',
      ...updateNinjaDto,
    };
  }
  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return { id };
  }
}
