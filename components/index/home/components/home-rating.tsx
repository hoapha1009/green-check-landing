import Image from 'next/image';
import { Title } from '../../../shared/title/title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useScreen } from '../../../../lib/hooks/useScreen';

export function HomeRating() {
  const LIST = [
    {
      img: '/assets/imgs/person-1.png',
      job: 'Nông dân',
      name: 'Nguyễn Văn Bảy',
      comment:
        'Phần mềm truy xuất nguồn gốc giúp tôi quản lý công việc canh tác tốt hơn.',
    },
    {
      img: '/assets/imgs/person-2.png',
      job: 'Chủ doanh nghiệp',
      name: 'Trần Thị Huệ',
      comment:
        'Nhờ Green Check mà tôi dễ dàng quản lý các nông hộ trong chuỗi liên kết của mình.',
    },
    {
      img: '/assets/imgs/person-3.png',
      job: 'Giám đốc',
      name: 'Nguyễn Thanh Hùng',
      comment:
        'Phần mềm truy xuất nguồn gốc của Green Check là chìa khóa giúp chúng tôi giải quyết vấn đề.',
    },
    {
      img: '/assets/imgs/person-4.png',
      job: 'Người tiêu dùng',
      name: 'Nguyễn Thị Lệ Hằng',
      comment:
        'Từ khi biết đến Green Check, tôi đã thay đổi hành vi mua sắm của mình.',
    },
  ];
  const screenLg = useScreen("lg");

  return (
    <div
      data-aos='fade-up'
      className='relative h-[36rem] lg:h-[42.5rem] 2xl:h-[42rem]'
    >
      <Image
        alt='background đánh giá về Green Check'
        src='/assets/imgs/home-rating-bg.png'
        layout='fill'
        objectFit='cover'
        priority
      />
      <div className='relative py-5 main-container lg:pt-16 lg:pb-20'>
        <Title text='Đánh giá về Green Check' className='!text-white' />
        <div className='flex items-stretch gap-8 -mt-1 lg:mt-9'>
          {screenLg ? (
            LIST.map((item, index) => (
              <div
                key={index}
                data-aos='fade-up'
                data-aos-delay={((index + 1) * 400).toString()}
                className='group flex flex-1 flex-col items-center gap-3 rounded-lg bg-white px-6 py-[1.75rem]
              text-center hover:bg-primary-50'
              >
                <div className='relative w-48 h-48 overflow-hidden transition ease-in-out border rounded-full delay-400 border-gray-500-50 group-hover:scale-105'>
                  <Image
                    alt={item.job + " " +item.name}
                    src={item.img}
                    layout='fill'
                    objectFit='contain'
                  />
                </div>
                <div className='text-lg font-semibold text-info'>
                  {item.job}
                </div>
                <div className='text-xl font-bold'>{item.name}</div>
                <div className='font-medium text-gray-500-400'>
                  {item.comment}
                </div>
              </div>
            ))
          ) : (
            <Swiper
              slidesPerView={1.4}
              spaceBetween={20}
              grabCursor
              className='relative w-full pb-16 mx-auto mt-5'
              loop={true}
              freeMode={false}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass:
                  'bg-white inline-block w-3 h-3 rounded-full mr-4 last:mr-0 transition-all',
                bulletActiveClass: 'bg-primary opacity-100',
              }}
            >
              {LIST.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className='self-stretch p-5 overflow-hidden bg-white border rounded-lg shadow border-gray-500-50'
                >
                  <div
                    key={index}
                    className='flex flex-col items-center flex-1 gap-3 text-center bg-white rounded-lg group hover:bg-primary-50'
                  >
                    <div className='relative w-48 h-48 overflow-hidden transition ease-in-out border rounded-full delay-400 border-gray-500-50 group-hover:scale-105'>
                      <Image
                        alt={item.job}
                        src={item.img}
                        layout='fill'
                        objectFit='contain'
                      />
                    </div>
                    <div className='text-lg font-semibold text-info'>
                      {item.job}
                    </div>
                    <div className='text-xl font-bold'>{item.name}</div>
                    <div className='font-medium text-gray-500-400'>
                      {item.comment}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
}
