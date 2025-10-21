import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '@/users/schemas/user.schema';
import { IUserRepository } from '@/users/repositories/user.repository.interface';

@Injectable()
export class MongooseUserRepository implements IUserRepository {
  constructor(@InjectModel(User.name) private model: Model<UserDocument>) {}

  create(username: string, password: string, roles: string[] = ['user']) {
    const created = new this.model({ username, password, roles });
    return created.save();
  }

  findByUsername(username: string) {
    return this.model.findOne({ username }).exec();
  }

  findById(id: string) {
    return this.model.findById(id).exec();
  }

  findAll() {
    return this.model.find().exec();
  }
}
