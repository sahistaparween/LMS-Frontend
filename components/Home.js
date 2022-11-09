/* import React, {Component} from'react';
import {Link} from 'react-router-dom';
import { NavLink } from "react-router-dom";
//import image1 from '../images/img1.jpg';
export default class HomeComponent extends Component{
    
    
    render(){
        return(
          
            <>
        <style>
        backgroundImage: "url(../images/img1.png)",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        </style>
            <div>
                <nav class="navbar navbar-light" style={{backgroundColor:'rgb(166,89,89)'}}>
                    <span class="navbar-brand mb-0 h1"><h4>E-LOAN SERVICE</h4></span>
                    
                    
                   <ul class="navbar-nav mr-auto">
                        <li class="nav-item1 active">
                            <Link class="nav-link" to="/" style={{color:"black"}}><h6>Home</h6></Link>
                        </li>
                    </ul>
                    
                     <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/services" style={{color:"black"}}><h6>Contact Us</h6></Link>
                    </li>
                </ul> 
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item2 active">
                        <Link class="nav-link" to="/register" style={{color:"black"}}><h6>Register</h6></Link>
                    </li>
                </ul>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item3 active">
                        <Link class="nav-link" to="/login" style={{color:"black"}}><h6>Login</h6></Link>
                    </li>
                </ul> 
                
                </nav>
            </div>

            <br>
            </br>
            <br>
            </br>
            
            <div>
            <h3>c</h3>
              <label>

                    Work Info

                    <select>

                    <option value="Self-Employed">Self-Employed</option>

                    <option value="Salaried">Salaried</option>

                    <option value="Farming">Farming</option>

                    </select>

            </label>
            <br>
            </br>
            <label>

                Income Category

                <select>

                <option value="less-than 2lakhs">less-than 2lakhs</option>

                <option value="less-than 4lakhs">less-than 4lakhs</option>

                <option value="less-than 6lakhs">less-than 6lakhs</option>

                </select>

            </label>
            <br>
            </br>
            

           
            <div>







            </div>
            </div>

             
           </>
        
        )
    }

} */



import React from 'react';


import Footer from './Footer';
import NavBar from './Navbar';
//import Calculator from '../Calculator';
import '../css/Home.css'
//import { render } from '@testing-library/react';
function Home() {
  

  return (
    <>

      <NavBar/>
      <body>
   
   <div className="intro-header-home">
       <div className="container-Home">

           <div className="row-home">
               <div className="col-lg-8">
                   <div className="intro-message-home">   
                       <h2 className="animated slideInLeft">Check Eligibility For Loan </h2>
                       <br></br>
                       <label>
                     <h4 className="animated slideInRight">Work Info</h4>
                     <select>

                    <option value="Self-Employed">Self-Employed</option>

                    <option value="Salaried">Salaried</option>

                    <option value="Farming">Farming</option>

                    </select>
                    </label>
                    <br></br>
                    <label>
                    <h4 className="animated slideInRight">Income Category</h4>
                     <select>
                    <option value="less-than 2lakhs">less-than 2lakhs</option>

                    <option value="less-than 4lakhs">less-than 4lakhs</option>

                    <option value="less-than 6lakhs">less-than 6lakhs</option>
                    

                    </select>
                    </label><br></br>
                    <label>
                    <h4 className="animated slideInRight">Interest Rate</h4>
                     <select>
                    <option value="less-than 2lakhs">6%</option>

                    <option value="less-than 4lakhs">12%</option>

                    <option value="less-than 6lakhs">16%</option>
                    

                    </select>
                    </label>
                    <label>
                    
                    
                    </label>
                         <ul className="list-inline intro-social-buttons">
                           <li>
                                <a href="#"><button className="button1 animated bounceInUp btn btn-info btn-lg"> <span className="network-name">Check</span></button></a>
                           </li>
                           
                           <li>
                                <a href="#"><button className="button2 animated bounceInUp btn btn-info btn-lg"> <span className="network-name">Reset</span></button></a>
                           </li>
                          
                       </ul>    
                     
             </div> 
               </div>
             <div className="col-lg-4"></div>
           </div>

       </div>

   
   </div>
   <Footer />
</body>
      
      
      
    
      
    
    </>
  );
}

export default Home;