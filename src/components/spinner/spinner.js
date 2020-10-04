import React from "react";
import MoonLoader from "react-spinners/MoonLoader";
import './spinner.sass'


const Spinner =()=>{
    return(
        <div className='spinner-wrap'>
            <MoonLoader color={"#edfd03"}/>
        </div>
    )
}

export default Spinner;