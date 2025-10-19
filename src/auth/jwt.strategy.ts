import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import jwksRsa from 'jwks-rsa';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private configService: ConfigService) {
    const region =
      configService.get<string>('cognito.awsRegion') || 'us-east-1';
    const userPoolId = configService.get<string>('cognito.userPoolId');
    // if (!userPoolId)
    //   throw new Error('COGNITO_USER_POOL_ID is required for JWT validation');
    const jwksUri = `https://cognito-idp.${region}.amazonaws.com/${userPoolId}/.well-known/jwks.json`;

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKeyProvider: jwksRsa.passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri,
      }) as any,
      algorithms: ['RS256'],
    } as any);
  }

  async validate(payload: any) {
    return {
      userId: payload.sub,
      username: payload['cognito:username'] || payload.username,
      roles: payload['cognito:groups'] || payload.roles,
    };
  }
}
