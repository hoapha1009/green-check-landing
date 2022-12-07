import getConfig from 'next/config';
import Image from 'next/image';
import Link from 'next/link';
import { useScreen } from '../lib/hooks/useScreen';

const { publicRuntimeConfig } = getConfig();

export default function Footer() {
  const screenLg= useScreen("lg");

  return (
    <footer data-aos='fade-up'>
      <div className='py-5 bg-white lg:bg-gray-500-50 lg:pt-16 lg:pb-20'>
        <div className='flex flex-col justify-between gap-6 main-container lg:flex-row'>
          <div className='flex flex-col items-center justify-center lg:items-start'>
            <div className='relative h-[3rem] w-[15.25rem] lg:h-[4.5rem] lg:w-[22rem]'>
              <Image
                alt='logo Green Check'
                src='/assets/imgs/logo-big.png'
                layout='fill'
                objectFit='contain'
              />
            </div>
            <div className='text-lg font-bold uppercase lg:text-2xl'>
              Cty CP Công nghệ Green Agri
            </div>
          </div>

          <div className='flex flex-col items-center gap-4 lg:items-start'>
            <div className='text-lg font-bold lg:text-2xl'>
              Văn phòng đại diện
            </div>
            <div className='text-center lg:text-left'>
              Chung Cư Intresco An Khang
              <br /> Số 30 đường 19, An Phú, Thành phố Thủ Đức
            </div>
            <div className=''>Hotline: 0904 451 107</div>
            <div className=''>Email: contact@greengroups.com.vn</div>
          </div>

          <div className='flex flex-col items-center gap-4 lg:items-start'>
            <div className='text-lg font-bold lg:text-2xl'>Trụ sở chính</div>
            <div className='text-center lg:text-left'>
              Thôn Sông Xoài 1, xã Láng Lớn,
              <br />
              huyện Châu Đức, tỉnh Bà Rịa-Vũng Tàu
            </div>
            <div className=''>Phone: 0839 787 272</div>
            <div className=''>Email: contact@greenagri.com.vn</div>
          </div>
        </div>
      </div>

      <div className='pt-2 text-center bg-white lg:hidden lg:pt-6'>
        <div className='text-lg font-bold'>Tải app Green Check</div>
        <div className='flex items-center justify-center gap-2 mt-4 mb-8'>
          {LIST.find((item) => item?.isApp)?.items?.map((link, index) => (
            <Link key={index} href={link.href}>
              <a
                className={`relative block h-[3rem] w-[10.5rem] ${
                  link?.isDisable && 'pointer-events-none'
                }`}
              >
                <Image
                  alt={link.url}
                  src={link.url}
                  layout='fill'
                  objectFit='cover'
                />
              </a>
            </Link>
          ))}
        </div>
      </div>

      <div className='bg-[#044C45] pt-6 pb-3 lg:pt-8 lg:pb-5'>
        <div className='text-white main-container'>
          <div className='flex flex-col justify-between gap-6 pb-6 text-center border-white lg:flex-row lg:border-b lg:text-left'>
            {LIST.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col gap-4 ${
                  item?.isApp && !screenLg && 'hidden'
                }`}
              >
                <div className={`mb-1 text-2xl font-bold `}>{item.name}</div>
                {item?.isIcon ? (
                  <div className='flex items-center justify-center gap-1 lg:justify-start'>
                    {item.items.map((link, index) => (
                      <Link key={index} href={link.href}>
                        <a
                          target='_blank'
                          className={`relative block h-9 w-11 ${
                            link?.isDisable && 'pointer-events-none'
                          }`}
                        >
                          <Image
                            alt={link.url}
                            src={link.url}
                            layout='fill'
                            objectFit='contain'
                          />
                        </a>
                      </Link>
                    ))}
                  </div>
                ) : item?.isApp ? (
                  <>
                    {item.items.map((link, index) => (
                      <Link key={index} href={link.href}>
                        <a
                          target='_blank'
                          className={`relative block h-[3rem] w-[10.5rem] ${
                            link?.isDisable && 'pointer-events-none'
                          }`}
                        >
                          <Image
                            alt={link.url}
                            src={link.url}
                            layout='fill'
                            objectFit='cover'
                          />
                        </a>
                      </Link>
                    ))}
                  </>
                ) : (
                  <>
                    {item.items.map((link, index) => (
                      <Link key={index} href={link.href}>
                        <a
                          className={` block hover:text-secondary hover:underline ${
                            link?.isDisable && 'pointer-events-none'
                          }`}
                        >
                          {link?.name}
                        </a>
                      </Link>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
          <div className='hidden mt-5 lg:block'>
            <div className='flex justify-between text-gray-500-100'>
              <div className=''>
                Copyright © 2022 GreenAgri Software. All rights reserved.
              </div>
              <div className='flex'>
                <Link href='/'>
                  <a className='transition ease-in-out pointer-events-none hover:text-secondary hover:underline'>
                    <div className='pr-3 border-r border-gray-500-100'>
                      Quy định sử dụng
                    </div>
                  </a>
                </Link>
                <Link href='/'>
                  <a className='transition ease-in-out pointer-events-none hover:text-secondary hover:underline'>
                    <div className='pl-3 '>Chính sách bảo mật</div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='border-t border-white bg-[#044C45] py-2 text-center text-sm text-white lg:hidden'>
        Copyright © 2022 GreenAgri Software. All rights reserved.
      </div>
    </footer>
  );
}

const LIST = [
  {
    name: 'GAT',
    items: [
      {
        href: '/about-us',
        name: 'Về GAT',
      },
      {
        href: '/news',
        name: 'Tin tức & Blog',
      },
    ],
  },
  {
    name: 'Trung tâm hỗ trợ',
    items: [
      {
        href: '/',
        name: 'Hướng dẫn sử dụng',
        isDisable: true,
      },
      {
        href: '/',
        name: 'Tài liệu nhà phát triển',
        isDisable: true,
      },
      {
        href: '/',
        name: 'Chính sách bảo mật ',
        isDisable: true,
      },
    ],
  },
  {
    isApp: true,
    name: 'Tải app Green Check',
    items: [
      {
        href: publicRuntimeConfig?.url_google_play || '/',
        url: '/assets/imgs/footer-google-play.png',
      },
      {
        href: publicRuntimeConfig?.url_app_store || '/',
        url: '/assets/imgs/footer-app-store.png',
      },
    ],
  },
  {
    isIcon: true,
    name: 'Follow us',
    items: [
      {
        href: '/',
        url: '/assets/imgs/fb.png',
        isDisable: true,
      },
      {
        href: '/',
        url: '/assets/imgs/twitter.png',
        isDisable: true,
      },
      {
        href: '/',
        url: '/assets/imgs/youtube.png',
        isDisable: true,
      },
      {
        href: '/',
        url: '/assets/imgs/linkedin.png',
        isDisable: true,
      },
    ],
  },
];