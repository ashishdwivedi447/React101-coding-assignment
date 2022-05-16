import React from "react";
export const Links=()=>{
    const navitems=["Services","Projects","About"];

    return <div className="linkmaindiv">
    {navitems.map((e)=>(
        <div>{e}</div>
    ))}
    </div>
}