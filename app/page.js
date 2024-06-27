import Form from "./components/Form";
import Image from "next/image";
export default function Home() {
	return (
		<main>
			<div className='container'>
				<div class='app'>
					<div class='app__main'>
						<header className='header'>
							<h1>Mortgage Calculator</h1>
							<a href=''>Clear All</a>
						</header>

						<Form />
					</div>
					<div class='app__results'>
						<div class='results__empty'>
							<Image
								width={100}
								height={100}
								src='/assets/images/illustration-empty.svg'
							/>
							Results shown here
							<p>
								Complete the form and click
								“calculate repayments” to see what
								your monthly repayments would be.
							</p>
						</div>
					</div>
				</div>
			</div>
			Mortgage Term Interest Rate Mortgage Type
			Repayment Interest Only Calculate Repayments
			{/* <!-- Empty results start --> */}
			{/* <!-- Empty results end -->

  <!-- Completed results start --> */}
			Your results Your results are shown below
			based on the information you provided. To
			adjust the results, edit the form and click
			“calculate repayments” again. Your monthly
			repayments Total you'll repay over the term
		</main>
	);
}
