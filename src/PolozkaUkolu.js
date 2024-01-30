import { useState, useEffect } from "react"


export default function PolozkaUkolu( {ukol, poradi, fceSmazat} ) {

    return (
        <>
        <span style={{color: "red", fontWeight: "bold", fontSize: "20px"}}>{poradi}. </span>
        <span style={{color: "red", fontWeight: "bold", fontSize: "20px"}}>{ukol}</span>
        <button onClick={() => fceSmazat(poradi)}>Smazat</button>
        <button>Hotovo</button>
        <br/>
        </>
    )
}