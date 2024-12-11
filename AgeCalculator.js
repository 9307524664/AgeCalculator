import React, { useState } from 'react'

const AgeCalculator = () => {

    const [birthdate,setBirthdate]=useState('');
    const[age,setAge]=useState(0);

    const calculateAge=()=>{
                const today=new Date();
                const birthdateDate=new Date(birthdate);

                let age=today.getFullYear()-birthdateDate.getFullYear();
               const monthDiff = today.getMonth() - birthdateDate.getMonth();
               if(monthDiff<0||(monthDiff===0&&today.getDate()))
               {
                age--;
               }
                setAge(age);
    }

   const resetCal =()=>{
    setBirthdate('');
    setAge(0);
   }

  return (
    <div className='Container'>
        <h2 className='heading container_title'>Age Calculator</h2>
        <p className='para container_title'> The Age Calcultor Can determine the age or interval</p>
        <div className='Container_middle'>

            <div className='right'>
                <h4>Date of Birth</h4>
                <input className='date' type='date'value={birthdate} onChange={e=>setBirthdate(e.target.value)}/>
                <div className='button_div'>
                    <button className='button-65'onClick={calculateAge}>Calculate Age</button>
                    <button className='button-65'onClick={resetCal}>Reset</button>  </div>

                
            </div>

            <div className='left'>
                        <div className='Container_middle_para'></div>
                            <h1>Your Age is</h1>
                        </div>
                        <h1 className='age_heading'>{age>0?`${age}`:''}</h1>
                        
                    </div>

                    </div>
        
     
    
  
  )
}

export default AgeCalculator
