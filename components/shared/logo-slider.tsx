import Image from 'next/image';
import Link from 'next/link';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useScreen } from '../../lib/hooks/useScreen';

SwiperCore.use([Pagination, Autoplay, Navigation]);

export interface LogoSliderProps {
  url: string;
  href: string;
}

interface MobiLogoSliderProps {
  list: LogoSliderProps[];
}

interface Props {
  type?: 'partner' | 'customer';
}

export function LogoSlider({ type = 'partner', ...props }: Props) {
  const screenLg = useScreen("lg");

  return (
    <Swiper
      slidesPerView='auto'
      spaceBetween={56}
      grabCursor
      // className='pb-16'
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      // pagination={{
      //   bulletActiveClass: 'bg-primary',
      //   clickable: true,

      //   bulletClass:
      //     'inline-block w-3 h-3 bg-gray-500-400 rounded-full transition-all cursor-pointer mr-2 last:mr-0 hover:bg-primary transform translate-y-3',
      // }}
    >
      {screenLg && type === 'partner' && (
        <>
          {MOCK_DATA.map((item, index) => (
            <SwiperSlide key={index} className='w-40'>
              <Link href={item.href}>
                <a>
                  <div className='relative h-24'>
                    <Image
                      src={`/images/${item.url}`}
                      alt={item.url}
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </>
      )}
      {!screenLg && type === 'partner' && (
        <>
          {MOCK_DATA_MOBILE.map((item, index) => (
            <SwiperSlide key={index} className='grid grid-cols-2 gap-12'>
              {item.list.map((logo, index) => (
                <Link key={index} href={logo.href}>
                  <a className=''>
                    <div className='relative h-24'>
                      <Image
                        src={`/images/${logo.url}`}
                        alt={logo.url}
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>
                  </a>
                </Link>
              ))}
            </SwiperSlide>
          ))}
        </>
      )}
      {screenLg && type === 'customer' && (
        <>
          {CUSTOMER_MOCK_DATA.map((item, index) => (
            <SwiperSlide key={index} className='w-40'>
              <Link href={item.href}>
                <a>
                  <div className='relative h-24'>
                    <Image
                      src={`/images/${item.url}`}
                      alt={item.url}
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                </a>
              </Link>
            </SwiperSlide>
          ))}
        </>
      )}
      {!screenLg && type === 'customer' && (
        <>
          {CUSTOMER_MOCK_DATA_MOBILE.map((item, index) => (
            <SwiperSlide key={index} className='grid grid-cols-2 gap-12'>
              {item.list.map((logo, index) => (
                <Link key={index} href={logo.href}>
                  <a className=''>
                    <div className='relative h-24'>
                      <Image
                        src={`/images/${logo.url}`}
                        alt={logo.url}
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>
                  </a>
                </Link>
              ))}
            </SwiperSlide>
          ))}
        </>
      )}
    </Swiper>
  );
}

export const MOCK_DATA: LogoSliderProps[] = [
  {
    url: 'slide-som.png',
    href: '',
  },
  {
    url: 'slide-BKH&CN.png',
    href: '',
  },
  {
    url: 'slide-buu-dien.png',
    href: '',
  },
  {
    url: 'slide-DH-KHTN.png',
    href: '',
  },
  {
    url: 'slide-tentamus.png',
    href: '',
  },
  {
    url: 'slide-green-farm.png',
    href: '',
  },
  {
    url: 'slide-ptit.png',
    href: '',
  },
  {
    url: 'slide-gas-thien-ha.png',
    href: '',
  },
  {
    url: 'slide-bv-caq.png',
    href: '',
  },
  {
    url: 'slide-shb.png',
    href: '',
  },
  {
    url: 'slide-loc-troi.png',
    href: '',
  },
];

const MOCK_DATA_MOBILE: MobiLogoSliderProps[] = [
  {
    list: [
      {
        url: 'slide-som.png',
        href: '',
      },
      {
        url: 'slide-BKH&CN.png',
        href: '',
      },
      {
        url: 'slide-buu-dien.png',
        href: '',
      },
      {
        url: 'slide-DH-KHTN.png',
        href: '',
      },
      {
        url: 'slide-tentamus.png',
        href: '',
      },
      {
        url: 'slide-ptit.png',
        href: '',
      },
    ],
  },
  {
    list: [
      {
        url: 'slide-clb-doanh-nhan.png',
        href: '',
      },
      {
        url: 'slide-bv-caq.png',
        href: '',
      },
      {
        url: 'slide-shb.png',
        href: '',
      },
      {
        url: 'slide-tentamus.png',
        href: '',
      },
      {
        url: 'slide-loc-troi.png',
        href: '',
      },
      {
        url: 'slide-ptit.png',
        href: '',
      },
    ],
  },
  {
    list: [
      {
        url: 'slide-green-farm-customer.png',
        href: '',
      },
      {
        url: 'slide-green-retail.png',
        href: '',
      },
      {
        url: 'slide-BKH&CN.png',
        href: '',
      },
      {
        url: 'slide-green-food.png',
        href: '',
      },
      {
        url: 'slide-DH-KHTN.png',
        href: '',
      },
      {
        url: 'slide-buu-dien.png',
        href: '',
      },
    ],
  },
  {
    list: [
      {
        url: 'slide-som.png',
        href: '',
      },
      {
        url: 'slide-BKH&CN.png',
        href: '',
      },
      {
        url: 'slide-buu-dien.png',
        href: '',
      },
      {
        url: 'slide-DH-KHTN.png',
        href: '',
      },
      {
        url: 'slide-tentamus.png',
        href: '',
      },
      {
        url: 'slide-ptit.png',
        href: '',
      },
    ],
  },
];
export const CUSTOMER_MOCK_DATA: LogoSliderProps[] = [
  {
    url: 'slide-som.png',
    href: '',
  },
  {
    url: 'slide-loc-troi.png',
    href: '',
  },
  {
    url: 'slide-bv-caq.png',
    href: '',
  },
  {
    url: 'slide-shb.png',
    href: '',
  },
  {
    url: 'slide-gas-thien-ha.png',
    href: '',
  },
  {
    url: 'slide-dat-xanh-mien-trung.png',
    href: '',
  },
  {
    url: 'slide-an-tam-gia.png',
    href: '',
  },
  {
    url: 'slide-bv-cay-lua.png',
    href: '',
  },
  {
    url: 'slide-mirae-asset.png',
    href: '',
  },
  {
    url: 'slide-bac-giang.png',
    href: '',
  },
  {
    url: 'slide-buu-dien-mobi.png',
    href: '',
  },
  {
    url: 'slide-clb-doanh-nhan.png',
    href: '',
  },
  {
    url: 'slide-green-farm-customer.png',
    href: '',
  },
  {
    url: 'slide-green-retail.png',
    href: '',
  },
  {
    url: 'slide-green-food.png',
    href: '',
  },
  {
    url: 'slide-BKH&CN.png',
    href: '',
  },
  {
    url: 'slide-DH-KHTN.png',
    href: '',
  },
  {
    url: 'slide-buu-dien.png',
    href: '',
  },
];

const CUSTOMER_MOCK_DATA_MOBILE: MobiLogoSliderProps[] = [
  {
    list: [
      {
        url: 'slide-som.png',
        href: '',
      },
      {
        url: 'slide-loc-troi.png',
        href: '',
      },
      {
        url: 'slide-bv-caq.png',
        href: '',
      },
      {
        url: 'slide-shb.png',
        href: '',
      },
      {
        url: 'slide-gas-thien-ha.png',
        href: '',
      },
      {
        url: 'slide-dat-xanh-mien-trung.png',
        href: '',
      },
    ],
  },
  {
    list: [
      {
        url: 'slide-an-tam-gia.png',
        href: '',
      },
      {
        url: 'slide-bv-cay-lua.png',
        href: '',
      },
      {
        url: 'slide-mirae-asset.png',
        href: '',
      },
      {
        url: 'slide-bac-giang.png',
        href: '',
      },
      {
        url: 'slide-buu-dien-mobi.png',
        href: '',
      },
      {
        url: 'slide-clb-doanh-nhan.png',
        href: '',
      },
    ],
  },
  {
    list: [
      {
        url: 'slide-green-farm-customer.png',
        href: '',
      },
      {
        url: 'slide-green-retail.png',
        href: '',
      },
      {
        url: 'slide-BKH&CN.png',
        href: '',
      },
      {
        url: 'slide-green-food.png',
        href: '',
      },
      {
        url: 'slide-DH-KHTN.png',
        href: '',
      },
      {
        url: 'slide-buu-dien.png',
        href: '',
      },
    ],
  },
];
