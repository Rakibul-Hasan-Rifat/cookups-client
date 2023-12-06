import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserAuthContext } from "../../context/UserAuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
    
    const location = useLocation();
    const navigate =useNavigate()

    const { logIn, user, googleLogin, githubLogin } = useContext(UserAuthContext)
    console.log(logIn, user)

    // styles
    const inputStyles = { width: '100%', padding: '8px 12px', fontSize: '18px', borderRadius: '8px', border: '1px solid gray', outline: 'none', marginBottom: '16px', color: 'rgb(79, 182, 92)', fontWeight: '500' }
    const buttonStyles = { width: '100%', padding: '8px 12px', fontSize: '20px', borderRadius: '8px', border: 'none', outline: 'none', marginBottom: '16px', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(79, 183, 92', fontWeight: '500', cursor: 'pointer' }

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value
        console.log(email, password)
        logIn(email, password)
            .then((res) => {
                console.log(res.user)
                toast.success('You have logged in successfully!!')
                navigate(location.state || '/')
            })
            .catch(err => {
                console.error(err)
                toast.error(err.message)
            })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then((res) => {
                console.log(res.user)
                toast.success('You have logged in successfully using google!!')
                navigate(location.state || '/')
            })
            .catch(err => {
                console.error(err)
                toast.error(err.message)
            })
    }

    const handleGithubLogin = () => {
        githubLogin()
            .then((res) => {
                console.log(res.user)
                toast.success('You have logged in successfully using github!!')
                navigate(location.state || '/')
            })
            .catch(err => {
                console.error(err)
                toast.error(err.message)
            })
    }

    return (
        <>
            <Toaster />
            <section style={{ width: '90%', margin: '80px auto', }}>
                <div>
                    <h1 style={{ textAlign: 'center', marginBottom: '30px', color: 'rgb(79, 182, 92)', fontWeight: '600' }}>Please Login</h1>
                    <form onSubmit={handleLogin}>
                        <input type="email" style={inputStyles} name="email" placeholder="Email" required />
                        <input type="password" style={inputStyles} name="password" placeholder="Your Password" required />
                        <button type="submit" style={buttonStyles}>Login</button>
                    </form>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <p style={{ color: 'gray', textAlign: 'center' }}>
                        <strong style={{ borderBottom: '1px solid lightgray', paddingBottom: '12px', display: 'inline-block' }}>
                            Or Join Us With
                        </strong>
                    </p>
                    <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', justifyContent: 'space-between' }}>
                            <button onClick={handleGoogleLogin} style={buttonStyles}>Google</button>
                            <button onClick={handleGithubLogin} style={buttonStyles}>Github</button>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <p>Don&apos;t have an account?</p>
                            <Link to='/register' style={{ color: 'green' }}>Please Register</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;