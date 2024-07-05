import React from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/header';
function Layout({child}){
return (
    <div>
        <nav><Header/></nav>
         {child}
        <footer> <Footer/></footer>
    </div>
)
}
export default Layout;