import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {changeSearchTerm} from '../store'
function CarSearch() {

    const dispatch = useDispatch()

    const searchTerm = useSelector((state)=>{
        return state.cars.searchTerm
    })

    const handleSearchTermChange = (event) => {
        dispatch(changeSearchTerm(event.target.value))
    }
  return (
    <div className='list-header'>
        <h3 className="titile is-3">My Cars</h3>
        <div className="search field is-horizontal">
            <label htmlFor="" className="label">
                search
            </label>
            <input 
                type="text"
                className="input"
                value={searchTerm}
                onChange={handleSearchTermChange} />
        </div>
      car search
    </div>
  )
}

export default CarSearch
