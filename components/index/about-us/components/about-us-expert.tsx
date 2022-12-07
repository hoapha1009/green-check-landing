import { Subtitle } from '../../../shared/subtitle/subtitle';
import Image from 'next/image';
import { Title } from '../../../shared/title/title';
import { Swiper, SwiperSlide } from 'swiper/react';

export function AboutUsExpert() {
  return (
    <div data-aos='fade-up' className='py-5 mx-auto main-container lg:py-16'>
      <Title text='Đội ngũ lãnh đạo' />
      <Subtitle
        text='Với đội ngũ lãnh đạo là những chuyên gia đầu ngành và giàu kinh nghiệm trong lĩnh vực nông nghiệp và công nghệ thông tin.'
        className='w-full mx-auto mt-4 mb-4lg:mb-10 lg:w-2/3 2xl:w-full'
      />
      <div className='hidden lg:block'>
        <div className='flex flex-col justify-center gap-6 mb-4 lg:mb-8 lg:flex-row lg:gap-0'>
          {MOCK_DATA_1.map((item, index) => (
            <ExpertCard key={index} expert={item} delay={index} />
          ))}
        </div>
      </div>
      <div className='lg:hidden'>
        <Swiper
          slidesPerView={1.4}
          spaceBetween={15}
          grabCursor
          className='relative w-full pb-4 mx-auto mt-5 lg:pb-14'
          loop={true}
          freeMode={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {MOCK_DATA_1.map((item, index) => (
            <SwiperSlide key={index} className='self-stretch mx-auto'>
              <ExpertCard key={index} expert={item} delay={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function ExpertCard({ expert, delay }) {
  return (
    <div
      className='w-[14rem] text-center lg:w-[18rem] 2xl:w-[18.5rem]'
      data-aos='fade-up'
      data-aos-delay={(delay + 1) * 400}
    >
      <div className='relative mx-auto h-[12rem] w-[12rem] lg:h-[14rem] lg:w-[14rem] 2xl:h-[15rem] 2xl:w-[15rem]'>
        <Image
          src={expert.url}
          alt='avatar'
          layout='fill'
          objectFit='contain'
          className='border rounded-full border-gray-50'
        />
      </div>

      <div className='mt-5 text-sm font-semibold uppercase font-montserrat md:text-base lg:text-xl'>
        {expert.name}
      </div>
      <div className='font-primary-list relative mt-[3px] text-sm text-primary lg:text-base'>
        {expert.position}
      </div>
    </div>
  );
}

const MOCK_DATA_1 = [
  {
    url: '/assets/imgs/expert-6.png',
    name: 'Bùi văn thắng',
    position: 'Chủ tịch Hội đồng Quản trị',
  },
  {
    url: '/assets/imgs/expert-1.png',
    name: 'Phạm Thanh Thọ',
    position: 'Phó Chủ tịch Hội đồng Quản trị',
  },
  {
    url: '/assets/imgs/expert-2.png',
    name: 'Nguyễn văn thanh bình',
    position: 'Tổng giám đốc',
  },
  {
    url: '/assets/imgs/expert-3.png',
    name: 'Minh đức Uy',
    position: 'Phó Tổng giám đốc',
  },
];
