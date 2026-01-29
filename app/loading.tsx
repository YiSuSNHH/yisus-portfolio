export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white dark:from-navy-900 dark:to-navy-800">
      <div className="flex flex-col items-center gap-4">
        {/* Simple loading spinner matching brand colors */}
        <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin"></div>
        <p className="text-navy-600 dark:text-navy-300 text-sm">Loading...</p>
      </div>
    </div>
  );
}