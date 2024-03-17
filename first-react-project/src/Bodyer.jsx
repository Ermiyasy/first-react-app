import login from './asset/bg-01.jpg'
import Side from './Side.jsx'
import { useState } from 'react'

function Bodyer(){
const [name,setName]= useState();
  function handle (event){
   setName(event.target.value);
  }
    return(
     <>
       <Side/>
        <div className="card">
            <div>
               <img className='card-image' src={login} alt="Game card " />
            </div>
                         <h2 className='card-title'>LOGIN PAGE</h2>
                <div className="login-input">
                        <label htmlFor="">User Name : 
                            <input value={name} onChange={handle} placeholder='Enter Your Name'/>
                        </label>
                        <br />
                        <label  htmlFor="">Password :
                            <input type='password' placeholder='Enter Your Password'/>
                        </label>
                        <br />
                        <button value={login} >Login</button>
                        <button type="reset">RESET</button>
                        <p className='card-text'>Thank you for working with us {name}</p>
                </div>
        </div>

    </>
    );

}

export default Bodyer