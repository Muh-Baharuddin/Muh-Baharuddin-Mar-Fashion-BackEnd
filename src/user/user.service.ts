import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const newUser = await this.usersRepository.save(createUserDto);
    try {
      if (newUser['raw']['affectedRows'] > 0) {
        return {
          message: 'User has been added',
          user: createUserDto,
        };
      }
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: 'This is a custom message',
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id_user: number) {
    return this.usersRepository.findOneBy({ id_user });
  }

  async update(id_user: number, updateUserDto: UpdateUserDto) {
    const userUpdate = await this.usersRepository.update(
      id_user,
      updateUserDto,
    );
    try {
      return userUpdate;
    } catch (error) {
      message: 'No user update';
      return error.message;
    }
  }

  remove(id_user: number) {
    return this.usersRepository.delete(id_user);
  }
}
