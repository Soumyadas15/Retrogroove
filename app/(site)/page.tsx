import getSongs from '@/actions/getSongs';
import Header from '@/components/Header'
import ListItem from '@/components/ListItem'
import Image from 'next/image'
import PageContent from './components/PageContent';
import TopPicksContent from './components/TopPicksContent';

export const revalidate = 0;

export default async function Home() {
  const songs = await getSongs();
  return (
    <div className='
        rounded-lg
        h-full
        w-full
        overflow-hidden
        overflow-y-auto
     '>
      <Header>
        <div className='mb-2'>
          <h1
            className='
            text-[#372133]
            text-4xl
            font-semibold
            '
          >
            Timeless classics
          </h1>
          <div className='
              grid
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-3
              2xl:grid-cols-4
              gap-3
              mt-4
          '>
            <ListItem
              image="/assets/like.png"
              name="My favorites"
              href='liked'
            />
          </div>
        </div>
      </Header>
      <div className='mt-2 mb-7 px-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-[#372133] text-3xl font-semibold'>
            90s Greatest Hits
          </h1>
        </div>
        <TopPicksContent songs={songs}/>
      </div>
      <div className='mt-2 mb-7 px-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-[#372133] text-3xl font-semibold'>
            Collection
          </h1>
        </div>
        <PageContent songs={songs}/>
      </div>
    </div>
  )
}
