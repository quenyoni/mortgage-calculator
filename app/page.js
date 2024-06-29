"use client";
import { useState } from "react";
import Form from "./components/Form";
import FormVal from "./components/FormVal";
import Image from "next/image";
export default function Home() {
	const [results, setResults] = useState(true);
	function calcMortgage(
		principal,
		annual_rate,
		years,
	) {
		//Convert annual interest rate to monthly and from percentage;
		const monthly_rate = annual_rate / (12 * 100);
		//Calculate the number of monthly payments;
		const total_payments = years * 12;
		//Calculate the monthly payment using the formula;
		return (
			(principal *
				(monthly_rate *
					(1 + monthly_rate) ** total_payments)) /
			((1 + monthly_rate) ** total_payments - 1)
		);
	}

	return (
		<main>
			<div className='container'>
				<div className='app'>
					<div className='app__main'>
						<header className='header'>
							<h1>Mortgage Calculator</h1>
							<a href=''>Clear All</a>
						</header>

						<Form />
					</div>
					<div className='app__results'>
						{!results && <NoResults />}
						{results && <Calculations />}
					</div>
				</div>
			</div>
			{/* <FormVal /> */}
		</main>
	);
}

// {		. Your monthly
//   repayments Total you'll repay over the term}

function Calculations() {
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
						<h1>$1,797.74</h1>
					</div>
					<div>
						<p>
							Total you'll repay over the term
						</p>
						<h3>$539,322.94</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

function NoResults() {
	return (
		<div class='results__empty'>
			<Image
				width={100}
				height={100}
				src='/assets/images/illustration-empty.svg'
			/>
			<h3>Results shown here</h3>
			<p className='paragraphs'>
				Complete the form and click “calculate
				repayments” to see what your monthly
				repayments would be.
			</p>
		</div>
	);
}
