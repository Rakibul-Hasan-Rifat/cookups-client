import { Link } from "react-router-dom";

const ErrorElement = () => {
    return (
        <section style={{ height: '100vh', backgroundColor: '#212121', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <h1 style={{ fontSize: '200px', color: 'rgb(79, 182, 92)', fontWeight: '800' }}>404</h1>
                <div style={{ color: '#FFF', fontSize: '60px', fontWeight: '600' }}>
                    <span>Not</span>
                    <br />
                    <span>Found</span>
                </div>
            </div>
            <Link to='/'>
                <button style={{background: 'none', border: 'none', fontSize: '24px', color: '#FFF', fontWeight: '600', backgroundColor: 'rgb(79, 182, 92)', borderRadius: '8px', cursor: 'pointer', padding: '6px 12px'}}>Go back Home</button>
            </Link>
        </section>
    );
};

export default ErrorElement;