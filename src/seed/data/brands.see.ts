import { Brand } from 'src/brands/entities/brand.entity';
import { v4 as uuid } from 'uuid';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Toyota',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Honda',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Ford',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Chevrolet',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Volkswagen',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Nissan',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Hyundai',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Kia',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Mazda',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Subaru',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
  {
    id: uuid(),
    name: 'Audi',
    createdAt: Date.now(),
    updatedAt: Date.now(),
  },
];
