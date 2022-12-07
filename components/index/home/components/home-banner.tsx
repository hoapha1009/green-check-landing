import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';
import { useScreen } from '../../../../lib/hooks/useScreen';

const { publicRuntimeConfig } = getConfig();

export function HomeBanner() {
  const screenLg = useScreen("lg");

  return (
    <div data-aos='fade-up' className='main-container'>
      <div className='relative h-[21.5rem] overflow-hidden rounded-xl lg:h-[36rem] 2xl:h-[38rem]'>
        <Image
          alt='banner nông nghiệp xanh & sống an lành'
          src={screenLg ? '/assets/imgs/home-bannerr.png' : '/assets/imgs/home-banner-mobi.png'}
          className='absolute'
          priority
          layout='fill'
          objectFit='cover'
        />
        <div className='relative px-3 pt-20 text-white lg:px-24 lg:pt-24 2xl:pt-[36]'>
          <h1 className='font-montserrat text-2xl font-bold uppercase leading-tight lg:text-[4rem]'>
            nông nghiệp xanh <br /> sống an lành
          </h1>
          <div className='py-2.5 font-medium leading-7 lg:py-5 lg:text-2xl lg:leading-9'>
            Giải pháp thuộc hệ sinh thái ứng dụng <br /> QR Code - Green Check
          </div>
          <div className='flex items-center gap-1 pt-1 pb-1 lg:gap-4 lg:pt-4'>
            <div className='font-medium text-neutral-400 hover:text-white'>
              <Link href={publicRuntimeConfig?.url_google_play || '/'}>
                <a
                  target='_blank'
                  className='relative block h-[2.375rem] w-[7.5rem] lg:h-[3.5rem] lg:w-[11.75rem]'
                >
                  <Image
                    src='/assets/imgs/google-play.png'
                    alt='google-play'
                    objectFit='contain'
                    title='google-play'
                    layout='fill'
                  />
                </a>
              </Link>
            </div>
            <div className='font-medium text-neutral-400 hover:text-white'>
              <Link href={publicRuntimeConfig?.url_app_store || '/'}>
                <a
                  target='_blank'
                  className='relative block h-[2.375rem] w-[7.5rem] lg:h-[3.5rem] lg:w-[11.75rem]'
                >
                  <Image
                    src='/assets/imgs/app-store.png'
                    alt='app-store'
                    objectFit='contain'
                    title='app-store'
                    layout='fill'
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className='lg:text-lg'>
            Tải về và trải nghiệm cùng Green Check
          </div>
        </div>
      </div>
    </div>
  );
}
