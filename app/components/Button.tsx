export default function Button({ className = '', children }: { className?: string; children?: React.ReactNode }) {
  return (
    <button
      className={`cursor-pointer rounded-full px-6 py-2 font-bold leading-7 lg:px-8 lg:py-3 lg:text-lg ${className}`}
    >
      {children}
    </button>
  )
}
