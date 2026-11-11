import bgOrbsImg from "../../../assets/bg-orbs.webp";

export function FeaturesBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none before:content-[''] before:absolute before:inset-0 before:z-10 before:[background-image:linear-gradient(#ffffff09_1px,transparent_1px),linear-gradient(90deg,#ffffff09_1px,transparent_1px)] before:[background-size:56px_56px] before:[-webkit-mask-image:radial-gradient(85%_70%_at_50%_20%,#000,transparent)] before:[mask-image:radial-gradient(85%_70%_at_50%_20%,#000,transparent)]"
    >
      <img
        src={bgOrbsImg}
        alt=""
        width={480}
        height={720}
        decoding="async"
        className="w-full h-full object-cover opacity-95"
      />
    </div>
  );
}
