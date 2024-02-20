import { create } from "zustand";

// Define types
interface FormItem {
	category: string;
	items: string[];
}
interface RangeItem {
	name: string;
	value: number;
}

interface FormStoreState {
	initialFormData: FormItem[];
	toBeSelected: FormItem[];
	selectedFormData: string[];
	currentFormPage: number;
	rangeValues: RangeItem[];
}

interface FormStoreActions {
	addItemToFormData: (category: string, item: string) => void;
	removeItemFromSelected: (itemToRemove: string) => void;
	goToNextFormPage: () => void;
	goToPrevFormPage: () => void;
	handleInputValueChange: (name: string, value: number) => void; // Add this function
}

// Create store
const initialFormData = [
	{
		category: "Leadership Excellence",
		items: [
			"Leading authentically",
			"Team alignment",
			"Delegation",
			"Managing conflict",
			"Effective Communication",
			"Leading change",
			"Decision making",
		],
	},
	{
		category: "Career Navigation",
		items: [
			"Career transition strategies",
			"Building relationships",
			"Influence and persuasion",
			"Job performance",
			"Negotiation",
			"Navigating organisational politics",
			"Managing up",
		],
	},
	{
		category: "Personal Mastery",
		items: [
			"Stress and resilience",
			"Work-life integration",
			"Self-reflection and coaching",
			"Self-confidence",
			"Time and priority management",
			"Motivation and values alignment",
			"Goal setting and achievement",
		],
	},
];
const useFormStore = create<FormStoreState & FormStoreActions>((set, get) => ({
	currentFormPage: 0,
	initialFormData,
	toBeSelected: [...initialFormData],
	rangeValues: [],
	selectedFormData: [],
	sideText: [
		"Evaluate your current level of satisfaction or achievement in each area using a scale from 1 to 10, where 1 indicates significant concern or dissatisfaction, and 10 reflects optimal satisfaction or achievement.",
	],
	addItemToFormData: (category, item) => {
		// Remove the clicked item from formData
		const { selectedFormData, toBeSelected, rangeValues } = get();
		const updatedFormData = toBeSelected.map((mainItem) => {
			if (mainItem.category === category) {
				return {
					...mainItem,
					items: mainItem.items.filter((i) => i !== item),
				};
			}
			return mainItem;
		});

		// Add the clicked item to selectedItems
		set({ selectedFormData: [...selectedFormData, item] });

		// Update the state with the modified formData
		set({ toBeSelected: updatedFormData });

		// Add the clicked item to rangeValues with value 0
		set({ rangeValues: [...rangeValues, { name: item, value: 3 }] });
	},
	removeItemFromSelected: (itemToRemove) => {
		// Remove the clicked item from selectedItems
		const { selectedFormData, toBeSelected, initialFormData, rangeValues } =
			get();

		const updatedSelectedItems = selectedFormData.filter(
			(item) => item !== itemToRemove,
		);
		set({ selectedFormData: updatedSelectedItems });

		// Find the category of the item to be removed
		const categoryContainingItem = initialFormData.find((category) =>
			category.items.includes(itemToRemove),
		);

		if (categoryContainingItem) {
			// Add the removed item back to formData under its original category
			const updatedFormData = toBeSelected.map((category) => {
				if (category.category === categoryContainingItem.category) {
					return {
						...category,
						items: [...category.items, itemToRemove],
					};
				}
				return category;
			});
			// Update the state with the modified formData
			set({ toBeSelected: updatedFormData });

			// Remove the item from rangeValues
			const updatedRangeValues = rangeValues.filter(
				(rangeItem) => rangeItem.name !== itemToRemove,
			);
			set({ rangeValues: updatedRangeValues });
		}
	},
	goToNextFormPage: () => {
		const { currentFormPage } = get();
		// Check if adding 1 would exceed the maximum allowed page
		if (currentFormPage + 1 <= 2) {
			const toBeUpdated = currentFormPage + 1;
			set({ currentFormPage: toBeUpdated });
		}
	},
	goToPrevFormPage: () => {
		const { currentFormPage } = get();
		// Check if subtracting 1 would go below the minimum allowed page
		if (currentFormPage - 1 >= 0) {
			const toBeUpdated = currentFormPage - 1;
			set({ currentFormPage: toBeUpdated });
		}
	},
	handleInputValueChange: (name, value) => {
		// Update the value of rangeValues for the input field with the given name
		set((state) => ({
			rangeValues: state.rangeValues.map((item) =>
				item.name === name ? { ...item, value: value } : item,
			),
		}));
	},
}));

export default useFormStore;
