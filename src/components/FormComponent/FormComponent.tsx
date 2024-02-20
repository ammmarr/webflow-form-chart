import style from "./index.module.scss";
import RangeInputs from "../rangeInputs/RangeInputs";
import useFormStore from "../../store";
import FormItemsSelection from "../formItemsSelection/FormItemsSelection";
import Chart from "../chart/Chart";
const paragraphs = [
	[
		"Our coaching assessment aims to give you a clear snapshot of where you stand in various aspects of your work, encouraging you to reflect on areas for improvement. Please select the most relevant topics for your current professional situation, choosing between six to twelve areas from the list. ",
	],
	[
		"Evaluate your current level of satisfaction or achievement in each area using a scale from 1 to 10, where 1 indicates significant concern or dissatisfaction, and 10 reflects optimal satisfaction or achievement.",
	],
	[
		"Have a look at the results on the radar chart. What stands out to you? What thoughts, emotions, and impressions come to your mind?",
		"Now, please select an area to focus on in the upcoming weeks and explain why this area is critical to you. What would a score of 9 or 10 look like in that area?",
		"Since you are going to make progress in your chosen area that will take you one or two points beyond the current score, what specific steps can you take today to help you move closer to your goal?",
		"Imagine looking back a year from now; what changes do you want to see in yourself due to your efforts in this area?		",
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
						<p key={p}>{p}</p>
					))}
				</div>
				<div className={style.nextAndPrev}>
					{currentPage !== 0 && (
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
					)}
					{currentPage !== 2 && (
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
					)}
				</div>
			</div>
			<form>
				{currentPage === 2 && <Chart />}
				{currentPage === 0 && <FormItemsSelection />}
				{currentPage === 1 && <RangeInputs />}
			</form>
		</div>
	);
};

export default FormComponent;
