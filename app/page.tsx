import Link from 'next/link'
import Section from '@/components/Section'
import Navbar from '@/components/Navbar'
import { profile, projects, plannedProjects, education, certificates } from '@/content/resume'

import Image from 'next/image'
import avatar from '../images/profilepic2.png'

function Header() {
  return (
    <header id="top" className="container-xl pt-10 sm:pt-14 pb-8">
      <div className="rounded-xl p-5 border border-white/10 bg-white/5 transition duration-300 hover:shadow-xl hover:shadow-green-500/50 p-8 sm:p-10">
        <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
        <div className="relative">
          <div className="hidden min-[600px]:block">
            <div className="flex items-center justify-between gap-4">
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                {profile.name}
              </h1>
              <div className="relative h-56 w-56 sm:h-56 sm:w-56 rounded-full overflow-hidden border border-white/20">
                <Image src={avatar} alt="Profile avatar" fill className="object-cover" />
              </div>
            </div>
            <p className="text-accent mt-3 text-lg font-semibold">{profile.role}</p>
          </div>
          
          <div className="block min-[600px]:hidden">
            <div className="flex flex-col items-center gap-4">
              <div className="relative h-56 w-56 rounded-full overflow-hidden border border-white/20">
                <Image src={avatar} alt="Profile avatar" fill className="object-cover" />
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-extrabold tracking-tight leading-tight">
                  {profile.name}
                </h1>
                <p className="text-accent mt-3 text-lg font-semibold">{profile.role}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="px-4 py-2 rounded-md bg-accent text-white hover:opacity-95"
              aria-label="Send Email"
            >
              Email
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20"
              aria-label="GitHub Profile"
            >
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </a>
            <a
              href="/api/download/cv"
              className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20"
              aria-label="Download CV"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 grid sm:grid-cols-2 gap-4">
        <div className="rounded-xl p-5 border border-white/10 bg-white/5 transition duration-300 hover:shadow-xl hover:shadow-green-500/50">
          <dl className="grid grid-cols-[100px_1fr] gap-y-2 text-sm">
            <dt className="text-[var(--text)]">Phone</dt>
            <dd><a href={`tel:${profile.phone}`} className="hover:underline">{profile.phone}</a></dd>
            <dt className="text-[var(--text)]">Email</dt>
            <dd><a href={`mailto:${profile.email}`} className="hover:underline">{profile.email}</a></dd>
            <dt className="text-[var(--text)]">Address</dt>
            <dd>{profile.address}</dd>
          </dl>
        </div>
        <div className="rounded-xl p-5 border border-white/10 bg-white/5 transition duration-300 hover:shadow-xl hover:shadow-green-500/50 flex items-center justify-between">
          <div className="text-sm">
            <p className="text-[var(--text)]">Find me online</p>
            <p className="font-medium">LinkedIn · GitHub</p>
          </div>
          <div className="flex gap-3">
            <a className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20" href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20" href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <Header />

      <Section id="about" title="About">
        <div className="rounded-xl p-5 border border-white/10 bg-white/5 transition duration-300 hover:shadow-xl hover:shadow-green-500/50">
          <p className="text-sm text-[var(--text)]">
            I am a passionate and dedicated student of Computer Science and Engineering in specialization with Artificial Intelligence and Machine Learning at the Vellore Institute of Technology, Bhopal. I am a quick learner and I am always looking for new challenges and opportunities to grow. I am a team player and I am always looking for new ways to improve my skills.
          </p>
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid sm:grid-cols-2 gap-4">
          {projects.map((p) => {
            const card = (
              <article className="rounded-xl p-5 border border-white/10 bg-white/5 transition duration-300 hover:shadow-xl hover:shadow-green-500/50">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-[var(--text)]">{p.description}</p>
                {p.tags ? (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10">{t}</span>
                    ))}
                  </div>
                ) : null}
              </article>
            )
            return p.title === 'Bonanza draft1' ? (
              <a key={p.title} href="https://github.com/Goutham-Gourabathuni/Bonanza-draft1" target="_blank" rel="noopener noreferrer" className="block">
                {card}
              </a>
            ) : (
              <div key={p.title} className="contents">{card}</div>
            )
          })}
        </div>
      </Section>

      <Section id="planned" title="Projects to be made" subtitle="Ideas in the works">
        <div className="grid sm:grid-cols-3 gap-4">
          {plannedProjects.map((p) => (
            <article key={p.title} className="rounded-xl p-5 border border-white/10 bg-white/5 transition duration-300 hover:shadow-xl hover:shadow-green-500/50">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-[var(--text)]">{p.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            'Python',
            'JavaScript',
            'Artificial Intelligence',
            'Java',
            'Machine learning',
            'Web Development',
            'HTML',
            'Data Structure and Algorithms',
            'Computer Networks',
            'Database Management Systems',
            'CSS, Tailwind',
            'C/C++',
            'React Native',
            'React.js',
            'Next.js'
          ].map((skill) => (
            <div key={skill} className="rounded-xl p-5 border border-white/10 bg-white/5 transition duration-300 hover:shadow-xl hover:shadow-green-500/50 text-sm text-center">
              {skill}
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <div className="grid gap-4">
          {education.map((e) => (
            <article key={e.school} className="rounded-xl p-5 border border-white/10 bg-white/5 transition duration-300 hover:shadow-xl hover:shadow-green-500/50">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
                <h3 className="font-semibold text-lg">{e.school}</h3>
                <span className="text-sm text-[var(--text)]">{e.duration}</span>
              </div>
              <p className="mt-2 text-sm">{e.degree}</p>
              <ul className="mt-2 list-disc pl-5 text-sm text-[var(--text)]">
                {e.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="certificates" title="Certificates">
        <div className="rounded-xl p-5 border border-white/10 bg-white/5 transition duration-300 hover:shadow-xl hover:shadow-green-500/50">
          <ul className="grid gap-2 text-sm">
            {certificates.map((c) => {
              const isFullStack = /Full Stack Web Development/i.test(c)
              return (
                <li key={c} className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 rounded-full bg-accent" />
                  {isFullStack ? (
                    <a href="/api/certificates/fullstack" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {c}
                    </a>
                  ) : (
                    <span>{c}</span>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </Section>

      <footer id="contact" className="container-xl py-12">
        <section className="rounded-xl p-5 border border-white/10 bg-white/5 transition duration-300 hover:shadow-xl hover:shadow-green-500/50 sm:p-8">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-semibold">Get in Touch</h2>
            <p className="mt-2 text-sm text-[var(--text)]">
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </div>

          <form className="grid gap-4" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="bc870515-ec72-4735-8ae0-d7cbd1193673" />
            <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
            <input type="hidden" name="from_name" value="My Website" />
            <input type="hidden" name="redirect" value="/contact/thanks" />

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-sm">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/30"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-sm">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/30"
                  required
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone" className="text-sm">Phone</label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  placeholder="+1 (234) 56789"
                  className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <div className="flex flex-col gap-1 sm:col-span-2">
                <label htmlFor="message" className="text-sm">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  className="min-h-28 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-accent/60 focus:ring-2 focus:ring-accent/30"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 font-medium text-white hover:opacity-95"
            >
              Send Message
            </button>
          </form>
        </section>
        <p className="text-center text-xs text-[var(--text)] mt-6">© {new Date().getFullYear()} {profile.name}</p>
      </footer>
    </main>
  )
}


