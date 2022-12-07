import Image from 'next/image';
import { Title } from '../../../shared/title/title';

export function HomeSpecialPoints() {
  const LIST = [
    {
      icon: '/assets/imgs/system.png',
      title: 'Thiết kế giao diện hệ thống',
      content: `theo tiêu chuẩn GS1\n và tiện lợi với người dùng`,
      alt: "Thiết kế giao diện theo tiêu chuẩn GS1 và tiện lợi với người dùng"
    },
    {
      icon: '/assets/imgs/time.png',
      title: 'Thông tin được truy xuất',
      content: 'đơn giản sau 2 giây',
      alt: "Thông tin được truy xuất đơn giản sau 2 giây"
    },
    {
      icon: '/assets/imgs/qrcode.png',
      title: 'Tem QR bảo mật',
      content: 'an toàn và đa nhiệm',
      alt: "Tem QR bảo mật, an toàn và đa nhiệm"
    },
    {
      icon: '/assets/imgs/device.png',
      title: 'Quản lý thông minh',
      content: 'trên nhiều thiết bị',
      alt: "Quản lý thông minh trên nhiều thiết bị"
    },
  ];

  return (
    <div className='relative py-5 lg:pt-16 lg:pb-20'>
      <div data-aos='fade-up' className=''>
        <Title text={`Điểm đặc biệt của\n Green Check`} />
      </div>
      <div
        data-aos='fade-left'
        className='absolute top-20 right-0 hidden h-[10.5rem] w-[5.5rem] rounded-full bg-primary lg:block'
        style={{ borderRadius: '10rem 0 0 10rem' }}
      />
      <div className='main-container mt-5 flex flex-col justify-between gap-6 px-2.5 lg:mt-10 lg:flex-row lg:px-0'>
        {LIST.map((item, index) => (
          <div
            key={index}
            data-aos='fade-up'
            data-aos-delay={((index + 1) * 400).toString()}
            className='flex-1 p-10 text-center transition-all ease-in-out delay-200 bg-white border rounded-sm shadow-md group border-gray-500-50 hover:-translate-y-1 hover:bg-primary-50 lg:p-7'
          >
            <div className='relative h-[3.5rem] lg:h-[3.875rem]'>
              <Image
                alt={item.alt}
                src={item.icon}
                layout='fill'
                objectFit='contain'
              />
            </div>
            <div className='mt-4 text-gray-500-600 lg:text-lg'>{item.title}</div>
            <div className='mt-1 font-bold uppercase whitespace-pre-wrap text-gray-500-700 lg:text-lg'>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
