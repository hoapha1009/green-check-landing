import Image from 'next/image';
import { useState } from 'react';
import { Title } from '../../../shared/title/title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useScreen } from '../../../../lib/hooks/useScreen';

export function HomeTraceabilityFlowchart() {
  const screenLg = useScreen("lg");
  const [selectedStage, setSelectedStage] = useState(1);

  if (!screenLg) {
    return (
      <div className='pt-5 pb-1 main-container'>
        <Title
          text='Giai đoạn quy trình truy xuất nguồn gốc'
          className='w-5/6 mx-auto'
        />
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          grabCursor
          className='relative w-full mx-auto mt-5 pb-14'
          loop={true}
          freeMode={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: 'bg-primary opacity-100',
          }}
        >
          {STAGE_LIST.map((item, index) => (
            <SwiperSlide
              key={index}
              className='self-stretch p-4 overflow-hidden bg-white border rounded-lg shadow border-neutral-50'
            >
              <div className='relative h-[11rem]'>
                <Image
                  src={item.image}
                  alt={item.image}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <div className='mt-4'>
                <div className='mb-1 text-xl font-bold text-ellipsis-2'>
                  {item.title}
                </div>
                <div className='text-ellipsis-4'>{item.content}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }

  return (
    <div data-aos='fade-up' className='bg-[#FAFBFB] pb-20 pt-16'>
      <div className='flex justify-between gap-4 main-container'>
        <div className='relative h-[32rem] w-[30rem]'>
          <Image
            alt='Sơ đồ quy trình truy xuất nguồn gốc'
            src='/assets/imgs/home-traceability-flowchart.png'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='w-7/12 shrink-0 grow-0'>
          <div className='font-montserrat text-[3.5rem] font-bold leading-[4.5rem] text-primary-700'>
            Sơ đồ quy trình <br /> truy xuất nguồn gốc
          </div>
          <div className='flex justify-between gap-8 mt-10 2xl:gap-10'>
            <div className='max-w-fit shrink-0 grow-0'>
              {STAGE_LIST.map((stage) => (
                <div
                  key={stage.value}
                  className='flex flex-col justify-center group'
                >
                  {stage.value !== 1 && (
                    <div className='relative ml-[18px] h-14 w-0.5 transition-all delay-200'>
                      <Image
                        src={
                          stage.value <= selectedStage
                            ? '/assets/imgs/line.png'
                            : '/assets/imgs/line-unactive.png'
                        }
                        layout='fill'
                        objectFit='contain'
                        alt='dot'
                        className=''
                      />
                    </div>
                  )}
                  <div
                    className='flex cursor-pointer items-center gap-2.5 transition delay-200 ease-in group-hover:scale-105 2xl:gap-4'
                    onClick={() => setSelectedStage(stage.value)}
                  >
                    <div className='relative h-9 w-9'>
                      <Image
                        src={
                          stage.value <= selectedStage
                            ? '/assets/imgs/dot.png'
                            : '/assets/imgs/dot-unactive.png'
                        }
                        layout='fill'
                        objectFit='contain'
                        alt='dot'
                      />
                    </div>
                    <div
                      className={`text-lg font-semibold ${
                        stage.value <= selectedStage
                          ? 'text-primary'
                          : 'text-neutral-500'
                      }`}
                    >
                      {stage.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div
              data-aos='zoom-in-down'
              data-aos-delay='300'
              className='w-3/4 shrink-0 grow-0'
            >
              <div className='relative h-[14rem] w-[24.9rem] overflow-hidden rounded-lg border border-neutral-50 shadow transition-all delay-200 2xl:h-[18rem] 2xl:w-[32rem]'>
                <Image
                  alt={STAGE_LIST[selectedStage - 1].title}
                  src={STAGE_LIST[selectedStage - 1].image}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <div className='mt-5 text-xl font-bold'>
                {STAGE_LIST[selectedStage - 1].title}
              </div>
              <div className='mt-1.5'>
                {STAGE_LIST[selectedStage - 1].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const STAGE_LIST = [
  {
    value: 1,
    label: 'Giai đoạn 1',
    image: '/assets/imgs/stage-1.png',
    title: 'Giai đoạn 1: Nông hộ/Hợp tác xã',
    content:
      'Năm 2022, thống kê cho thấy có cả nước có hơn 9 triệu đơn vị sản xuất nông nghiệp bao gồm 3 thành phần chính: nông dân, hợp tác xã và doanh nghiệp',
  },
  {
    value: 2,
    label: 'Giai đoạn 2',
    image: '/assets/imgs/stage-2.png',
    title: 'Giai đoạn 2: Doanh nghiệp thu mua',
    content:
      'Tổng số doanh nghiệp thu mua trong và ngoài nước tăng nhanh sau đại dịch covid',
  },
  {
    value: 3,
    label: 'Giai đoạn 3',
    image: '/assets/imgs/stage-3.png',
    title: 'Giai đoạn 3: Doanh nghiệp Sơ chế/Chế biến/Đóng gói',
    content:
      'Cả nước hiện có trên 43000 doanh nghiệp sơ chế, chế biến nông lâm thủy sản. Trong đó trên 7500 cơ sở quy mô công nghiệp gắn với xuất khẩu',
  },
  {
    value: 4,
    label: 'Giai đoạn 4',
    image: '/assets/imgs/stage-4.png',
    title: 'Giai đoạn 4: Doanh nghiệp phân phối',
    content:
      'Việt nam có trên 800 siêu thị, 150 trung tâm mua sắm, khoảng 9000 chợ truyền thống cùng hàng ngàn cửa hàng tiện lợi',
  },
  {
    value: 5,
    label: 'Giai đoạn 5',
    image: '/assets/imgs/stage-5.png',
    title: 'Giai đoạn 5: Người tiêu dùng',
    content: 'Việt nam ước tính có khoảng 53 triệu người tiêu dùng số năm 2021',
  },
];
