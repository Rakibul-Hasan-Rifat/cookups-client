import SingleTypedFood from "../SingleTypedFood/SingleTypedFood";

const TypedFoodsContainer = ({ loadedData }) => {
    console.log(loadedData)
    return (
        <section style={{ width: '90%', margin: '20px auto 120px', color: 'rgb(79, 180, 92)' }}>
            <h1 style={{ textAlign: 'center', fontSize: '44px', marginBottom: '36px' }}>Our Food Varients</h1>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '50px' }}>
                {
                    loadedData.map(
                        singleItemData => (
                            <SingleTypedFood
                                key={singleItemData._id}
                                singleData={singleItemData}
                            />
                        )
                    )
                }
            </div>
        </section>
    );
};

export default TypedFoodsContainer;