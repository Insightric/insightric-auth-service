import { UserDocument } from '@/users/schemas/user.schema';

export const IUserRepository = Symbol('IUserRepository');

export interface IUserRepository {
  create(
    username: string,
    password: string,
    roles?: string[],
  ): Promise<UserDocument>;
  findByUsername(username: string): Promise<UserDocument | null>;
  findById(id: string): Promise<UserDocument | null>;
  findAll(): Promise<UserDocument[]>;
}
