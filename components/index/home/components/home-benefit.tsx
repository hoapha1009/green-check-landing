import Image from 'next/image';
import { useScreen } from '../../../../lib/hooks/useScreen';
import { Title } from '../../../shared/title/title';

export function HomeBenefit() {
  const screenLg = useScreen("lg");

  return (
    <div className='relative py-5 lg:pt-16 lg:pb-20'>
      <div
        data-aos='fade-right'
        className='absolute -top-[5rem] -left-[18rem] hidden h-[26.25rem] w-[26.25rem] rounded-full bg-primary lg:block'
      />
      <div
        data-aos='fade-left'
        className='translate absolute top-1/2 right-0 hidden h-[15rem] w-[7.5rem] translate-y-14 rounded-full bg-secondary lg:block'
        style={{ borderRadius: '10rem 0 0 10rem' }}
      />
      <div data-aos='fade-up' className=''>
        <Title text='Lợi ích cho doanh nghiệp' />
      </div>
      <div
        data-aos='fade-up'
        className='flex flex-col items-center justify-center gap-6 px-2 main-container mt-7 lg:flex-row lg:px-0 2xl:gap-6'
      >
        <div className='flex flex-col order-2 gap-6 lg:order-1 lg:gap-16'>
          <div
            className='mt-auto ml-auto text-center lg:text-right'
            data-aos='fade-right'
            data-aos-delay='400'
          >
            <EachPart
              className=''
              index='01'
              chipClassName='bg-secondary mr-auto lg:mr-none ml-auto'
              title='Tạo ưu thế'
              subtitle='Cạnh tranh cho doanh nghiệp'
              content='Sử dụng TXNG tạo ưu thế cạnh tranh cho doanh nghiệp, mang lại nhiều lợi thế trên bàn đàm phán'
              contentClassName='w-full ml-auto'
            />
          </div>
          <div
            className='ml-auto text-center lg:text-right'
            data-aos='fade-right'
            data-aos-delay='1200'
          >
            {screenLg ? (
              <EachPart
                className=''
                index='03'
                chipClassName='bg-accent ml-auto'
                title='Niềm tin'
                subtitle='Niềm tin với người tiêu dùng'
                content='Xây dựng niềm tin và uy tín với khách hàng. Bảo vệ thương hiệu trên thị trường'
                contentClassName='w-5/6 ml-auto'
              />
            ) : (
              <EachPart
                className=''
                index='02'
                chipClassName='bg-primary mx-auto'
                title='Tối ưu'
                subtitle='Quy trình và chi phí'
                content='Tối ưu quy trình và chi phí vận hành các công đoạn trong chuỗi giá trị'
                contentClassName=''
              />
            )}
          </div>
        </div>

        <div className='order-1 w-[13.6875rem] shrink-0 grow-0 lg:order-2 lg:w-[24.375rem]'>
          <div className='relative row-span-2 mx-auto h-[25.0625rem] w-[13.6875rem] lg:h-[45.875rem] lg:w-[24.375rem]'>
            <Image
              alt='Mang lại những lợi ích cho doanh nghiệp từ Green Check'
              src='/assets/imgs/mobi.png'
              layout='fill'
              objectFit='contain'
              priority
            />
          </div>
        </div>

        <div className='flex flex-col order-3 gap-6 lg:gap-16'>
          <div
            className='mt-auto text-center lg:text-left'
            data-aos='fade-left'
            data-aos-delay='800'
          >
            {screenLg ? (
              <EachPart
                className=''
                index='02'
                chipClassName='bg-primary'
                title='Tối ưu'
                subtitle='Quy trình và chi phí'
                content='Tối ưu quy trình và chi phí vận hành các công đoạn trong chuỗi giá trị'
                contentClassName='w-5/6 mr-auto'
              />
            ) : (
              <EachPart
                className=''
                index='03'
                chipClassName='bg-accent mx-auto'
                title='Niềm tin'
                subtitle='Niềm tin với người tiêu dùng'
                content='Xây dựng niềm tin và uy tín với khách hàng. Bảo vệ thương hiệu trên thị trường'
                contentClassName='mx-auto'
              />
            )}
          </div>
          <div
            className='text-center lg:text-left'
            data-aos='fade-left'
            data-aos-delay='1600'
          >
            <EachPart
              className=''
              index='04'
              chipClassName='bg-danger mr-auto lg:ml-none ml-auto'
              title='Hiệu quả'
              subtitle='Quản lý vùng sản xuất'
              content='Gia tăng hiệu quả quản lý vùng sản xuất, quy trình sản phẩm, giảm thiểu rủi ro'
              contentClassName='lg:w-5/6 mr-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface EachPartProps {
  className?: string;
  index: string;
  chipClassName: string;
  contentClassName: string;
  title: string;
  subtitle: string;
  content: string;
}

function EachPart({
  className,
  index,
  chipClassName,
  title,
  subtitle,
  content,
  contentClassName,
}: EachPartProps) {
  return (
    <div className={`flex flex-col gap-1 lg:gap-4 ${className}`}>
      <div
        className={`mb-1 max-w-fit rounded-full py-0.5 px-3 text-center text-sm text-white lg:mb-0 lg:text-base ${chipClassName}`}
      >
        {index}
      </div>
      <div className='text-2xl font-bold text-gray-500-800 lg:text-3xl'>
        {title}
      </div>
      <div className='text-lg font-medium lg:text-xl'>{subtitle}</div>
      <div
        className={`whitespace-pre-wrap text-gray-500-400 ${contentClassName}`}
      >
        {content}
      </div>
    </div>
  );
}
