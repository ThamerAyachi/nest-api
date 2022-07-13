import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { comparePassword } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}

  async validateUser(username: string, password: string) {
    const userDB = await this.usersService.findUserByUsername(username);

    if (userDB) {
      const matched = comparePassword(password, userDB.password);

      if (matched) {
        console.log('User Validation Success!');
        return userDB;
      }
      console.log('Password do not match');
      return null;
    }
    console.log('User Validation Failed!');
    return null;
  }
}
