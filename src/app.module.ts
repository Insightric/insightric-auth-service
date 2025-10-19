import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
import { HealthModule } from '@/health/health.module';
// import { AuthModule } from '@/auth/auth.module';
// import { UsersModule } from '@/users/users.module';
import { CognitoService } from '@/cognito/cognito.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from '@/config/app.config';
import mongoConfig from '@/config/mongo.config';
import cognitoConfig from '@/config/cognito.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, mongoConfig, cognitoConfig],
    }),
    // MongooseModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory: async (configService: ConfigService) => ({
    //     uri: configService.get<string>('mongo.uri'),
    //   }),
    // }),
    HealthModule,
    // AuthModule,
    // UsersModule,
  ],
  providers: [CognitoService],
})
export class AppModule {}
