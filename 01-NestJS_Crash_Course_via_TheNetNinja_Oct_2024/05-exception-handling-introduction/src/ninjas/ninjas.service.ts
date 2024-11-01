import { Injectable } from '@nestjs/common';
import { CreateNinjaDto, ENUM_WEAPON } from './dto/create-ninja.dto';
import { PatchNinjaDto } from './dto/patch-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'ninja0', weapon: 'star' },
    { id: 1, name: 'ninja1', weapon: 'sword' },
  ];

  getAllNinjas(weapon?: ENUM_WEAPON) {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  getOneNinja(id: string) {
    const ninja = this.ninjas.find((ninja) => ninja.id === parseInt(id));
    if (!ninja) {
      throw new Error('Ninja not found');
    }
    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    this.ninjas = [
      ...this.ninjas,
      { id: new Date().getTime(), ...createNinjaDto },
    ];

    return this.getAllNinjas();
  }

  patchNinja(id: string, patchNinjaDto: PatchNinjaDto) {
    const ninjaToPatchIndex = this.ninjas.findIndex(
      (ninja) => ninja.id === parseInt(id),
    );
    this.ninjas[ninjaToPatchIndex] = {
      ...this.ninjas[ninjaToPatchIndex],
      ...patchNinjaDto,
    };
    return this.getOneNinja(id);
  }

  putNinja(id: string, updateNinjaDto: UpdateNinjaDto) {
    const ninjaToUpdateIndex = this.ninjas.findIndex(
      (ninja) => ninja.id === parseInt(id),
    );
    this.ninjas[ninjaToUpdateIndex] = {
      ...this.ninjas[ninjaToUpdateIndex],
      ...updateNinjaDto,
    };
    return this.getOneNinja(id);
  }

  deleteNinja(id: string) {
    const ninjaToDeleteIndex = this.ninjas.findIndex(
      (ninja) => ninja.id === parseInt(id),
    );

    this.ninjas.splice(ninjaToDeleteIndex, 1);

    return this.getAllNinjas();
  }
}
