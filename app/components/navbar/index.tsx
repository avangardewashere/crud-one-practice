import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-sky-500 to-indigo-500 px-8 py-4 rounded-md">
      <Link className="text-white font-bold" href="/">
        Home
      </Link>
      <span>Bright new Idea</span>
      <Link href="/addIdea" className="rounded-sm bg-rose-400 text-white p-4">
        Add another Idea
      </Link>
    </nav>
  );
}
