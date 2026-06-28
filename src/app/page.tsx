"use client";

import { motion } from "framer-motion";

const selectedWork = [
  {
    title: "Lyxsa",
    type: "Cross-chain USDC app",
    href: "https://lyxsa.xyz",
    description:
      "A CCTP V2 cross-chain USDC interface for moving funds across EVM testnets with a clean landing page and app flow.",
  },
  {
    title: "Catatan Kripto",
    type: "Community notes",
    href: "#contact",
    description:
      "An Indonesian crypto community focused on practical updates, ecosystem context, and simple explanations for people who actually use the networks.",
  },
];

const ecosystems = [
  {
    name: "BEVM / GEB",
    role: "Bitcoin L2 ecosystem exploration, validator context, and operational tracking.",
  },
  {
    name: "Dill Network",
    role: "Node participation, network setup notes, and early infrastructure tracking.",
  },
];

const areas = [
  {
    title: "Research",
    description:
      "Following new networks, narratives, protocol mechanics, and early opportunities before they become obvious.",
  },
  {
    title: "Participation",
    description:
      "Running through testnets, DeFi flows, quests, feedback loops, and eligibility requirements with a practical lens.",
  },
  {
    title: "Infrastructure context",
    description:
      "Documenting setup flows, network requirements, validator programs, and operational lessons from early infrastructure work.",
  },
  {
    title: "Community notes",
    description:
      "Turning messy ecosystem updates into simple notes for people who actually use the networks.",
  },
];

const skills = [
  "Web3 research",
  "Testnet participation",
  "Airdrop research",
  "DeFi usage",
  "Node operations",
  "Validator context",
  "Ecosystem mapping",
  "Community notes",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const ease = [0.16, 1, 0.3, 1] as const;

export default function Home() {
  return (
    <main className="relative isolate min-h-[100dvh] overflow-x-hidden bg-[#09090b] text-white selection:bg-rose-600 selection:text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[8vw] top-[18vh] h-64 w-64 rounded-full bg-rose-600/10 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-white/[0.035] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.018),transparent)] bg-[size:100%_9px] opacity-40" />
      </div>

      <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.06] bg-[#09090b]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="text-sm font-medium tracking-tight text-white">
            Randi MT
          </a>
          <div className="flex items-center gap-6 text-sm text-zinc-500 sm:gap-8">
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            <a className="transition hover:text-white" href="#profile">
              Profile
            </a>
            <a className="transition hover:text-white" href="#skills">
              Skills
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative mx-auto flex min-h-[88dvh] max-w-6xl items-end px-5 pb-20 pt-32 sm:px-8 md:pb-28">
        <motion.div
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="w-full"
        >
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8, ease }}
            className="mb-8 text-sm font-medium text-rose-500"
          >
            Testnets, nodes, DeFi, and early network participation.
          </motion.p>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.9, ease }}
            className="max-w-5xl text-balance text-6xl font-medium leading-[0.92] tracking-[-0.065em] text-white sm:text-7xl md:text-8xl"
          >
            Learning across testnets, DeFi paths, and early network notes.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.85, ease }}
            className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl"
          >
            A personal portfolio for Randi MT, known as Lerand. No inflated title, just the record.
          </motion.p>
        </motion.div>
      </section>

      <section id="work" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8 md:py-36">
        <Reveal>
          <div className="max-w-4xl">
            <h2 className="text-balance text-4xl font-medium leading-tight tracking-[-0.04em] text-white md:text-6xl">
              Selected work first.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-500">
              Two things worth showing now. More can come later when the links and proof are cleaner.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 border-y border-white/10">
          {selectedWork.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08}>
              <a
                href={project.href}
                className="group grid gap-6 border-b border-white/10 py-10 transition last:border-b-0 hover:bg-white/[0.025] md:grid-cols-[0.55fr_0.95fr_0.2fr] md:items-center md:px-5"
              >
                <div>
                  <p className="text-sm font-medium text-rose-500">{project.type}</p>
                  <h3 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-white md:text-5xl">
                    {project.title}
                  </h3>
                </div>
                <p className="max-w-2xl text-base leading-8 text-zinc-500 md:text-lg">
                  {project.description}
                </p>
                <span className="text-right text-2xl text-zinc-700 transition group-hover:translate-x-1 group-hover:text-rose-500">
                  →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="profile" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8 md:py-36">
        <Reveal>
          <div className="max-w-4xl border-y border-white/10 py-14 md:py-20">
            <h2 className="text-balance text-4xl font-medium leading-tight tracking-[-0.04em] text-white md:text-6xl">
              A practical record, kept readable.
            </h2>
            <div className="mt-8 max-w-3xl space-y-6 text-lg leading-9 text-zinc-400">
              <p>
                Randi MT is the founder of Catatan Kripto, an Indonesian crypto community focused on education, ecosystem research, and hands-on participation.
              </p>
              <p>
                The work spans testnet participation, validator context, node operations, DeFi usage, airdrop research, and blockchain ecosystem mapping.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8 md:py-36">
        <Reveal>
          <h2 className="max-w-4xl text-balance text-4xl font-medium leading-tight tracking-[-0.04em] text-white md:text-6xl">
            Ecosystem log.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-white/10 border-y border-white/10">
          {ecosystems.map((ecosystem, index) => (
            <Reveal key={ecosystem.name} delay={index * 0.06}>
              <div className="grid gap-5 py-7 md:grid-cols-[0.45fr_1fr] md:items-start">
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-white">
                  {ecosystem.name}
                </h3>
                <p className="max-w-2xl text-base leading-8 text-zinc-500">
                  {ecosystem.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8 md:py-36">
        <Reveal>
          <h2 className="max-w-4xl text-balance text-4xl font-medium leading-tight tracking-[-0.04em] text-white md:text-6xl">
            Skills and areas.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {areas.map((area, index) => (
            <Reveal key={area.title} delay={index * 0.06}>
              <article className="border-t border-white/10 pt-7">
                <p className="text-sm font-medium text-zinc-600">0{index + 1}</p>
                <h3 className="mt-7 text-2xl font-medium tracking-[-0.02em] text-white">
                  {area.title}
                </h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-zinc-500">
                  {area.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.18}>
          <div className="mt-16 flex flex-wrap gap-3 border-t border-white/10 pt-8">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400 transition hover:border-rose-500/50 hover:text-white"
              >
                {skill}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="contact" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8 md:py-36">
        <Reveal>
          <div className="border-y border-white/10 py-16 md:py-24">
            <h2 className="max-w-4xl text-balance text-4xl font-medium leading-tight tracking-[-0.04em] text-white md:text-6xl">
              Want to talk crypto, testnets, or early ecosystems?
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-500">
              Links can be added later. For now, this page keeps the structure ready.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://x.com/ini_lerand"
                className="inline-flex h-12 items-center justify-center rounded-full bg-rose-600 px-6 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-rose-500 active:translate-y-0"
              >
                Connect on X
              </a>
              <a
                href="https://t.me/ini_lerand"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 px-6 text-sm font-medium text-zinc-300 transition hover:-translate-y-0.5 hover:border-white/20 hover:text-white active:translate-y-0"
              >
                Telegram
              </a>
            </div>
          </div>
        </Reveal>

        <footer className="mt-24 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 text-sm text-zinc-600 sm:flex-row">
          <p>© 2026 Randi MT. Built with Next.js.</p>
          <div className="flex gap-6">
            <a className="transition hover:text-white" href="#home">
              Top
            </a>
            <a className="transition hover:text-white" href="#work">
              Work
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
        </footer>
      </section>
    </main>
  );
}

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
      variants={fadeUp}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}
