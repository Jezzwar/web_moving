export function TrustBadge({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
        <Icon size={12} className="text-green-600" />
      </div>
      <span className="text-sm font-medium text-white">{label}</span>
    </div>
  )
}
