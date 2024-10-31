import { IsString, IsNumber, IsDateString, IsOptional } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber({}, { message: 'price must be a valid number.' })
  @IsOptional()
  price?: number | null;

  @IsDateString()
  @IsOptional()
  deadline?: string;
}
