import { Header } from "../Header";
import { Dropdown } from "../Dropdown/Dropdown";
import './HeaderBar.css'
import Filters from "../FilteredListings/Filters";

const HeaderBar = () => {
    return (
        <div id="header-bar">
            <Header />
            <Filters />
            <Dropdown />
        </div>
    )
}

export default HeaderBar