"use client";

function RadioGroup({
	handleOptionChange,
	selectedOption,
	register,
	err,
}) {
	return (
		<div className='radio__group'>
			<input
				type='radio'
				id='radio-1'
				name='tabs'
				value='repayments'
				checked={selectedOption === "repayments"}
				onChange={handleOptionChange}
				{...register("mortgageType", {
					required: true,
				})}
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
				value='interestOnly'
				checked={
					selectedOption === "interestOnly"
				}
				onChange={handleOptionChange}
				{...register("mortgageType", {
					required: true,
				})}
			/>
			<label
				className='radio-label'
				for='radio-2'>
				<div className='radio-circle'></div>
				<span className='radio-text'>
					Interest Only
				</span>
			</label>
			<div className='error__wrapper'>
				{err && (
					<span>This field is required</span>
				)}
			</div>
		</div>
	);
}

export default RadioGroup;
