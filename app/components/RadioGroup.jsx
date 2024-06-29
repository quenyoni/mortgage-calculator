"use client";

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

export default RadioGroup;
