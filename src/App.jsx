
import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Locationinfo from './components/Locationinfo'
import ResidentCard from './components/ResidentCard'
import ErrorFetch from './components/ErrorFetch'
import BGHeader from './components/BGHeader'
import './styles/ResidentCard.css'
import './styles/BGHeader.css'
import './styles/FormSearch.css'
import './styles/Locationinfo.css'



function App() {

    // API
    // https://rickandmortyapi.com/api/location/3

    const [location, setLocation] = useState()
    const [locationInput, setLocationInput] = useState()
    const [hasError, setHasError] = useState(false)


    useEffect(() => {

        let URL
        if (locationInput) {
            URL = `https://rickandmortyapi.com/api/location/${locationInput}`
        } else {
            // Devolver ubicaciones del 1 al 126
            const randomIdLocation = Math.floor(Math.random() * 126) + 1
            URL = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
        }


        axios.get(URL)
            .then(res => {
                setHasError(false)
                setLocation(res.data)
            })
            // .catch(res => console.log(err))
            .catch(err => {
                setHasError(true)
                console.log(err)
            })
    }, [locationInput])

    console.log(location);


    const handleSubmit = e => {
        e.preventDefault()
        setLocationInput(e.target.inputSearch.value)
    }


    return (
        <div className="App">
            <BGHeader />

            <h1 className='item-main-title'>Rick & Morty Wiki</h1>
            <form className='form_search' onSubmit={handleSubmit}>
                <input className='input_search' id="inputSearch" type="text" placeholder='Type a location' />
                <button className='btn_search'>Search</button>
            </form>

            {
                /*Aplicamos renderizado condicinal */

                hasError ?
                    <ErrorFetch />
                    :
                    <>
                        <Locationinfo location={location} />
                        <div className="residents-container">
                            {
                                location?.residents.map(url => (
                                    <ResidentCard key={url} url={url} />
                                ))
                            }
                        </div>
                    </>

            }

        </div>
    )
}

export default App
