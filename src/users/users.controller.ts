import { Controller, Delete, Get, Post, Patch, Body } from '@nestjs/common';
import { Prisma, PrismaClient } from 'generated/prisma';

const prisma = new PrismaClient()

@Controller('users')
export class UsersController {
    @Get()
    getUsers(): {} {
        const users = prisma.user.findMany()
        return users
    }

    @Post()
    createuser(@Body() name: string, email: string, password: string): {} {
        return { name, email, password }
    }

    @Patch()
    patchUser(): string {
        return 'User patched'
    }

    @Delete()
    deleteuser(): string {
        return 'User deleted'
    }
}
