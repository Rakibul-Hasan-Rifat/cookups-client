import { useLoaderData } from "react-router-dom";
import MyCart from "../../components/MyCart/MyCart";
import { useState } from "react";
import { useEffect } from "react";

const MyCartPage = () => {

    const [totalLoadedFoods, setTotalLoadedFoods] = useState([])

    const loadedOrderedFoods = useLoaderData()
    console.log('loadedOrderedFoods', loadedOrderedFoods)
    console.log('totalLoadedFoods', totalLoadedFoods)

    useEffect(() => {
        setTotalLoadedFoods(loadedOrderedFoods)
    }, [loadedOrderedFoods])

    return (
        <>
            {
                totalLoadedFoods.length > 0 ?
                    <section style={{ width: '90%', margin: '120px auto', }}>
                        <h1 style={{ textAlign: 'center', fontSize: '48px', marginBottom: '24px', color: 'rgb(79, 182, 92)' }}>Your Cart</h1>
                        <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                            {
                                totalLoadedFoods?.map(food => <MyCart key={food._id} food={food} totalLoadedFoods={totalLoadedFoods} setTotalLoadedFoods={setTotalLoadedFoods} />)
                            }
                        </div>
                    </section> :
                    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h1 style={{ color: 'rgb(79, 182, 92)' }}>There no item added to the the cart!!!</h1>
                    </div>
            }
        </>
    );
};

export default MyCartPage;