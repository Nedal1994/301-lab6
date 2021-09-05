import axios from 'axios'
import React from 'react'


class App extends React.Component
{
  getLocationData = (event) =>
  {
    event.preventDefault()
    const cityName = event.target.cityName.value
    const myKey = `pk.33b75c3814f61e41ad800329948dbdf2`
    const URL = `https://us1.locationiq.com/v1/search.php?key=${myKey}&q=${cityName}&format=json`

    let result = axios.get(URL)
    console.log(result);
  }

  render()
  {
    return(
      <>
      <h1>City explorer</h1>
      <form onSubmit={this.getLocationData()}>
        <label>City name</label>
        <input type='text' name='cityName'/>

      </form>
      </>
    )
  }
}

export default App 