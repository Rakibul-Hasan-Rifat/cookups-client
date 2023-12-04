import { Link } from "react-router-dom";

const SingleFood = ({ singleFood }) => {
    const { _id, image, name, price, rating, type } = singleFood
    return (
        <div style={{ borderRadius: '20px', overflow: 'hidden', border: '1px solid lightgray' }}>
            <img src={image} style={{ width: '100%' }} alt="" />
            <h4 style={{ color: 'rgb(79, 182, 92)', textAlign: 'center', marginTop: '25px', fontSize: '28px', fontWeight: '400' }}>{name}</h4>
            <p style={{
                display: 'grid',
                margin: '40px 36px',
                justifyContent: 'space-between',
                gridTemplateColumns: 'repeat(3, 1fr)',
                fontSize: '18px',
                fontWeight: '800'
            }}>
                <span>&#2547; <span style={{ backgroundColor: 'lightgray', padding: '6px', borderRadius: '6px' }}>{price}</span></span>
                <span>Type: <span style={{ textAlign: 'center', textTransform: 'uppercase', backgroundColor: 'lightgray', padding: '6px', borderRadius: '6px' }}> {type}</span></span>
                <span style={{ textAlign: 'right' }}>Rating: <span style={{ backgroundColor: 'lightgray', padding: '6px', borderRadius: '6px' }}> {rating}</span></span>
            </p>
            <div style={{ width: '60%', margin: '60px auto', display: 'flex', justifyContent: 'space-between' }}>
                <Link to={`/updateFood/${_id}`}>
                    <button
                        style={{
                            color: '#fff',
                            border: 'none',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            padding: '8px 20px',
                            backgroundColor: 'rgb(79, 192, 92)',
                        }}
                    >Update</button>
                </Link>
                <Link to={`/foods/food/${_id}`}>
                    <button
                        style={{
                            border: 'none',
                            fontSize: '16px',
                            fontWeight: '600',
                            cursor: 'pointer',
                            padding: '8px 20px',
                            borderRadius: '5px', color: '#fff',
                            backgroundColor: 'rgb(79, 192, 92)',
                        }}
                    >Details</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleFood;