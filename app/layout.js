// export const metadata = {
// 	title: "Create Next App",
// 	description: "Generated by create next app",
// };
import "./css/style.css";

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
