import Slider from "@mui/material/Slider";
import useFormStore from "../../store";
import style from "./index.module.scss";

const RangeInputs = () => {
	const rangeValues = useFormStore((store) => store.rangeValues);
	const handleInputValueChange = useFormStore(
		(store) => store.handleInputValueChange,
	);
	const steps = 10;

	// });
	return (
		<div className={style.container}>
			{rangeValues.map((item) => (
				<div className={style.inputContainer} key={item.name}>
					<label>{item.name}</label>
					<Slider
						size="medium"
						defaultValue={3}
						value={item.value}
						min={1}
						max={steps}
						step={1}
						valueLabelDisplay="auto"
						onChange={(_event, value: number) =>
							handleInputValueChange(item.name, value)
						}
						sx={{
							color: "success.main",
							"& .MuiSlider-thumb": {
								border: "5px solid white",
								boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px;",
								color: "black",
								width: "1.5rem",
								height: "1.5rem",
								borderRadius: "50%",
							},
							"& .MuiSlider-track": {
								color: "rgba(0, 0, 0, 0.622)",
								height: "20px",
								width: "100%",
								display: "none",
								opacity: "0.8",
							},
							"& .MuiSlider-rail": {
								backgroundColor: "rgba(0, 0, 0, 0.622)", // Apply rgba(0, 0, 0, 0.622) color
								height: 20, // Adjust height
								overflow: "hidden", // Hide overflow content
								width: "105%", // Increase width
								transform: "translateX(-2.5%) translateY(-50%)", // Adjust transform
								WebkitTransform: "translateX(-2.5%) translateY(-50%)", // Vendor-prefixed transform for WebKit browsers
								MozTransform: "translateX(-2.5%) translateY(-50%)", // Vendor-prefixed transform for Mozilla browsers
								MsTransform: "translateX(-2.5%) translateY(-50%)", // Vendor-prefixed transform for Microsoft browsers
								opacity: "0.8",
							},
							"& .MuiSlider-mark": {
								width: 5, // Adjust mark width
								height: 5, // Adjust mark height
								backgroundColor: "white", // Adjust mark color
								borderRadius: "50%",
								transform: "translateX(-50%) translateY(-50%)",
							},
						}}
						marks={Array.from({ length: steps }).map((_, index) => ({
							value: index + 1,
						}))}
					/>
				</div>
			))}
		</div>
	);
};

export default RangeInputs;
