import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class FBAuthReponseDto {
  
  @IsNotEmpty()
  @IsString()
  accessToken: string;
  userID: string;
  
  @IsNumber()
  expiresIn: number;
}