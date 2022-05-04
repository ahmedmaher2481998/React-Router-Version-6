import { Route, Routes, Navigate, Link, useNavigate } from "react-router-dom";

// nested routes
import Offers from "./Offers";
import Products from "./Products";

export default function About() {
	const redirect = true;
	const navigate = useNavigate();
	const handlehome = () => {
		navigate("/");
	};
	const handlepro = () => {
		navigate("/products");
	};
	return (
		<div className='content'>
			<h2>About Us</h2>
			<Link to={"offers"}>
				<button>offers</button>
			</Link>

			<button onClick={handlepro}> go Products</button>
			<button onClick={handlehome}>go Home</button>

			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
				tempora nisi eligendi quod ut illo cumque quibusdam
				reprehenderit veniam. Cum eaque, nostrum fugit ut inventore
				assumenda perspiciatis sed maiores numquam? Lorem ipsum dolor
				sit amet consectetur adipisicing elit. Obcaecati nam repellat
				hic dolore officia sequi quis quod commodi iusto doloremque.
				Corporis in et placeat unde sapiente perspiciatis minus!
				Recusandae, ad!
			</p>

			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
				tempora nisi eligendi quod ut illo cumque quibusdam
				reprehenderit veniam. Cum eaque, nostrum fugit ut inventore
				assumenda perspiciatis sed maiores numquam? Lorem ipsum dolor
				sit amet consectetur adipisicing elit. Obcaecati nam repellat
				hic dolore officia sequi quis quod commodi iusto doloremque.
				Corporis in et placeat unde sapiente perspiciatis minus!
				Recusandae, ad!
			</p>
			<Routes>
				<Route path='offers' element={<Offers />} />
				<Route
					path='r'
					element={<Navigate to={redirect ? "/products" : "/"} />}
				/>
			</Routes>
		</div>
	);
}
