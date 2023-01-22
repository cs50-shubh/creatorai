import React, { useState } from 'react'
import styles from '../../styles/Search.module.css'
const Results = (props) => {

    const ListItem = ({item})=>{
        return (
            <img
                className={styles.item}
                src={item.url} 
            />
        )
    }
  return (
    <div className={styles.results}>
        <div style={{marginBottom: 20}}>Results</div>
        {props?.data.map((i,id)=>{
            return(
                <ListItem 
                    key={id}
                    item={i}
                />
            )
        })}
    </div>
  )
}

export default Results