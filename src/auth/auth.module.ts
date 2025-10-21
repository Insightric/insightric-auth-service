// import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { AuthService } from '@auth/auth.service';
// import { AuthController } from '@auth/auth.controller';
// import { JwtStrategy } from '@auth/jwt.strategy';
// import { UsersModule } from '@/users/users.module';
// import { ConfigModule, ConfigService } from '@nestjs/config';

// @Module({
//   imports: [
//     UsersModule,
//     PassportModule,
//     ConfigModule,
//     JwtModule.registerAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: async (configService: ConfigService) => ({
//         secret:
//           configService.get<string>('app.jwtSecret') || 'change_this_secret',
//         signOptions: { expiresIn: '1h' },
//       }),
//     }),
//   ],
//   providers: [AuthService, JwtStrategy],
//   controllers: [AuthController],
//   exports: [AuthService],
// })
// export class AuthModule {}
