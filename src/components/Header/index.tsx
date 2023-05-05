"use client"
import { ArrowRightOnRectangleIcon } from '@heroicons/react/20/solid'
import { SearchInput } from '../SearchInput';
import { useAuth } from '@/context/FakeAuthContext';



export const Header = () => {

  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  }

  return (
    <header className="fixed w-full h-24 flex items-center justify-between px-8 py-4 top-0 left-0 z-40 border-b-2 shadow-md bg-white">
      <div className='flex w-20 h-auto m-0 p-0'>
        <img src='/header_icon.png' alt='pickle rick' className='w-full h-full m-0 p-0'/>
      </div>
      <SearchInput />
      <div className="flex items-center w-fit">
        <button 
          onClick={handleLogout}
          className='w-6 h-auto ml-4'
        >
          <ArrowRightOnRectangleIcon />
        </button>
      </div>

    </header>
  );
};