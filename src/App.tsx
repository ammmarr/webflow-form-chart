import "./App.scss";
import FormComponent from "./components/FormComponent/FormComponent";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";

function App() {
	return (
		<>
			<Navbar />
			<div className="app">
				<FormComponent />;
				<Footer />
			</div>
		</>
	);
}

export default App;
