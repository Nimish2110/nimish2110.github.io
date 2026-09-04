export type Project = {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  role: string;
  technologies: string[];
  description: string;
  image: string;
  gallery: string[];
  build?: string;
  source?: string;
  video?: string;
  visible: boolean;
};

export type SiteContent = {
  heroKicker: string;
  heroTitle: string;
  heroDescription: string;
  aboutTitle: string;
  aboutBody: string;
  qaTitle: string;
  qaBody: string;
  contactBody: string;
};

export const seedContent: SiteContent = {
  heroKicker: 'Game QA Tester / Game Development',
  heroTitle: 'I build.\nI test.\nI debug.',
  heroDescription: 'Computer Science undergraduate focused on game development and game quality. I build and test gameplay systems independently with C#, Unity, AI behaviours, pathfinding, animation systems, debugging, and functional testing.',
  aboutTitle: 'Game development with a QA mindset.',
  aboutBody: 'I like understanding how a system works, breaking it, finding why it failed, and making it reliable. My projects combine gameplay programming with structured testing and iterative debugging.',
  qaTitle: 'Testing is part of development.',
  qaBody: 'Across my projects I have worked with functional testing, gameplay testing, bug reproduction, regression testing, debugging, test cases, and gameplay validation.',
  contactBody: 'Open to game QA and game development opportunities. Let’s build something worth playing — and make sure it works.',
};

export const seedProjects: Project[] = [
  {
    id: 'inverted',
    title: 'Project INVERTED',
    subtitle: 'Third-Person Sci-Fi Action Game',
    year: '2026',
    role: 'Solo Developer',
    technologies: ['C#', 'Unity', 'Animator Controller', 'Raycasting', 'State Machine AI'],
    description: 'A third-person sci-fi action game built around melee combat, a Health / Plasma gameplay system, cinematic boss sequences, interactive objectives, and multi-phase enemy encounters.',
    image: '/projects/inverted/hero.png',
    gallery: ['/projects/inverted/01.png', '/projects/inverted/02.png', '/projects/inverted/03.png', '/projects/inverted/04.png', '/projects/inverted/05.png'],
    build: 'https://nimish2110.itch.io/project-inverted',
    visible: true,
  },
  {
    id: 'crimson-tactics',
    title: 'Crimson Tactics',
    subtitle: 'Grid-Based Tactical Game',
    year: '2026',
    role: 'Solo Developer',
    technologies: ['C#', 'Unity', 'A* Pathfinding', 'ScriptableObjects', 'DSA'],
    description: 'A 3D grid-based tactical prototype demonstrating procedural 10×10 grid generation, configurable obstacles, custom Unity Editor tooling, A* pathfinding, player movement, and interface-based enemy AI.',
    image: '/projects/crimson/hero.png',
    gallery: ['/projects/crimson/01.png', '/projects/crimson/02.png'],
    source: 'https://github.com/Nimish2110/CrimsonTacticsProgrammingTest',
    build: 'https://nimish2110.itch.io/crimson-tactics',
    visible: true,
  },
  {
    id: 'beyond-uniform',
    title: 'Beyond the Uniform',
    subtitle: 'First-Person Shooter',
    year: '2025–2026',
    role: 'Solo Developer',
    technologies: ['C#', 'Unity', 'Raycasting', 'NavMesh', 'Animator', 'Particle Systems'],
    description: 'A functional FPS built to explore 3D AAA-style gameplay systems, modular enemy AI, navigation, animation, combat, particle effects, and systematic testing and debugging.',
    image: '/projects/beyond/hero.jpg',
    gallery: [],
    video: 'https://lnkd.in/p/dwRZW6S4',
    visible: true,
  },
];
