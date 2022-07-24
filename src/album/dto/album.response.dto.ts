import { IsNotEmpty, IsNumber, IsString, IsUUID, ValidateIf } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AlbumResponseDto {
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty()
  id: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  year: number;
  @ValidateIf((_, value) => value !== null)
  @IsUUID('4')
  @ApiProperty({ nullable: true })
  artistId: string | null;
}