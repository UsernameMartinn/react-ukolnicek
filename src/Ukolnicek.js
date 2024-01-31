import NovyUkol from "./NovyUkol";
import { useState, useEffect } from "react";
import PolozkaUkolu from "./PolozkaUkolu";


export default function Ukolnicek(poradi) {

    //const [seznamUkolu, nastavSeznamUkolu] = useState(['Novy ukol', 'dalsi ukol']);

    const [seznamUkolu, nastavSeznamUkolu] = useState([
        { text: 'Novy ukol', splneno: false },
        { text: 'dalsi ukol', splneno: false },
        { text: 'splneny ukol', splneno: true }
    ])

    function pridejUkol(novyUkol) {
        let novyUkolObj = { text: novyUkol, splneno: false };
        nastavSeznamUkolu([...seznamUkolu, novyUkolObj])
    }

    function smazatUkol(poradiUkolu) {
        let upravenySeznamUkolu = [...seznamUkolu];
        upravenySeznamUkolu.splice(poradiUkolu, 1);
        nastavSeznamUkolu(upravenySeznamUkolu)
    }

    function splneno() {
        /*let pocetSplnenych = 0
        for (let ukol of seznamUkolu) {
            if (ukol.splneno) {
                pocetSplnenych ++
            }
        }
        */
       let pocetSplnenych = seznamUkolu.filter(ukol => ukol.splneno).length

        
        return pocetSplnenych
        /*for(let i = 0; i <= seznamUkolu.length; i++) {
            if (seznamUkolu[i].splneno == true) {
                pocetSplnenych = pocetSplnenych + 1
            }
            
        }
        return pocetSplnenych
        */
    }


    /*
    function splnUkol(poradiUkolu) {
         let upravenySeznamUkolu = [...seznamUkolu];
         if (upravenySeznamUkolu[poradiUkolu].splneno == true) {
             upravenySeznamUkolu[poradiUkolu].splneno = false;
         } else {
             upravenySeznamUkolu[poradiUkolu].splneno = true;
         }
         nastavSeznamUkolu(upravenySeznamUkolu);
     }
     */

    function splnUkol(poradiUkolu) {
        let upravenySeznamUkolu = [...seznamUkolu];
        upravenySeznamUkolu[poradiUkolu].splneno = !upravenySeznamUkolu[poradiUkolu].splneno
        nastavSeznamUkolu(upravenySeznamUkolu);
    }



    return (
        <>
            <NovyUkol pridejUkol={pridejUkol} />
            <br />
            {seznamUkolu.map((ukol, poradi) => <PolozkaUkolu ukol={ukol} poradi={poradi} fceSmazat={smazatUkol} fceSpln={splnUkol}></PolozkaUkolu>)}

            <div>Počet úkolů: {seznamUkolu.length}</div>
            <div>Počet splněných úkolů: {splneno()}</div>
            <div>Počet nesplněných úkolů: {seznamUkolu.filter(ukol => !ukol.splneno).length}</div>

            <button onClick={() => pridejUkol("novy ukol")}>Pridej nahodny ukol</button>
        </>
    )
}