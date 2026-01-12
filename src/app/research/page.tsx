'use client';
import { useState, useMemo } from 'react';
import papersData from '@/data/papers.json';
import { PaperCard } from '@/components/PaperCard';
import { Search } from 'lucide-react';

export default function ResearchPage() {
    const [searchQuery, setSearchQuery] = useState('');

    // Sort papers by citation count (highest first), then by year
    const sortedPapers = useMemo(() => {
        return [...papersData].sort((a, b) => {
            // First sort by citation count (descending)
            if (b.citation_count !== a.citation_count) {
                return b.citation_count - a.citation_count;
            }
            // Then by year (descending)
            return Number(b.year) - Number(a.year);
        });
    }, []);

    const filteredPapers = useMemo(() => {
        return sortedPapers.filter(paper =>
            paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            paper.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
            paper.year.toString().includes(searchQuery)
        );
    }, [searchQuery, sortedPapers]);

    return (
        <div className="container mx-auto px-6 py-16 max-w-5xl">
            <div className="mb-12">
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">Publications</h1>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                    {papersData.length} publications sorted by citation count. Data automatically fetched from Google Scholar.
                </p>

                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                    <input
                        type="text"
                        placeholder="Search by title, author, or year..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600 transition-shadow text-sm"
                    />
                </div>
            </div>

            <div>
                {filteredPapers.length > 0 ? (
                    filteredPapers.map((paper, index) => (
                        <PaperCard key={index} {...paper} />
                    ))
                ) : (
                    <div className="text-center py-12 text-zinc-500">
                        No papers found matching "{searchQuery}"
                    </div>
                )}
            </div>
        </div>
    );
}
