import React from 'react'
import { useState, useEffect } from 'react';

function Homepage() {
  const[query, setQuery] = useState("")


  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // setRealState(query)
  }


  return (
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
  )
}

export default Homepage
