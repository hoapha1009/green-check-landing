import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiMoreFill,
} from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../../../../lib/repo/post.repo';
import { Pagination } from '../../../../lib/repo/crud.repo';
import { NotFound, Spinner } from '../../../shared/utilities/misc';
import { formatDate } from '../../../../lib/helpers/parser';
import { PaginationComponent } from '../../../shared/utilities/pagination/pagination-component';

interface PostListProps {
  title: string;
  postList: Post[];
  loading: boolean;
  pagination?: Pagination;
  setPage?: any;
  hasPagination?: boolean;
}

export function PostList({
  title,
  postList,
  loading,
  pagination,
  setPage,
  hasPagination = false,
}: PostListProps) {
  const defaultButtonClass =
    `border-gray-200 bg-white text-gray-700 disabled:opacity-40 disabled:pointer-events-none ` +
    `hover:text-primary hover:border-primary hover:bg-gray-200 font-semibold rounded ` +
    `px-0.5 mx-0.5 w-9 h-9`;

  return (
    <>
      <div className='text-xl font-bold lg:text-3xl'>{title}</div>
      <div className='mt-6'>
        {loading ? (
          <Spinner />
        ) : !postList?.length ? (
          <NotFound text='Chưa có bài viết nào!' />
        ) : (
          <div className='mt-6 mb-8'>
            <div className='grid grid-cols-2 auto-rows-fr gap-x-3 gap-y-3 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10'>
              {postList.map((post) => (
                <Link key={post.id} href={`/news/${post.slug}`} className=''>
                  <a className='h-full cursor-pointer group'>
                    <div className='relative h-[9rem] overflow-hidden rounded-lg lg:h-[11rem]'>
                      <Image
                        src={post.thumbnail}
                        alt={post.shortDescription}
                        layout='fill'
                        objectFit='cover'
                        className='border rounded-lg border-gray-50 '
                      />
                    </div>
                    <div className='mt-4'>
                      <div className='font-bold text-ellipsis-2 group-hover:text-primary lg:text-xl'>
                        {post.title}
                      </div>
                      <div className='mt-1 text-xs text-gray lg:text-base'>
                        {formatDate(post.createdAt, 'dd/MM/yyyy')}
                      </div>
                    </div>
                  </a>
                </Link>
              ))}
            </div>

            {hasPagination && (
              <div className='flex justify-center mt-8 lg:mt-10'>
                <PaginationComponent
                  limit={pagination.limit}
                  total={pagination.total}
                  page={pagination.page}
                  onPageChange={(page) => setPage({ ...pagination, page })}
                  hasFirstLast={false}
                  hasDots={true}
                  visiblePageCount={8}
                  prevButtonClass={`${defaultButtonClass}`}
                  nextButtonClass={`${defaultButtonClass}`}
                  firstButtonClass={`${defaultButtonClass}`}
                  lastButtonClass={`${defaultButtonClass}`}
                  pageButtonClass={`${defaultButtonClass}`}
                  dotsButtonClass={`${defaultButtonClass}`}
                  pageActiveButtonClass={`${defaultButtonClass
                    .replace('text-gray-700', 'text-white')
                    .replace('hover:text-primary', 'hover:text-white')
                    .replace(
                      'hover:bg-gray-200',
                      ''
                    )} bg-gray-600 border-gray`}
                  prevButtonContent={
                    <i className='text-md sm:text-xl'>
                      <RiArrowLeftSLine />
                    </i>
                  }
                  nextButtonContent={
                    <i className='text-md sm:text-xl'>
                      <RiArrowRightSLine />
                    </i>
                  }
                  dotsButtonContent={
                    <i className='text-md sm:text-lg'>
                      <RiMoreFill />
                    </i>
                  }
                />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
