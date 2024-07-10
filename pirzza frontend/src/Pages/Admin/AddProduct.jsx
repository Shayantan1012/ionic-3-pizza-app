
import { useState } from "react";
import AddProductPresentation from "./AddProductPresentation";
import { useDispatch } from "react-redux";
import { addProducts } from "../../Redux/Slice/ProductSlice";
import toast from "react-hot-toast";

function AddProduct(){
const [productInput,setProductInput]=useState({
    productName:'',
    description:'',
    price:'',
    quantity:'',
    catagory:'veg',
    productImage:'',
    inStock:true,
})

const dispatch=useDispatch();

function handelProductInput(e){
  const  {name,value}=e.target;
  if(name=='inStock'){
    if(value=='True'){
        setProductInput({inStock:true})
    }
    else{
        setProductInput({inStock:false})
    }
  }
  else{
  setProductInput(
    {...productInput,
       [name]:value,
    }
  )
}
}
async function submitProductForm(e){
      e.preventDefault();
      console.log(productInput);
        if(!productInput.productName  ||!productInput.description||!productInput.price||!productInput.productImage||!productInput.quantity||!productInput.catagory){
            toast.error("Please fill the all boxes!!!!");
            return ;
            }    

        const formData = new FormData();
    for (const key in productInput) {
      formData.append(key, productInput[key]);
    }

    const apiRespone= await dispatch(addProducts(formData));
    console.log("This is api response->",apiRespone);
    return apiRespone;
        }
    
    

    return (
        <div>
            <AddProductPresentation
            handelProductInput={handelProductInput}
            submitProductForm={submitProductForm}
            />
        </div>
    )
}

export default AddProduct;