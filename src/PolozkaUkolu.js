import { useState, useEffect } from "react"


export default function PolozkaUkolu( {ukol, poradi, fceSmazat, fceSpln} ) {

    return (
        <>
        <span>{poradi}. </span>
        {!ukol.splneno && <span className="text-ukolu">{ukol.text}</span>}
        {ukol.splneno && <span className="splneny-ukol">{ukol.text}</span>}
        <button onClick={() => fceSmazat(poradi)}>Smazat</button>
        <button onClick={() => fceSpln(poradi)}>Hotovo</button>
        <br/>
        </>
    )
}