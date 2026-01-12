'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Home' },
        { href: '/research', label: 'Publications' },
    ];

    return (
        <nav className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <div className="container mx-auto px-6 h-14 flex items-center justify-between max-w-5xl">
                <Link href="/" className="text-base font-semibold text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors">
                    Gorka Abad
                </Link>
                <div className="flex gap-8">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm transition-colors ${isActive
                                        ? 'text-zinc-900 dark:text-zinc-100 font-medium'
                                        : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
