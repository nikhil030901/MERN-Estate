import {Link} from 'react-router-dom';

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl my-7 font-semibold text-center'>Sign Up</h1>
      <form className='flex flex-col  gap-6 '>
        <input type="text" placeholder='username' className='p-3 border rounded-lg' id='username'/>
        <input type="email" placeholder='email' className='p-3 border rounded-lg' id='email' />
        <input type="password" placeholder='password' className='p-3 border rounded-lg' id='password' />
      <button className='bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 border-b-4 border-slate-700 hover:border-slate-500 rounded uppercase'>Sign up</button>
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-400'>Sign in</span>
        </Link>
      </div>
    </div>
  )
}
