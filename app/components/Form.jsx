export default function Form() {
	return (
		<form className='form' action=''>
			<div className='form__group'>
				<label for=''>Mortgage Amount</label>
				<div class='amount'>
					<input
						className='input input__amount'
						type='text'
						name=''
						id=''
					/>
				</div>
			</div>
			<div class='joint__group'>
				<div className='form__group'>
					<label for=''>Mortgage Term</label>
					<input
						className='input input__years'
						type='text'
						name=''
						id=''
					/>
				</div>
				<div className='form__group'>
					<label for=''>Interest Rate</label>
					<input
						className='input input__interest__rate'
						type='text'
						name=''
						id=''
					/>
				</div>
			</div>
			<div className='form__group'>
				<label for=''>Mortgage Type</label>
			</div>
			<button
				type='submit'
				className='button button--primary'>
				Calculate Repayments
			</button>
		</form>
	);
}
