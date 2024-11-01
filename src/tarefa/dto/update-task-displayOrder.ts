import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateTaskDisplayOrder {
  @IsNotEmpty()
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsInt()
  displayOrder: number;
}
