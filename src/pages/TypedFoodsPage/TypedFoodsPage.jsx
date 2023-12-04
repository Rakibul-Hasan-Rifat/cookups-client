import { useState, useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleFood from "../../components/SingleFood/SingleFood";

const TypedFoodsPage = () => {

    const params = useParams()
    const loadedFoods = useLoaderData()
    let [sliderCounter, setSliderCounter] = useState(1)
    const [loadedFoodType, setLoadedFoodType] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/foodTypes/${params.type}`)
            .then(res => res.json())
            .then(data => {
                setLoadedFoodType(data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [params.type])

    console.log(loadedFoods)
    console.log('10 typedfoodspage',params.type)

    return (
        <>
            <section style={{ margin: '120px auto 0', width: '90%' }}>
                <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span
                        onClick={() => setSliderCounter(sliderCounter < 2 ? 3 : --sliderCounter)}
                        style={{ fontSize: '100px', position: 'absolute', left: '30px', color: '#fff', backgroundColor: 'rgba(79, 182, 92, .3)', borderRadius: '8px', padding: '0 20px', cursor: 'pointer' }}
                    >
                        {'<'}
                    </span>
                    <img src={loadedFoodType.images && loadedFoodType?.images[sliderCounter]} style={{ width: '100%' }} alt="" />
                    <span
                        onClick={() => setSliderCounter(sliderCounter > 2 ? 1 : ++sliderCounter)}
                        style={{ fontSize: '100px', position: 'absolute', right: '30px', color: '#fff', backgroundColor: 'rgba(79, 182, 92, .3)', borderRadius: '8px', padding: '0 20px', cursor: 'pointer' }}
                    >
                        {'>'}
                    </span>
                </div>
            </section>
            <section style={{ width: '90%', margin: '120px auto', display: 'grid', gap: '30px', gridTemplateColumns: 'repeat(2, 1fr)' }}>
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
        </>
    );
};

export default TypedFoodsPage;