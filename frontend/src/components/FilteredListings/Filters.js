import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min"
import lake from '../../assets/lake-3.png'
import ocean from '../../assets/ocean-3.png'
import sea from '../../assets/sea-3.png'
import falls from '../../assets/falls.png'
import pets from '../../assets/pets-3.png'
import stars from '../../assets/stars-3.png'
import price from '../../assets/price_filter.png'
import random from '../../assets/random.png'
import { useState } from "react"
import { Modal } from "../../context/Modal"
import './Filter.css'



const Filters = () => {
    const [showModal, setShowModal] = useState(false);
    const [maxPrice, setMaxPrice] = useState(100)
    // const span = document.getElementsByClassName("close")[0];
    const listingId = useParams();
    let newListingNumber = listingId
    while (newListingNumber == listingId) {
        newListingNumber = Math.floor(Math.random() * 28) + 1
    }

    return (
        <ul id='filter-icons'>
            <Link to='/ocean'><img src={ocean} /><span>Ocean</span></Link>
            <Link to='/sea'><img src={sea} /><span>Sea</span></Link>
            <Link to='/lake'><img src={lake} /><span>Lake</span></Link>
            <Link to='/falls'><img src={falls} /><span>Falls</span></Link>
            <Link to='/pets'><img src={pets} /><span>Pets</span></Link>
            <Link to='/popular'><img src={stars} /><span>Top-rated</span></Link>
            <Link to={`/listings/${newListingNumber}`}><img src={random} /><span>Random</span></Link>
            <div id='price-filter' onClick={() => setShowModal(true)}><img src={price} /><span>Price</span></div>

            {showModal && (
            <Modal onClose={() => setShowModal(false)}>
                <form id='price-modal-test'>
                    <div className='price-filter-header'><b>Max Price</b>: <i>${maxPrice}</i></div>
                    <div className="slidecontainer">
                        <input type="range" min="35" max="1000" value={maxPrice}className="slider" id="myRange" onChange={(e) => setMaxPrice(e.target.value)} />
                    </div>
                    <div id='min-max'><p>$35</p><p>$1000</p></div>
                    <Link to={`/${maxPrice}`} id='price-filter-link' onClick={() => setShowModal(false)}>
                        <div className='filter-submit-button'>
                            <span id='price-filter-text'>Filter</span>
                        </div>
                    </Link>
                </form>
            </Modal>
            )}
        </ul>
    )
}

export default Filters