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
// import annotationPlugin from "chartjs-plugin-annotation";
import style from "./index.module.scss";
import { useEffect, useState } from "react";
import breakWordsIntoChunks from "../../utils/breakWordsIntoChunks";
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const Chart = () => {
	const rangeValues = useFormStore((store) => store.rangeValues);
	const labels = useFormStore((store) => store.selectedFormData);
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
		labels: breakWordsIntoChunks(labels, 10),
		datasets: [
			{
				label: "# of Votes",
				data: dataValues,
				backgroundColor: [
					"#3fa5a780",
					"#bba92b80",
					"#e2415d80",
					"#6f9dcf80",
					"#8e4fa680",
					"#d26ac280",
					"#f89e1b80",
					"#b2449980",
					"#fa802c80",
					"#0b3d5f80",
					"#43c39480",
					"#7f5e9880",
				],

				borderWidth: 1,
				borderColor: [
					"#3fa5a7",
					"#bba92b",
					"#e2415d",
					"#6f9dcf",
					"#8e4fa6",
					"#d26ac2",
					"#f89e1b",
					"#b24499",
					"#fa802c",
					"#0b3d5f",
					"#43c394",
					"#7f5e98",
				],
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
					z: 1,
					stepSize: 1, // Set the step size for ticks
					reverse: true,
					font: {
						size: fontSize - 2,
					},
					display: true,
					backdropColor: "#faf7f0",
					color: "black", // Set the color for the ticks on the radial axis
				},
				suggestedMin: 0,
				suggestedMax: 10,
				rotation: (context) => (context.index * Math.PI) / 6,
				beginAtZero: true,
				pointLabels: {
					padding: 2,
					display: true,
					align: "start",
					beginAtZero: true,
					centerPointLabels: true,
					font: {
						size: fontSize,
					},
					maxWidth: 5,
				},
			},
			beginAtZero: true,
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

		startAngle: Math.PI,
	};
	console.log(labels);
	console.log(...breakWordsIntoChunks(labels, 6));
	return (
		<div className={style.container}>
			<div className={style.wrapper} style={{ whiteSpace: "pre" }}>
				<PolarArea data={data} options={options} />
			</div>
		</div>
	);
};

export default Chart;
