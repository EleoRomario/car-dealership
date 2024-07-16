import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      make: 'Toyota',
      model: 'Corolla',
    },
    {
      id: uuid(),
      make: 'Honda',
      model: 'Accord',
    },
    {
      id: uuid(),
      make: 'Ford',
      model: 'Fusion',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with ID ${id} not found`);

    return car;
  }
}
