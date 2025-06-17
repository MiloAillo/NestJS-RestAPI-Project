import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'generated/prisma';

const prisma = new PrismaClient()

@Injectable()
export class UsersService {
    getUsers(): {} {
        const users = prisma.user.findMany()
        return users
    }}
