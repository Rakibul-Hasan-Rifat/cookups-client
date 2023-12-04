const Cookups = () => {
    return (
        <section style={{ padding: '80px 25px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '28px', fontWeight: '600', color: 'rgb(31, 68, 35)' }}>What is Cookups</h2>
            <div style={{ display: 'flex', gap: '60px', alignItems: 'center', justifyContent: 'space-evenly', padding: '50px' }}>
                <div>
                    <img src="/media/cooks.gif" style={{ width: '70%' }} alt="" />
                    <h4 style=
                        {{ fontSize: '20px', fontWeight: '500', marginTop: '20px', color: 'rgb(31, 68, 35)' }}
                    >1500+ Cooks</h4>
                </div>
                <div>
                    <img src="/media/hygene.gif" style={{ width: '70%' }} alt="" />
                    <h4 style=
                        {{ fontSize: '20px', fontWeight: '500', marginTop: '20px', color: 'rgb(31, 68, 35)' }}
                    >Ensured Hygiene</h4>
                </div>
                <div>
                    <img src="/media/customizable.gif" style={{ width: '70%' }} alt="" />
                    <h4 style=
                        {{ fontSize: '20px', fontWeight: '500', marginTop: '20px', color: 'rgb(31, 68, 35)' }}
                    >Graranteed Taste</h4>
                </div>
                <div>
                    <img src="/media/foods.gif" style={{ width: '70%' }} alt="" />
                    <h4 style=
                        {{ fontSize: '20px', fontWeight: '500', marginTop: '20px', color: 'rgb(31, 68, 35)' }}
                    >Home-made Food</h4>
                </div>
            </div>
        </section>
    );
};

export default Cookups;