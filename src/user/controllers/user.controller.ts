import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserCreateDto } from '../dto/user.create.dto';
import { User } from '../models/user.entity';
import { UserService } from '../services/user.service'; 

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createOne(@Body() userCreateDto: UserCreateDto): Promise<User> {
    return this.userService.createOne(userCreateDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<User> {
    return this.userService.findById(Number(id));
  }

  @Put(':id')
  updateOne(@Param('id') id:string, @Body() user: UserCreateDto): Promise<User> {
    return this.userService.updateOne(Number(id), user);
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    this.userService.deleteOne(Number(id));
  }


  
}
