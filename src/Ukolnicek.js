import NovyUkol from "./NovyUkol";
import { useState } from "react";

export default function Ukolnicek() {

    const [seznamUkolu, nastavSeznamUkolu] = useState(['Novy ukol', 'dalsi ukol']);

    function pridejUkol(novyUkol) {
        nastavSeznamUkolu([...seznamUkolu, novyUkol])
    }

    return (
        <>
        <NovyUkol pridejUkol={pridejUkol} />
        <br />
        {seznamUkolu}

        <button onClick={() => pridejUkol("novy ukol")}>Pridej nahodny ukol</button>
        </>
    )
}