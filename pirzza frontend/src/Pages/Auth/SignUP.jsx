import { useState } from "react";
import SignUpPresentation from "./SignUpPresentation/";
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux";
import{useNavigate} from 'react-router-dom'
import { createAccount } from "../../Redux/Slice/AuthSlice";
function SignUp(){
  
 const navigate=useNavigate();
  const dispatch=useDispatch();
const [signUpState,setSignUpState]=useState({
firstName:'',
email:'',
mobileNumber:'',
password:'',
})
 function  handelUserInput(e){
const {name,value}=e.target;
setSignUpState({
    ...signUpState,
    [name]:value,
})
 }
async function handelFormSubmit(e){
  e.preventDefault();
  console.log(signUpState);
if(!signUpState.firstName || !signUpState.firstName ||!signUpState.mobileNumber || !signUpState.password){
toast.error("Please fill the all boxes!!!!");
return ;
}    
if(signUpState.mobileNumber.length<10 || signUpState.mobileNumber.length>10){
    toast.error("Please give a valid mobilenumber!!!!");
    return ;
    }
if(!signUpState.email.includes('@') || !signUpState.email.includes('.')){
        toast.error("Please give a valid emailId!!!!");
        return ;
        }
if(!signUpState.email.includes('@') || !signUpState.email.includes('.')){
            toast.error("Please give a valid emailId!!!!");
            return ;
        }
const apiRespone=await dispatch(createAccount(signUpState));
console.log("This is api response->",apiRespone);
        if(apiRespone.payload.data.success){
          navigate('/auth/login')
        }
return ;
    }

   

 return (
    <div>
  <SignUpPresentation
handelUserInput={handelUserInput}
handelFormSubmit={handelFormSubmit}
  />
    </div>
 )
}
export default SignUp;