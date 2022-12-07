import Image from 'next/image';
import { Title } from '../../../shared/title/title';

export function AboutUsHero() {
  return (
    <div className='mt-4 bg-[#FAFBFB] lg:mt-0'>
      <div
        data-aos='fade-up'
        data-aos-delay={100}
        className='pb-5 main-container lg:pt-16 lg:pb-20'
      >
        <div className='flex flex-col justify-between gap-3 md:flex-row lg:gap-10 2xl:gap-12'>
          <div className='flex-1 w-auto ml-auto text-center md:text-left lg:mt-12 xl:ml-0'>
            <Title text='Giới thiệu' className='md:text-left' />
            <div className='mt-4 text-base !leading-[1.7] lg:text-xl'>
              Với mong muốn cùng cộng đồng doanh nghiệp, người sản xuất, người
              tiêu dùng nâng cao hiệu năng trong việc tổ chức quản lý sản xuất,
              phân phối và tiêu thụ sản phẩm nói chung, đặc biệt là các sản phẩm
              nông nghiệp.
            </div>
            <div className='mt-4 text-base !leading-[1.7] lg:mt-8 lg:text-xl'>
              Sau nhiều năm tìm hiểu, học hỏi, nghiên cứu và phát triển,{' '}
              <b>Công ty cổ phần Công nghệ Green Agri</b> đã xây dựng và triển
              khai các giải pháp công nghệ đến các doanh nghiệp, hợp tác xã, tổ
              hợp tác, nông hộ... nhằm số hóa các công việc trong quá trình sản
              xuất, thu hoạch, thu mua, chế biến và tiêu thụ sản phẩm thông qua
              2 nền tảng công nghệ là <b>Green Check</b> và <b>Green Agri</b>.
            </div>
            <div className='flex items-center justify-center mt-4 lg:mt-4 lg:justify-start lg:gap-8'>
              <div className='relative -ml-[0.625rem] h-[2.5rem] w-[10rem] lg:h-[3.6rem] lg:w-[13rem]'>
                <Image
                  src='/assets/imgs/logo.png'
                  alt='green-check-logo'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <div className='relative h-[2rem] w-32 lg:h-[2.75rem] lg:w-44'>
                <Image
                  src='/assets/imgs/green-agri-logo.png'
                  alt='green-agri-logo'
                  layout='fill'
                  objectFit='contain'
                />
              </div>
            </div>
          </div>
          <div className='relative mx-auto h-[29rem] w-[22rem] shrink-0 grow-0 md:h-[26rem] md:w-[20rem] 2xl:h-[36.25rem] 2xl:w-[27.5rem]'>
            <Image
              src='/assets/imgs/about-us-hero-1.png'
              alt='Giới thiệu về Green Check'
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
