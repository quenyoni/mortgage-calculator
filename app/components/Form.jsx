"use client";
import RadioGroup from "./RadioGroup";
import { useState } from "react";
import Image from "next/image";

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
				<FormGroup left={true} lb={"$"} />
			</div>
			<div className='group__items'>
				<div className='group__item'>
					<label for=''>Mortgage Term</label>
					<FormGroup lb={"years"} />
				</div>
				<div className='group__item'>
					<label for=''>Interest Rate</label>
					<FormGroup lb={"%"} />
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
				className='button button--primary flex  align--center justify--center'>
				<Image
					width={20}
					height={20}
					src='/assets/images/icon-calculator.svg'
				/>
				<span>Calculate Repayments</span>
			</button>
		</form>
	);
}

function FormGroup({ error, left = false, lb }) {
	const [isFocused, setIsFocused] =
		useState(false);

	function handleFocus() {
		setIsFocused((t) => !t);
	}

	return (
		<div
			className={`form__group__new ${
				left ? "" : "row__reverse"
			}`}>
			<label
				className={`text__label ${
					isFocused ? "active" : ""
				} ${error ? "error" : ""}  
				${left ? "" : "right"}`}
				for=''>
				{lb}
			</label>
			<input
				className={`${error ? "error" : ""} ${
					left ? "" : "right"
				}`}
				type='text'
				name=''
				id='years'
				onFocus={handleFocus}
				onBlur={handleFocus}
			/>
		</div>
	);
}
