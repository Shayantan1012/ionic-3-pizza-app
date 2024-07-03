import pizza2 from '../assets/pizza2.png'
function Home(){
return(
    <div >
   <section className=" flex flex-col-reverse items-center justify-items-center py-4 justify-center md:flex-row  bg-gradient-to-r from-amber-50 to-orange-300">

    < div className=" w-4/6 ml-4 flex flex-col justify-between  text-4xl text-center md:w-2/6 md:text-left">
    <div className="flex justify-center md:justify-start">
            <div className="flex flex-row justify-between ">
                 
                    <h1 className="pb-2   text-transparent bg-gradient-to-r from-orange-400 to-red-500   bg-clip-text font-bold">Enjoy the Slice {" "}</h1>
                    <div>
                        😃
                    </div>
            </div>
    </div> 
            
    <div className="text-sm font-semibold mt-3 mb-3 italic text-slate-600">
                The Pizza App lets you order your favorite pizza from the comfort of your home. 
                Enjoy the best pizza in town with just a few clicks.
    </div>
            <div className="flex justify-center md:justify-start">
                <div className="flex  justify-items-center items-center  basis-[40%] px-4 py-2 rounded-md justify-between bg-yellow-400 hover:bg-yellow-200">
                    
                    <button className=" text-xl font-semibold    ">
                        Order Now
                    </button>
                    <span className="transition-transform ease-in-out hover:translate-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    </span>

                </div>
            </div>
    
    </div>
    <div>
        <img
       src={pizza2}
       width={550}
       height={550}
        />
    </div>

    </section>

    </div>
)
}
export default Home;