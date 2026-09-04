'use client';

import Image from 'next/image';
import { ArrowDownRight, ExternalLink, Github, Play } from 'lucide-react';
import { motion } from 'motion/react';
import type { Project } from '@/lib/data';

export default function ProjectSection({ project, index }: { project: Project; index: number }) {
  return (
    <section id={`project-${project.id}`} className="section !pb-8">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10% 0px' }} transition={{ duration: .7 }}>
          <div className="mb-4 flex items-center justify-between">
            <span className="eyebrow">0{index + 1} / PROJECT</span>
            <span className="text-[11px] text-white/45">{project.year}</span>
          </div>
          <motion.div whileHover={{ y: -5 }} transition={{ duration: .35 }} className="project-card group">
            <Image src={project.image} alt={project.title} fill priority={index === 0} sizes="(max-width: 900px) 100vw, 1240px" className="object-cover" />
            <div className="project-content">
              <div className="project-index">{project.role}</div>
              <h2 className="display project-title">{project.title}</h2>
              <p className="max-w-2xl text-sm leading-6 text-white/75 md:text-base">{project.description}</p>
              <div className="project-meta">{project.technologies.map(t => <span className="tag" key={t}>{t}</span>)}</div>
              <div className="flex flex-wrap items-center gap-5">
                {project.build && <a className="project-arrow" href={project.build} target="_blank" rel="noreferrer"><Play size={14}/> Play build <ExternalLink size={13}/></a>}
                {project.video && <a className="project-arrow" href={project.video} target="_blank" rel="noreferrer"><Play size={14}/> Gameplay <ExternalLink size={13}/></a>}
                {project.source && <a className="project-arrow" href={project.source} target="_blank" rel="noreferrer"><Github size={14}/> Source <ExternalLink size={13}/></a>}
                <a className="project-arrow" href={`#details-${project.id}`}>Explore <ArrowDownRight size={15}/></a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div id={`details-${project.id}`} className="grid gap-8 py-16 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="eyebrow mb-4">Technical snapshot</div>
            <h3 className="display text-5xl uppercase leading-[.9] md:text-7xl">{project.subtitle}</h3>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div><div className="eyebrow mb-3">Systems</div><div className="flex flex-wrap gap-2">{project.technologies.map(t => <span className="tag" key={t}>{t}</span>)}</div></div>
            <div><div className="eyebrow mb-3">Role</div><p className="m-0 text-sm leading-6 text-white/65">{project.role}. Focused on implementation, iteration, testing, and debugging of the listed gameplay systems.</p></div>
          </div>
        </div>

        {project.gallery.length > 0 && <div className="grid gap-3 md:grid-cols-2">
          {project.gallery.map((src, i) => <motion.div key={src} whileHover={{ scale: .985 }} className={`relative aspect-[16/9] overflow-hidden border border-white/10 ${i === 0 ? 'md:col-span-2' : ''}`}><Image src={src} alt={`${project.title} screenshot ${i+1}`} fill sizes="(max-width: 900px) 100vw, 60vw" className="object-cover" /></motion.div>)}
        </div>}
      </div>
    </section>
  );
}
