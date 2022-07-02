import { PrismaStrategy } from '../strategies/prisma/prisma.strategy';
import { Prisma } from '@prisma/client';
export class UsersRepository {
  constructor(private prisma: PrismaStrategy) {
    this.prisma = new PrismaStrategy();
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findByUnique(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return null;
  }

  async checkLogin(email: string, password: string) {
    return await this.prisma.user.findFirst({
      where: {
        AND: [{ email }, { password }, { deleted_at: null }]
      }
    });
  }

  async checkUserDeleted(email: string) {
    return await this.prisma.user.findFirst({
      where: {
        AND: [{ email }, { deleted_at: null }]
      }
    });
  }

  async findMany(user: Prisma.UserCreateInput) {
    return await this.prisma.user;
  }

  async findOne(id: string) {
    return await this.prisma.user.findUnique({
      where: {
        id
      }
    });
  }
  async findOneByEmail(email) {
    const result = await this.prisma.user.findFirst({
      where: {
        AND: [{ email }, { deleted_at: null }]
      }
    });
    const { password, ...rest } = result;
    return rest;
  }

  async update(user: Prisma.UserUpdateInput) {
    return true;
  }

  async updateByUnique({ id }, data: Prisma.UserUpdateInput) {
    return await this.prisma.user.update({
      where: {
        id
      },
      data
    });
  }

  //softdelete
  // async delete(id: string): Promise<User | null> {
  //   const now = new Date(Date.now());
  //   return await this.prisma.user.update({
  //     where: {
  //       id
  //     },
  //     data: {
  //       deletedAt: now
  //     }
  //   });
  // }

  async remove() {
    return true;
  }

  // async createUser(user: Prisma.UserCreateInput): Promise<User | null> {
  //   const result = await this.prisma.user.create({
  //     data: user
  //   });
  //   return result;
  // }
}
