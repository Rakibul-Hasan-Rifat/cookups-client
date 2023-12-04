const UpdateProduct = () => {

    // styles
    const inputStyles = { width: '100%', padding: '8px 12px', fontSize: '18px', borderRadius: '8px', border: '1px solid gray', outline: 'none', marginBottom: '16px', color: 'rgb(79, 182, 92)', fontWeight: '500' }
    const buttonStyles = { width: '100%', padding: '8px 12px', fontSize: '20px', borderRadius: '8px', border: 'none', outline: 'none', marginBottom: '16px', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(79, 183, 92', fontWeight: '500', cursor: 'pointer' }

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const brand = e.target.brand.value
        const image = e.target.image.value
        const type = e.target.type.value
        const price = e.target.price.value
        const rating = e.target.rating.value
        console.log(name, brand, image, type, price, rating)
    }

    return (
        <section style={{ width: '90%', margin: '80px auto', }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px', color: 'rgb(79, 182, 92)', fontWeight: '600' }}>Update Product</h1>
            <form onSubmit={handleUpdateProduct}>
                <input type="text" style={inputStyles} name="name" placeholder="Name" required />
                <input type="text" style={inputStyles} name="brand" placeholder="Brand Name" required />
                <input type="text" style={inputStyles} name="image" placeholder="Image URL" required />
                <input type="text" style={inputStyles} name="type" placeholder="Type" />
                <input type="text" style={inputStyles} name="price" placeholder="Price" required />
                <input type="text" style={inputStyles} name="rating" placeholder="Rating" required />
                <button type="submit" style={buttonStyles}>Update</button>
            </form>
        </section>
    );
};

export default UpdateProduct;