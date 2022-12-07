import Image from 'next/image';
import { useState } from 'react';
import { RiStarFill } from 'react-icons/ri';
import { Title } from '../../../shared/title/title';
import axios from 'axios';
import { useScreen } from '../../../../lib/hooks/useScreen';
import { Button, Label } from '../../../shared/utilities/form';

export function HomeContactForm() {
  const LIST = [
    'Miễn phí sử dụng trong vòng 1 tháng',
    'Chiết khấu lên đến 50% chi phí khởi tạo',
    'Miễn phí thiết kế tem',
  ];
  const screenLg = useScreen("lg");
  const scriptURL =
    'https://sheet.best/api/sheets/63f36a26-1519-4681-ac3d-3f95725da14e';
  const initialData = {
    name: '',
    email: '',
    phone: '',
    description: '',
  };
  const [data, setData] = useState(() => initialData);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    axios
      .post(scriptURL, data)
      .then((res) => {
        //clearing form fields
        setData(initialData);
        alert(
          'Cảm ơn bạn đã liên hệ. Chúng tôi sẽ liên hệ lại với bạn sớm nhất.'
        );
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  const handleChangeValue = (e) => {
    const {
      target: { name, value },
    } = e;
    let newData = { ...data };
    newData = { ...data, [name]: value };

    setData(newData);
  };

  return (
    <div
      data-aos='fade-up'
      className='relative h-[49rem] py-5 lg:h-[44rem] lg:pt-16 lg:pb-20'
    >
      {screenLg && (
        <Image
          alt='home-contact-bg'
          src='/assets/imgs/home-contact-bg.png'
          priority
          layout='fill'
        />
      )}

      <div className='relative flex flex-col items-center justify-between gap-5 main-container lg:flex-row lg:gap-12'>
        <div className='relative -mt-4 hidden h-[26.25rem] w-[22.25rem] shrink-0 grow-0 lg:block'>
          <Image
            alt='contact-img'
            src='/assets/imgs/contact-img.png'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='w-full shrink-0 grow-0 lg:w-1/3'>
          <Title text='Liên hệ với chúng tôi' className='lg:!text-left' />
          <div className='flex flex-col gap-4 mt-3 lg:mt-6 2xl:mt-8'>
            <div className='text-lg lg:text-xl'>
              Bạn sẽ nhận ngay các ưu đãi lớn:
            </div>
            {LIST.map((item, index) => (
              <div
                key={index}
                data-aos='fade-up'
                data-aos-delay={((index + 1) * 200).toString()}
                className='flex items-center gap-3'
              >
                <i className='text-xl text-accent-400 lg:text-2xl'>
                  <RiStarFill />
                </i>
                <div className='lg:text-lg'>{item}</div>
              </div>
            ))}
          </div>
        </div>
        <form
          name='google-sheet'
          className='flex w-full flex-col gap-4 rounded-lg border border-neutral-50 bg-white p-8 shadow-sm lg:bg-[#FAFBFB]'
          onSubmit={handleSubmit}
        >
          <div className=''>
            <Label text='Họ và tên' />
            <input
              required
              id='name'
              name='name'
              className='form-control'
              style={{ minHeight: '3rem' }}
              placeholder='Nhập họ và tên'
              value={data.name}
              onChange={handleChangeValue}
            />
          </div>
          <div className=''>
            <Label text='Email' />
            <input
              required
              id='email'
              name='email'
              className='form-control'
              style={{ minHeight: '3rem' }}
              placeholder='Nhập email'
              type='email'
              value={data.email}
              onChange={handleChangeValue}
            />
          </div>
          <div className=''>
            <Label text='Số điện thoại' />
            <input
              required
              id='phone'
              name='phone'
              className='form-control'
              style={{ minHeight: '3rem' }}
              placeholder='Nhập số điện thoại'
              type='tel'
              value={data.phone}
              onChange={handleChangeValue}
            />
          </div>
          <div className=''>
            <Label text='Nội dung liên hệ' />
            <textarea
              id='description'
              name='description'
              className='outline-none form-control'
              style={{ paddingTop: '0.5rem' }}
              rows={3}
              placeholder='Nhập nội dung liên hệ'
              value={data.description}
              onChange={handleChangeValue}
            />
          </div>
          <div className='mt-1 text-center lg:text-right'>
            <Button
              primary
              className='w-[11rem] justify-center !py-[14px]'
              disabled={loading}
            >
              Gửi liên hệ
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
