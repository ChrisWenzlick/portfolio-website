import Link from "next/link";
import { siteConfig } from "@/site.config";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <h1 className="text-x1 font-bold">{siteConfig.name}</h1>
            <ul className="flex space-x-6">
                {siteConfig.nav.map((item) => (
                    <li key={item.href}>
                        <Link href={item.href} className="hover:text-blue-400 transition">
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}