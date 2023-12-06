import swal from 'sweetalert';
import { Toaster, toast } from 'react-hot-toast'

const MyCart = ({ food, totalLoadedFoods, setTotalLoadedFoods }) => {

    console.log(food)

    const { _id, productName, productImage, productRating, productPrice } = food

    const handleDelete = () => {

        swal({
            title: "Are you sure?",
            text: "If you want to delete the specific food item from your cart, click on 'OK' button. Else click on 'Cancel' button.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://cookups-server.onrender.com/orderedFoods/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            setTotalLoadedFoods(totalLoadedFoods?.filter(singleFood => singleFood._id !== _id))
                            // result.deletedCount > 0 && toast.success('You\'ve successfully deleted the food item')
                            result.deletedCount > 0 && swal("The item has been deleted from your cart!", {
                                icon: "success",
                            });
                        })
                        .catch(err => {
                            toast.error(err.message)
                        })

                } else {
                    swal("Your cart is as it was before!", {
                        icon: 'info'
                    });
                }
            });
    }
    return (
        <>
            <Toaster />
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid lightgray' }}>
                <img src={productImage} style={{ width: '100%' }} alt="" />
                <h4 style={{ color: 'rgb(79, 182, 92)', textAlign: 'center', marginTop: '25px', fontSize: '28px', fontWeight: '400' }}>{productName}</h4>
                <p style={{
                    display: 'grid',
                    margin: '40px 36px',
                    justifyContent: 'space-between',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    fontSize: '18px',
                    fontWeight: '800'
                }}>
                    <span>&#2547; <span style={{ backgroundColor: 'lightgray', padding: '6px', borderRadius: '6px' }}>{productPrice}</span></span>
                    <span style={{ textAlign: 'right' }}>Rating: <span style={{ backgroundColor: 'lightgray', padding: '6px', borderRadius: '6px' }}> {productRating}</span></span>
                </p>
                <div style={{ width: '60%', margin: '60px auto', display: 'flex', justifyContent: 'center' }}>
                    <button
                        onClick={handleDelete}
                        style={{
                            border: 'none',
                            fontSize: '24px',
                            cursor: 'pointer',
                            fontWeight: '600',
                            padding: '12px 28px',
                            borderRadius: '5px', color: '#fff',
                            backgroundColor: 'rgb(79, 192, 92)',
                        }}
                    >Delete</button>
                </div>
            </div>
        </>
    );
};

export default MyCart;