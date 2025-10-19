// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { UsersService } from '@/users/users.service';
// import { UsersController } from '@/users/users.controller';
// import { User, UserSchema } from '@/users/schemas/user.schema';
// import { IUserRepository } from '@/users/repositories/user.repository.interface';
// import { MongooseUserRepository } from '@/users/repositories/mongoose.user.repository';

// @Module({
//   imports: [
//     MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
//   ],
//   providers: [
//     UsersService,
//     { provide: IUserRepository, useClass: MongooseUserRepository },
//   ],
//   controllers: [UsersController],
//   exports: [UsersService],
// })
// export class UsersModule {}
