type SectionDividerProps = {
  fill: string;
  flip?: boolean;
};

/**
 * A diagonal edge placed at the bottom of a section, painted in the color
 * of the section that follows. Breaks up the stacked-rectangle feel of a
 * plain one-page scroll.
 */
export default function SectionDivider({ fill, flip = false }: SectionDividerProps) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 h-10 sm:h-16 pointer-events-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 10"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        <polygon
          points={flip ? "0,10 100,10 0,0" : "0,10 100,10 100,0"}
          fill={fill}
        />
      </svg>
    </div>
  );
}
