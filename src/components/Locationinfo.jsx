import React from 'react'


const Locationinfo = ({ location }) => {

    return (
        <article className='locationinfo-container'>
            <h2 className='location-content'>{location?.name}</h2>
            <ul className='list-location-item'>
                <li><span>Type: {location?.type}</span></li>
                <li><span>Dimension: {location?.dimension}</span></li>
                <li><span>Population: {location?.residents.length}</span></li>
            </ul>
        </article>
    )
}

export default Locationinfo