import React, { useState } from 'react'
import styles from '../../styles/Search.module.css'
import Results from './Results'
import { callService } from './services'
import { BeatLoader } from 'react-spinners';

const Search = (props) => {
    const [text, settext] = useState('')
    const [data, setdata] = useState(null)
    const [loading, setloading] = useState(false)
    
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
                  console.log(e)
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