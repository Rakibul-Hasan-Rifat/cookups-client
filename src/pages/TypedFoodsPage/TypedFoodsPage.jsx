import { useLoaderData } from "react-router-dom";
import SingleFood from "../../components/SingleFood/SingleFood";

const TypedFoodsPage = () => {

    const loadedFoods = useLoaderData()
    console.log(loadedFoods)

    return (
        <section style={{width: '90%', margin: '120px auto', display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(2, 1fr)'}}>
            {
                loadedFoods?.map(
                    singleFood => (
                        <SingleFood
                            key={singleFood._id}
                            singleFood={singleFood}
                        />
                    )
                )
            }
        </section>
    );
};

export default TypedFoodsPage;