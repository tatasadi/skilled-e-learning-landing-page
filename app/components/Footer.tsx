export default function Footer({ className = '' }: { className: string }) {
  return (
    <footer className={`mt-16 text-center text-sm ${className}`}>
      Challenge by{' '}
      <a href="https://www.frontendmentor.io" target="_blank" className="footer-link" rel="noreferrer">
        Frontend Mentor
      </a>
      <br />
      Coded by{' '}
      <a
        className="footer-link"
        href="https://www.linkedin.com/in/ehsan-tatasadi-2161a433"
        target="_blank"
        rel="noreferrer"
      >
        Ehsan Tatasadi
      </a>
      <br />
      <a
        className="footer-link"
        href="https://github.com/tatasadi/skilled-e-learning-landing-page"
        target="_blank"
        rel="noreferrer"
      >
        Source Code
      </a>
    </footer>
  )
}
