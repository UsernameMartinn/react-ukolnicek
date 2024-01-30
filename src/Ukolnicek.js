import NovyUkol from "./NovyUkol";
import { useState, useEffect } from "react";
import PolozkaUkolu from "./PolozkaUkolu";

export default function Ukolnicek(poradi) {

    //const [seznamUkolu, nastavSeznamUkolu] = useState(['Novy ukol', 'dalsi ukol']);

    const [seznamUkolu, nastavSeznamUkolu] = useState([
        {text: 'Novy ukol', splneno: false},
        {text: 'dalsi ukol', splneno: false},
        {text: 'splneny ukol', splneno: true}
    ])

    function pridejUkol(novyUkol) {
        let novyUkolObj = {text: novyUkol, splneno: false};
        nastavSeznamUkolu([...seznamUkolu, novyUkolObj])
    }

    function smazatUkol(poradiUkolu) {
        let upravenySeznamUkolu = [...seznamUkolu];
        upravenySeznamUkolu.splice(poradiUkolu, 1);
        nastavSeznamUkolu(upravenySeznamUkolu)
    }

    function splnUkol(poradiUkolu) {
        let upravenySeznamUkolu = [...seznamUkolu];
        upravenySeznamUkolu[poradiUkolu].splneno = true;
        nastavSeznamUkolu(upravenySeznamUkolu);
    }



    return (
        <>
        <NovyUkol pridejUkol={pridejUkol} />
        <br />
        { seznamUkolu.map((ukol, poradi) => <PolozkaUkolu ukol={ukol} poradi={poradi} fceSmazat={smazatUkol} fceSpln={splnUkol}></PolozkaUkolu>) }

        <div>Počet úkolů: {seznamUkolu.length}</div>

        <button onClick={() => pridejUkol("novy ukol")}>Pridej nahodny ukol</button>
        </>
    )
}