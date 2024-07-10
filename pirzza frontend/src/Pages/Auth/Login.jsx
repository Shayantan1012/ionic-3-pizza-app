import { useState } from "react";
import LoginPresentation from "./LoginPresentation";
import toast from 'react-hot-toast';
import { useDispatch } from "react-redux";
import{useNavigate} from 'react-router-dom'
import { login } from "../../Redux/Slice/AuthSlice";
function Login(){
  
 const navigate=useNavigate();
  const dispatch=useDispatch();
const [LoginData,setLoginData]=useState({
email:'',
password:'',
})
 function  handelUserInput(e){
const {name,value}=e.target;
setLoginData({
    ...LoginData,
    [name]:value,
})
 }
async function handelFormSubmit(e){
    e.preventDefault();
    console.log("This is Login data->",LoginData);
if(!LoginData.email ||!LoginData.password){
toast.error("Please fill the all boxes!!!!");
return ;
}    
if(!LoginData.email.includes('@') || !LoginData.email.includes('.')){
        toast.error("Please give a valid emailId!!!!");
        return ;
        }
        const apiRespone=await dispatch(login(LoginData));
console.log("This is api response->",apiRespone);
if(apiRespone.payload.data.success){
    navigate('/');
}
return ;
    }

   

 return (
    <div>
  <LoginPresentation
handelUserInput={handelUserInput}
handelFormSubmit={handelFormSubmit}
  />
    </div>
 )
}
export default Login;