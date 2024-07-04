import React from 'react';
function Layout({child}){
return (
    <div>
        <nav>Navber</nav>
         {child}
        <footer> Footer</footer>
    </div>
)
}
export default Layout;