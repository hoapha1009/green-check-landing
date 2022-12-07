import Image from 'next/image';
import { useState } from 'react';

export function AboutUsInfo() {
  const [showMore, setShowMore] = useState(false);

  const handleClickShowMoreButton = () => setShowMore(true);

  return (
    <div className='relative h-[84.5rem] pb-5 lg:h-[37.5rem] lg:pt-16 lg:pb-20'>
      <div
        data-aos='fade-right'
        className='absolute -top-[3rem] -left-[10rem] hidden h-[14.5rem] w-[14.5rem] rounded-full bg-primary lg:block'
      />
      <Image
        src='/assets/imgs/bg-info.png'
        alt='background giới thiệu chung về Green Check'
        className=''
        layout='fill'
      />
      <div data-aos='fade-up' className='relative main-container'>
        <div className='relative mx-auto h-[2.8125rem] w-[11.25rem] lg:h-[5.5rem] lg:w-[21.5rem]'>
          <Image
            src='/assets/imgs/green-agri-big-logo.png'
            alt='green-agri-big-logo'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='grid gap-16 mt-18 lg:mt-20 lg:grid-cols-4 lg:gap-8'>
          {MOCK_DATA.map((item, index) => (
            <AboutUseCardHorizontal
              data={item}
              key={index}
              index={index + 1}
              showMore={showMore}
              onClick={handleClickShowMoreButton}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutUseCardHorizontal({
  data,
  index,
  showMore,
  onClick,
}: {
  data: {
    image: string;
    content: string;
    title: string;
  };
  index: number;
  showMore: boolean;
  onClick: () => void;
}) {
  const delay = (index * 400).toString();

  return (
    <div
      data-aos='fade-up'
      data-aos-delay={delay}
      className='flex flex-col gap-2 pb-8 bg-white border border-gray-100 rounded-lg shadow-xl lg:gap-4 lg:border-gray-50'
    >
      <div className='mx-auto -mt-[1.75rem] flex h-20 w-20 flex-row items-center justify-center rounded-full border-2 border-primary bg-white p-4 shadow-md lg:-mt-[3.25rem] lg:h-24 lg:w-24'>
        <div className='relative h-14 w-14'>
          <Image
            src={data.image}
            alt='image'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>

      <div className='flex flex-col justify-between h-full px-4 pt-2 pb-0'>
        <div>
          <div className='mb-4 text-center font-montserrat text-[23px] font-bold uppercase text-primary-700'>
            {data.title}
          </div>
          <div
            className={`min-h-24 leading-[1.8rem] ${
              !showMore && 'lg:text-ellipsis-4'
            }`}
          >
            {data.content}
          </div>
        </div>
        {!showMore && (
          <div
            className='hidden cursor-pointer text-primary lg:block'
            onClick={() => onClick?.()}
          >
            Xem thêm
          </div>
        )}
      </div>
    </div>
  );
}

const MOCK_DATA = [
  {
    title: 'Mục tiêu',
    image: '/assets/imgs/target-1.png',
    content:
      'Mang lại lợi ích cho nông dân bằng việc số hóa quy trình canh tác,truy xuất nguồn gốc và phát triển kênh bán hàng qua nền tảng công nghệ',
    alt: "Green Agri hướng tới mục tiêu mang lại các lợi ích cho nông dân"
  },
  {
    title: 'Sứ mệnh',
    image: '/assets/imgs/target-3.png',
    content: `Đối với khách hàng: Xây dựng nền tảng và giải pháp công nghệ phù hợp, tối ưu với dịch vụ tư vấn và hỗ trợ vận hành hiệu quả, kịp thời. Đối với nhà đầu tư: Luôn đảm bảo minh bạch và hiệu quả. Đối với nhân viên: Luôn đổi mới, sáng tạo để tạo ra môi trường làm việc năng động với hiệu năng cao nhất`,
    alt: "Sứ mệnh của Green Agri đối với khách hàng"
  },
  {
    title: 'Tầm nhìn',
    image: '/assets/imgs/target-2.png',
    content:
      'Green Agri trở thành đơn vị xây dựng và cung cấp giải pháp công nghệ hàng đầu cho ngành nông nghiệp Việt Nam',
    alt: "Tầm nhìn của Green Agri"
    },
  {
    title: 'Giá trị cốt lõi',
    image: '/assets/imgs/target-4.png',
    content: 'Đức - Tín - Tâm - Trí - Nhân',
    alt: "Giá trị cốt lõi của Green Agri"
  }
];
