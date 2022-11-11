import React, { useEffect, useState } from 'react';
import {FaSun, FaMoon} from 'react-icons/fa';
import './Settings.css';

const Settings = ({setAdjustmentVars, adjustmentVars}) => {
    
    const handleChange =(e)=>{
        const {name} = e.target;
        if(name==='font-fam'){
            return setAdjustmentVars({...adjustmentVars, fontFam:e.target.value})
        }
        setAdjustmentVars({...adjustmentVars, fontSize:e.target.value})
    }

    return (
        <div className='settings-container'>
            <h3>Settings</h3>
            <div className='font-size-adjustment'>
               <p>Adjust Font Size</p>
                <input
                    type='range'
                    min= '0.7'
                    max='1.5'
                    step='0.01'
                    value= {adjustmentVars.fontSize}
                    onChange={handleChange}
                    className='slider-alt'/>
            </div>
            <div className='font-family-adjustment'>
                <p>Choose Font Type</p>
                <li>
                    Metrophobic
                   <input onChange={handleChange} type={'radio'} name='font-fam' value='Metrophobic'/> 
                </li>
                <li>
                    sans-serif
                   <input onChange={handleChange} type={'radio'} name='font-fam' value='sans-serif'/> 
                </li>
                <li>
                    Times New Romans
                   <input onChange={handleChange} type={'radio'} name='font-fam' value='Times New Romans'/> 
                </li>
                <li>
                    Poppins
                   <input onChange={handleChange} type={'radio'} name='font-fam' value='Poppins'/> 
                </li>
                <li>
                    Serif
                   <input onChange={handleChange} type={'radio'} name='font-fam' value='serif'/> 
                </li>
            </div>
            <div className='brightness-adjustment'>
                <p>Set Brightness</p>
                <input type='range' min='0' max='1' step='1' className='brightness-slider'/>
                <div>
                  <FaMoon/><FaSun/>  
                </div>
            </div>
        </div>
    )
}

export default Settings