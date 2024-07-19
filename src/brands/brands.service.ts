import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { v4 as uuid } from 'uuid';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands = [
    // {
    //   id: uuid(),
    //   name: 'Brand 1',
    //   createdAt: Date.now(),
    //   updatedAt: Date.now(),
    // },
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;

    const newBrand: Brand = {
      id: uuid(),
      name: name.toLowerCase(),
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    this.brands.push(newBrand);
    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((brand) => brand.id === id);
    if (!brand) throw new NotFoundException(`Brand #${id} not found`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);

    const { name } = updateBrandDto;

    brand.name = name.toLowerCase();
    brand.updatedAt = Date.now();

    return brand;
  }

  remove(id: string) {
    const brand = this.findOne(id);

    this.brands = this.brands.filter((brand) => brand.id !== id);

    return brand;
  }
}
