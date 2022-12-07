interface SubtitleProps {
  className?: string;
  text: string;
}

export function Subtitle({ className = '', text }: SubtitleProps) {
  return (
    <div
      className={`mb-8 mt-1 text-center text-neutral-600 lg:mt-3 lg:text-xl lg:leading-8 ${className}`}
    >
      {text}
    </div>
  );
}
