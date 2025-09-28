import Link from "next/link";
export default function MenuMajor() {
  return (
    <main>
      <div className="flex justify-center gap-4 py-6 bg-white text-blue-600">
        <Link href="/major">หน้าหลักสาขา</Link>
        <Link href="/major/account">บัญชี</Link>
        <Link href="/major/dm">Digital Marketing</Link>
        <Link href="/major/dti">Digital Technologies Innovation</Link>
        <Link href="/major/marketing">Marketing</Link>
      </div>
    </main>
  );
}
