import { Controller, Delete, Get, Post, Patch, Body, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService) {}

    @Get()
    getUsers(): {} {
        return this.UsersService.getUsers()
    }

    @Post()
    createuser(@Body() body: {name: string, email: string, password: string}): {} {
        return this.UsersService.createuser(body)
    }

    @Patch()
    patchUser(@Body() body: {name?: string, email?: string, password?: string}): {} {
        return this.UsersService.patchUser(body)
    }

    @Delete()
    deleteuser(@Body() id: number): number {
        return this.UsersService.deleteuser(id)
    }
}
