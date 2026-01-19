import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        <h1 className="font-serif text-6xl font-bold text-harvard-crimson mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="px-6 py-3 bg-harvard-crimson text-white rounded-lg hover:bg-harvard-dark transition-colors font-medium inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
