import style from "./index.module.scss";
import RangeInputs from "../rangeInputs/RangeInputs";
import useFormStore from "../../store";
import FormItemsSelection from "../formItemsSelection/FormItemsSelection";
import Chart from "../chart/Chart";
const paragraphs = [
	[
		" Our coaching assessment is designed to offer a clear view of your professional landscape, encouraging you to identify and focus on areas ripe for development.",
		"From the provided list, select topics that resonate most with your current professional phase, choosing between six to twelve areas.",
		"This selection process is your first step towards targeted growth and enhancement in your career.",
	],
	[
		"Assess your satisfaction or achievement in each selected area on a scale from 1 to 10. ",
		"A score of 1 means there's significant room for improvement or you're quite dissatisfied",
		"while a 10 signifies you're at the pinnacle of satisfaction or achievement.",
	],
	[
		"As you gaze upon your radar chart, notice the peaks and valleys – each tells a story of where you are and where your potential lies. ",
		"What grabs your attention? Which part of this landscape sparks a feeling or a thought within you?",
		"Now, focus on one specific area where you're yearning to grow. Imagine, just one hour from now, you could elevate that score. ",
		"What bold step could you take? This moment is your opportunity to commit to an action that will inch you closer to your goals. Seize it with both hands and let the transformation begin!",
	],
];
const FormComponent = () => {
	const goToNextFormPage = useFormStore((store) => store.goToNextFormPage);
	const goToPrevFormPage = useFormStore((store) => store.goToPrevFormPage);
	const resetFormData = useFormStore((store) => store.resetFormData);
	const currentPage = useFormStore((store) => store.currentFormPage);
	const rangeValues = useFormStore((store) => store.rangeValues);
	const isNextDisabled =
		rangeValues.length < 6 || rangeValues.length > 12 || currentPage === 2;
	const isPrevDisabled = currentPage === 0;
	const handleRestart = () => {
		resetFormData();
	};
	return (
		<div className={style.wrapper}>
			<div className={style.container}>
				<div className={style.titleContainer}>
					<div className={style.text}>
						<h3>COACHING ASSESSMENT</h3>
						{paragraphs[currentPage].map((p) => (
							<p key={p}>{p}</p>
						))}
					</div>
					<div className={`${style.nextAndPrev} hideOnMobileView`}>
						{currentPage === 1 && (
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
						{currentPage === 2 && (
							<button
								className={"button-primary"}
								type="button"
								onClick={handleRestart}
								disabled={isPrevDisabled}
							>
								Start Again!
							</button>
						)}
						{currentPage === 2 && (
							<a
								className={"button-primary"}
								type="button"
								href="https://calendly.com/thegrowingseed/30min"
							>
								Let's connect
							</a>
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
				<div className={`${style.nextAndPrev} displayOnMobileView`}>
					{currentPage === 1 && (
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
					{currentPage === 2 && (
						<button
							className={"button-primary"}
							type="button"
							onClick={handleRestart}
							disabled={isPrevDisabled}
						>
							Start Again
						</button>
					)}
					{currentPage === 2 && (
						<a
							className={"button-primary"}
							type="button"
							href="https://calendly.com/thegrowingseed/30min"
						>
							Let's connect
						</a>
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
		</div>
	);
};

export default FormComponent;
