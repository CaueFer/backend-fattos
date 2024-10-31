import {
  IsString,
  IsDecimal,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
} from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  price: number;

  @IsDateString()
  deadline: string;
}
