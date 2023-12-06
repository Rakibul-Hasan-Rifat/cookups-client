import { useContext,  } from "react";
import { useLoaderData } from "react-router-dom";
import { UserAuthContext } from "../../context/UserAuthProvider";
import toast, { Toaster } from "react-hot-toast";

const DetailsPage = () => {

    const loadedFood = useLoaderData();
    const { user } = useContext(UserAuthContext) 

    const { _id, image, name, price, rating, type, description } = loadedFood;

    const handleAddToCart = (e) => {
        e.preventDefault();
        fetch('https://cookups-server.onrender.com/foodOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ productId: _id, productName: name, productImage: image, productPrice: price, productRating: rating, productType: type, client: {name: user.displayName, email: user.email} })
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                result.acknowledged && toast.success('Congrates! Your order is perfectly placed 😊.')
            })
            .catch(err => {
                toast.error(err.message)
                console.log(err)
            })
    }

    
    return (
        <>
            <Toaster />
            <section style={{ width: '90%', margin: '120px auto', }}>
                <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid lightgray' }}>
                    <img src={image} style={{ width: '100%' }} alt="" />
                    <h4 style={{ color: 'rgb(79, 182, 92)', textAlign: 'center', marginTop: '36px', fontSize: '44px', fontWeight: '800' }}>{name}</h4>
                    <p style={{ fontSize: '24px', marginTop: '50px', lineHeight: '36px', padding: '0 50px', textAlign: 'justify' }}>{description}</p>
                    <p style={{
                        display: 'grid',
                        margin: '40px 36px',
                        justifyContent: 'space-between',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        fontSize: '18px',
                        fontWeight: '800'
                    }}>
                        <span>&#2547; <span style={{ backgroundColor: 'lightgray', padding: '6px', borderRadius: '6px' }}>{price}</span></span>
                        <span style={{ display: 'inline-block', textAlign: 'center' }}>Type: <span style={{ textTransform: 'uppercase', backgroundColor: 'lightgray', padding: '6px', borderRadius: '6px' }}> {type}</span></span>
                        <span style={{ textAlign: 'right' }}>Rating: <span style={{ backgroundColor: 'lightgray', padding: '6px', borderRadius: '6px' }}> {rating}</span></span>
                    </p>
                    <div style={{ margin: '60px 0', display: 'flex', justifyContent: 'center' }}>
                        <button
                            onClick={handleAddToCart}
                            style={{
                                border: 'none',
                                fontSize: '24px',
                                fontWeight: '600',
                                padding: '18px 30px',
                                cursor: 'pointer',
                                borderRadius: '5px', color: '#fff',
                                backgroundColor: 'rgb(79, 192, 92)',
                            }}
                        >Add to Cart</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DetailsPage;