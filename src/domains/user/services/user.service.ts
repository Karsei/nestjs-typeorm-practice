import { Connection, Repository } from 'typeorm';
import { Injectable, UnprocessableEntityException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
  ) {}

  async create(email: string) {
    const userExist = await this.checkExists(email);
    if (userExist) throw new UnprocessableEntityException('가입할 수 없습니다.');

    Logger.log(`input: ${email}`);

    await this.save('홍길동', email, '123123123-adsfva-123123');
  }

  private async checkExists(email: string) {
    return await this.userRepository.findOneBy({ email: email }) !== null;
  }

  private async save(name: string,
                     email: string,
                     signUpVerifyToken: string) {
    const user = new UserEntity();
    //user.id = ulid();
    user.name = name;
    user.email = email;
    user.signupVerifyToken = signUpVerifyToken;

    await this.userRepository.save(user);
  }
}