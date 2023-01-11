import Cards from "../Card";
import NavBar from "../NavBar";
import Filters from "../Filters/Filters";
import Carousel from "../Carousel";
import BtnTheme from "../BtnTheme";

export default function Home() {

    return (
        <>
            <BtnTheme />
            <NavBar />
            <Carousel />
            <Filters />
            <Cards />
        </>
    )
}
