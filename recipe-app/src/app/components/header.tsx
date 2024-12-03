import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center p-4 bg-gray-100 shadow-md">
        <div className="flex items-center gap-4">
          <Image
            suppressHydrationWarning
            priority
            src="/logo.svg"
            alt="Logo"
            width={200}
            height={200}
          />
        </div>
        <nav className="flex gap-6">
          <Link href="/" className="hover:text-blue-500">
            Home
          </Link>
          <Link href="/overview" className="hover:text-blue-500">
            Overview
          </Link>
        </nav>
      </div>
    </>
  );
}
