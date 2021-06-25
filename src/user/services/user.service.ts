import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UserCreateDto } from '../dto/user.create.dto';
import { User } from '../models/user.entity'; 

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {}

  async createOne(userCreateDto: UserCreateDto): Promise<User> {
    return this.userRepository.save(userCreateDto);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findById(id: number): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async updateOne(id: number, user: UserCreateDto): Promise<any> {
    return this.userRepository.update(id, user);
  }

  async deleteOne(id: number){
    this.userRepository.delete(id);
  }
}
