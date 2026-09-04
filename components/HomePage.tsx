'use client';

import { ArrowDown, Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';
import Header from './Header';
import ProjectSection from './ProjectSection';
import { loadContent, loadProjects } from '@/lib/client-store';
import type { Project, SiteContent } from '@/lib/data';
import { useEffect, useState } from 'react';

const bugs = [
  ['01', 'Enemy sliding during hit reaction', 'Movement continued during the hit reaction; resolved by disabling movement and restoring state through an Animation Event.'],
  ['02', 'Weapon audio desynchronization', 'A looping AudioSource caused timing drift; replaced with one-shot playback for precise firing feedback.'],
  ['03', 'Enemy detection persistence', 'Added a detection-loss timer and state transition so enemies stop pursuing after the player leaves cover.'],
  ['04', 'NavMesh navigation failure', 'Fixed disconnected floor geometry and rebaked navigation so room transitions remained traversable.'],
];

export default function HomePage() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    const refresh = () => { setContent(loadContent()); setProjects(loadProjects().filter(p => p.visible)); };
    refresh(); window.addEventListener('portfolio-updated', refresh); return () => window.removeEventListener('portfolio-updated', refresh);
  }, []);
  if (!content) return <div className="min-h-screen bg-[#0b0a0f]" />;

  return <>
    <Header />
    <main id="top">
      <section className="hero">
        <div className="hero-grid"/><div className="hero-orb"/>
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8 }}>
            <div className="eyebrow mb-6">{content.heroKicker}</div>
            <h1 className="display max-w-5xl whitespace-pre-line text-[clamp(78px,15vw,190px)] leading-[.77] uppercase">{content.heroTitle}</h1>
            <div className="mt-10 flex max-w-2xl items-end justify-between gap-8">
              <p className="m-0 text-sm leading-6 text-white/65 md:text-base">{content.heroDescription}</p>
              <a href="#projects" className="hidden shrink-0 items-center gap-2 text-[10px] uppercase tracking-[.18em] md:flex">Explore <ArrowDown size={14}/></a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="section pb-8">
        <div className="container">
          <div className="section-heading"><div><div className="eyebrow mb-4">Selected work</div><h2 className="display">Projects</h2></div><span className="max-w-xs text-right text-xs leading-5 text-white/45">Each project is presented independently — gameplay, technical systems, and the way I tested them.</span></div>
        </div>
      </section>

      {projects.map((project, index) => <ProjectSection key={project.id} project={project} index={index} />)}

      <section id="qa" className="section">
        <div className="container">
          <div className="section-heading"><div><div className="eyebrow mb-4">Quality / debugging</div><h2 className="display">QA</h2></div><span className="max-w-xs text-right text-xs leading-5 text-white/45">{content.qaBody}</span></div>
          <div className="qa-grid">
            <motion.div whileHover={{ y:-4 }} className="qa-panel"><div className="eyebrow mb-5">How I work</div><p className="m-0 max-w-2xl text-2xl leading-tight text-white/85 md:text-4xl">{content.qaTitle}</p><div className="mt-10 flex flex-wrap gap-2">{['Functional Testing','Gameplay Testing','Bug Reproduction','Regression Testing','Debugging','Test Cases','Bug Reporting'].map(x=><span className="tag" key={x}>{x}</span>)}</div></motion.div>
            <div className="qa-panel">
              <div className="eyebrow mb-4">Real defects investigated</div>
              {bugs.map(([n,t,d])=><div className="bug-row" key={n}><div className="bug-num">{n}</div><div><h3 className="m-0 text-sm font-semibold">{t}</h3><p className="mt-2 mb-0 text-xs leading-5 text-white/50">{d}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section border-t border-white/10">
        <div className="container"><div className="section-heading"><div><div className="eyebrow mb-4">About me</div><h2 className="display">Nimish</h2></div></div>
          <div className="about-grid"><p className="about-copy">{content.aboutTitle}</p><div><p className="m-0 text-sm leading-7 text-white/60 md:text-base">{content.aboutBody}</p><div className="skill-cloud mt-10">{['C#','C++ / DSA','Unity','Gameplay Systems','Enemy AI','A* Pathfinding','Raycasting','Animation','State Machines','Functional Testing','Debugging','Git / GitHub'].map(s=><span key={s}>{s}</span>)}</div></div></div>
        </div>
      </section>

      <section id="contact" className="contact section"><div className="container"><div className="eyebrow mb-5">Get in touch</div><div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end"><h2 className="display max-w-5xl text-[clamp(58px,9vw,132px)] uppercase leading-[.82]">Let's build<br/>something.</h2><div className="max-w-sm"><p className="text-sm leading-6 text-white/55">{content.contactBody}</p><div className="mt-8 flex flex-wrap gap-3"><a className="contact-btn inline-flex items-center gap-2" href="mailto:nimishnirmal26@gmail.com"><Mail size={15}/> Email</a><a className="contact-btn inline-flex items-center gap-2" href="https://www.linkedin.com/in/nimish-nirmal-608509273" target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn</a><a className="contact-btn inline-flex items-center gap-2" href="https://github.com/Nimish2110" target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a><a className="contact-btn inline-flex items-center gap-2" href="/Nimish-Nirmal-Resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a></div></div></div></div></section>
    </main>
    <footer className="border-t border-white/10 py-7"><div className="container flex flex-col gap-2 text-[10px] uppercase tracking-[.16em] text-white/35 md:flex-row md:justify-between"><span>© {new Date().getFullYear()} Nimish Nirmal</span></div></footer>
  </>;
}
