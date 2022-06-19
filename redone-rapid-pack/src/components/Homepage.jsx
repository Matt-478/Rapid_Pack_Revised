import React from 'react'
import { useState, useEffect } from 'react';

function Homepage() {
  const[query, setQuery] = useState("")
  const[realState, setRealState] = useState("")
  const[cityInfo, setCityInfo] = useState([])

  useEffect(()=>{
    if(query.length >= 4) {
      setRealState(query)
    }
  },[query])

  const handleChange = (e) => {
    setQuery(e.target.value)
    // console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target.value)
    setRealState(query)
    console.log(realState)
  }

  const handleTravelCity = (city) => {
    setRealState(city)
  }

  function toTitleCase (str) {
    let text = str
    text = text.toLowerCase()
      .split(' ')
      .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
      .join(' ');
    return text
  }

  async function fetchWikipediaCitySummary(query) {
    const response = await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + query + "?redirect=false")
    const data = await response.json()
    setCityInfo(data)
    console.log(cityInfo)

    // checking if the city typed is the same as in the query
    // console.log(query)
  }


  return (
    <>
 <div className="App">
      <div className="header-bg">
        <div className="head-line">
          <h2>"Fuck it, let's go somewhere"</h2>
        </div>

          <div className="p-page">
            <div className="wrapper" >
              <form onSubmit={handleSubmit}>
              <div className="searchBar" >
                <input id="searchQueryInput" type="text" name="searchQueryInput" placeholder="It all starts with a simple query..." value={query} onChange={handleChange}/>
                <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
                  <svg  viewBox="0 0 24 24">
                  <path fill="#666666" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z" />
                  </svg>
                </button>
              </div>
              </form>
            </div>
          </div>
      </div>


      <div className="header-bg-dark">
       <div className="p-page">


      <div className="travel-options-box-container" style={{display: realState.length >4 ? "none" : ""}}>
          <div className="travel-options-box relative" onClick={() => handleTravelCity("Dublin")}><h2>Dublin</h2></div>
          <div className="travel-options-box relative" onClick={() => handleTravelCity("Paris")}><h2>Paris</h2></div>
          <div className="travel-options-box relative" onClick={() => handleTravelCity("Tokyo")}><h2>Tokyo</h2></div>
          <div className="travel-options-box relative" onClick={() => handleTravelCity("Berlin")}><h2>Berlin</h2></div>
      </div>

      <div className="left-area-top">
        <h3>{query && toTitleCase(query) || realState && toTitleCase(realState)}</h3>
          <div className="d-flex-space">
          <div className="left-side">
            <p>
              {cityInfo.extract}
            </p>
          </div>
          <div className="right-side">      
          </div>
          </div>
      </div>
      </div>
    </div>
    </div> {/* padding div */}


      
  </>
  )
}

export default Homepage
