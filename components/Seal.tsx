type SealProps = {
  ring: string;
  centre: [string, string];
  size?: number;
  className?: string;
  delay?: number;
  stamp?: boolean;
};

/** The issuer's rubber stamp: a round navy seal with its words on the ring. */
export default function Seal({ ring, centre, size = 168, className = "", delay = 250, stamp = true }: SealProps) {
  const id = `ring-${ring.replace(/[^a-z0-9]/gi, "").slice(0, 16).toLowerCase()}`;
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={`seal ${className}`}
      data-stamp={stamp ? "" : undefined}
      style={{ ["--d" as string]: `${delay}ms` }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <path id={id} d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
      </defs>
      <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="5" />
      <circle cx="100" cy="100" r="58" fill="none" stroke="currentColor" strokeWidth="3" />
      <text fill="currentColor" fontSize="17.5" fontWeight="500" letterSpacing="2.2">
        <textPath href={`#${id}`} startOffset="0" textLength="458" lengthAdjust="spacing">
          {ring}
        </textPath>
      </text>
      <text x="100" y="96" textAnchor="middle" fill="currentColor" fontSize="21" fontWeight="500">
        {centre[0]}
      </text>
      <text x="100" y="121" textAnchor="middle" fill="currentColor" fontSize="21" fontWeight="500">
        {centre[1]}
      </text>
    </svg>
  );
}
