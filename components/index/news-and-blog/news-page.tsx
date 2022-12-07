import Link from "next/link";
import { useEffect, useState } from "react";
import { formatDate } from "../../../lib/helpers/parser";
import { useCrud } from "../../../lib/hooks/useCrud";
import { useScreen } from "../../../lib/hooks/useScreen";
import { Post, PostService } from "../../../lib/repo/post.repo";
import { Topic, TopicService } from "../../../lib/repo/topic.repo";
import { Chip } from "../../shared/chip/chip";
import { Subtitle } from "../../shared/subtitle/subtitle";
import { Title } from "../../shared/title/title";
import { Img, NotFound, Spinner } from "../../shared/utilities/misc";
import { PostList } from "./components/post-list";

export function NewsPage() {
  const [selectedTab, setSelectedTab] = useState<string>();
  const { items: topicList } = useCrud(TopicService, {
    order: { createdAt: -1 },
  });

  useEffect(() => {
    if (topicList?.length) {
      setSelectedTab(topicList?.[0]?.id);
    }
  }, [topicList]);

  const handleSelect = (val: string) => setSelectedTab(val);

  return (
    <div className="py-8 bg-white main-container lg:pt-16 lg:pb-20">
      <div data-aos="fade-up" className="main-container">
        <Title text="Tin tức nông nghiệp mới nhất" />
        <Subtitle
          className="mx-auto !mb-4 !mt-6 !text-left lg:w-5/6 lg:!text-center lg:leading-8"
          text="Chúng tôi, tại GAT, đang trên đường xây dựng thư viện tài nguyên công nghệ nông nghiệp đầu tiên trên thế giới dựa trên kinh nghiệm của chúng tôi, các dự án đã thực hiện, các vấn đề đã giải quyết và hàng nghìn tỷ bộ dữ liệu cấp pixel trong ngành nông nghiệp mà chúng tôi đã thu thập trong suốt thời gian qua."
        />
        <Subtitle
          text="Bạn sẽ tìm thấy các tin tức, nghiên cứu điển hình, các trường hợp sử dụng và báo cáo liên quan đến chuỗi giá trị nông nghiệp tại đây."
          className="mx-auto !mt-0 !text-left lg:w-11/12 lg:!text-center"
        />
        <TabList selectedTab={selectedTab} onSelect={handleSelect} topicList={topicList} />
      </div>
    </div>
  );
}

interface TabListProps {
  selectedTab: string;
  onSelect: (value: string) => void;
  topicList: Topic[];
}

export function TabList({ selectedTab, onSelect, topicList }: TabListProps) {
  const screenLg = useScreen("lg");

  const {
    items: postList,
    loading,
    pagination,
    setPage,
  } = useCrud(
    PostService,
    {
      limit: 8,
      order: { createdAt: -1 },
      filter: { topicId: selectedTab, isApprove: true },
    },
    { fetchingCondition: !!selectedTab }
  );

  if (!topicList?.length) return <NotFound text="Chưa có chủ đề nào!" />;

  return (
    <>
      <div
        data-aos="fade-up"
        className="flex items-center gap-3 p-2 mx-auto mt-8 mb-6 overflow-x-scroll border rounded-lg shadow-md no-scrollbar flex-nowrap whitespace-nowrap border-gray-50 lg:mb-12 lg:gap-2 lg:whitespace-normal"
      >
        {topicList?.length && (
          <>
            {topicList.map((tab, index) => (
              <div
                key={index}
                id={tab.id}
                className={`delay-50 max-w-fit flex-1 cursor-pointer whitespace-nowrap rounded px-4 py-3 text-center transition ease-in ${
                  selectedTab === tab?.id ? "bg-primary text-white" : "hover:bg-gray-200"
                }`}
                onClick={() => {
                  onSelect?.(tab.id);

                  if (!screenLg) {
                    const el = document.getElementById(tab.id);
                    el?.scrollIntoView({
                      behavior: "smooth",
                      block: "nearest",
                      inline: "center",
                    });
                  }
                }}
              >
                {tab.name}
              </div>
            ))}
          </>
        )}
      </div>
      <NewsAndBlogList postList={postList} loading={loading} />
      <PostList
        title="Tin tức tuần qua"
        postList={postList}
        loading={loading}
        pagination={pagination}
        setPage={setPage}
        hasPagination
      />
    </>
  );
}

interface NewsAndBlogListProps {
  postList: Post[];
  loading: boolean;
}

function NewsAndBlogList({ postList, loading }: NewsAndBlogListProps) {
  return (
    <div className="lg:mt-12">
      <div className="text-xl font-bold lg:text-3xl">Tin tức mới nhất</div>
      {!postList || loading ? (
        <Spinner />
      ) : !postList?.length ? (
        <NotFound text="Chưa có bài viết nào!" />
      ) : (
        <div className="flex flex-col justify-between gap-8 mt-6 mb-8 animate-emerge lg:flex-row lg:gap-5">
          <Link data-aos="fade-right" href={`/news/${postList[0].slug}`}>
            <a className="flex-1 block group">
              {/* <div className='relative h-[14rem] w-full overflow-hidden rounded-lg lg:h-[24.5rem]'>
                <Image
                  src={postList[0].thumbnail}
                  alt={postList[0].title}
                  layout='fill'
                  objectFit='cover'
                  className='border rounded-lg border-gray-50 '
                />
              </div> */}
              <Img
                src={postList[0].thumbnail}
                alt={postList[0].title}
                contain
                className="border rounded-lg border-gray-50"
              />
              {/* <img
                src={postList[0].thumbnail || DEFAULT_IMAGE}
                alt={postList[0].title}
                className='object-contain w-full rounded-lg'
              /> */}
              <div className="flex items-center gap-2 my-3">
                <Chip text={postList[0].topic?.name} />
                <div className="text-xs lg:text-base">
                  {formatDate(postList[0].createdAt, "dd/MM/yyyy")}
                </div>
              </div>
              <div className="text-xl font-semibold leading-8 group-hover:text-primary">
                {postList[0].title}
              </div>
            </a>
          </Link>
          <div data-aos="fade-left" className="flex flex-col flex-1 gap-3">
            {postList.slice(1, 5).map((item, index) => (
              <Link key={index} className="" href={`/news/${item.slug}`}>
                <a className="flex gap-3 group">
                  {/* <div className="relative h-[4.625rem] w-1/3 shrink-0 grow-0 overflow-hidden rounded-lg lg:h-[7.375rem]">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="border rounded-lg border-gray-50 "
                    />
                  </div> */}
                   <Img
                    src={postList[0].thumbnail}
                    alt={postList[0].title}
                    contain
                    className="border rounded-lg border-gray-50"
                  />
                  {/* <img
                    src={item.thumbnail || DEFAULT_IMAGE}
                    alt={item.title}
                    className='object-contain w-1/3 rounded-lg aspect-video shrink-0 grow-0'
                  /> */}
                  <div className="flex flex-col flex-1 md:gap-2 xl:gap-6">
                    <div className="flex items-center gap-2">
                      <Chip text={item.topic?.name} />
                      <div className="text-xs lg:text-base">
                        {formatDate(item?.createdAt, "dd/MM/yyyy")}
                      </div>
                    </div>
                    <div className="font-medium text-ellipsis-2 group-hover:text-primary lg:text-xl lg:font-semibold lg:leading-8">
                      {item.title}
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
