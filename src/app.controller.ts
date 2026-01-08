import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHome() {
    return {
      status: 'success',
      message: 'API Docs on /docs',
      code: 200,
    };
  }

  @Get('docs')
  @Redirect('https://github.com/localhost-orgz/nusabudaya-be', 302)
  getDocs() {}
}
