import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { FBAuthReponseDto } from "./dtos/fb_auth_reponse.dto";
@Controller('api/auth')
export class AuthController {
  @UseGuards(AuthGuard('facebook-token'))  
  @Post('facebook')
  async postTokenAfterFacebookSignIn(
    @Body() body: FBAuthReponseDto,
    @Req() req) {
    console.log(req.user);
  }

  @UseGuards(AuthGuard('facebook-token'))  
  @Get('facebook')
  async getTokenAfterFacebookSignIn(
    @Req() req) {
    console.log(req.user);
  }
}