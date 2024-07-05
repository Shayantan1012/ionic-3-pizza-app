import { useState } from "react";
import SignUpPresentation from "./SignUpPresentation/";
import toast from 'react-hot-toast';
function SignUp(){

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
function handelFormSubmit(e){
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
        
        console.log(signUpState);
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