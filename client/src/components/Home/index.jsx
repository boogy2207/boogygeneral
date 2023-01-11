import Cards from "../Card";
import NavBar from "../NavBar";
import Filters from "../Filters/Filters";
import Carousel from "../Carousel";

export default function Home() {

    return (
        <>
            <NavBar />
            <Carousel />
            <Filters />
            <Cards />
        </>
    )
}
