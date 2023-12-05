import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import OAuth from '../component/OAuth';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    });
  };
  console.log(formData);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try { 
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', 
      {
        method:'POST',
        headers:{
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if(data.success === false){
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl my-7 font-semibold text-center'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col  gap-6 '>
        <input type="email" placeholder='email' className='p-3 border rounded-lg' id='email' onChange={handleChange}/>
        <input type="password" placeholder='password' className='p-3 border rounded-lg' id='password' onChange={handleChange}/>
      <button 
     disabled={loading} className='bg-slate-500 hover:bg-slate-400 text-white font-bold py-2 px-4 border-b-4 border-slate-700 hover:border-slate-500 rounded uppercase'>{loading ? 'Loading...' : 'Sign In'}</button>
     <OAuth/>
      </form>

      <div className='flex gap-2 mt-5'>
        <p>Dont have an account?</p>
        <Link to={"/sign-up"}>
          <span className='text-blue-400'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p> }
    </div>
  )
}
