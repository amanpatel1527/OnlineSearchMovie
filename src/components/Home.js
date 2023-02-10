import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
   const [search, setsearch] = useState();
  return (
    <div className = 'homeBg'>
        <div className='home'>
            <h1>Search for your favourite movies!.</h1>
            <input value={search} onChange={(event)=>setsearch(event.target.value)} type='text' placeholder='Search Movies, Tv shows and more...'/>

       
        <button type = 'submit'>
            <Link to= {`/search/${search}`}> Search</Link>
        </button>
        </div>

    </div>
  )
}

export default Home