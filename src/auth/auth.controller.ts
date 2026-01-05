import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleOauthGuard } from './guards/google-oauth.guard';
import { ConfigService } from '@nestjs/config';
import type { Response } from 'express';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

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
  async googleAuthRedirect(@Req() req, @Res() res: Response) {
    const result = await this.authService.googleLogin(req);
    const FRONTEND_URL = this.configService.get<string>('FRONTEND_URL') || 'localhost:3000';

    res.cookie('access_token', result.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      maxAge: 7 * 24 * 60 * 60, // 7 hari
    })

    return res.redirect(`${FRONTEND_URL}/atlas`);
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  getMe(@Req() req) {
    return req.user;
  }

  @Post('logout')
  logout(@Res() res: Response) {
    res.clearCookie('access_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });
    return res.status(200).json({ message: 'Logged out successfully' });
  }
}
