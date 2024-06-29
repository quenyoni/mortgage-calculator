import Image from "next/image";

function NoResults() {
	return (
		<div class='results__empty'>
			<Image
				width={100}
				height={100}
				src='/assets/images/illustration-empty.svg'
				alt='No results'
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

export default NoResults;
