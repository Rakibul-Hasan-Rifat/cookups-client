
const AddProduct = () => {

    // input styles
    const inputStyles = { width: '100%', padding: '8px 12px', fontSize: '18px', borderRadius: '8px', border: '1px solid gray', outline: 'none', marginBottom: '16px', color: 'rgb(79, 182, 92)', fontWeight: '500' }
    const buttonStyles = { width: '100%', padding: '8px 12px', fontSize: '20px', borderRadius: '8px', border: 'none', outline: 'none', marginBottom: '16px', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(79, 183, 92', fontWeight: '500', cursor: 'pointer' }

    const handleAddProduct = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const brand = e.target.brand.value
        const image = e.target.image.value
        const type = e.target.type.value
        const price = e.target.price.value
        const description = e.target.description.value
        const rating = e.target.rating.value
        console.log(name, brand, image, type, price, description, rating);

        const food = { name, image, type, price, rating, description }
        console.log(JSON.stringify(food))

        fetch("http://localhost:5000/addFood", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(food),
        })
            .then(res => res.json())
            .then(result => console.log(result))
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <section style={{ width: '90%', margin: '80px auto', }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px', color: 'rgb(79, 182, 92)', fontWeight: '600' }}>Add Product</h1>
            <form onSubmit={handleAddProduct}>
                <input type="text" style={inputStyles} name="name" placeholder="Name" required />
                <input type="text" style={inputStyles} name="brand" placeholder="Brand Name" />
                <input type="text" style={inputStyles} name="image" placeholder="Image URL" required />
                <input type="text" style={inputStyles} name="type" placeholder="Type" />
                <input type="text" style={inputStyles} name="price" placeholder="Price" required />
                <input type="text" style={inputStyles} name="description" placeholder="Short Description" required />
                <input type="text" style={inputStyles} name="rating" placeholder="Rating" required />
                <button type="submit" style={buttonStyles}>Add Product</button>
            </form>
        </section>
    );
};

export default AddProduct;