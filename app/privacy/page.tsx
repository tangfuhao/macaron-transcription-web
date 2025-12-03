import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function PrivacyPolicy() {
  // Read Markdown file
  const filePath = path.join(process.cwd(), 'lib', 'privacy.md');
  let content = '';
  
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error(error);
    content = '# Privacy Policy\n\nPrivacy policy content not found. Please add `lib/privacy.md`.';
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/40 sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <article className="prose prose-invert prose-zinc prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 max-w-none">
          <ReactMarkdown>{content}</ReactMarkdown>
        </article>
      </main>
    </div>
  );
}
