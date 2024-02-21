import useFormStore from "../../store";
import style from "./index.module.scss";
const FormItemsSelection = () => {
	const handleAddClick = useFormStore((store) => store.addItemToFormData);

	const handleRemoveClick = useFormStore(
		(store) => store.removeItemFromSelected,
	);

	const selectedItems = useFormStore((store) => store.selectedFormData);
	const formData = useFormStore((store) => store.toBeSelected);

	return (
		<>
			<div className={style.selectContainer}>
				{formData.map((mainItem) => {
					return (
						<div className={style.column} key={mainItem.category}>
							<label key={mainItem.category}>{mainItem.category}</label>
							<div className={style.valuesContainer}>
								{mainItem.items.map((item) => (
									<button
										value={item}
										key={item}
										onClick={() => handleAddClick(mainItem.category, item)}
										type="button"
										className={style.itemButton}
									>
										{item}
									</button>
								))}
							</div>
						</div>
					);
				})}
			</div>
			<div className={style.selectedContainer}>
				{selectedItems.length > 0 && (
					<label className={style.selectedLabel}>
						( {selectedItems.length} ) Selected{" "}
						<span className={style.textInfo}>
							{selectedItems.length < 6 || selectedItems.length > 12
								? "Select between 6 and 12 to go to the next step"
								: null}
							{selectedItems.length === 0 && "Try Selecting some items"}
						</span>
					</label>
				)}

				<div className={style.selectedButtons}>
					{selectedItems.map((item) => (
						<button
							value={item}
							key={item}
							onClick={() => handleRemoveClick(item)}
							type="button"
							className={style.itemButtonSelected}
						>
							{item}
						</button>
					))}
				</div>
			</div>
		</>
	);
};

export default FormItemsSelection;
