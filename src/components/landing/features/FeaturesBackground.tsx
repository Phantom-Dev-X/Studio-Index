export function FeaturesBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 md:fixed md:inset-0 z-0 overflow-hidden pointer-events-none md:[transform:translateZ(0)] before:content-[''] before:absolute before:inset-0 before:[background-image:linear-gradient(#ffffff09_1px,transparent_1px),linear-gradient(90deg,#ffffff09_1px,transparent_1px)] before:[background-size:56px_56px] before:[-webkit-mask-image:radial-gradient(85%_70%_at_50%_20%,#000,transparent)] before:[mask-image:radial-gradient(85%_70%_at_50%_20%,#000,transparent)]"
    >
      {/* Radial Gradient Orb 1: Top-Left */}
      <span
        style={{
          width: 580,
          height: 580,
          left: -170,
          top: -110,
        }}
        className="block absolute rounded-full bg-[radial-gradient(circle,rgba(247,185,44,0.22)_0%,rgba(247,185,44,0.07)_42%,transparent_70%)] animate-float-orb"
      />

      {/* Radial Gradient Orb 2: Right-Center */}
      <span
        style={{
          width: 620,
          height: 620,
          right: -210,
          top: "26%",
          animationDelay: "-6s",
        }}
        className="block absolute rounded-full bg-[radial-gradient(circle,rgba(247,185,44,0.2)_0%,rgba(247,185,44,0.06)_42%,transparent_70%)] animate-float-orb"
      />

      {/* Radial Gradient Orb 3: Bottom-Left/Center */}
      <span
        style={{
          width: 520,
          height: 520,
          left: "20%",
          bottom: -210,
          animationDelay: "-11s",
        }}
        className="block absolute rounded-full bg-[radial-gradient(circle,rgba(247,185,44,0.18)_0%,rgba(247,185,44,0.05)_42%,transparent_70%)] animate-float-orb"
      />
    </div>
  );
}
