import React from "react"
import { URL } from "../../../about-us/constants"


async function getPerson(id) {
    const response = await fetch(`${URL}/person/${id}`)
    return response.json()
}



export default async function Persondetail({params:{id},}:{params:{id:string}}) {

    // const [movie,video] = await Promise.all([getPerson(id),getVideos(id)])
    
    const person = await getPerson(id)
    return(
        <div>
            
            <div>
                <img src={person.squareImage}></img>
                <h4>netWorth:{person.netWorth}</h4>
                <h4>{person.name}</h4>
                <p>{person.netWorth}Billions/{person.industries}</p>
                <div>country: {person.country}</div>
                <div>industries: {person.industries}</div>
                <p>{person.bio}</p>
            </div>
            <div>
                {person.financialAssets.map((coin) => (<li key={coin.id}>ticker: {coin.ticker}<h3>numberOfShares: {coin.numberOfShares}</h3><h5>{coin.exerciseOptionPrice ? `exerciseOptionPrice: ${coin.exerciseOptionPrice}` : ""}</h5></li>))}
            </div>
        </div>
    )
}