import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Movie() {
    const { movieId } = useParams()
    const [data, setdata] = useState()
    const [trailer,settrailer] = useState()
    const url = `https://imdb-api.com/API/Title/k_66860jsi/${movieId}`;
  useEffect(() => {
    async function fun1() {
      const result = await axios.get(url);
      
      setdata(result.data)
    }
    fun1();
  },[url])

    
    
 
    const url2 = `https://imdb-api.com/API/Trailer/k_66860jsi/${movieId}`;
  useEffect(() => {
    async function fun2() {
      const result = await axios.get(url2);
      
      settrailer(result.data)
    }
    fun2();
  },[url2])
  return (
   <div>
     <div className='coverImg'>
            <img className='coverMainImg'src={ trailer?.thumbnailUrl} alt='img' />
        </div>
        <div className='MovieBody'>
                <div className='MovieContainer'>
                    <div className='MovieRating'>
                        <img src={data?.image} alt='displayimg' />
                        <p>
                            <span>{data?.imDbRating}</span>/10
                        </p>
                    </div>
                    <div className='movieDescription'>
                        <h1>{data?.title}</h1>
                        <p>{data?.year}</p>
                        <p>{data?.genre}</p>
                        <p>{data?.plot}</p>
                    </div>
                </div>
                <div className='cast'>
                    <div className='castHeading'>
                        <h1>Cast</h1>
                        <p>Cast overview, first billed only</p>
                    </div>
                    <div className='castName'>
                      {
                        data?.actorList?.map((actor)=>(
                              
                        <div>
                        <Link to={`/actor/${actor.id}`}>
                            <div className='castActors'>
                                <div className='castCircle'>
                                    <img className='cardImg' src={actor?.image} alt='img'/>
                                </div>
                                <div className='castActorName'>
                                    <h2>{actor?.name}</h2>
                                    <p>{actor?.asCharater}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                        ))
                      }
                    </div>
                </div>
        </div>



   </div>
   

  )
}

export default Movie