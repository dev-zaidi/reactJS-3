import React from 'react'
import Card from './Card/Card'
import styles from './card/Card.module.css'
import { Data } from '../Data'

const CardSection = () => {
  return (
    <>
    {Data.map((element,index)=>{
        return(
            <div className={styles.cardSection}>
            <Card key={index} id={element.id} name={element.title} imageURL={element.image} category={element.category} description={element.description} price={element.price} rating={element.rating.rate} ratingOutOf={element.rating.count}/>
            </div>
        )
    })}
    </>
    
  )
}

export default CardSection