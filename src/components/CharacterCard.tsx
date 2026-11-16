import PlaceholderImage from "./PlaceholderImage";

type CharacterCardProps = {
  name: string;
  production: string;
  quote: string;
  src: string;
  alt: string;
  initials: string;
};

export default function CharacterCard({
  name,
  production,
  quote,
  src,
  alt,
  initials,
}: CharacterCardProps) {
  return (
    <div className="flex flex-col items-center text-center bg-claro rounded-xl p-6 h-full">
      <PlaceholderImage
        src={src}
        alt={alt}
        initials={initials}
        width={128}
        height={128}
        rounded="full"
        className="w-32 h-32 mb-4 shrink-0"
      />
      <h3 className="font-serif font-semibold text-lg text-marino">{name}</h3>
      <p className="text-xs uppercase tracking-wide text-acento font-semibold mb-2">
        {production}
      </p>
      <p className="text-sm text-marino/80 leading-relaxed">{quote}</p>
    </div>
  );
}
