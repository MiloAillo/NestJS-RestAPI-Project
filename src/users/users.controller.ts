import { Controller, Delete, Get, Post, Patch, Body, ParseIntPipe, Param, Query, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { customParseInt } from 'src/pipes/custom-parse-int.pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/patch-user.dto';

@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService) {}

    @Get()
    getUsers(@Query('id', customParseInt) id?: number): Promise<any> {
        return this.UsersService.getUsers(id)
    }

    @Post()
    createUser(@Body(ValidationPipe) createUserDto: CreateUserDto): {} {
        return this.UsersService.createUser(createUserDto)
    }

    @Patch()
    patchUser(@Body(ValidationPipe) updateUserDto: UpdateUserDto): {} {
        return this.UsersService.patchUser(updateUserDto)
    }

    @Delete()
    deleteuser(@Body(ParseIntPipe) id: number): number {
        return this.UsersService.deleteuser(id)
    }
}
