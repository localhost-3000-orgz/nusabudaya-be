import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async googleLogin(req) {
    if (!req.user) {
      return { message: 'No user from google' };
    }

    let user = await this.usersService.findByEmail(req.user.email);

    if (!user) {
      user = await this.usersService.create({
        email: req.user.email,
        firstName: req.user.firstName,
        lastName: req.user.lastName || '',
        picture: req.user.picture,
      });
    }

    const payload = { 
      sub: user.id, 
      email: user.email, 
      name: [user.firstName, user.lastName].filter(Boolean).join(' '), 
      avatar: user.picture, 
    };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
