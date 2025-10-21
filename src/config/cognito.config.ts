import { registerAs } from '@nestjs/config';

export default registerAs('cognito', () => ({
  awsRegion: process.env.COGNITO_REGION || 'us-east-1',
  userPoolId: process.env.COGNITO_USER_POOL_ID || '',
  clientId: process.env.COGNITO_CLIENT_ID || '',
}));
