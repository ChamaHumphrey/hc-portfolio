"use client";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/content";

const cats = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export default function Projects() {
  const [cat, setCat] = useState("All");
  const list = projects.filter((p) => cat === "All" || p.category === cat);
  return (
    <>
      <div role="group" aria-label="Filter projects" className="mt-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${cat === c ? "border-brand bg-brand text-white" : "border-line text-muted hover:border-cyan"}`}>{c}</button>
        ))}
      </div>
      <ul className="mt-8 grid gap-5 md:grid-cols-2">
        {list.map((p) => (
          <li key={p.name} className="panel flex flex-col p-6">
            <p className="text-sm text-cyan">{p.category}</p>
            <h3 className="mt-1 text-xl font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm font-semibold text-muted">{p.role}{p.status && <span className="ml-2 rounded-full border border-cyan/40 px-2 py-0.5 text-xs font-normal text-cyan">{p.status}</span>}</p>
            <p className="mt-3 leading-relaxed text-muted">{p.description}</p>
            <dl className="flex-1 space-y-2 text-sm leading-relaxed text-muted">
              {p.problem && <div className="mt-3"><dt className="font-semibold text-ink">Problem</dt><dd>{p.problem}</dd></div>}
              {p.contribution && <div><dt className="font-semibold text-ink">My contribution</dt><dd>{p.contribution}</dd></div>}
            </dl>
            {p.tags && <ul className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <li key={t} className="rounded-md border border-line px-2 py-0.5 text-xs">{t}</li>)}</ul>}
            {(p.demo || p.code) && (
              <div className="mt-5 flex gap-3">
                {p.demo && <a className="btn btn-primary !py-2" href={p.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={15} aria-hidden /> Live demo</a>}
                {p.code && <a className="btn btn-ghost !py-2" href={p.code} target="_blank" rel="noopener noreferrer"><Github size={15} aria-hidden /> Source code</a>}
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
