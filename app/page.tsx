import { ArrowRight, Brain, Code2, Database, GraduationCap, Github, Linkedin, Mail, MapPin, Network, Phone, Server, Users } from "lucide-react";
import Nav from "@/components/Nav";
import Projects from "@/components/Projects";
import CvButton from "@/components/CvButton";
import { education, experience, leadership, site, skills } from "@/lib/content";

const icons = { server: Server, database: Database, brain: Brain, code: Code2, network: Network };

function Section({ id, title, intro, children }: { id: string; title: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <h2>{title}</h2>
      {intro && <p className="mt-3 max-w-2xl text-lg text-muted">{intro}</p>}
      {children}
    </section>
  );
}

function Architecture() {
  const node = (x: number, y: number, w: number, label: string, sub: string, hot = false) => (
    <g>
      <rect x={x} y={y} width={w} height={54} rx={10} fill="#0b1327" stroke={hot ? "#22d3ee" : "#1b2a4b"} strokeWidth={hot ? 1.8 : 1.2} />
      <text x={x + w / 2} y={y + 24} textAnchor="middle" fill="#f4f7ff" fontSize="13" fontWeight="600">{label}</text>
      <text x={x + w / 2} y={y + 42} textAnchor="middle" fill="#a3b2d1" fontSize="10.5">{sub}</text>
    </g>
  );
  const link = (d: string) => <path d={d} fill="none" stroke="#3b82f6" strokeWidth="1.6" className="flow" />;
  return (
    <svg viewBox="0 0 420 330" role="img" aria-label="Diagram: a web app calls a backend API, which connects to a database and an AI service" className="w-full">
      {node(130, 10, 160, "Web or mobile app", "what the user sees")}
      {link("M210 64 V104")}
      {node(110, 104, 200, "Backend API", "C# / ASP.NET Core", true)}
      {link("M160 158 V204 H90 V224")}
      {link("M260 158 V204 H330 V224")}
      {node(10, 224, 160, "Database", "SQL / MySQL")}
      {node(250, 224, 160, "AI service", "prompts and responses", true)}
      <text x="210" y="312" textAnchor="middle" fill="#a3b2d1" fontSize="11">The kind of system I build and connect</text>
    </svg>
  );
}

export default function Home() {
  const contactLinks = [
    { href: site.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: site.github, label: "GitHub", Icon: Github },
  ].filter((l) => l.href);

  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-4 focus:py-2">Skip to content</a>
      <Nav />
      <main>
        <section id="home" className="relative overflow-hidden pt-16">
          <div className="grid-bg absolute inset-0" aria-hidden />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:py-24 lg:grid-cols-[1.15fr_.85fr]">
            <div>
              <p className="rise flex items-center gap-2 text-muted"><MapPin size={16} className="text-cyan" aria-hidden /> {site.name}, {site.location}</p>
              <h1 className="rise rise-2 mt-5">I Build Software That Solves Real Problems.</h1>
              <p className="rise rise-3 mt-6 max-w-xl text-lg leading-relaxed text-muted">Computer Science graduate and software developer focused on backend systems, AI integration, and practical digital solutions.</p>
              <div className="rise rise-3 mt-9 flex flex-wrap gap-3">
                <a href="#projects" className="btn btn-primary">Explore My Projects <ArrowRight size={16} aria-hidden /></a>
                <a href="#contact" className="btn btn-ghost">Contact Me</a>
                <CvButton label="Download My CV" />
              </div>
            </div>
            <div className="rise rise-2 panel p-5 md:p-7"><Architecture /></div>
          </div>
        </section>

        <Section id="about" title="About me">
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <div className="max-w-prose space-y-4 text-lg leading-relaxed text-muted">
              <p>I am a Computer Science graduate with practical experience in software development, backend systems, database management, API integration, information management systems and AI-powered applications.</p>
              <p>I enjoy solving practical problems through technology: building systems that make work easier, improve access to information and support better decisions.</p>
              <p>I use GitHub Copilot, Claude Code and DeepSeek to support development, debugging and problem-solving, and prompt engineering is one of my strengths. Having worked in a busy office and courier environment, I understand the operational side of the businesses that technology is meant to serve.</p>
            </div>
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-lg font-semibold"><GraduationCap className="text-cyan" aria-hidden /> Education and certifications</h3>
              {education.map((e) => (
                <div key={e.title} className="panel p-5">
                  <p className="font-semibold">{e.title}</p>
                  <p className="text-muted">{e.org}</p>
                  {e.note && <p className="mt-1 text-sm text-cyan">{e.note}</p>}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="experience" title="Experience" intro="Employment and practical attachment, kept separate.">
          <ol className="mt-10 space-y-5 border-l border-line pl-6">
            {experience.map((x) => (
              <li key={x.org} className="relative">
                <span className="absolute -left-[31px] top-2 h-2.5 w-2.5 rounded-full bg-cyan" aria-hidden />
                <div className="panel p-6">
                  <p className="text-sm text-cyan">{x.type}</p>
                  <h3 className="mt-1 text-xl font-semibold">{x.org}</h3>
                  <p className="text-muted">{x.role} · {x.place}</p>
                  <ul className="mt-4 list-disc space-y-1.5 pl-5 text-muted marker:text-accent">{x.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="projects" title="Projects and initiatives" intro="Software and technology work across education, AI and business systems.">
          <Projects />
        </Section>

        <Section id="skills" title="Technical skills" intro="Backend, databases and AI-assisted development are where I am strongest.">
          <div className="mt-10 grid gap-5 md:grid-cols-6">
            {skills.map((s) => {
              const Icon = icons[s.icon as keyof typeof icons];
              return (
                <div key={s.group} className={`panel p-6 ${s.strong ? "md:col-span-2 border-accent/60" : "md:col-span-3"}`}>
                  <h3 className="flex items-center gap-2 text-lg font-semibold"><Icon size={20} className="text-cyan" aria-hidden /> {s.group}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">{s.items.map((i) => <li key={i} className="rounded-md border border-line px-2.5 py-1 text-sm text-muted">{i}</li>)}</ul>
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="leadership" title="Leadership and involvement" intro="Communication, teamwork, coordination and initiative, in practice.">
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((l) => (
              <li key={l.role + l.org} className="panel flex gap-4 p-5">
                <Users className="mt-1 shrink-0 text-cyan" size={20} aria-hidden />
                <div><p className="font-semibold">{l.role}</p><p className="text-muted">{l.org}</p></div>
              </li>
            ))}
            <li className="panel flex gap-4 p-5">
              <GraduationCap className="mt-1 shrink-0 text-cyan" size={20} aria-hidden />
              <div><p className="font-semibold">Leadership and Supervisory Skills Management</p><p className="text-muted">Certificate, TVTC</p></div>
            </li>
          </ul>
        </Section>

        <Section id="contact" title="Let's work together">
          <p className="mt-3 max-w-2xl text-lg text-muted">If you are a recruiter, employer or collaborator and think I could help your team, send me a message.</p>
          <p className="mt-6 flex items-center gap-2 text-muted"><MapPin size={18} className="text-cyan" aria-hidden /> {site.location}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {site.email
              ? <a className="btn btn-primary" href={`mailto:${site.email}`}><Mail size={16} aria-hidden /> {site.email}</a>
              : <span className="btn btn-primary" aria-disabled="true"><Mail size={16} aria-hidden /> Email address coming soon</span>}
            {site.phone && <a className="btn btn-ghost" href={`tel:${site.phoneIntl}`}><Phone size={16} aria-hidden /> {site.phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3")}</a>}
            {contactLinks.map(({ href, label, Icon }) => (
              <a key={label} className="btn btn-ghost" href={href} target="_blank" rel="noopener noreferrer"><Icon size={16} aria-hidden /> {label}</a>
            ))}
            <CvButton />
          </div>
        </Section>
      </main>
      <footer className="border-t border-line px-5 py-8 text-center text-sm text-muted">© {new Date().getFullYear()} {site.name} · {site.location}</footer>
    </>
  );
}
