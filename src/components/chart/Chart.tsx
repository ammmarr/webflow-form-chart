import {
	Chart as ChartJS,
	RadialLinearScale,
	ArcElement,
	Tooltip,
	Legend,
	Plugin,
	Option,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";
import useFormStore from "../../store";
import annotationPlugin from "chartjs-plugin-annotation";
import style from "./index.module.scss";
ChartJS.register(
	RadialLinearScale,
	ArcElement,
	Tooltip,
	Legend,
	annotationPlugin,
);

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
				backgroundColor: ["transparent"],

				borderWidth: 1,
				borderColor: ["black"],
			},
		],
	};

	// Set options for the chart
	const options: Option = {
		legend: {
			display: false,
		},

		hover: {
			mode: "nearest",
			intersect: true,
		},
		scales: {
			r: {
				ticks: {
					display: false, // Hide the ticks (radius values) on the r scale
				},
				pointLabels: {
					display: true,
					align: "center", // Position labels radially
					centerPointLabels: true,
					font: {
						size: 10,
					},
				},
			},
		},
		elements: {
			arc: {
				borderWidth: 5, // Increase the border width for better visibility
				borderColor: "#000", // Set border color
				backgroundColor: "rgba(0, 0, 0, 0)", // Set transparent background color
			},
		},
		startAngle: -0.5 * Math.PI,
		rotation: -0.5 * Math.PI,
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false, // Disable tooltips
			},
		},
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
