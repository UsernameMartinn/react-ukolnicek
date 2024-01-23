import NovyUkol from "./NovyUkol";
import { useState } from "react";
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
        { seznamUkolu.map((ukol) => <PolozkaUkolu ukol={ukol}></PolozkaUkolu>) }

        <button onClick={() => pridejUkol("novy ukol")}>Pridej nahodny ukol</button>
        </>
    )
}