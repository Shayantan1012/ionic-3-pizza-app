import pizzalogo from '../assets/pizza1.png'


function Header(){

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
        <li className='text-slate-400 hover:text-slate-800'>Menu {' '}</li>
        <li className='text-slate-400 hover:text-slate-800'>Service {' '}</li>
        <li className='text-slate-400 hover:text-slate-800'>About {' '}</li>
        </ul>
        </div>

        </div>
)
}
export default Header;