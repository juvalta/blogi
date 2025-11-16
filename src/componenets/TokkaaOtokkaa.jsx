import React from "react";
import Header from "./header";
import { Card } from "./Card";
import dragonFlySound from "../assets/dragonflywav.wav";
import butterFlySound from "../assets/butterfly.mp3"
import ladyBugSound from "../assets/beetle.flac"
import grassHopperSound from "../assets/grasshopper.wav"

function TokkaaOtokkaa() {
    return (
        <>
            <Header />
            <Card
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/f/f9/Lycaena.hippothoe.male.jpg"
                bugName="Ketokultasiipi"
                audio={butterFlySound}
                description="Ketokultasiipi (Lycaena hippothoe) on sinisiipisten heimoon kuuluva pienikokoinen päiväperhonen. Laji esiintyy palearktisella alueella, mutta laji on kuitenkin vahvasti taantunut."
            />

            <Card
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Nehalennia_speciosa_female_andreas_thomas_hein_IMG_9209.JPG/1920px-Nehalennia_speciosa_female_andreas_thomas_hein_IMG_9209.JPG"
                bugName="Kääpiötytönkorento"
                audio={dragonFlySound}
                description="Kääpiötytönkorento (Nehalennia speciosa) on hyvin harvinainen sudenkorentolaji. Suomen lajiston uhanalaisarvioinnissa vuodelta 2010 se luokiteltiin erittäin uhanalaiseksi. Se kuuluu Euroopan uhanalaisimpiin sudenkorentolajeihin ja on kansainvälisestikin vaarantunut."
            />
            <Card 
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/e/e8/Chorthippus_parallelus.jpg"
                bugName="Heinäsirkka"
                audio={grassHopperSound}
                description="Heinäsirkat (Acrididae) on suorasiipisten hyönteisten heimo. Siihen kuuluu yli 10 000 lajia. Suomenkielisen nimensä heinäsirkat saivat Mikael Agricolalta. Sana heinäsircat mainitaan ensimmäisessä suomenkielisessä Raamatussa vuodelta 1642."
            />
            <Card
                imgSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/BIEDRONA.JPG/960px-BIEDRONA.JPG"
                bugName="Leppäkerttu"
                audio={ladyBugSound}
                description="Seitsenpistepirkko (Coccinella septempunctata) on leppäkerttulaji, jolla on punaisissa peitinsiivissään seitsemän mustaa täplää. Lajin toukka on tumma. Seitsenpistepirkko on peto ja se syö erityisesti kirvoja."
            />

        </>
    )
}

export default TokkaaOtokkaa