import getConfig from 'next/config';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { RiArrowDropDownFill, RiMenuFill } from 'react-icons/ri';
import { useScreen } from '../lib/hooks/useScreen';
import { Button } from '../components/shared/utilities/form';

const { publicRuntimeConfig } = getConfig();
const domain = publicRuntimeConfig.domain;
let registerUrl = '/';
let loginUrl = '/';
if (domain) {
  const domainSplit = domain.split('://');
  registerUrl = `${domainSplit[0]}://dashboard.${domainSplit[1]}/register`;
  loginUrl = `${domainSplit[0]}://dashboard.${domainSplit[1]}/login`;
}

export default function Header() {
  const screenLg = useScreen("lg");
  const router = useRouter();
  const [scrollTop, setScrollTop] = useState(0);
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const isScrolled = useMemo(() => scrollTop > 50, [scrollTop]);
  const onScroll = (e: any) => {
    setScrollTop(e.target.documentElement.scrollTop);
  };

  const indexOfSelectedMenu = useMemo(() => {
    const indexOfMenu = MENU_TAB_LIST.findIndex((menu) =>
      router.pathname.includes(menu.href as string)
    );
    return indexOfMenu;
  }, [router.pathname]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setShowMenuMobile(false);
  }, [router.pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-400  w-full bg-white ${
          isScrolled
            ? 'border-b border-neutral-50 shadow'
            : 'border-transparent shadow-none'
        }`}
      >
        <div className='flex items-center justify-between font-medium main-container h-14 md:h-18 lg:h-20'>
          <div className='items-center gap-1'>
            <Link href='/'>
              <a className=''>
                <div className='relative mr-8 -mt-1 h-[2.5rem] w-[9.25rem] lg:h-12 lg:w-[12.3rem]'>
                  <Image
                    src='/assets/imgs/logo.png'
                    alt='logo Green Check'
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className='flex items-center justify-end flex-1'>
            {screenLg && <MenuLink indexOfSelectedMenu={indexOfSelectedMenu} />}
            <i
              className={`px-2.5 text-2xl lg:hidden ${
                showMenuMobile ? '!text-primary' : '!text-neutral-700'
              }`}
              onClick={() => setShowMenuMobile(!showMenuMobile)}
            >
              <RiMenuFill />
            </i>
          </div>
        </div>
        <MenuMobile isShow={showMenuMobile}>
          <MenuLink indexOfSelectedMenu={indexOfSelectedMenu} />
        </MenuMobile>
      </header>
      {!screenLg && showMenuMobile && (
        <div
          onClick={() => setShowMenuMobile(false)}
          className='fixed top-0 left-0 w-full h-full z-200'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.32)' }}
        ></div>
      )}
    </>
  );
}
export function MenuLink({ indexOfSelectedMenu }) {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const screenLg = useScreen("lg");

  return (
    <>
      {MENU_TAB_LIST.map((tab, index) =>
        tab?.subTabs ? (
          <div key={index} className='relative group lg:inline-block'>
            <button
              className={`inline-flex w-full items-center justify-between rounded lg:w-auto lg:justify-start lg:hover:text-primary ${
                tab?.className
              } ${tab?.isDisable && 'pointer-events-none'} ${
                indexOfSelectedMenu === index && 'text-primary'
              }`}
              onClick={() => !screenLg && setShow(!show)}
            >
              <span className={`mr-1 py-2 lg:pl-4 `}>{tab.title}</span>
              <i
                className={`px-0 text-2xl  ${
                  show ? '-rotate-180' : 'rotate-0'
                }`}
              >
                <RiArrowDropDownFill />
              </i>
            </button>
            {!screenLg ? (
              show && (
                <ul className='transition duration-300 ease-in-out bg-white rounded lg:absolute lg:hidden lg:shadow lg:group-hover:block'>
                  {tab.subTabs.map((subTab, index) => (
                    <li key={index} className=''>
                      <Link href={subTab.href} onClick={() => setShow(false)}>
                        <a
                          className={`block whitespace-nowrap px-6 py-2 lg:px-8 lg:py-3 lg:hover:text-primary ${
                            router.pathname.includes(subTab.href)
                              ? 'text-primary'
                              : ''
                          }`}
                        >
                          {subTab.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              )
            ) : (
              <>
                <ul className='absolute hidden bg-white rounded shadow group-hover:block'>
                  {tab.subTabs.map((subTab, index) => (
                    <li
                      key={index}
                      className={`${
                        tab?.isDisable && 'pointer-events-none hidden'
                      }`}
                    >
                      <Link href={subTab.href}>
                        <a className='block px-8 py-3 whitespace-nowrap lg:hover:text-primary'>
                          {subTab.title}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        ) : tab?.isButton ? (
          <Button
            key={index}
            primary
            className={`px-6 lg:px-8 ${tab?.className} !py-2`}
            onClick={() => window.open(tab?.href, '_ blank')}
            disabled={tab?.isDisable}
          >
            {tab?.title}
          </Button>
        ) : (
          <Link key={index} href={tab.href as string}>
            <a
              className={`block rounded py-2 lg:px-4 lg:hover:text-primary 2xl:px-5 ${
                tab?.className
              } ${tab?.isDisable && 'pointer-events-none'} ${
                router.asPath === tab.href && 'text-primary'
              }`}
              {...(tab?.isLoginButton && { target: '_blank' })}
            >
              {tab.title}
            </a>
          </Link>
        )
      )}
    </>
  );
}

export function MenuMobile({ children, isShow }) {
  return (
    <>
      <div
        className={`absolute z-400 w-full bg-white pb-8 transition-all delay-100 ease-out  ${
          isShow ? 'block max-h-fit opacity-100' : 'hidden max-h-0 opacity-0'
        }`}
      >
        <div className='h-full px-1 bg-white main-container z-300'>
          {children}
        </div>
      </div>
    </>
  );
}

interface SubMenu {
  href: string;
  title: string;
}

interface Menu {
  title: string;
  href?: string;
  subTabs?: SubMenu[];
  isButton?: boolean;
  className?: string;
  isDisable?: boolean;
  isPolicyPage?: boolean;
  isLoginButton?: boolean;
}

const MENU_TAB_LIST: Menu[] = [
  { href: '/about-us', title: 'Về chúng tôi' },
  { href: '/product', title: 'Sản phẩm', isDisable: true },
  { href: '/price', title: 'Bảng giá', isDisable: true },
  {
    href: '/policy',
    title: 'Chính sách',
    isDisable: true,
    isPolicyPage: true,
    subTabs: [
      { href: '/green-check', title: 'Green Check' },
      { href: '/green-agri', title: 'Green Agri' },
    ],
  },
  { href: '/news', title: 'Tin tức' },
  // { href: '/ne', title: 'Test' },
  { href: '/support', title: 'Hỗ trợ', isDisable: true },
  {
    href: loginUrl,
    title: 'Đăng nhập',
    className: 'text-primary-700 font-bold',
    isLoginButton: true,
  },
  {
    href: registerUrl,
    title: 'Đăng ký',
    isButton: true,
    className: 'lg:ml-3 mt-2 lg:mt-0',
  },
];
