import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { RiArrowDropLeftLine } from 'react-icons/ri';
import { formatDate } from '../../../../lib/helpers/parser';
import { useCrud } from '../../../../lib/hooks/useCrud';
import { useToast } from '../../../../lib/providers/toast-provider';
import { Post, PostService } from '../../../../lib/repo/post.repo';
import { NotFound, Spinner } from '../../../shared/utilities/misc';
import { PostList } from './post-list';

export function PostPage() {
  const toast = useToast();
  const router = useRouter();
  const { query } = router;
  const [post, setPost] = useState<Post>();
  const [loading, setLoading] = useState(false);
  const {
    items: postList,
    loading: loadingPostList,
    pagination,
    setPage,
  } = useCrud(
    PostService,
    {
      limit: 8,
      order: { createdAt: -1 },
      filter: { topicId: post?.topicId, isApprove: true, _id: {$ne: post?.id} },
    },
    { fetchingCondition: !!post?.topicId }
  );

  const getPostData = async () => {
    if (!query?.slug) return;

    try {
      setLoading(true);
      const res = await PostService.getAll({
        query: { filter: { slug: query?.slug } },
      });
      setPost(res.data[0]);
    } catch (error) {
      console.debug(error);
      toast.error('Lấy chi tiết bài viết thất bại.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPostData();
  }, [query?.slug]);

  return (
    <div className='pb-6 bg-white lg:pb-20 lg:pt-12'>
      <div className='main-container'>
        <div
          className='items-center hidden gap-1 text-gray-400 cursor-pointer hover:text-primary hover:underline lg:flex'
          onClick={() => router.push(`/news`)}
        >
          <i className='pt-[1px] text-2xl'>
            <RiArrowDropLeftLine />
          </i>
          <div className='text-sm'>Quay lại</div>
        </div>
        <div className='pt-10'>
          {loading ? (
            <Spinner />
          ) : !post?.id ? (
            <NotFound text='Không tìm thấy bài viết' />
          ) : (
            <>
              <div className='mx-auto mb-4 text-xl font-semibold lg:mb-8 lg:w-4/5 lg:text-center lg:text-3xl lg:font-bold'>
                {post.title}
              </div>
              <div
                className='ck-content'
                dangerouslySetInnerHTML={{
                  __html: post.description,
                }}
              ></div>
              <div className='mt-5 text-right lg:mt-8'>
                <div className='text-sm'>
                  {formatDate(post?.createdAt, 'dd/MM/yyyy')}
                </div>
                {!!post?.createdByName && (
                  <div className=''>
                    Nguồn{' '}
                    <span className='font-bold'>{post?.createdByName}</span>
                  </div>
                )}
              </div>

              <div className='mt-5'>
                <PostList
                  title='Tin tức liên quan'
                  postList={postList}
                  loading={loadingPostList}
                  pagination={pagination}
                  setPage={setPage}
                  hasPagination
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
