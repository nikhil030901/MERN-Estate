import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom';
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
    <div className='flex justify-between items-center max-w-6l  mx-auto p-3'>
        <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl flex flex-wrap' >
            <span className='text-slate-500'>Jumbo</span>
            <span className='text-slate-700'>Estate</span>
        </h1>
        </Link>
        <form className='bg-slate-100 p-2 rounded-lg flex items-center'>
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64 '/>
            <FaSearch className='text-slate-700'/>
        </form>
        <ul className='flex gap-3'>
          <li className='text-slate-700 hidden sm:inline hover:underline'>Home</li>
        <Link to='/about'>
          <li className='hover:underline text-slate-700 hidden sm:inline'>About</li>
        </Link>
        <Link to='sign-in'>
          <li className='hover:underline text-slate-700'>SignIn</li>
        </Link>
        </ul>
    </div>
    </header>
  )
}
