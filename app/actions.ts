export async function addTest(formData: FormData) {
  "use server";
  let name = formData.get("name");
  console.log("addTest: " + name);
  // ...
}

export async function addColaborador(formData: FormData) {
  "use server";
  let nome = formData.get("name");
  let matricula = formData.get("mat");
  console.log("addColaborador: " + nome + " - " + matricula);
  // ...
}
