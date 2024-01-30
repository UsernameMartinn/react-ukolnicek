import NovyUkol from "./NovyUkol";
import { useState, useEffect } from "react";
import PolozkaUkolu from "./PolozkaUkolu";

export default function Ukolnicek() {

    const [seznamUkolu, nastavSeznamUkolu] = useState(['Novy ukol', 'dalsi ukol']);

    function pridejUkol(novyUkol) {
        nastavSeznamUkolu([...seznamUkolu, novyUkol])
    }



    return (
        <>
        <NovyUkol pridejUkol={pridejUkol} />
        <br />
        { seznamUkolu.map((ukol, poradi) => <PolozkaUkolu ukol={ukol} poradi={poradi}></PolozkaUkolu>) }

        <div>Počet úkolů: {seznamUkolu.length}</div>

        <button onClick={() => pridejUkol("novy ukol")}>Pridej nahodny ukol</button>
        </>
    )
}