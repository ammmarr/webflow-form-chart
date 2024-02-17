import useFormStore from "../../store";
import style from "./index.module.scss";

const RangeInputs = () => {
	const rangeValues = useFormStore((store) => store.rangeValues);
	const handleInputValueChange = useFormStore(
		(store) => store.handleInputValueChange,
	);

	return (
		<div className={style.container}>
			{rangeValues.map((item) => (
				<div className={style.inputContainer} key={item.name}>
					<label>{item.name}</label>
					<input
						type="range"
						min={0}
						max={10}
						value={item.value}
						onChange={(e) =>
							handleInputValueChange(item.name, parseInt(e.target.value))
						}
					/>
				</div>
			))}
		</div>
	);
};

export default RangeInputs;
