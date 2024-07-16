import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateCarDTO {
  @IsString()
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsOptional()
  readonly make?: string;

  @IsString()
  @IsOptional()
  readonly model?: string;
}
