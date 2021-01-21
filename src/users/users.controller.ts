import { Body, Controller, Get, Post } from '@nestjs/common';
import {User} from './Interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService){}

    @Get()
    index(): User[]{
        return this.userService.FindAll();
    }

    @Post()
    create(@Body() user: User):User{
        return this.userService.create(user);
    }
} 
