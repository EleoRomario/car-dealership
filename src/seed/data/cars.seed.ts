import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Fiesta',
  },
  {
    id: uuid(),
    brand: 'Chevrolet',
    model: 'Spark',
  },
  {
    id: uuid(),
    brand: 'Volkswagen',
    model: 'Golf',
  },
  {
    id: uuid(),
    brand: 'Nissan',
    model: 'Sentra',
  },
  {
    id: uuid(),
    brand: 'Hyundai',
    model: 'Accent',
  },
  {
    id: uuid(),
    brand: 'Kia',
    model: 'Rio',
  },
  {
    id: uuid(),
    brand: 'Mazda',
    model: '3',
  },
  {
    id: uuid(),
    brand: 'Subaru',
    model: 'Impreza',
  },
  {
    id: uuid(),
    brand: 'Audi',
    model: 'A3',
  },
  {
    id: uuid(),
    brand: 'BMW',
    model: '3 Series',
  },
  {
    id: uuid(),
    brand: 'Mercedes-Benz',
    model: 'C-Class',
  },
  {
    id: uuid(),
    brand: 'Lexus',
    model: 'IS',
  },
  {
    id: uuid(),
    brand: 'Infiniti',
    model: 'Q50',
  },
  {
    id: uuid(),
    brand: 'Acura',
    model: 'ILX',
  },
  {
    id: uuid(),
    brand: 'Volvo',
    model: 'S60',
  },
  {
    id: uuid(),
    brand: 'Jaguar',
    model: 'XE',
  },
  {
    id: uuid(),
    brand: 'Land Rover',
    model: 'Range Rover Evoque',
  },
  {
    id: uuid(),
    brand: 'Porsche',
    model: '718',
  },
  {
    id: uuid(),
    brand: 'Tesla',
    model: 'Model 3',
  },
];
