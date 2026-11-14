interface SparklineProps {
  data: number[];
  color?: string;
  gradientId: string;
}
export function Sparkline({
  data,
  color = "#FFC329",
  gradientId,
}: SparklineProps) {
  const width = 160;
  const height = 65;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;

  const coords = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / range) * (height - 8);
    return { x, y };
  });

  const polylinePoints = coords.map((pt) => `${pt.x},${pt.y}`).join(" ");

  const areaPath =
    `M ${coords[0].x} ${coords[0].y} ` +
    coords
      .slice(1)
      .map((pt) => `L ${pt.x} ${pt.y}`)
      .join(" ") +
    ` L ${width} ${height} L ${coords[0].x} ${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-full"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradientId})`} />
      <polyline
        points={polylinePoints}
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
