import { PrismaClient } from "@/app/generated/prisma";

export async function addTest(formData: FormData) {
  "use server";
  let name = formData.get("name");
  console.log("addTest: " + name);
  // ...
}

export async function addColaborador(formData: FormData) {
  "use server";
  const prisma = new PrismaClient();

  let nome = formData.get("name");
  let matricula = formData.get("mat");
  console.log("addColaborador: " + nome + " - " + matricula);

  try {
    await prisma.colaborator.create({
      data: {
        name: String(nome),
        mat: String(matricula),
      },
    });
  } catch (error) {
    console.error("Error creating colaborador: ", error);
  } finally {
    await prisma.$disconnect();
  }
}
