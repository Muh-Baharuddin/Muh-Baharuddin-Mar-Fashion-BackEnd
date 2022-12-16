import { Injectable } from '@nestjs/common';
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
    if (newUser) {
      return {
        message: 'user berhasil ditambahkan',
        user: createUserDto,
      };
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
    if (userUpdate) {
      return {
        message: 'User berhasil diperbarui',
        user: updateUserDto,
      };
    }
  }

  remove(id_user: number) {
    const userDelete = this.usersRepository.delete(id_user);
    if (userDelete) {
      return {
        message: 'user berhasil dihapus',
      };
    }
  }
}
