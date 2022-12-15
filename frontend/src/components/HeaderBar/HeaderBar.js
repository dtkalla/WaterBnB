import { Header } from "../Header";
import { Dropdown } from "../Dropdown/Dropdown";
import './HeaderBar.css'
import FilteredMapContainer from "../FilteredListings/FilteredMapContainer";

const HeaderBar = () => {
    return (
        <div id="header-bar">
            <Header />
            <Dropdown />
        </div>
    )
}

export default HeaderBar