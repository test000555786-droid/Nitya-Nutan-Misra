import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-4" style={{ paddingTop: 'var(--navbar-height)' }}>
      <div className="max-w-md">
        <div className="w-24 h-24 rounded-3xl bg-primary-50 flex items-center justify-center mx-auto mb-6">
          <span className="font-display text-primary-600 text-4xl font-bold">404</span>
        </div>
        <h1 className="font-display text-3xl font-bold text-neutral-900 mb-3">Page Not Found</h1>
        <p className="font-body text-neutral-500 text-base mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary justify-center">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary justify-center">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
