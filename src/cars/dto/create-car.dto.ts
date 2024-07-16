import { IsString } from 'class-validator';

export class CreateCarDTO {
  @IsString()
  readonly make: string;

  @IsString()
  readonly model: string;
}
