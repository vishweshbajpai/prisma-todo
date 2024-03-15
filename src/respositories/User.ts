import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getAllUsers() {
  const response = await prisma.user.findMany();
  return response;
}

async function insertUser(username: string, password: string, name: string) {
  const response = await prisma.user.create({
    data: {
      username,
      password,
      name,
    },
  });
  return response.id;
}

async function deleteUser(id: number) {
  try {
    const response = await prisma.user.delete({
      where: {
        id,
      },
    });
    return response.id;
  } catch (e) {
    console.log(e);
    return;
  }
}

export { getAllUsers, insertUser, deleteUser };
