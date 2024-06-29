"use client";
import FormGroup from "./FormGroup";
import RadioGroup from "./RadioGroup";
import { useState } from "react";
import Image from "next/image";

export default function Form({
	handleSubmit,
	onSubmit,
	register,
	watch,
	errors,
}) {
	const {
		mortgageAmount: amt,
		mortgageTerms: terms,
		interestRate: ir,
		mortgageType: option,
	} = errors;

	const selectedOption = watch(
		"mortgageType",
		"repayment",
	);

	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};

	return (
		<form
			className='form'
			action=''
			onSubmit={handleSubmit(onSubmit)}>
			<div className='form__group'>
				<label>Mortgage Amount</label>
				<FormGroup
					left={true}
					lb={"$"}
					register={register}
					purpose={"mortgageAmount"}
					err={amt}
				/>
			</div>
			<div className='group__items'>
				<div className='group__item'>
					<label>Mortgage Term</label>
					<FormGroup
						lb={"years"}
						purpose={"mortgageTerms"}
						register={register}
						err={terms}
					/>
				</div>
				<div className='group__item'>
					<label>Interest Rate</label>
					<FormGroup
						lb={"%"}
						purpose={"interestRate"}
						register={register}
						err={ir}
					/>
				</div>
			</div>
			<div className='form__group'>
				<label>Mortgage Type</label>
				<RadioGroup
					register={register}
					handleOptionChange={handleOptionChange}
					selectedOption={selectedOption}
					err={option}
				/>
			</div>
			<button
				type='submit'
				className='button button--primary flex  align--center justify--center'>
				<Image
					width={20}
					height={20}
					alt='Calculator image'
					src='/assets/images/icon-calculator.svg'
				/>
				<span>Calculate Repayments</span>
			</button>
		</form>
	);
}
