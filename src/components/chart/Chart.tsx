import {
	Chart as ChartJS,
	RadialLinearScale,
	ArcElement,
	Tooltip,
	Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import useFormStore from "../../store";
import style from "./index.module.scss";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const Chart = () => {
	const rangeValues = useFormStore((store) => store.rangeValues);
	const labels = rangeValues.map((item) => item.name);
	const dataValues = rangeValues.map((item) => item.value);

	const data = {
		labels,
		datasets: [
			{
				label: "# of Votes",
				data: dataValues,
				backgroundColor: [
					"rgba(255, 99, 132, 0.5)",
					"rgba(54, 162, 235, 0.5)",
					"rgba(255, 206, 86, 0.5)",
					"rgba(75, 192, 192, 0.5)",
					"rgba(153, 102, 255, 0.5)",
					"rgba(255, 159, 64, 0.5)",
					"rgba(100, 200, 50, 0.5)",
					"rgba(200, 100, 150, 0.5)",
					"rgba(50, 150, 200, 0.5)",
					"rgba(170, 50, 200, 0.5)",
					"rgba(200, 50, 100, 0.5)",
					"rgba(50, 200, 150, 0.5)",
				],
				borderWidth: 0.2,
			},
		],
	};

	// Set options for the chart
	const options = {
		scales: {
			r: {
				suggestedMin: 0,
				suggestedMax: 10, // Set the default max value to 10
			},
		},
		elements: {
			arc: {
				borderWidth: 0.2,
			},
		},
		startAngle: -0.5 * Math.PI, // Rotate the chart to start from the top
		rotation: -0.5 * Math.PI, // Rotate the labels to align with the data points
	};

	return (
		<div className={style.container}>
			<div className={style.wrapper}>
				<PolarArea data={data} options={options} />
			</div>
		</div>
	);
};

export default Chart;
