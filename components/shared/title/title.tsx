interface TitleProps {
  text: string;
  className?: string;
}

export function Title({ text = '', className = '' }: TitleProps) {
  return (
    <div
      className={`whitespace-pre-wrap text-center font-montserrat text-2xl font-bold leading-[2rem] text-primary-700 lg:text-[3rem] lg:leading-[4rem] lg:text-primary-900 ${className}`}
    >
      {text}
    </div>
  );
}
