import { SlidePart } from '../../shared/slide-part/slide-part';
import { AboutUsExpert } from './components/about-us-expert';
import { AboutUsHero } from './components/about-us-hero';
import { AboutUsInfo } from './components/about-us-info';

export function AboutUsPage() {
  return (
    <div className='overflow-hidden'>
      <AboutUsHero />
      <AboutUsInfo />
      <AboutUsExpert />
      <div className='relative'>
        <div className='absolute right-0 -top-[2rem] z-10 -mr-4 hidden h-[7rem] w-[7rem] rounded-full bg-primary lg:block' />
        <SlidePart
          title='Khách hàng GAT'
          className='bg-secondary-50'
          type='customer'
        />
      </div>
      <div className='relative'>
        <div className='absolute -left-[6.5rem] -top-[3rem] z-10 hidden h-[11rem] w-[11rem] rounded-full bg-secondary lg:block' />
        <SlidePart title='Đối tác GAT' />
      </div>
    </div>
  );
}
