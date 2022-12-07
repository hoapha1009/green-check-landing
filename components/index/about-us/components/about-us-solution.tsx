import { Subtitle } from '../../../shared/subtitle/subtitle';
import { Title } from '../../../shared/title/title';

export function AboutUsSolution() {
  return (
    <div
      data-aos='fade-up'
      data-aos-delay='1000'
      className='main-container py-16 lg:px-16'
    >
      <Title text='Giải pháp green agri' />
      <Subtitle
        text='Bộ giải pháp hàng đầu cho ngành nông nghiệp'
        className='mx-auto mt-4 mb-10 max-w-lg'
      />
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8'>
        {MOCK_DATA.map((item, index) => (
          <AboutUsSolutionCard data={item} key={index} index={index} />
        ))}
      </div>
    </div>
  );
}

function AboutUsSolutionCard({
  data,
  index,
}: {
  data: { url: string; alt: string; title: string; content: string };
  index: number;
}) {
  const delay = (index * 100).toString();

  return (
    <div
      data-aos='fade-up'
      data-aos-delay={delay}
      className='min-h-[150px] rounded-md border bg-[#FAFAFA] p-3 shadow-md lg:p-6'
    >
      <div className='flex items-center gap-4'>
        <img
          src={data.url}
          alt={data.alt}
          width={47}
          height={47}
          className=''
        />
        <div className='font-saira text-xl font-semibold lg:text-2xl'>
          {data.title}
        </div>
      </div>
      <div className='mt-3 text-base font-medium  lg:mt-7 lg:text-lg'>
        {data.content}
      </div>
    </div>
  );
}

const MOCK_DATA = [
  {
    url: '/assets/imgs/leaf.png',
    alt: 'nhat-ky-canh-tac',
    title: 'Giải pháp nhật ký canh tác',
    content:
      'Ghi chép nhật ký các hoạt động nội bộ trong suốt quá trình trồng trọt và chăn nuôi',
  },
  {
    url: '/assets/imgs/search2.png',
    alt: 'giai-phap-truy-suat-nguon-goc',
    title: 'Giải pháp truy xuất nguồn gốc',
    content: 'Minh bạch thông tin sản phẩm chính hãng tới người dùng.',
  },
  {
    url: '/assets/imgs/coop.png',
    alt: 'giai-phap-quan-ly-kenh-phan-phoi',
    title: 'Giải pháp quản lý kênh phân phối',
    content:
      'Tích hợp các giải pháp trong 1 QR Code: Chống hàng giả, chống phá giá, bảo hành điện tử',
  },
  {
    url: '/assets/imgs/user.png',
    alt: 'crm-platform',
    title: 'CRM Platform',
    content: 'Nền tảng tạo ứng dụng chăm sóc khách hàng.',
  },
];
