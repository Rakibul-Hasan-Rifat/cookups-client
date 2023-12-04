import { useNavigate } from "react-router-dom";

const SingleTypedFood = ({ singleData }) => {
    const navigate = useNavigate();
    const handleClick = (e) => {
        console.log('clicked', e.currentTarget)
        navigate(`/foods/${singleData.type}`)
    }
    return (
        <div
            onClick={handleClick}
            style={{ cursor: 'pointer', borderRadius: '16px', overflow: 'hidden', border: '1px solid gray', padding: '15px', textAlign: 'center' }}
        >
            <img
                style={{width: '300px', borderRadius: '16px'}}
                src={singleData.images[0]} alt=""
            />
            <h4 style={{marginTop: '50px', fontSize: '30px', fontWeight: '500', textTransform: 'uppercase'}}>{singleData.type}</h4>
        </div>
    );
};

export default SingleTypedFood;