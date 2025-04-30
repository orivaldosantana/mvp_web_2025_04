export default function Page() {
  // Server Action
  async function addTest(formData: FormData) {
    "use server";
    let name = formData.get("name");
    console.log("addTest: " + name);
    // ...
  }

  return (
    <div>
      <form action={addTest}>
        <input type="text" name="name" placeholder="Your name" />
        <button>Create</button>
      </form>
    </div>
  );
}
