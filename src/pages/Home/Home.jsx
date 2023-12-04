import { useLoaderData } from "react-router-dom";
import CookWithUs from "../../components/CookWithUs/CookWithUs";
import Cookups from "../../components/Cookups/Cookups";
import TypedFoodsContainer from "../../components/TypedFoods/TypedFoodsContainer";

const Home = () => {
    const loadedData = useLoaderData();
    return (
        <main>
            <Cookups />
            <TypedFoodsContainer loadedData={loadedData} />
            <CookWithUs />
        </main>
    );
};

export default Home;