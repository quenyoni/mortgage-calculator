function Calculations({ payments }) {
	function formatCurrency(
		value,
		currency = "USD",
		locale = "en-US",
	) {
		return new Intl.NumberFormat(locale, {
			style: "currency",
			currency: currency,
		}).format(value);
	}
	return (
		<div className='app__results__calculations'>
			<div className='app__results__calculations__header'>
				<h2>Your results</h2>
				<p>
					Your results Your results are shown
					below based on the information you
					provided. To adjust the results, edit
					the form and click “calculate
					repayments” again
				</p>
			</div>
			<div>
				<div className='app__results__calculations__item'>
					<div>
						<p>Your monthly repayments</p>
						<h1>
							{formatCurrency(
								payments.monthlyPayment,
							)}
						</h1>
					</div>
					<div>
						<p>
							Total to repay over the term
						</p>
						<h3>
							{formatCurrency(
								payments.totalRepayment,
							)}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Calculations
