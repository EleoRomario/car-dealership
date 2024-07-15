import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Corolla',
      year: 2019,
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Accord',
      year: 2018,
    },
    {
      id: 3,
      make: 'Ford',
      model: 'Fusion',
    },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with ID ${id} not found`);

    return car;
  }
}
