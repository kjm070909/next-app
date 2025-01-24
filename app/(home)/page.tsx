import Link from "next/link";
import React from "react";
import { URL } from "../about-us/constants";
import styles from "../styles/(home-style)/page.module.css"



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
        <div className={styles.div}>
            {movies.map((person) => <li className={styles.li} key={person.id}>
                <Link href={`/person/${person.id}`}><img src={person.squareImage}></img></Link>
                <h4>{person.name}</h4>
                <h5>{person.netWorth}billions / {person.industries}</h5>
                

                </li>)}
       
        </div>
    )
}