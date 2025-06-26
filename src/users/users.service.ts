import { Body, Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

const prisma = new PrismaClient()

@Injectable()
export class UsersService {
    getUsers(id?: number): {} {
        if (id) { 
            return prisma.user.findUnique({where: {id} })
        }
        return prisma.user.findMany()
    }

    createuser(body: {name: string, email: string, password: string}): {} {
        return body
    }

    patchUser(body: {name?: string, email?: string, password?: string}): {} {
        return body
    }

    deleteuser(id: number): number {
        return id
    }
}
