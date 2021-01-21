import { Injectable } from '@nestjs/common';
import { User } from './Interfaces/user.interface';

@Injectable()
export class UsersService {

    private users: User[]=[];


    FindAll():User[]{
        return this.users;
    }
     create(user:User): User{
        this.users.push(user)
        return user;
    }
}
