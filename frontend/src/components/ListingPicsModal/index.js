import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getListing } from "../../store/listings";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";


function ListingPicsModal() {
    const { listingId } = useParams();
    const listing = useSelector(getListing(listingId))
    const [showModal, setShowModal] = useState(false);


    if (showModal) {
        return (
            <div id='ListingPicsModal'>
                <ul>
                    <img src={listing.picturesUrl} alt='' />
                    <img src={listing.pic1} alt='' />
                    <img src={listing.pic2} alt='' />
                    <img src={listing.pic3} alt='' />
                    <img src={listing.pic4} alt='' />
                </ul>
           </div>
         );
    }
}

export default ListingPicsModal;