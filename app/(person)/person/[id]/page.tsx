import React from "react"
import { URL } from "../../../about-us/constants"
import styles from "../../../styles/(person-style)/page.module.css"


async function getPerson(id) {
    const response = await fetch(`${URL}/person/${id}`)
    return response.json()
}



export default async function Persondetail({params}) {

    // const [movie,video] = await Promise.all([getPerson(id),getVideos(id)])
    const {id} = await params
    const person = await getPerson(id)
    return(
        <div className={styles.whole}>
            
            <div className={styles.person}>
                <img src={person.squareImage}></img>
                
                <h2>{person.name}</h2>
                <h4>netWorth:{person.netWorth}</h4>
                <p>{person.netWorth}Billions/{person.industries}</p>
                <div>country: {person.country}</div>
                <div>industries: {person.industries}</div>
                <p>{person.bio}</p>
            </div>
            <div className={styles.coin}>
                {person.financialAssets.map((coin) => (<li key={coin.id}>ticker: {coin.ticker}<h3>numberOfShares: {coin.numberOfShares}</h3><h5>{coin.exerciseOptionPrice ? `exerciseOptionPrice: ${coin.exerciseOptionPrice}` : ""}</h5></li>))}
            </div>
        </div>
    )
}