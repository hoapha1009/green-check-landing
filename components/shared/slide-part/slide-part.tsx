import { LogoSlider } from '../logo-slider';
import { Title } from '../title/title';

interface SlidePartProps {
  className?: string;
  title: string;
  type?: 'partner' | 'customer';
}

export function SlidePart({
  title = '',
  className = '',
  type = 'partner',
}: SlidePartProps) {
  return (
    <div
      className={`py-8 lg:pt-16 lg:pb-20 ${className}`}
      data-aos='fade-up'
      data-aos-delay={600}
    >
      <div className='main-container'>
        <Title text={title} />
        <div className='p-12 mt-5 bg-white border rounded-md shadow-md border-neutral-100 lg:mt-8'>
          <LogoSlider type={type} />
        </div>
      </div>
    </div>
  );
}
