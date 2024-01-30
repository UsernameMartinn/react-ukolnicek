import { useState, useEffect } from "react"


export default function PolozkaUkolu( {ukol, poradi, fceSmazat} ) {

    return (
        <>
        <span>{poradi}. </span>
        {!ukol.spleno && <span className="text-ukolu">{ukol.text}</span>}
        {ukol.spleno && <span className="splneny-ukol">{ukol.text}</span>}
        <button onClick={() => fceSmazat(poradi)}>Smazat</button>
        <button>Hotovo</button>
        <br/>
        </>
    )
}