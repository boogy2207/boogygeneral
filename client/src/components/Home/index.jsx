import Cards from "../Card";
import NavBar from "../NavBar";
import Filters from "../Filters/Filters";
import Carousel from "../Carousel";

export default function Home() {

    return (
        <>
            <Carousel />
            <Filters />
            <Cards />
        </>
    )
}
