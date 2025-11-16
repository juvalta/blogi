import React from "react";
import Header from "./header";
import { Card } from "./Card";
import dragonFlySound from "../assets/dragonflywav.wav";

function TokkaaOtokkaa() {
    return (
        <>
            <Header />
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

            <Card
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Nehalennia_speciosa_female_andreas_thomas_hein_IMG_9209.JPG/1920px-Nehalennia_speciosa_female_andreas_thomas_hein_IMG_9209.JPG"
                bugName="Kääpiötytönkorento"
                audio={dragonFlySound}
                description="Kääpiötytönkorento (Nehalennia speciosa) on hyvin harvinainen sudenkorentolaji. Suomen lajiston uhanalaisarvioinnissa vuodelta 2010 se luokiteltiin erittäin uhanalaiseksi. Se kuuluu Euroopan uhanalaisimpiin sudenkorentolajeihin ja on kansainvälisestikin vaarantunut."
            />


        </>
    )
}

export default TokkaaOtokkaa