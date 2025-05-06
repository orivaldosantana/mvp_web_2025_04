import { PrismaClient } from "@/app/generated/prisma";

export async function getColaboratorData() {
  const prisma = new PrismaClient();
  const colaborator = await prisma.colaborator.findMany();
  console.log("getColaboratorData: ", colaborator);
  await prisma.$disconnect();
  return colaborator;
}
