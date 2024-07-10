import addProductSvg from '../../assets/Addproduct.svg'
import Header from '../../Components/header';
import Footer from '../../Components/Footer';
function AddProductPresentation({handelProductInput,submitProductForm}){
return (
    <div>
        <Header/>
    <div className='flex flex-col md:flex-row bg-gradient-to-r from-amber-50 to-orange-300 justify-center md:justify-between'>
        <div className='hidden md:flex justify-center items-center '>
          <img
          src={addProductSvg}
          />
        </div>
        <div className='flex flex-col items-start max-w-md md:w-4/6  shadow-2xl rounded-lg mr-4'>
        <h1 className='font-bold text-2xl mb-3 mt-2 ml-3 '>Add Product</h1>
        <from className="flex flex-col p-5 items-start justify-end w-full">
        <label className='mb-3 font-semibold'>Product Name<span className='text-red-600'>*</span></label>
        <input
        type='text'
        required
        minLength={5}
        maxLength={20}
        name='productName'
        id='productName'
        placeholder='Margareta Pizza'
        onChange={handelProductInput}
        className='w-full h-[50px] border border-gray-300 pl-2 rounded-lg focus:border-indigo-500 sm:text-sm'
        />          
        <label className='mb-3 font-semibold'>Description</label>
        <input
        type='text'
        required
        minLength={20}
        maxLength={50}
        name='description'
        id='description'
        onChange={handelProductInput}

        className='w-full h-[50px] border border-gray-300 pl-2 rounded-lg focus:border-indigo-500 sm:text-sm'
        />          
        <label className='mb-3 font-semibold'>Product price<span className='text-red-600'>*</span></label>
        <input
        type='number'
        required
        placeholder='450'
        name='price'
        id='price'
        onChange={handelProductInput}

        className='w-full h-[50px] border border-gray-300 pl-2 rounded-lg focus:border-indigo-500 sm:text-sm'
        />          
        <label className='mb-3 font-semibold'>Product quantity<span className='text-red-600'>*</span></label>
        <input
        type='number'
        required
        placeholder='5'
        name='quantity'
        id='quantity'
        onChange={handelProductInput}

        className='w-full h-[50px] border border-gray-300 pl-2 rounded-lg focus:border-indigo-500 sm:text-sm'
        />   
        <label className='mb-3 font-semibold'>In Stock<span className='text-red-600'>*</span></label>
        <select
        required
        name='inStock'
        id='inStock'
        onChange={handelProductInput}

        className='w-full h-[50px] border border-gray-300 pl-2 rounded-lg focus:border-indigo-500 sm:text-sm'
       >
                                <option value='TRUE'>True</option>
                                <option value="FALSE">False</option>
</select>
        <label className='mb-3 font-semibold'>Select Catagory<span className='text-red-600'>*</span></label>
        <select
        id='catagory'
        name='catagory'
        onChange={handelProductInput}

        className='w-full h-[50px] border border-gray-300 pl-2 rounded-lg focus:border-indigo-500 sm:text-sm'
        >
                                <option value="veg">Vegetarian</option>
                                <option value="non-veg">Non-Vegetarian</option>
                                <option value="drinks">Soft drinks</option>
                                <option value="sides">Sides</option>
            </select>          
        <label className='mb-3 font-semibold'>Product image<span className='text-red-600 text-xs'>(.jpg,.png,.jpeg)</span></label>
        <input
        type='file'
        required
        name='productImage'
        id='productImage'
        accept='.jpg,.png,.jpeg'
        onChange={handelProductInput}

        className='w-full h-[50px]  pl-2 rounded-lg focus:border-indigo-500 sm:text-sm'
        />      
        <button
        type="submit"
        onClick={submitProductForm}
        className="w-full bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300 ease-in-out">
        Add product
                        </button>
    
        </from>
        </div>
    </div>
        <Footer/>
    </div>
)
}
export default AddProductPresentation;