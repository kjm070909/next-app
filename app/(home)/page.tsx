import Link from "next/link";
import React from "react";


export const URL = "https://billions-api.nomadcoders.workers.dev"


export const metadata = {
    title:"Home"
}


async function getpeople() {
    // await new Promise((resolve) => setTimeout(resolve,1000));
    const response = await fetch(URL)
    const json = await response.json();
    return json;
    
}

export default async function Homepage() {
    const movies = await getpeople()
    return(
        <div >
            {movies.map((person) => <li key={person.id}>
                <Link href={`/person/${person.id}`}><img src={person.squareImage}></img></Link>
                

                </li>)}
       
        </div>
    )
}