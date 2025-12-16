import { Controller, Get, Redirect, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleOauthGuard } from './guards/google-oauth.guard';
import { ConfigService } from '@nestjs/config';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private configService: ConfigService
  ) {}

  @Get('google')
  @UseGuards(GoogleOauthGuard)
  async googleAuth(@Req() req) {
    // Guard bakalan redirect ke Google
  }

  @Get('google/callback')
  @UseGuards(GoogleOauthGuard)
  async googleAuthRedirect(@Req() req) {
    const result = await this.authService.googleLogin(req);
    
    const FRONTEND_URL = this.configService.get<string>('FRONTEND_URL') || 'localhost:3000'
    return Redirect(`${FRONTEND_URL}/callback?token=${result.access_token}`)
  }
}
