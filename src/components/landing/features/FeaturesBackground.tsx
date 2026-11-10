export function FeaturesBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none before:content-[''] before:absolute before:inset-0 before:[background-image:linear-gradient(#ffffff09_1px,transparent_1px),linear-gradient(90deg,#ffffff09_1px,transparent_1px)] before:[background-size:56px_56px] before:[-webkit-mask-image:radial-gradient(75%_65%_at_50%_25%,#000,transparent)] before:[mask-image:radial-gradient(75%_65%_at_50%_25%,#000,transparent)]"
    >
      {/* Radial Gradient Orb 1: Top-Left (480x480) */}
      <span
        style={{
          width: 480,
          height: 480,
          left: -120,
          top: -60,
        }}
        className="absolute rounded-full blur-[70px] bg-[radial-gradient(circle,#f7b92c4d,transparent_70%)] animate-float-orb"
      />

      {/* Radial Gradient Orb 2: Right-Center (520x520, 6s delay) */}
      <span
        style={{
          width: 520,
          height: 520,
          right: -160,
          top: "30%",
          animationDelay: "-6s",
        }}
        className="absolute rounded-full blur-[70px] bg-[radial-gradient(circle,#f7b92c4d,transparent_70%)] animate-float-orb"
      />

      {/* Radial Gradient Orb 3: Bottom-Left/Center (420x420, 11s delay) */}
      <span
        style={{
          width: 420,
          height: 420,
          left: "25%",
          bottom: -160,
          animationDelay: "-11s",
        }}
        className="absolute rounded-full blur-[70px] bg-[radial-gradient(circle,#f7b92c4d,transparent_70%)] animate-float-orb"
      />
    </div>
  );
}

