import { BadRequestException, Body, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
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

    async createUser(createUserDto: CreateUserDto): Promise<any> {
        const { name, email, password } = createUserDto
        console.log(name, email, password)
        try {
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                password: password
        }})
        const res = {response: 'User successfully created!', ...user}
        return res
        } catch(err) {
            if (err.code === "P2002") throw new NotAcceptableException('Data already exist')
            return err
            
        }
    }

    async patchUser(updateUserDto: UpdateUserDto): Promise<any> {
        const { id, ...data } = updateUserDto
        try {
            const patch = await prisma.user.update({
                where: {id},
                data: data
            })
            return patch
        } catch(err) {
            if (err.name === 'PrismaClientValidationError') throw new BadRequestException('Your request is BAD and Database hate you.')
            if (err.code === 'P2025') throw new NotFoundException('whoops.. Nothing match that ID.')
            return err
        }
    }

    async deleteuser(id: number): Promise<any> {
        try {
            const del = await prisma.user.delete({where: {id}})
            return { response: 'user deleted, YAY!', ...del }
        } catch(err) {
            if (err.code === 'P2025') throw new NotFoundException('No user to delete.. dum')
            return err
        }
    }
}
