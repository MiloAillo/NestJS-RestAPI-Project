import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/patch-user.dto';

const prisma = new PrismaClient()

@Injectable()
export class UsersService {
    async getUsers(id?: number): Promise<any> {
        if (id) {
            const user = await prisma.user.findUnique({where: {id}})
            if (!user) {
                throw new NotFoundException('User Not Found')
            }
            return user
        }
        return prisma.user.findMany()
    }

    createUser(createUserDto: CreateUserDto): {} {
        return createUserDto
    }

    patchUser(updateUserDto: UpdateUserDto): {} {
        return updateUserDto
    }

    deleteuser(id: number): number {
        return id
    }
}
