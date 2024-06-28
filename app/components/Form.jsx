"use client";
import { useState } from "react";

export default function Form() {
	const [selectedOption, setSelectedOption] =
		useState("");

	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};
	return (
		<form className='form' action=''>
			<div className='form__group'>
				<label for=''>Mortgage Amount</label>
				<div className='left__wrapper'>
					<input
						className='input input__amount'
						type='text'
						name=''
						id=''
					/>
				</div>
			</div>
			<div class='group__items'>
				<div className='form__group'>
					<label for=''>Mortgage Term</label>
					<div class='right__wrapper input__years'>
						<input
							className='input years'
							type='text'
							name=''
							id=''
						/>
					</div>
				</div>
				<div className='form__group'>
					<label for=''>Interest Rate</label>
					<div class='right__wrapper input__rates'>
						<input
							className='input input__interest__rate'
							type='text'
							name=''
							id=''
						/>
					</div>
				</div>
			</div>
			<div className='form__group'>
				<label for=''>Mortgage Type</label>
				<RadioGroup
					handleOptionChange={handleOptionChange}
					selectedOption={selectedOption}
				/>
			</div>
			<button
				type='submit'
				className='button button--primary'>
				Calculate Repayments
			</button>
		</form>
	);
}

function RadioGroup({
	handleOptionChange,
	selectedOption,
}) {
	return (
		<div className='radio__group'>
			<input
				type='radio'
				id='radio-1'
				name='tabs'
				value='option1'
				checked={selectedOption === "option1"}
				onChange={handleOptionChange}
			/>
			<label
				className='radio-label'
				for='radio-1'>
				<div className='radio-circle'></div>
				<span className='radio-text'>
					Repayments
				</span>
			</label>
			<input
				type='radio'
				id='radio-2'
				name='tabs'
				value='option2'
				checked={selectedOption === "option2"}
				onChange={handleOptionChange}
			/>
			<label
				className='radio-label'
				for='radio-2'>
				<div className='radio-circle'></div>
				<span className='radio-text'>
					Interest Only
				</span>
			</label>
		</div>
	);
}
