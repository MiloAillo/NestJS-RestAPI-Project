import { Controller, Delete, Get, Post, Patch, Body, ParseIntPipe, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { customParseInt } from 'src/pipes/custom-parse-int.pipe';

@Controller('users')
export class UsersController {
    constructor(private UsersService: UsersService) {}

    @Get()
    getUsers(@Query('id', customParseInt) id?: number): {} {
        return this.UsersService.getUsers(id)
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
    deleteuser(@Body(ParseIntPipe) id: number): number {
        return this.UsersService.deleteuser(id)
    }
}
