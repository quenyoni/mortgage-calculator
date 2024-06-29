"use client";
import { useState } from "react";
function FormGroup({
	err,
	left = false,
	lb,
	purpose,
	register,
}) {
	const [isFocused, setIsFocused] =
		useState(false);

	return (
		<div
			className={`form__group__new ${
				left ? "" : "row__reverse"
			}`}>
			<label
				className={`text__label ${
					isFocused ? "active" : ""
				} ${err ? "error" : ""}  
				${left ? "" : "right"}`}
				for=''>
				{lb}
			</label>
			<input
				className={`${err ? "error" : ""} ${
					left ? "" : "right"
				}`}
				type='text'
				name=''
				id='years'
				onFocus={() => {
					setIsFocused(true);
				}}
				{...register(purpose, { required: true })}
				onBlur={() => {
					setIsFocused(false);
				}}
			/>
			<div className='error__wrapper'>
				{err && (
					<span>
						{err?.message
							? "This field is required"
							: ""}
					</span>
				)}
			</div>
		</div>
	);
}

export default FormGroup;
