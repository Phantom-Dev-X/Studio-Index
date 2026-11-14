interface ProgressRingProps {
  progress?: number;
  color?: string;
}

export function ProgressRing({
  progress = 0,
  color = "#22c55e",
}: ProgressRingProps) {
  const radius = 38;
  const strokeWidth = 6.5;
  const circumference = 2 * Math.PI * radius;
  const clampedProgress = Math.min(100, Math.max(0, progress));
  const strokeDashoffset =
    circumference - (clampedProgress / 100) * circumference;

  return (
    <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center shrink-0">
      <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 92 92">
        {/* Background Track */}
        <circle
          cx="46"
          cy="46"
          r={radius}
          stroke="#26221a"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        {/* Progress Arc */}
        {clampedProgress > 0 && (
          <circle
            cx="46"
            cy="46"
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-700 ease-out"
          />
        )}
      </svg>
      {/* Center Percentage */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {clampedProgress}%
        </span>
      </div>
    </div>
  );
}
