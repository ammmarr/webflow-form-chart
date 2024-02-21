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
import { useEffect, useState } from "react";
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
	const [fontSize, setFontSize] = useState(10); // Default font size

	// Define responsive font sizes for different breakpoints
	const responsiveFontSizes = [
		{ breakpoint: 500, fontSize: 5 }, // Font size 8 for viewport widths less than 576px
		{ breakpoint: 1200, fontSize: 10 }, // Font size 10 for viewport widths between 576px and 768px
		{ breakpoint: 1800, fontSize: 13 }, // Font size 10 for viewport widths between 576px and 768px

		// Add more breakpoints as needed
	];

	// Update font size based on viewport width
	const updateFontSize = () => {
		const currentWidth = window.innerWidth;
		for (let i = 0; i < responsiveFontSizes.length; i++) {
			const { breakpoint, fontSize } = responsiveFontSizes[i];
			if (currentWidth < breakpoint) {
				setFontSize(fontSize);
				break;
			}
		}
	};

	// Call updateFontSize initially and add event listener for window resize
	useEffect(() => {
		updateFontSize();
		window.addEventListener("resize", updateFontSize);
		return () => {
			window.removeEventListener("resize", updateFontSize);
		};
	}, []);

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
					stepSize: 1, // Set the step size for ticks
					font: {
						size: fontSize + 2,
					},
					display: true,
					backdropColor: "transparent",
					color: "black", // Transparent color for the ticks on the radial axis
				},
				pointLabels: {
					display: true,
					align: "center",
					centerPointLabels: true,
					rotation: "auto", // This line might not be necessary, but you can keep it if you want automatic rotation fallback
					font: {
						size: fontSize,
					},
				},
			},
		},
		elements: {
			arc: {
				borderWidth: 1,
				borderColor: "#000",
				backgroundColor: "rgba(0, 0, 0, 0)",
			},
		},

		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
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
