'use client';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Footer() {
    const emailUser = "gorka.abad";
    const emailDomain = "uib.no";

    return (
        <footer className="w-full py-12 mt-20 border-t border-zinc-200 dark:border-zinc-800">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                        © {new Date().getFullYear()} Gorka Abad
                    </div>

                    <div className="flex gap-6 items-center">
                        <button
                            onClick={() => window.location.href = `mailto:${emailUser}@${emailDomain}`}
                            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </button>
                        <a
                            href="https://github.com/GorkaAbad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://no.linkedin.com/in/gorka-abad/en"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="https://scholar.google.com/citations?user=KasGG7wAAAAJ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                        >
                            Google Scholar
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
