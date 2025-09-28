import Link from "next/link";


export default function MenuBar() {
  return (
    <main>
      <div className="flex justify-center gap-4 py-6 bg-blue-500 text-amber-50">
        <Link href="/">หน้าหลัก</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
        <Link href="/major">สาขาวิฃา</Link>
      </div>
    </main>
  );
}