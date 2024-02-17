import style from "./index.module.scss";
import RangeInputs from "../rangeInputs/RangeInputs";
import useFormStore from "../../store";
import FormItemsSelection from "../formItemsSelection/FormItemsSelection";
import Chart from "../chart/Chart";
const paragraphs = [
	[
		"Identify and prioritize five to areas where coaching could enhance your professional journey. Engage with these steps to refine your focus and set the stage for development:",
		"Begin by selecting areas that resonate with your current professional scenario (minimum 6, max 12)",
	],
	[
		"Evaluate your current level of satisfaction or achievement in each area using a scale from 1 to 10, where 1 indicates significant concern or dissatisfaction, and 10 reflects optimal satisfaction or achievement.",
	],
	[
		"Analyze the results displayed on the radar chart:",
		"Contemplate your initial reaction to the visual representation of your ratings. Allow yourself to fully experience any emotions or insights that arise.",
		"Note which areas demand immediate attention and why.",
		"Reflect on your awareness of these areas before now. Consider what has prevented you from addressing these challenges or goals. Assess your willingness to commit to improvement.",
		"Define what 'improvement' means for each selected area. Envision the changes that a slight increase in your satisfaction or achievement rating would bring. Detail the specific differences that would emerge.",
		"This process is designed to guide you in recognizing areas of potential growth and to motivate the initiation of your coaching journey. Get in touch to share your results with us, if you wish- We'd love to hear your story.",
	],
];
const FormComponent = () => {
	const goToNextFormPage = useFormStore((store) => store.goToNextFormPage);
	const goToPrevFormPage = useFormStore((store) => store.goToPrevFormPage);
	const currentPage = useFormStore((store) => store.currentFormPage);
	const rangeValues = useFormStore((store) => store.rangeValues);
	const isNextDisabled =
		rangeValues.length < 6 || rangeValues.length > 12 || currentPage === 2;
	const isPrevDisabled = currentPage === 0;
	return (
		<div className={style.container}>
			<div className={style.titleContainer}>
				<div className={style.text}>
					<h3>COACHING ASSESSMENT</h3>
					{paragraphs[currentPage].map((p) => (
						<p>{p}</p>
					))}
				</div>
				<div className={style.nextAndPrev}>
					<button
						className={
							isPrevDisabled ? "button-primary-disabled" : "button-primary"
						}
						type="button"
						onClick={goToPrevFormPage}
						disabled={isPrevDisabled}
					>
						Prev
					</button>
					<button
						className={
							isNextDisabled ? "button-primary-disabled" : "button-primary"
						}
						type="button"
						onClick={goToNextFormPage}
						disabled={isNextDisabled}
					>
						Next
					</button>
				</div>
			</div>
			<form>
				{currentPage === 0 && <FormItemsSelection />}
				{currentPage === 1 && <RangeInputs />}
				{currentPage === 2 && <Chart />}
			</form>
		</div>
	);
};

export default FormComponent;
