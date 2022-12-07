import Image from 'next/image';
import { Title } from '../../../shared/title/title';

export function HomeFunction() {
  const LIST = [
    {
      img: '/assets/imgs/info.png',
      icon: '/assets/imgs/car.png',
      title: 'Thông tin vùng trồng',
      content:
        'Quản lý mã số vùng trồng, địa điểm canh tác, nhà xưởng và sản phẩm',
      alt: 'Quản lý thông tin về mã số vùng trồng, địa điểm canh tác, nhà xưởng và sản phẩm',
      altIcon: 'Thông tin vùng trồng',
    },
    {
      img: '/assets/imgs/diary-1.png',
      icon: '/assets/imgs/leaf.png',
      title: 'Nhật ký canh tác',
      content:
        'Ghi nhận và quản lý nhật ký các hoạt động nội bộ cho từng đơn vị tham gia',
      alt: 'Quản lý các hoạt động nội bộ cho từng đơn vị tham gia',
      altIcon: 'Nhật ký canh tác',
    },
    {
      img: '/assets/imgs/diary.png',
      icon: '/assets/imgs/money.png',
      title: 'Nhật ký giao dịch',
      content: 'Ghi nhận và quản lý thông tin giao dịch và vận chuyển',
      alt: 'Quản lý thông tin giao dịch và vận chuyển',
      altIcon: 'Nhật ký giao dịch',
    },
    {
      img: '/assets/imgs/certificate.png',
      icon: '/assets/imgs/certi.png',
      title: 'Thông tin chứng nhận',
      content:
        'Quản lý chứng nhận và tiêu chuẩn của cơ sở canh tác, nhà xưởng, sản phẩm',
      alt: 'Quản lý chứng nhận và tiêu chuẩn của cơ sở canh tác, nhà xưởng, sản phẩm',
      altIcon: 'Thông tin chứng nhận',
    },
  ];

  return (
    <div
      data-aos='fade-up'
      className='py-5 bg-gray-500-50 lg:bg-white lg:pt-16 lg:pb-20'
    >
      <Title text='Chức năng của Green Check' />
      <div className='flex flex-col justify-between gap-4 mt-5 main-container lg:mt-12 lg:flex-row 2xl:gap-8'>
        {LIST.map((item, index) => (
          <div
            key={index}
            data-aos='fade-up'
            data-aos-delay={((index + 1) * 400).toString()}
            className='delay-400 group flex flex-1 flex-row items-center gap-2 rounded-lg border border-gray-500-50 bg-white p-2.5 pb-6 shadow-lg transition-all hover:bg-primary-50 lg:block lg:text-center'
          >
            <div className='relative'>
              <div className='relative h-[7.5rem] w-[7.5rem] overflow-hidden rounded lg:h-[14rem] lg:w-full 2xl:h-[16rem]'>
                <Image
                  alt={item.alt}
                  src={item.img}
                  layout='fill'
                  objectFit='cover'
                  className='transition-all ease-in-out border rounded delay-400 border-gray-500-50 group-hover:scale-105 group-hover:rounded'
                />
              </div>
              <div className='hidden lg:block'>
                <div className='absolute -bottom-[56px] left-1/3 flex h-[120px] w-[120px] -translate-x-3 transform items-center justify-center rounded-full border-[7px] border-white bg-primary'>
                  <div className='relative h-[60px] w-[60px]'>
                    <Image
                      alt={item.altIcon}
                      src={item.icon}
                      layout='fill'
                      objectFit='contain'
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=''>
              <div className='mb-1 text-lg font-semibold lg:mb-3 lg:mt-16 lg:text-2xl 2xl:mb-4'>
                {item.title}
              </div>
              <div className=''>{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
