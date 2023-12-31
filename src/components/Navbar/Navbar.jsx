import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { UserAuthContext } from "../../context/UserAuthProvider";
import { Toast } from "react-bootstrap";
import toast from "react-hot-toast";

const Navbar = () => {

	const { user, logOut } = useContext(UserAuthContext)
	const [show, setShow] = useState(false)

	//styles
	const buttonStyles = { width: '100%', padding: '8px 12px', fontSize: '20px', borderRadius: '8px', border: 'none', outline: 'none', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(79, 183, 92', fontWeight: '500', cursor: 'pointer' }


	const handleLogOut = () => {
		logOut()
			.then(() => {
				toast.success('You have logged out successfully!!')
				console.log('logout successfully')
			})
			.catch(err => {
				toast.error(err.message)
			})
	}

	return (
		<>
			<Toast />
			<nav
				style={
					{
						display: 'flex',
						padding: '10px 50px',
						alignItems: 'center',
						justifyContent: 'space-between',
						backgroundColor: 'rgb(79, 182, 92)',
					}
				}
			>
				<Link to='/'>
					<svg viewBox="0 0 462 94" height="50" width="150" style={{ display: 'flex', position: 'relative', flex: '0 0 auto', overflow: 'hidden' }}>
						<path fill="white" d="M144.34,62.91c0.37-0.38,0.86-0.62,1.39-0.67c0.21,0.01,0.42,0.05,0.62,0.14c0.25,0.12,0.47,0.3,0.63,0.53
    	l1.25,1.63c0.21,0.26,0.35,0.58,0.38,0.91c0.02,0.29-0.08,0.58-0.29,0.79c-0.22,0.27-0.56,0.63-1,1.08c-2.19,2.07-4.71,3.76-7.45,5
    	c-2.84,1.24-5.9,1.87-9,1.84c-6.43,0.08-12.6-2.55-16.99-7.25c-2.12-2.27-3.8-4.92-4.94-7.81c-2.36-6.17-2.36-13,0-19.17
    	c1.14-2.89,2.81-5.54,4.94-7.81c6.64-6.81,16.7-9,25.57-5.57c2.65,1.07,5.1,2.59,7.24,4.49c0.37,0.27,0.7,0.58,1,0.93
    	c0.29,0.31,0.46,0.71,0.48,1.13c-0.01,0.39-0.16,0.77-0.43,1.06l-1,1.29c-0.22,0.29-0.47,0.55-0.75,0.79
    	c-0.19,0.17-0.44,0.26-0.69,0.26c-0.52-0.05-1-0.31-1.34-0.71c-1.71-1.67-3.7-3.03-5.88-4c-6.95-3.06-15.07-1.38-20.24,4.18
    	c-1.64,1.78-2.92,3.85-3.79,6.11c-1.83,4.8-1.83,10.09,0,14.89c0.87,2.26,2.16,4.33,3.79,6.12c3.35,3.66,8.11,5.72,13.07,5.66
    	c1.27,0,2.54-0.15,3.77-0.46c1.23-0.3,2.42-0.73,3.57-1.26c1.13-0.53,2.22-1.16,3.26-1.86c1-0.69,1.95-1.46,2.83-2.3">
						</path>
						<path fill="white" d="M153.45,49.68c-0.02-3.29,0.63-6.54,1.92-9.57c1.23-2.91,3.01-5.57,5.23-7.82c2.23-2.23,4.87-4.02,7.77-5.25
    	c6.12-2.55,12.99-2.55,19.11,0c5.89,2.48,10.56,7.18,13.03,13.07c2.56,6.12,2.56,13,0,19.12c-2.51,5.86-7.19,10.53-13.07,13
    	c-6.11,2.56-13,2.56-19.11,0c-2.91-1.23-5.54-3.02-7.77-5.26c-2.22-2.24-4-4.88-5.23-7.78c-1.29-3.02-1.94-6.27-1.92-9.55
    	 M158.69,49.64c-0.02,2.57,0.5,5.11,1.53,7.46c1,2.27,2.4,4.35,4.15,6.11c1.76,1.78,3.84,3.2,6.14,4.19c4.79,2.03,10.21,2.03,15,0
    	c2.29-0.97,4.38-2.38,6.13-4.15c1.75-1.76,3.16-3.83,4.16-6.11c1.03-2.35,1.55-4.89,1.53-7.46c0.02-2.58-0.51-5.13-1.53-7.5
    	c-1.98-4.62-5.67-8.3-10.29-10.27c-4.79-2.06-10.21-2.06-15,0c-4.62,1.98-8.29,5.67-10.26,10.29c-1.02,2.37-1.55,4.92-1.53,7.5">
						</path>
						<path fill="white" d="M211.05,49.68c-0.02-3.29,0.63-6.54,1.92-9.57c1.23-2.91,3.01-5.57,5.23-7.82c2.23-2.23,4.87-4.02,7.77-5.25
    	c6.12-2.55,12.99-2.55,19.11,0c5.91,2.47,10.61,7.16,13.08,13.07c2.55,6.12,2.55,13,0,19.12c-2.5,5.87-7.2,10.53-13.08,13
    	c-6.11,2.56-13,2.56-19.11,0c-2.91-1.23-5.54-3.02-7.77-5.26c-2.22-2.24-4-4.88-5.23-7.78c-1.29-3.02-1.94-6.27-1.92-9.55
    	 M216.33,49.64c-0.02,2.57,0.5,5.11,1.53,7.46c1,2.28,2.41,4.35,4.16,6.11c1.75,1.77,3.82,3.18,6.11,4.15
    	c4.78,2.01,10.16,2.01,14.94,0c2.3-0.97,4.38-2.38,6.14-4.15c1.75-1.76,3.15-3.84,4.15-6.11c1.03-2.35,1.55-4.89,1.53-7.46
    	c0.02-2.58-0.5-5.13-1.53-7.5c-1.98-4.61-5.67-8.28-10.29-10.23c-4.77-2.04-10.17-2.04-14.94,0c-4.62,1.98-8.29,5.67-10.27,10.29
    	c-1.02,2.37-1.55,4.92-1.53,7.5">
						</path>
						<path fill="white" d="M290.34,41.33l22.06,29.31c0.19,0.25,0.33,0.54,0.41,0.84c0.05,0.19,0.09,0.39,0.12,0.59
    	c-0.02,0.29-0.18,0.55-0.43,0.7c-0.31,0.22-0.69,0.33-1.07,0.31c-0.53,0-1.08,0-1.62-0.07l-1.63-0.16c-0.21-0.02-0.4-0.11-0.55-0.25
    	c-0.23-0.17-0.44-0.37-0.62-0.6c-0.21-0.23-0.44-0.49-0.65-0.76s-0.42-0.52-0.58-0.74l-19-25.52l-9.79,9.5v16.88
    	c0,1.15-0.62,1.72-1.87,1.72h-1.73c-0.83,0.12-1.6-0.46-1.72-1.29c-0.02-0.14-0.02-0.29,0-0.43V3.68c-0.12-0.86,0.48-1.65,1.34-1.77
    	c0.15-0.02,0.29-0.02,0.44,0h1.49c0.51-0.03,0.99,0.2,1.3,0.6c0.31,0.47,0.51,1,0.6,1.56c0.11,0.7,0.16,1.42,0.16,2.13v41.27
    	c3.49-3.42,6.96-6.83,10.41-10.22c3.45-3.39,6.92-6.78,10.41-10.16c0.23-0.25,0.53-0.44,0.86-0.55c0.41-0.15,0.84-0.26,1.27-0.32
    	c0.46-0.06,0.92-0.1,1.39-0.13s0.89-0.06,1.27-0.06c0.46-0.02,0.89,0.23,1.11,0.63c0.2,0.27,0.33,0.58,0.38,0.91
    	c0.01,0.31-0.12,0.61-0.34,0.82L290.34,41.33z">
						</path>
						<path fill="white" d="M360.83,71.31c0.03,0.48-0.15,0.95-0.49,1.29c-0.36,0.33-0.83,0.5-1.32,0.48h-1.51
    	c-0.48,0.04-0.96-0.13-1.3-0.48c-0.3-0.36-0.47-0.82-0.47-1.29c-0.07-0.93-0.12-1.86-0.15-2.78s-0.06-1.85-0.1-2.78
    	c-0.77,1.25-1.69,2.39-2.76,3.4c-1.08,1.03-2.29,1.93-3.59,2.66c-1.34,0.76-2.77,1.34-4.25,1.75c-1.53,0.42-3.11,0.64-4.7,0.63
    	c-5.16,0.07-10.11-2.01-13.68-5.73c-1.73-1.82-3.08-3.96-4-6.29c-0.98-2.46-1.48-5.09-1.46-7.74V28c-0.08-0.97,0.63-1.82,1.6-1.91
    	c0.09-0.01,0.18-0.01,0.27,0h1.68c0.51-0.06,1.02,0.11,1.38,0.47c0.29,0.4,0.42,0.9,0.39,1.39v26.67c0.02,1.93,0.41,3.84,1.14,5.63
    	c0.69,1.7,1.71,3.25,3,4.56c1.3,1.34,2.87,2.39,4.6,3.1c1.85,0.75,3.83,1.12,5.82,1.1c3.84,0.02,7.54-1.47,10.3-4.15
    	c1.32-1.3,2.39-2.83,3.13-4.53c0.78-1.79,1.18-3.72,1.15-5.67V27.85c-0.11-0.86,0.49-1.65,1.35-1.76c0.15-0.02,0.3-0.02,0.44,0h1.67
    	c1.24,0,1.86,0.59,1.86,1.76V71.31z">
						</path>
						<path fill="white" d="M375.75,27.76c-0.14-0.97,0.54-1.86,1.51-2c0.16-0.02,0.33-0.02,0.49,0h1.44c1.4,0,2.11,0.66,2.11,2v6
    	c0.55-0.91,1.17-1.79,1.84-2.62c0.95-1.16,2.07-2.17,3.31-3c1.58-1.05,3.3-1.87,5.11-2.45c2.34-0.72,4.79-1.05,7.24-1
    	c3.04-0.02,6.05,0.63,8.8,1.92c2.71,1.26,5.15,3.03,7.18,5.22c2.08,2.27,3.72,4.92,4.82,7.8c2.33,6.16,2.33,12.95,0,19.11
    	c-1.11,2.88-2.74,5.52-4.82,7.8c-2.03,2.2-4.47,3.99-7.18,5.25c-4.67,2.12-9.94,2.5-14.86,1.06c-1.75-0.54-3.41-1.34-4.92-2.38
    	c-1.42-1-2.68-2.2-3.76-3.56c-1.08-1.32-2-2.77-2.74-4.31v27.22c0.02,0.51-0.17,1.01-0.53,1.37c-0.43,0.36-0.97,0.54-1.53,0.5h-1.4
    	c-0.56,0.04-1.12-0.14-1.55-0.5c-0.38-0.35-0.58-0.85-0.56-1.37L375.75,27.76z M380.98,49.16c-0.01,2.54,0.46,5.06,1.39,7.43
    	c0.88,2.25,2.16,4.32,3.79,6.11c1.57,1.72,3.45,3.12,5.56,4.12c4.25,2.01,9.19,2.01,13.44,0c2.1-0.99,3.98-2.39,5.53-4.12
    	c1.62-1.79,2.89-3.86,3.75-6.11c1.81-4.79,1.81-10.08,0-14.87c-0.86-2.25-2.13-4.32-3.75-6.11c-1.56-1.73-3.43-3.13-5.53-4.14
    	c-4.25-2.01-9.19-2.01-13.44,0c-2.1,1.01-3.99,2.42-5.56,4.14c-1.63,1.79-2.91,3.86-3.79,6.11
    	C381.44,44.09,380.97,46.62,380.98,49.16">
						</path>
						<path fill="white" d="M455.42,35.68c-1.03-1.67-2.45-3.07-4.13-4.08c-1.78-1.08-3.82-1.63-5.9-1.59c-1.28-0.01-2.56,0.18-3.78,0.58
    	c-1.09,0.35-2.11,0.9-3,1.63c-1.7,1.42-2.67,3.53-2.64,5.75c-0.01,1.07,0.3,2.11,0.89,3c0.6,0.88,1.35,1.65,2.23,2.26
    	c0.92,0.63,1.91,1.16,2.95,1.56c1,0.39,2.02,0.72,3.05,1l1.43,0.38c2.17,0.58,4.29,1.37,6.31,2.36c1.74,0.83,3.35,1.9,4.78,3.19
    	c1.26,1.12,2.27,2.48,3,4c0.71,1.48,1.07,3.11,1.06,4.75c0.04,2.01-0.42,4.01-1.34,5.8c-0.88,1.67-2.11,3.13-3.62,4.27
    	c-1.56,1.2-3.32,2.1-5.2,2.66c-2.05,0.6-4.17,0.9-6.31,0.89c-1.77,0-3.53-0.2-5.25-0.62c-1.63-0.4-3.19-1.02-4.65-1.85
    	c-1.4-0.8-2.65-1.83-3.69-3.06c-1.05-1.25-1.84-2.69-2.33-4.25c-0.09-0.19-0.14-0.41-0.15-0.62c0.02-0.31,0.13-0.6,0.32-0.85
    	c0.21-0.3,0.5-0.54,0.84-0.69l1.82-0.82c0.23-0.08,0.47-0.13,0.72-0.14c0.3-0.01,0.59,0.1,0.82,0.29c0.23,0.2,0.43,0.45,0.57,0.72
    	l0.24,0.47c0.5,1.03,1.18,1.95,2,2.74c0.84,0.78,1.77,1.46,2.78,2c0.97,0.53,2,0.95,3.07,1.23c0.93,0.26,1.89,0.39,2.85,0.41
    	c1.25-0.01,2.49-0.18,3.7-0.5c1.29-0.33,2.52-0.85,3.65-1.54c1.1-0.66,2.05-1.55,2.78-2.61c0.76-1.11,1.15-2.44,1.11-3.79
    	c0.02-1.29-0.36-2.56-1.11-3.62c-0.76-1.07-1.72-1.98-2.82-2.69c-1.21-0.77-2.5-1.4-3.85-1.89c-1.34-0.5-2.72-0.91-4.11-1.24
    	c-1.72-0.5-3.39-1.14-5-1.92c-1.59-0.76-3.08-1.72-4.42-2.86c-1.26-1.06-2.32-2.33-3.14-3.76c-0.79-1.41-1.2-3-1.19-4.61
    	c-0.02-1.83,0.33-3.64,1.05-5.32c0.68-1.56,1.69-2.97,2.95-4.12c1.34-1.2,2.91-2.11,4.62-2.67c1.93-0.64,3.96-0.95,6-0.93
    	c3.01-0.05,5.99,0.66,8.66,2.06c2.69,1.49,4.9,3.72,6.36,6.43c0.14,0.31,0.22,0.65,0.23,1c-0.01,0.24-0.07,0.48-0.18,0.69
    	c-0.14,0.25-0.34,0.45-0.58,0.6l-1.68,1c-0.34,0.25-0.73,0.4-1.15,0.43c-0.28,0.03-0.57-0.08-0.76-0.29
    	c-0.16-0.19-0.37-0.46-0.63-0.81l-0.29-0.38L455.42,35.68z">
						</path>
						<path fill="white" d="M90.51,58.64c-0.87,0.28-1.71,0.67-2.48,1.17c-1.2,0.77-2.44,1.47-3.7,2.15c-0.44,0.24-0.72,0.32-0.77-0.35
    	c-0.01-0.51-0.43-0.91-0.94-0.9c-0.02,0-0.04,0-0.06,0h-3.35c-0.38-0.01-0.74,0.14-1,0.41c-0.68,0.7-1.3,1.47-1.85,2.28
    	c-1.17,1.54-2.78,2.68-4.62,3.26c-2.02,0.49-4.1,0.65-6.17,0.5h-41.2c-0.28,0.02-0.56,0.02-0.84,0c-2.99-0.39-5.64-2.1-7.24-4.65
    	c-1.83-2.63-2.93-5.7-3.18-8.89c-0.07-1.39-0.07-1.4,1.37-1.4h64.24h0.74c0.63,0,0.87,0.37,0.85,1s-0.07,0.93-0.11,1.4
    	s0.11,0.67,0.6,0.66c0.8,0,1.6,0,2.4,0c0.73,0.13,1.47-0.19,1.88-0.8c0.23-0.42,0.69-0.65,1.16-0.6c1.38,0.03,2.76-0.06,4.12-0.27
    	c0.91-0.12,1.1-0.32,1-1.25c0-0.56,0-1.12,0-1.68c0-12.61,0-25.23,0-37.85c0.04-1.67-0.05-3.34-0.25-5
    	c-0.09-0.67-0.29-1.32-0.6-1.92c-1.29-2.55-3.95-4.12-6.81-4H9.27C6.03,1.65,3.03,3.64,2.01,6.72c-0.4,1.57-0.57,3.2-0.5,4.82
    	c0,23.92,0,47.84,0,71.76c-0.02,0.73,0.01,1.47,0.09,2.2c0.22,1.51,0.92,2.92,2,4c1.48,1.43,3.47,2.2,5.53,2.15H31.7h50.86
    	c0.78,0.02,1.56-0.02,2.33-0.11c2.6-0.22,4.85-1.91,5.79-4.35c0.22-0.39,0.37-0.83,0.42-1.28c0-0.94,0.19-1.85,0.19-2.78
    	c0-8,0-16,0-24C91.29,58.52,91.18,58.43,90.51,58.64z M42.12,37.27c0.12-0.93,0.46-1.81,1-2.58c0.73-1,1.13-2.11,1.76-3.12
    	c0.48-0.75,1.2-1.33,1.73-2c1.06-1.12,2.06-2.29,3-3.51c0.43-0.8,0.79-1.64,1.07-2.5c0.39-1.11,0.31-2.33-0.21-3.38
    	c-0.32-0.85-0.73-1.67-1.21-2.45c-0.09-0.14-0.28-0.3-0.06-0.46c0.15-0.11,0.35-0.11,0.5,0c2.12,1.34,3.93,2.91,4.55,5.49
    	c0.54,2.06,0.23,4.25-0.85,6.08c-1.85,3.29-4.27,6.21-6,9.58c-0.72,1.19-1.2,2.49-1.43,3.86c-0.15,1.26-0.05,2.54,0.31,3.76
    	c0.11,0.2,0.15,0.42,0.14,0.64l0,0c-1.03-0.49-1.92-1.24-2.57-2.17C42.23,42.47,41.6,39.82,42.12,37.27z">
						</path>
					</svg>
				</Link>
				<div>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/addProduct'>Add Product</NavLink>
					<NavLink to={`/myCart/${user?.email}`}>My Cart</NavLink>
					<NavLink to='/register'>Register</NavLink>
					<NavLink to='/login'>Login</NavLink>
				</div>
				<div>
					{
						user ?
							<div >
								<div
									onClick={() => { setShow(!show); console.log(show) }}
									style={{ position: "relative", zIndex: '1000', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#fff', border: '1px solid gray', cursor: 'pointer' }}
								>
									<img src={user.photoURL || '/media/user.png'} style={{ width: '100%', borderRadius: '50%' }} alt="" />

									{
										show ?
											<div style={{ width: '200px', borderRadius: '12px', padding: '24px', textAlign: 'center', position: 'absolute', top: '100%', right: '0px', border: '1px solid gray', backgroundColor: '#fff' }}>
												<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: "column", gap: '20px' }}>
													<span style={{ padding: '6px 12px 15px', borderBottom: '1px solid lightgray' }}>{user.displayName || 'Name not set'}</span>
													<button onClick={handleLogOut} style={buttonStyles}>Logout</button>
												</div>
											</div>
											:
											''
									}
								</div>
							</div>
							:
							<Link to='/login'>Login</Link>
					}
				</div>
			</nav>
		</>
	);
};

export default Navbar;