'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mail, MapPin, Award, Users, Globe } from 'lucide-react';
import { PaperCard } from '@/components/PaperCard';
import papersData from '@/data/papers.json';

export default function Home() {
  // Sort papers by citation count and get top 5
  const topCitedPapers = [...papersData]
    .sort((a, b) => b.citation_count - a.citation_count)
    .slice(0, 5);

  // Email obfuscation helper
  const emailUser = "gorka.abad";
  const emailDomain = "uib.no";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 max-w-5xl">
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-12">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 leading-tight font-display">
              Hi — I'm Gorka Abad
            </h1>

            <p className="text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed mb-6">
              I am a <strong className="font-semibold text-zinc-900 dark:text-zinc-100">LEAD-AI Postdoctoral Fellow @ University of Bergen</strong>, funded by the <strong className="font-semibold text-zinc-900 dark:text-zinc-100">Marie Skłodowska-Curie Actions COFUND</strong> program. My research focuses on bridging cryptography and deep learning.
              Formerly, I was a P.h.D. candidate @ Radboud University.
            </p>

            <div className="flex flex-col gap-3 text-zinc-600 dark:text-zinc-400 mb-8">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-zinc-400" />
                <span>Bergen, Norway</span>
              </div>
              <div className="flex items-center gap-2 group">
                <Mail className="w-4 h-4 text-zinc-400" />
                <button
                  onClick={() => window.location.href = `mailto:${emailUser}@${emailDomain}`}
                  className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  {emailUser} [at] {emailDomain}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-md hover:bg-zinc-700 dark:hover:bg-zinc-300 transition-colors text-sm font-medium"
              >
                View Publications <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://no.linkedin.com/in/gorka-abad/en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/GorkaAbad"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm font-medium"
              >
                GitHub
              </a>
              <a
                href="https://scholar.google.com/citations?user=KasGG7wAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-300 dark:border-zinc-700 rounded-md hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm font-medium"
              >
                Google Scholar
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-xl ring-1 ring-zinc-200 dark:ring-zinc-700">
              <Image
                src="/profile.jpg"
                alt="Gorka Abad"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Interests */}
      <section className="container mx-auto px-6 py-16 max-w-5xl border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl font-semibold mb-8 text-zinc-900 dark:text-zinc-100">Research Areas</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Deep Learning & Crypto</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Bridging the gap between cryptography and deep learning to build more secure and efficient machine learning systems.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Spiking Neural Networks</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Investigating the security and robustness of bio-inspired Spiking Neural Networks (SNNs).
            </p>
          </div>
          <div>
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">Neuromorphic Data</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Developing novel attacks and defenses for neuromorphic data and event-based vision systems.
            </p>
          </div>
        </div>
      </section>

      {/* Fellowships & Grants */}
      <section className="container mx-auto px-6 py-16 max-w-5xl border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl font-semibold mb-8 text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
          <Award className="w-6 h-6 text-zinc-400" />
          Fellowships & Grants
        </h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">LEAD-AI Postdoctoral Fellowship</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                Marie Skłodowska-Curie Actions (MSCA) COFUND program. University of Bergen, Norway.
              </p>
            </div>
            <div className="text-sm text-zinc-500 font-medium whitespace-nowrap">
              2025 — Present
            </div>
          </div>
        </div>
      </section>

      {/* Academic Service */}
      <section className="container mx-auto px-6 py-16 max-w-5xl border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl font-semibold mb-8 text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
          <Users className="w-6 h-6 text-zinc-400" />
          Academic Service
        </h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Program Committee</h3>
              <ul className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 space-y-1 list-disc list-inside">
                <li>ACM Conference on Computer and Communications Security (CCS) — Machine Learning and Security Track, 2026</li>
                <li>IEEE Conference on Secure and Trustworthy Machine Learning (SaTML), 2026</li>
                <li>SAFE-ML Workshop at the IEEE International Conference on Software Testing, Verification and Validation (ICST), 2026</li>
              </ul>
            </div>
            <div className="text-sm text-zinc-500 font-medium whitespace-nowrap">
              2026 — Present
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Session Chair</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                European Symposium on Research in Computer Security (ESORICS) 2025
              </p>
            </div>
            <div className="text-sm text-zinc-500 font-medium whitespace-nowrap">
              2025
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Reviewer</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                IEEE Transactions on Information Forensics & Security (TIFS)
              </p>
            </div>
            <div className="text-sm text-zinc-500 font-medium whitespace-nowrap">
              2023 — Present
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">Artifact Evaluator</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                Network and Distributed System Security Symposium (NDSS)
              </p>
            </div>
            <div className="text-sm text-zinc-500 font-medium whitespace-nowrap">
              2023 — 2024
            </div>
          </div>
        </div>
      </section>

      {/* Research Visits */}
      <section className="container mx-auto px-6 py-16 max-w-5xl border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-2xl font-semibold mb-8 text-zinc-900 dark:text-zinc-100 flex items-center gap-3">
          <Globe className="w-6 h-6 text-zinc-400" />
          Research Visits
        </h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h3 className="font-medium text-zinc-900 dark:text-zinc-100">University College London (UCL)</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                Visiting Prof. Lorenzo Cavallaro and his team. London, UK.
              </p>
            </div>
            <div className="text-sm text-zinc-500 font-medium whitespace-nowrap">
              2024
            </div>
          </div>
        </div>
      </section>

      {/* Selected Publications */}
      <section className="container mx-auto px-6 py-16 max-w-5xl border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">Selected Publications</h2>
          <Link
            href="/research"
            className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            View all →
          </Link>
        </div>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
          Top 5 most cited publications
        </p>
        <div>
          {topCitedPapers.map((paper, index) => (
            <PaperCard key={index} {...paper} />
          ))}
        </div>
      </section>
    </div>
  );
}
