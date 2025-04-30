import { addTest } from "@/app/actions";

export default function Page() {
  return (
    <div>
      <form action={addTest}>
        <input type="text" name="name" placeholder="Your name" />
        <button>Create</button>
      </form>
    </div>
  );
}
