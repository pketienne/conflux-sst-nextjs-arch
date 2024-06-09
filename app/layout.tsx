'use client';
import { LayoutProvider } from '../layout/context/layoutcontext';
import { PrimeReactProvider } from 'primereact/api';
import '../styles/layout/layout.scss';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/primereact.css';
import '../styles/demo/demo.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link id="theme-link" href={`/theme/theme-light/teal/theme.css`} rel="stylesheet"></link>
			</head>
			<body>
				<PrimeReactProvider>
					<LayoutProvider>{children}</LayoutProvider>
				</PrimeReactProvider>
			</body>
		</html>
	);
}
