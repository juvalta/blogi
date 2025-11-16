import React from "react";
import Header from "./header";
import {Card} from "./Card";

function TokkaaOtokkaa () {
    return (
        <>
            <Header/>
            <Card
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/BIEDRONA.JPG/960px-BIEDRONA.JPG"
                bugName="Leppäkerttu"
                description="Seitsenpistepirkko (Coccinella septempunctata) on leppäkerttulaji, jolla on punaisissa peitinsiivissään seitsemän mustaa täplää. Lajin toukka on tumma. Seitsenpistepirkko on peto ja se syö erityisesti kirvoja."
            />

            <Card
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/f/f9/Lycaena.hippothoe.male.jpg"
                bugName="Ketokultasiipi"
                description="Ketokultasiipi (Lycaena hippothoe) on sinisiipisten heimoon kuuluva pienikokoinen päiväperhonen. Laji esiintyy palearktisella alueella, mutta laji on kuitenkin vahvasti taantunut."
            />
        </>
    )
}

export default TokkaaOtokkaa