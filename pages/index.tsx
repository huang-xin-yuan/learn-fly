import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='container mx-auto'>
      <Head>
        <title>learn-fly</title>
        <meta name="description" content="learn-fly" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex flex-col items-center'>
        <h1 className="text-3xl font-bold my-8">
          learn-fly
        </h1>

        <div className='w-full p-4 rounded-sm bg-gradient-to-r from-cyan-500 to-fuchsia-500'>
          ok
        </div>
      </div>


    </div>


  )
}

export default Home
