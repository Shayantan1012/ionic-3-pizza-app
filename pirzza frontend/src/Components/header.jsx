import pizzalogo from '../assets/pizza1.png'
import{useSelector} from 'react-redux'
import { logout } from '../Redux/Slice/AuthSlice';
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Cart from '../assets/cart.svg'
import { useEffect } from 'react';
import { getCartDetails } from '../Redux/Slice/cartSlice';
function Header(){
    const isLoggedIn=useSelector((state)=>state.auth.isLoggedIn);
    const dispatch=useDispatch();
    async function handelLogout(e){
        e.preventDefault();
        dispatch(logout());
    }
    const navigate=useNavigate();
    const {cartData}=useSelector((state)=> state.cart);
    async function fetchCartDetails() {
        const res = await dispatch(getCartDetails());
        const {isUnauthorised}=res?.payload;
        if(isUnauthorised) {
            console.log("unauthorized");
           await dispatch(logout());
        }
    }
        useEffect(() => {
            if(isLoggedIn) {
                fetchCartDetails();
            }
        }, []);

    return (
        <div className='flex flex-row justify-between bg-gradient-to-r from-amber-50 to-orange-300 '>
       <div className="flex items-center gap-3">
                <div className="font-semibold text-slate-400">
                    Pizza App
                </div>
                <div>
                    <img
                    src={pizzalogo}
                    />
                </div>
        </div>
        <div className=' hidden md:flex item-center '>
        <ul className='flex items-center gap-5 mr-9 font-semibold '>
        <button className='text-slate-400 hover:text-slate-800' onClick={()=>navigate('/product/allProduct')}>Menu {' '}</button>
        <li className='text-slate-400 hover:text-slate-800'>Service {' '}</li>
        <li className='text-slate-400 hover:text-slate-800'>About {' '}</li>
        <li className='text-slate-700 hover:text-slate-800 hover:text-slate-600 bg-yellow-300 hover:bg-yellow-500 p-2 flex items-center 
        justify-center rounded-lg'>{isLoggedIn ? (<Link onClick={handelLogout}>Log Out</Link>): (<Link to={'/auth/login'}>Log In</Link>)}</li>

{isLoggedIn && (
          <Link to={'/cart'}>
          <li className='w-[50px] flex flex-row justify-center items-center h-full hover:bg-amber-300 rounded-lg'>
            <img src={Cart}/>
            {' '}
           
            <p className='text-black ml-4 font-bold inline'> {cartData?.items?.length}</p>
          </li>
          </Link>
        )}

        </ul>
        </div>

        </div>
)
}
export default Header;