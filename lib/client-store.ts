import { Project, SiteContent, seedContent, seedProjects } from './data';

const PROJECTS_KEY = 'nimish-portfolio-projects-v1';
const CONTENT_KEY = 'nimish-portfolio-content-v1';

export function loadProjects(): Project[] {
  if (typeof window === 'undefined') return seedProjects;
  try {
    const raw = localStorage.getItem(PROJECTS_KEY);
    return raw ? JSON.parse(raw) : seedProjects;
  } catch { return seedProjects; }
}

export function saveProjects(projects: Project[]) {
  localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
  window.dispatchEvent(new Event('portfolio-updated'));
}

export function loadContent(): SiteContent {
  if (typeof window === 'undefined') return seedContent;
  try {
    const raw = localStorage.getItem(CONTENT_KEY);
    return raw ? JSON.parse(raw) : seedContent;
  } catch { return seedContent; }
}

export function saveContent(content: SiteContent) {
  localStorage.setItem(CONTENT_KEY, JSON.stringify(content));
  window.dispatchEvent(new Event('portfolio-updated'));
}

export function resetPortfolio() {
  localStorage.removeItem(PROJECTS_KEY);
  localStorage.removeItem(CONTENT_KEY);
  window.dispatchEvent(new Event('portfolio-updated'));
}
