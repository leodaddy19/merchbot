import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { FBAuthReponseDto } from "./dtos/fb_auth_reponse.dto";
@Controller('auth')
export class AuthController {
  @UseGuards(AuthGuard('facebook-token'))  
  @Post('facebook')
  async getTokenAfterFacebookSignIn(
    @Body() body: FBAuthReponseDto,
    @Req() req) {
    console.log(req.user);
  }
}