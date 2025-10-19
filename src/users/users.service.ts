// import { Injectable, Inject } from '@nestjs/common';
// import { IUserRepository } from './repositories/user.repository.interface';
// import { UserDocument } from './schemas/user.schema';

// @Injectable()
// export class UsersService {
//   constructor(@Inject(IUserRepository) private userRepo: IUserRepository) {}

//   async create(
//     username: string,
//     password: string,
//     roles: string[] = ['user'],
//   ): Promise<UserDocument> {
//     return this.userRepo.create(username, password, roles);
//   }

//   async findByUsername(username: string) {
//     return this.userRepo.findByUsername(username);
//   }

//   async findById(id: string) {
//     return this.userRepo.findById(id);
//   }

//   async findAll() {
//     return this.userRepo.findAll();
//   }
// }
