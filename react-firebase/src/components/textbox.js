import React from 'react';
import Google from './Google.svg'
import Git from './Vector.svg'
import LinkedIn from './LinkedIn.svg'

const Textbox = () => {
    return (
        <>
        <div>
            <input className='textbox1' placeholder='Enter Email'></input>
        </div>

        <div>
            <input className='textbox2' placeholder='Enter Password'></input>
        </div>

        <h1 className='text1'>Recover Password ?</h1>

        <button className='signin' type='submit'>Sign In</button>

        <hr className='line1'></hr>

        <h1 className='text2'>Or Continue with</h1>

        <hr className='line2'></hr>

        <div className='google_box'>
            <img src={Google} />
        </div>
            
        <div className='git_box'>
            <img src={Git} />
        </div>

        <div className='linkedin_box'>
            <img src={LinkedIn} />
        </div>
        </>
    )
    
}

export default Textbox;