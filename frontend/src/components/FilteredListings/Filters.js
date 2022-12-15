import { Link } from "react-router-dom/cjs/react-router-dom.min"
import lake from '../../assets/lake.png'
import ocean from '../../assets/ocean.png'
import sea from '../../assets/sea.png'
import pets from '../../assets/pets.png'
import stars from '../../assets/stars.png'



const Filters = () => {
    return (
        <ul id='filter-icons'>
            <Link to='/ocean'><img src={ocean} /><span>Ocean</span></Link>
            <Link to='/sea'><img src={sea} /><span>Sea</span></Link>
            <Link to='/lake'><img src={lake} /><span>Lake</span></Link>
            <Link to='/pets'><img src={pets} /><span>Pets</span></Link>
            <Link to='/well_rated'><img src={stars} /><span>Highly-rated</span></Link>
        </ul>
    )
}

export default Filters