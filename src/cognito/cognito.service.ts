import AWS from 'aws-sdk';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CognitoService {
  private cognito: AWS.CognitoIdentityServiceProvider;
  private userPoolId: string;
  private clientId: string;

  constructor(private configService: ConfigService) {
    const region =
      this.configService.get<string>('cognito.awsRegion') || 'us-east-1';
    this.userPoolId =
      this.configService.get<string>('cognito.userPoolId') || '';
    this.clientId = this.configService.get<string>('cognito.clientId') || '';
    AWS.config.update({ region });
    this.cognito = new AWS.CognitoIdentityServiceProvider();
  }

  async adminCreateUser(username: string, temporaryPassword: string) {
    const params: AWS.CognitoIdentityServiceProvider.AdminCreateUserRequest = {
      UserPoolId: this.userPoolId,
      Username: username,
      TemporaryPassword: temporaryPassword,
    };
    return this.cognito.adminCreateUser(params).promise();
  }

  // Other methods: adminGetUser, adminSetUserPassword, initiateAuth, etc.
}
