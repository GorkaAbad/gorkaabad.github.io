import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface PaperProps {
  title: string;
  year: string | number;
  citation_count: number;
  link: string;
  authors: string;
}

export function PaperCard({ title, year, citation_count, link, authors }: PaperProps) {
  return (
    <Link href={link} target="_blank" className="block group">
      <article className="py-4 border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900/30 -mx-2 px-2 rounded transition-colors">
        <div className="flex items-start gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
              {title}
            </h3>
            <div className="mt-1.5 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {authors.split(new RegExp(`(Gorka Abad)`, 'gi')).map((part, i) =>
                part.toLowerCase() === 'gorka abad'
                  ? <strong key={i} className="font-semibold text-zinc-900 dark:text-zinc-200">{part}</strong>
                  : <span key={i}>{part}</span>
              )}
            </div>
            <div className="flex items-center gap-4 mt-2 text-xs text-zinc-500 dark:text-zinc-500">
              <span>{year || 'Preprint'}</span>
              {citation_count > 0 && (
                <span className="font-medium">
                  {citation_count} {citation_count === 1 ? 'citation' : 'citations'}
                </span>
              )}
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100" />
        </div>
      </article>
    </Link>
  );
}
