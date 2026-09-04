'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const links = [
  ['INVERTED', '#project-inverted'],
  ['CRIMSON TACTICS', '#project-crimson-tactics'],
  ['BEYOND THE UNIFORM', '#project-beyond-uniform'],
  ['QA / TESTING', '#qa'],
  ['ABOUT ME', '#about'],
  ['CONTACT', '#contact'],
  ['RESUME', '/Nimish-Nirmal-Resume.pdf'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0b0a0f]/75 backdrop-blur-xl">
      <div className="container flex h-[72px] items-center justify-between">
        <a href="#top" className="display text-xl tracking-tight">NIMISH NIRMAL</a>
        <button aria-label="Open navigation" onClick={() => setOpen(!open)} className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-2 text-[11px] uppercase tracking-[.18em] lg:hidden">
          {open ? <X size={16}/> : <Menu size={16}/>} Menu
        </button>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => <a className="nav-link text-[10px] uppercase tracking-[.17em] text-white/75" key={href} href={href} target={label === 'RESUME' ? '_blank' : undefined} rel={label === 'RESUME' ? 'noreferrer' : undefined}>{label}</a>)}
        </nav>
      </div>
      {open && <nav className="border-t border-white/10 bg-[#0b0a0f] px-6 py-5 lg:hidden">
        <div className="container grid gap-5">
          {links.map(([label, href]) => <a onClick={() => setOpen(false)} className="text-xs uppercase tracking-[.17em] text-white/80" key={href} href={href} target={label === 'RESUME' ? '_blank' : undefined} rel={label === 'RESUME' ? 'noreferrer' : undefined}>{label}</a>)}
        </div>
      </nav>}
    </header>
  );
}
