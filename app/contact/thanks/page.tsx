export default function ContactThanks() {
  // On mount, read ?theme and apply to html to match submitter theme
  if (typeof window !== 'undefined') {
    const params = new URLSearchParams(window.location.search)
    const theme = params.get('theme')
    const root = document.documentElement
    if (theme === 'dark') { root.classList.add('dark'); root.classList.remove('light') }
    if (theme === 'light') { root.classList.add('light'); root.classList.remove('dark') }
  }
  return (
    <main className="container-xl py-24">
      <div className="rounded-xl p-8 border border-white/10 bg-white/5 text-center">
        <h1 className="text-3xl font-semibold">Thank you!</h1>
        <p className="mt-3 text-sm text-[var(--text)]">Your message has been sent successfully.</p>
        <a href="#top" className="mt-6 inline-block px-4 py-2 rounded-md bg-accent text-white">Back to Home</a>
      </div>
    </main>
  )
}


