import Image from 'next/image';
import { RiCheckboxCircleLine } from 'react-icons/ri';
import { useScreen } from '../../../../lib/hooks/useScreen';
import { Title } from '../../../shared/title/title';

export function HomeIntroduce() {
  const LIST = ['Minh bạch', 'Nhanh chóng', 'Hiệu quả'];
  const screenLg = useScreen("lg");

  return (
    <div
      data-aos='fade-up'
      className='relative h-[36rem] lg:h-[42.5rem] 2xl:h-[46rem]'
    >
      {screenLg && (
        <Image
          alt='bg-info'
          src='/assets/imgs/bg-info.png'
          className='absolute'
          priority
          layout='fill'
        />
      )}
      <div className='relative flex flex-col items-center justify-between gap-4 pt-10 pb-2 main-container lg:flex-row lg:gap-16 lg:pt-16 lg:pb-20 2xl:gap-28'>
        <div className='relative mx-auto h-[17.5rem] w-[17.5rem] lg:mx-none lg:h-[32rem] lg:w-[32rem] 2xl:h-[36rem] 2xl:w-[36rem]'>
          <Image
            alt='Giới thiệu chung về Green Check'
            src='/assets/imgs/home-introduce-a.png'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='flex-1'>
          <Title text='Giới thiệu' className='!text-left' />
          <div className='py-4 leading-relaxed text-neutral-700 lg:py-8 lg:text-xl'>
            Green Check là giải pháp truy xuất nguồn gốc giúp theo dõi thông tin
            hoạt động trên từng công đoạn trong quá trình sản xuất, thu mua, chế
            biến và phân phối của một đơn vị sản phẩm trước khi đến tay người
            tiêu dùng cuối.
          </div>
          <div className='flex items-center gap-2.5 lg:gap-6 2xl:gap-16'>
            {LIST.map((item, index) => (
              <div key={index} className='flex items-center gap-1.5 lg:gap-3'>
                <i className='text-2xl text-primary'>
                  <RiCheckboxCircleLine />
                </i>
                <div className='text-neutral-700 lg:text-xl'>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
