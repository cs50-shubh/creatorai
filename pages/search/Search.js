import React, { useState } from 'react'
import styles from '../../styles/Search.module.css'
import Results from './Results'
import { BeatLoader } from 'react-spinners';

const Search = (props) => {
    const [text, settext] = useState('')
    const [data, setdata] = useState(null)
    const [loading, setloading] = useState(false)
    
    const callService = async (val)=>{
        const headers = {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
        const response = await fetch('http://13.235.75.216:3000/',{
            headers: headers,
            method: 'POST',
            body: JSON.stringify({
              "prompt": val,
            })
        }).then(res=>{
            return res.json()
        }).catch(e=>console.error(e))
    
        console.log('final',response)
        return response
    }


    const getImages = async ()=>{
      if(text.length>0){
        setloading(true)
        setdata(null)
        const response = await callService(text)
        if(response?.data?.length>0){
          setdata(response?.data)
        }
        setloading(false)
      }
    }

    return (
      <div>
        <div className={styles.container}>
            <input 
                value={text}
                onChange={(t)=>settext(t.target.value)}
                onKeyDown={(e)=>{
                  if(e.keyCode === 13) {
                    getImages()
                  }
                }}
                placeholder={'Search for eg. "Cat sitting on a rooftop with light bulb in hand"'}
                className={styles.search}
            />
            <button 
              className={styles.generate} 
              onClick={getImages}
            >
                {loading ? 
                  <BeatLoader
                    color={'#66a8e2'}
                    loading={loading}
                    cssOverride={loading ? {margin: '0px 15px'} : {}}
                    size={5}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  /> :
                  'Generate'}
            </button>

        </div>
        {data?.length>0 && <Results data={data} />}
      </div>
    )
}

export default Search