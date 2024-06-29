"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import Form from "./components/Form";
import { useForm } from "react-hook-form";
import FormVal from "./components/FormVal";
import Calculations from "./components/Calculations";
import NoResults from "./components/NoResults";

const schema = yup
	.object({
		mortgageAmount: yup
			.number()
			.positive()
			.required(),
		mortgageTerms: yup
			.number()
			.positive()
			.required(),
		interestRate: yup
			.number()
			.positive()
			.required(),
	})
	.required();

export default function Home() {
	const [results, setResults] = useState(false);
	const [payments, setRepayments] = useState({
		monthlyPayment: 0,
		totalRepayment: 0,
	});
	const {
		register,
		handleSubmit,
		resetField,
		watch,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		// console.log(errors, data);
		const {
			mortgageAmount,
			mortgageTerms,
			interestRate,
			mortgageType,
		} = data;
		const monthlyPayment =
			calculateMonthlyRepayment(
				mortgageAmount,
				interestRate,
				mortgageTerms,
				mortgageType,
			).toFixed(2);

		setRepayments({
			monthlyPayment,
			totalRepayment:
				monthlyPayment * mortgageTerms * 12,
		});

		setResults(true);
	};

	function calculateMonthlyRepayment(
		principal,
		annualInterestRate,
		termYears,
		mortgageType,
	) {
		console.log(mortgageType);
		if (mortgageType == "repayments") {
			const monthlyInterestRate =
				annualInterestRate / 100 / 12;
			const numberOfPayments = termYears * 12;

			const monthlyPayment =
				(principal *
					(monthlyInterestRate *
						Math.pow(
							1 + monthlyInterestRate,
							numberOfPayments,
						))) /
				(Math.pow(
					1 + monthlyInterestRate,
					numberOfPayments,
				) -
					1);

			return monthlyPayment;
		}

		const monthlyInterestRate =
			annualInterestRate / 100 / 12;

		return principal * monthlyInterestRate;
	}

	function handleClear(e) {
		e.preventDefault();
		resetField("mortgageAmount");
		resetField("mortgageType");
		resetField("interestRate");
		resetField("mortgageTerms");
		setResults(false);
	}

	return (
		<main>
			<div className='container'>
				<div className='app'>
					<div className='app__main'>
						<header className='header'>
							<h1>Mortgage Calculator</h1>
							<button
								className='button'
								onClick={handleClear}>
								Clear All
							</button>
						</header>

						<Form
							register={register}
							handleSubmit={handleSubmit}
							onSubmit={onSubmit}
							watch={watch}
							errors={errors}
						/>
					</div>
					<div className='app__results'>
						{!results && <NoResults />}
						{results && (
							<Calculations payments={payments} />
						)}
					</div>
				</div>
			</div>
		</main>
	);
}
