
// import Aos from 'aos';
// import 'aos/dist/aos.css';
import Footer from './Footer';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { DefaultHead } from './default-head';
import Header from './Header';

SwiperCore.use([Pagination, Navigation]);

export default function Layout({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   Aos.init({ duration: 400, easing: 'ease-in-out', once: true });
  // }, []);

  // Put Header or Footer Here
  return (
    <div className='relative min-h-screen bg-[#FAFBFB] text-gray-500-700 lg:bg-white'>
      <>
        <DefaultHead />
        <Header />
        <div className=''>{children}</div>
        <Footer />
      </>
    </div>
  );
}
