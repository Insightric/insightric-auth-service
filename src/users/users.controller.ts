// import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// import { UsersService } from '@/users/users.service';

// @Controller('users')
// export class UsersController {
//   constructor(private usersService: UsersService) {}

//   @Post()
//   async create(
//     @Body() body: { username: string; password: string; roles?: string[] },
//   ) {
//     return this.usersService.create(body.username, body.password, body.roles);
//   }

//   @Get()
//   async list() {
//     return this.usersService.findAll();
//   }

//   @Get(':id')
//   async get(@Param('id') id: string) {
//     return this.usersService.findById(id);
//   }
// }
