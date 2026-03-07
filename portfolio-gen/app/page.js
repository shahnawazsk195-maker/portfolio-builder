"use client";
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Download, Layout, Palette, Code } from 'lucide-react';

export default function PortfolioGenerator() {
  const [markdown, setMarkdown] = useState("# My Portfolio\n\nStart typing here...");
  const [theme, setTheme] = useState('modern');

  const themeStyles = {
    modern: "bg-white text-gray-900 p-10 shadow-xl border rounded-lg",
    dark: "bg-slate-900 text-white p-10 shadow-xl border border-gray-700 rounded-lg",
    classic: "bg-amber-50 text-amber-900 p-10 border-double border-4 border-amber-200"
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 text-black">
      <header className="max-w-6xl mx-auto mb-6 flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
        <h1 className="text-xl font-bold text-blue-600 flex items-center gap-2">
          <Layout size={24} /> Portfolio Builder
        </h1>
        <div className="flex gap-4 text-black">
          <select onChange={(e) => setTheme(e.target.value)} className="p-2 border rounded bg-white">
            <option value="modern">Modern Light</option>
            <option value="dark">Dark Mode</option>
            <option value="classic">Classic Paper</option>
          </select>
          <button onClick={() => window.print()} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Export PDF
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-gray-700 font-semibold">
            <Code size={18} /> Markdown Editor
          </div>
          <textarea
            className="w-full h-[550px] p-6 border rounded-xl font-mono text-sm shadow-sm bg-white text-black"
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            placeholder="Type your markdown here..."
          />
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-gray-700 font-semibold">
            <Palette size={18} /> Live Preview
          </div>
          <div className={`w-full h-[550px] overflow-auto border rounded-xl ${themeStyles[theme]}`}>
            <article className="prose max-w-none">
              <ReactMarkdown>{markdown}</ReactMarkdown>
            </article>
          </div>
        </div>
      </main>

      <footer className="mt-8 text-center text-gray-500 text-xs">
        Crafted with Next.js • Tip: Use Markdown to build your resume!
      </footer>
    </div>
  );
}