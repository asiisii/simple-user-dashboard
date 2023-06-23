import Image from 'next/image';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { TbWorldWww, TbMailHeart } from 'react-icons/tb';
import profile from '../public/profile.png';
import Link from 'next/link';

const Settings = () => (
  <div className='flex flex-col items-center justify-center h-screen'>
    <div className='max-w-xs p-6 bg-blue-200 text-blue-700 rounded-xl shadow-md'>
      <Image
        src={profile}
        alt='my selfie'
        className='w-50 h-50 mx-auto rounded-full bg-gray-500 aspect-square shadow-md'
      />
      <div className='space-y-4 text-center divide-y divide-blue-300'>
        <div className='my-2 space-y-1'>
          <h2 className='text-xl font-semibold sm:text-2xl'>Asiisii</h2>
          <p className='px-5 text-xs sm:text-base text-blue-400'>
            Full-stack developer
          </p>
        </div>
        <div className='flex justify-center pt-2 space-x-4 align-center'>
          <Link
            rel='noopener noreferrer'
            href='https://github.com/asiisii'
            className='p-2 rounded-md text-blue-700 hover:text-violet-400 shadow-md'
          >
            <FaGithub className='w-8 h-8' />
          </Link>
          <Link
            rel='noopener noreferrer'
            href='https://asiisii.vercel.app/'
            className='p-2 rounded-md text-blue-700 hover:text-violet-400 shadow-md'
          >
            <TbWorldWww className='w-8 h-8' />
          </Link>
          <Link
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/asiisii/'
            className='p-2 rounded-md text-blue-700 hover:text-violet-400 shadow-md'
          >
            <FaLinkedinIn className='w-8 h-8' />
          </Link>
          <Link
            href='mailto:ashishmalla45@gmail.com'
            rel='noopener noreferrer'
            aria-label='Email'
            className='p-2 rounded-md text-blue-700 hover:text-violet-400 shadow-md'
          >
            <TbMailHeart className='w-8 h-8' />
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Settings;
