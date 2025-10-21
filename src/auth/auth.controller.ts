// import {
//   Controller,
//   Post,
//   Body,
//   UseGuards,
//   Request,
//   Get,
// } from '@nestjs/common';
// import {
//   ApiTags,
//   ApiBearerAuth,
//   ApiOkResponse,
//   ApiOperation,
// } from '@nestjs/swagger';
// import { AuthService } from '@/auth/auth.service';
// import { AuthGuard } from '@nestjs/passport';

// @ApiTags('auth')
// @Controller('auth')
// export class AuthController {
//   constructor(private authService: AuthService) {}

//   @Post('login')
//   @ApiOperation({ summary: 'Local login (validates against users collection)' })
//   @ApiOkResponse({ description: 'Returns an access token' })
//   async login(
//     @Body() body: { username: string; password: string },
//   ): Promise<{ access_token?: string } | { error: string }> {
//     const user = await this.authService.validateUser(
//       body.username,
//       body.password,
//     );
//     if (!user) {
//       return { error: 'Invalid credentials' };
//     }
//     return this.authService.login(user);
//   }

//   @UseGuards(AuthGuard('jwt'))
//   @ApiBearerAuth()
//   @Get('profile')
//   profile(@Request() req: Request & { user?: any }) {
//     return req.user;
//   }
// }
