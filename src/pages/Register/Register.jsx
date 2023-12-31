import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserAuthContext } from "../../context/UserAuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {

    const { signUp, googleLogin, githubLogin } = useContext(UserAuthContext)

    const inputStyles = { width: '100%', padding: '8px 12px', fontSize: '18px', borderRadius: '8px', border: '1px solid gray', outline: 'none', marginBottom: '16px', color: 'rgb(79, 182, 92)', fontWeight: '500' }
    const buttonStyles = { width: '100%', padding: '8px 12px', fontSize: '20px', borderRadius: '8px', border: 'none', outline: 'none', marginBottom: '16px', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(79, 183, 92', fontWeight: '500', cursor: 'pointer' }

    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const image = e.target.image.value
        const password = e.target.password.value
        console.log(name, email, image, password)

        

        signUp(email, password)
            .then((res) => {
                console.log(res.user)
                toast.success('You have created an account successfully!!')
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
                toast.success('You have created an account successfully using google!!')
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
                toast.success('You have created an account successfully using github!!')
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
                    <h1 style={{ textAlign: 'center', marginBottom: '30px', color: 'rgb(79, 182, 92)', fontWeight: '600' }}>Please Register</h1>
                    <form onSubmit={handleRegister}>
                        <input type="text" style={inputStyles} name="name" placeholder="Name" required />
                        <input type="email" style={inputStyles} name="email" placeholder="Email" required />
                        <input type="password" style={inputStyles} name="password" placeholder="Your Password" required />
                        <input type="text" style={inputStyles} name="image" placeholder="Image URL" />
                        <button type="submit" style={buttonStyles}>Register</button>
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
                            <p>Already have an account?</p>
                            <Link to='/login' style={{ color: 'green' }}>Please Login</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;