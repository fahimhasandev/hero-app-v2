import Image from "next/image";
import logo from "@/app/assets/img/logo.png";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="bg-slate-200">
      <nav className="container mx-auto flex justify-between items-center py-4">
        <Image src={logo} className="h-15 w-15" alt="logo" loading="eager" />
        <ul className="flex items-center gap-2">
          <li className="border border-green-600">
            <Link href="/">Home</Link>
          </li>
          <li className="border border-green-600">
            <Link href="/apps">Apps</Link>
          </li>
          <li className="border border-green-600">
            <Link href="/installation">Installation</Link>
          </li>
        </ul>
        <button>Contribute</button>
      </nav>
    </div>
  );
};

export default NavBar;
