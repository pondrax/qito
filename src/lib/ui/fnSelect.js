// @unocss-include
/**
 * Gets the value of a property at the specified path within an object.
 *
 * @param {any} obj - The object to traverse.
 * @param {string} path - The path to the property, using dot notation.
 * @returns {*} - The value of the property at the specified path, or undefined if not found.
 */
export const getValue = (obj, path) => {
	path = path.replace(/\[(\w+)\]/g, '.$1');
	path = path.replace(/^\./, '');
	const a = path.split('.');
	let o = obj;
	while (a.length) {
		const n = a.shift() || '';
		if (o) {
			if (!(n in o)) return;
			o = o[n];
		}
	}
	return o;
};

/**
 * Represents an option object.
 * @typedef {Object.<string, any>} Option
 */

/**
 * Initialize a custom select input with options.
 *
 * @param {HTMLElement} node - The root element of the custom select.
 * @param {Option[]|string[]} baseOptions - The options to populate the custom select.
 * @returns {Object} An object with methods to update and destroy the custom select.
 */
export function fnSelect(node, baseOptions) {
	/**
	 * @type {Option[]}
	 */
	let options;

	/**
	 * The key for option values.
	 * @type {string}
	 */
	const keyvalue = node.getAttribute('keyvalue') || 'id';

	/**
	 * The key for option labels.
	 * @type {string}
	 */
	const keylabel = node.getAttribute('keylabel') || 'name';

	/**
	 * Indicates whether multiple selections are allowed.
	 * @type {boolean}
	 */
	const isMultiple = node.hasAttribute('multiple');

	/**
	 * An array to store the custom option elements.
	 * @type {HTMLDivElement[]}
	 */
	let optionDivs = [];

	/**
	 * An array to store the selected options.
	 * @type {Option[]}
	 */
	let selectedOptions = [];

	/**
	 * A flag to track whether the menu is open or not.
	 * @type {boolean}
	 */
	let isMenuOpen = false;

	/**
	 * The index of the currently focused option.
	 * @type {number}
	 */
	let focusedIndex = -1;

	/**
	 * A flag to track if a click event occurred.
	 * @type {boolean}
	 */
	let clicked = false;

	const filter = /** @type {HTMLInputElement} */ (node.querySelector('[filter]'));
	const selected = /** @type {HTMLInputElement} */ (node.querySelector('[selected]'));
	const container = /** @type {HTMLInputElement} */ (node.querySelector('[menu]'));
	const optionTemplate = /** @type {HTMLDivElement} */ (container.querySelector('[option]'));

	const selectedDiv = document.createElement('div');
	node.classList.add('relative', '!flex-col', 'w-full');
	container.classList.add('hidden', 'z-10', 'absolute', 'top-0', 'w-full');
	selectedDiv.className = 'flex flex-wrap !justify-start gap-1';
	node.appendChild(selectedDiv);

	const button = /** @type {HTMLDivElement} */ (optionTemplate.cloneNode(true));
	const buttonCheck = /** @type {HTMLInputElement} */ (button.querySelector('[type="checkbox"]'));
	const buttonLabel = /** @type {HTMLDivElement} */ (button.querySelector('[option-label]'));
	// button.className = 'sticky top-0 bg-baseA'

	buttonLabel.innerText = isMultiple ? '-- Tambahkan Semua --' : '-- Hapus Pilihan --';
	buttonLabel.classList.add('text-stone');
	buttonCheck.addEventListener('change', handleButton);
	filter.addEventListener('focus', handleFocus);
	filter.addEventListener('blur', handleBlur);
	filter.addEventListener('keydown', handleFilterKeydown);
	filter.addEventListener('input', handleFilterInput);
	document.addEventListener('mousedown', handleMouseDown);
	document.addEventListener('mouseup', handleMouseUp);

	initSelect();
	/**
	 * Handle the button click event to select or deselect all options.
	 */
	function handleButton() {
		if (isMultiple) {
			if (buttonCheck.checked) {
				selectedOptions = options;
				buttonLabel.innerText = '[Clear Selection]';
			} else {
				selectedOptions = [];
				buttonLabel.innerText = '[Add All]';
			}
		} else {
			selectedOptions = [];
		}
		updateSelectedDisplay();

		selected.dispatchEvent(new Event('input'));
	}

	/**
	 * Handle the filter input event to filter the options.
	 */
	function handleFilterInput() {
		const filterValue = String(filter.value).toLowerCase();
		// console.log(optionDivs)
		optionDivs.forEach((optionDiv, index) => {
			// console.log(options[index])
			const optionText = String(options[index][keylabel])?.toLowerCase();
			if (optionText.includes(filterValue)) {
				optionDiv.style.display = 'block';
			} else {
				optionDiv.style.display = 'none';
			}
		});

		if (!isMultiple) {
			selectedDiv.textContent = ''; // Clear selected options display
		}
	}

	/**
	 * Handle the focus event on the filter input.
	 */
	function handleFocus() {
		container.style.display = 'block';
		isMenuOpen = true;
	}

	function handleBlur() {
		if (!clicked) {
			container.style.display = 'none';
			isMenuOpen = false;
		}
		clicked = false;
		// if (event.type == 'blur') {

		// }
		// if (!isMultiple) {
		//   setTimeout(() => {
		//     // container.style.display = 'none';
		//     filter.blur()
		//   }, 100)
		// }
	}

	/**
	 * Handle keyboard navigation in the filter input.
	 *
	 * @param {KeyboardEvent} event - The keyboard event.
	 */
	function handleFilterKeydown(event) {
		if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
			event.preventDefault();
			navigateOptions(event.key === 'ArrowDown' ? 'next' : 'prev');
		} else if (event.key === 'Enter') {
			event.preventDefault();
			selectCurrentOption();
		}
	}

	/**
	 * Handle mouse down events on the document to close the menu.
	 *
	 * @param {Event} event - The mouse event.
	 */
	function handleMouseDown(event) {
		const target = /** @type {HTMLElement} */ (event.target);
		// console.log(event.target)
		clicked = true;
		if (isMenuOpen && !container.contains(target)) {
			container.style.display = 'none';
			isMenuOpen = false;
		}
	}
	/**
	 * Handle mouse up events on the document to close the menu.
	 *
	 * @param {Event} event - The mouse event.
	 */
	function handleMouseUp(event) {
		const target = /** @type {HTMLElement} */ (event.target);
		if (isMenuOpen && container.contains(target)) {
			if (!isMultiple) {
				container.style.display = 'none';
				isMenuOpen = false;
			}
		}
	}

	/**
	 * Navigate options using keyboard arrow keys.
	 *
	 * @param {'next' | 'prev'} direction - The direction to navigate.
	 */
	function navigateOptions(direction) {
		const visibleOptions = [
			button,
			...optionDivs.filter((optionDiv) => optionDiv.style.display !== 'none')
		];
		if (visibleOptions.length === 0) return;

		if (direction === 'next') {
			focusedIndex = (focusedIndex + 1) % visibleOptions.length;
		} else {
			focusedIndex = (focusedIndex - 1 + visibleOptions.length) % visibleOptions.length;
		}

		// Remove focus from previous option
		if (focusedIndex >= 0) {
			visibleOptions.forEach((optionDiv, index) => {
				if (index === focusedIndex) {
					optionDiv.children[0]?.classList?.add('bg-neutral:10');
					const parent = /** @type {HTMLDivElement} */ (optionDiv.parentElement);
					const elementRect = optionDiv.getBoundingClientRect();
					const parentRect = parent.getBoundingClientRect();

					const elementTopRelativeToParent = elementRect.top - parentRect.top;
					parent.scrollTop += elementTopRelativeToParent - 8;
				} else {
					optionDiv.children[0]?.classList?.remove('bg-neutral:10');
				}
			});
		}
	}

	/**
	 * Select the currently focused option.
	 */
	function selectCurrentOption() {
		if (focusedIndex >= 0 && focusedIndex < optionDivs.length + 1) {
			const checkbox = /** @type {HTMLInputElement} */ (
				[button, ...optionDivs][focusedIndex].querySelector('[type="checkbox"]')
			);
			checkbox.checked = !checkbox.checked;
			checkbox.dispatchEvent(new Event('change')); // Trigger the change event
			filter.blur();
		}
		// console.log(container)
		//   container.style.display='none'
	}

	/**
	 * Update the display of selected options.
	 *
	 * @param {boolean} init - Whether it's the initial update.
	 */
	function updateSelectedDisplay(init = false) {
		if (init) {
			filter.focus();
		}
		// Update all checkboxes based on the selectedOptions
		optionDivs.forEach((optionDiv) => {
			const checkbox = /** @type {HTMLInputElement} */ (
				optionDiv.querySelector('[type="checkbox"]')
			);
			checkbox.checked = selectedOptions.some(
				(option) => option[keyvalue].toString() === checkbox.value
			);
		});
		if (isMultiple) {
			selected.value = selectedOptions.map((option) => option[keyvalue]).join(',');
			selectedDiv.innerHTML = selectedOptions
				.map((option) => `<span badge="~ primary" hover-badge-secondary>${option[keylabel]}</span>`)
				.join(' ');
			node.dispatchEvent(new CustomEvent('selected', { detail: selectedOptions }));
		} else {
			// console.log(selectedOptions.at(0))
			// selected.dataset.selected = JSON.stringify(selectedOptions)
			selected.value = selectedOptions.at(0)?.[keyvalue] || '';
			filter.value = selectedOptions.at(0)?.[keylabel] || '';
			filter.style.height = (filter.scrollHeight + 2) + "px";
			buttonCheck.checked = false;
			node.dispatchEvent(new CustomEvent('selected', { detail: selectedOptions.at(0) }));
		}
		// console.log('dispatch')
		// node element dispatch, for select add to selected
	}

	/**
	 * Initialize the custom select with options.
	 */
	function initSelect() {
		// console.log(baseOptions)
		if (!baseOptions) return;
		// console.log(selected.value)
		// console.log(baseOptions)
		// if (!baseOptions && newOption) {
		//   baseOptions=newOption
		// };
		if (typeof baseOptions.at(0) === 'string') {
			options = baseOptions.map((val) => ({ id: val, name: val }));
		} else {
			options = /** @type {Option[]} */ (baseOptions);
		}
		container.textContent = '';
		container.appendChild(button);

		optionDivs = [];
		options.forEach((option) => {
			const clonedOption = /** @type {HTMLDivElement} */ (optionTemplate.cloneNode(true));
			const optionCheckbox = /** @type {HTMLInputElement} */ (
				clonedOption.querySelector('[type="checkbox"]')
			);
			const optionLabel = /** @type {HTMLDivElement} */ (
				clonedOption.querySelector('[option-label]')
			);

			optionCheckbox.value = String(option[keyvalue]);
			if (optionLabel.textContent) {
				optionLabel.innerHTML =
					optionLabel.innerHTML.replace(
						/\((.*?)\)/g,
						(match, key) => String(getValue(option, key)) || match
					) || '';
			} else {
				optionLabel.textContent = option[keylabel];
			}

			optionCheckbox.addEventListener('change', () => {
				if (isMultiple) {
					if (optionCheckbox.checked) {
						selectedOptions.push(option);
					} else {
						selectedOptions = selectedOptions.filter(
							(selectedOption) => selectedOption[keyvalue] !== option[keyvalue]
						);
					}
				} else {
					selectedOptions = optionCheckbox.checked ? [option] : [];
					optionDivs.forEach((div) => {
						const checkbox = /** @type {HTMLInputElement} */ (
							div.querySelector('[type="checkbox"]')
						);
						checkbox.checked = checkbox.value === option[keyvalue].toString();
					});
				}
				updateSelectedDisplay();

				selected.dispatchEvent(new Event('input'));
			});
			optionDivs.push(clonedOption);
			container.appendChild(clonedOption);
		});
		// console.log('sel', selected.value, options.length)
		if (filter.value != '') {
			selectedOptions = options.filter(
				(option) => String(option[keylabel]).toLowerCase() == String(filter.value).toLowerCase()
			);
			updateSelectedDisplay();
		}
		if (selected.value != '') {
			const selections = selected.value.split(',');
			selectedOptions = options.filter((option) =>
				selections.reduce(
					(p, sel) => String(option[keyvalue]).toLowerCase() == String(sel).toLowerCase() || p,
					false
				)
			);
			if (selectedOptions.length > 0) {
				setTimeout(() => {
					// console.log('dispatch', selectedOptions)
					node.dispatchEvent(new CustomEvent('selected', { detail: selectedOptions.at(0) }));
				}, 1);
			}
			updateSelectedDisplay();
		}
	}

	/**
	 * Update the custom select with new options.
	 *
	 * @param {Option[]} newOption - The new options to set.
	 */
	function update(newOption) {
		if (baseOptions !== newOption) {
			baseOptions = newOption;
			initSelect();
			updateSelectedDisplay();
		}
	}

	/**
	 * Destroy the custom select and remove event listeners.
	 */
	function destroy() {
		buttonCheck.removeEventListener('change', handleButton);
		filter.removeEventListener('focus', handleFocus);
		filter.removeEventListener('blur', handleBlur);
		filter.removeEventListener('keydown', handleFilterKeydown);
		filter.removeEventListener('input', handleFilterInput);
		document.removeEventListener('mousedown', handleMouseDown);
	}

	return {
		update,
		destroy
	};
}
