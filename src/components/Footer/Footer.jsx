import React from "react";
import imgLogo from "../../assets/logo.png";
import { Link } from "react-router";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";


const Footer = () =>{
    return(
        <div className="bg-[#001931] h-[183px]">
<div className=" flex  justify-between items-center w-11/12 mx-auto">
            <div className="flex gap-2">
        <img src={imgLogo} alt="" className="w-8 h-8"/>
    <Link to='/' className="text-xl text-white ">HERO.IO</Link>
    </div>
    <div className="mt-4">
        <p className="text-white text-xl ">Social Links</p>
        
            <ul className="flex justify-center gap-2 p-4">
                <li><img src={img3} alt="" /></li>
                <li><img src={img2} alt="" /></li>
                <li><img src={img1} alt="" /></li>
            </ul>

        
    </div>
    </div>
    <h2 className="text-white text-lg text-center mt-10">Copyright © 2025 - All right reserved</h2>
    
 
        </div>
      
    )
}

export default Footer;