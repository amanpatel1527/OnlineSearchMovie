import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Actor() {
  const { actorId } = useParams()
  const [data, setdata] = useState()

  const url = `https://imdb-api.com/API/Name/k_66860jsi/${actorId}`

  useEffect(() => {
    async function fun1() {
      const result = await axios.get(url);
      
      setdata(result.data)
    }
    fun1();
  },[url])
  return (
    <div>
        <div className='actorCircle'>
            <img src ={data?.image} alt=""/>
        </div>
        <div className='actorDetails'>
            <h1>{data?.name}</h1>
            <h5>{data?.role}</h5>
            <p>{data?.summary}</p>
            <h2>{data?.awards}</h2>
        </div>
        <div className='actorMovies'>
          {
            data?.knownFor?.map((movie)=>(
              <div className='actorCard'>
            <Link to={`/movie/${movie.id}`}>
           < img src={movie.image} alt='movie'/>
           <h3>{movie.title}</h3>
            </Link>
            </div>
            ))
          }
        </div>
    </div>
  )
}

export default Actor