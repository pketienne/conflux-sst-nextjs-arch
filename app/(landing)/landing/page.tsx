/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { StyleClass } from 'primereact/styleclass';
import type { NodeRef, Page } from '@/types';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';
import { useRouter } from 'next/navigation';
import { Ripple } from 'primereact/ripple';
import { Dialog } from 'primereact/dialog';
import { ScrollTop } from 'primereact/scrolltop';

let activeLink = 0;

const LandingPage: Page = () => {
	const [displayModal, setDisplayModal] = useState(false);
	const [isMenuHidden, setIsMenuHidden] = useState(false);
	const [isMenuAbsolute, setIsMenuAbsolute] = useState(false);
	const images = [
		{ name: 'chat', src: '/layout/images/landing/chat.png' },
		{ name: 'mail', src: '/layout/images/landing/mail.png' },
		{ name: 'task-list', src: '/layout/images/landing/task-list.png' },
		{ name: 'blog', src: '/layout/images/landing/blog.png' },
	];
	const [activeImage, setActiveImage] = useState(images[0]);

	const menuRef = useRef<HTMLUListElement>(null);
	const barRef = useRef<HTMLAnchorElement>(null);
	const buttonRef = useRef(null);
	const homeRef = useRef<HTMLDivElement>(null);
	const homeButtonRef = useRef<HTMLAnchorElement>(null);
	const featuresRef = useRef<HTMLDivElement>(null);
	const featuresButtonRef = useRef<HTMLAnchorElement>(null);
	const customizationsRef = useRef<HTMLDivElement>(null);
	const customizationsButtonRef = useRef<HTMLAnchorElement>(null);
	const closeButtonRef = useRef<HTMLAnchorElement>(null);
	const appRef = useRef<HTMLDivElement>(null);
	const appButtonRef = useRef<HTMLAnchorElement>(null);
	const pricingRef = useRef<HTMLDivElement>(null);
	const pricingButtonRef = useRef<HTMLAnchorElement>(null);

	const router = useRouter();

	const changeImageOnHover = (i: number) => {
		setActiveImage(images[i]);
		activeLink = i;
	};
	const customHover = () => {
		const constrain: number = 100;
		const mouseOverContainer: HTMLElement | null = document.getElementById('ex1');
		const ex1Layer: HTMLElement | null = document.getElementById('ex1-layer');

		function transforms(x: number, y: number, el: Element): string {
			const box: DOMRect = el.getBoundingClientRect();
			const calcX: number = -(y - box.y - box.height / 2) / constrain;
			const calcY: number = (x - box.x - box.width / 2) / constrain;

			return 'perspective(100px) ' + 'rotateX(' + calcX + 'deg) ' + 'rotateY(' + calcY + 'deg) ';
		}

		function transformElement(el: HTMLElement, xyEl: [number, number, Element]) {
			el.style.transform = transforms(...xyEl);
		}

		if (mouseOverContainer && ex1Layer) {
			mouseOverContainer.onmousemove = function (e: MouseEvent) {
				const xy: [number, number] = [e.clientX, e.clientY];
				const position: [number, number, Element] = [...xy, ex1Layer];

				window.requestAnimationFrame(function () {
					transformElement(ex1Layer, position);
				});
			};
			mouseOverContainer.onmouseleave = function (e: MouseEvent) {
				window.requestAnimationFrame(function () {
					setTimeout(() => {
						return (ex1Layer.style.transform = 'perspective(100px) ' + 'rotateX(' + 0 + 'deg) ' + 'rotateY(' + 0 + 'deg) ');
					}, 800);
				});
			};
		}
	};
	useEffect(() => {
		customHover();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const navigateToLanding = () => {
		router.push('/landing');
	};
	const showModalDialog = () => {
		setDisplayModal(true);
	};

	const scrollToElement = (el: React.RefObject<HTMLDivElement>) => {
		setTimeout(() => {
			el.current?.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest',
			});
		}, 200);
	};

	const wrapperClassName = classNames('landing-wrapper', {
		'h-auto': isMenuHidden && isMenuAbsolute,
		'overflow-hidden h-screen md:h-auto': !(isMenuHidden && isMenuAbsolute),
	});
	const menuClassName = classNames('absolute z-4 top-0 right-0 w-full h-screen', {
		hidden: isMenuHidden && isMenuAbsolute,
		'block md:hidden': !(isMenuHidden && isMenuAbsolute),
	});

	useEffect(() => {
		setIsMenuHidden((menuRef as any)?.current?.classList?.contains('hidden'));
		setIsMenuAbsolute((menuRef as any)?.current?.classList.contains('absolute'));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [menuRef.current]);

	return (
		<>
			<div className={wrapperClassName}>
				<div className={menuClassName} style={{ backgroundColor: 'var(--maskbg)' }}></div>
				<div className="flex align-items-center justify-content-between relative lg:static py-6 mx-0 px-4 lg:py-6">
					<a className="cursor-pointer" onClick={navigateToLanding}>
						<svg height="32" viewBox="0 0 66 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 0H4.99056V3.20992L14.1395 1.39922V5.5969L4.99056 7.40759V8.80682L14.1395 6.99612V11.1938L4.99056 13.0045V16.7907H0V0Z" fill="url(#paint0_linear_7_2)" />
							<path
								d="M26.6589 6.69198H24.5387V6.08721C24.5387 5.61683 24.8058 5.34804 25.2732 5.34804H26.6422V2.94574H24.4719C22.5686 2.94574 21.5669 4.0041 21.5669 5.83522V6.69198H20.031L20.0477 9.14468H21.5336V15.6124H24.6388V9.14468H26.6589V6.69198Z"
								fill="url(#paint1_linear_7_2)"
							/>
							<path d="M33.1864 6.48062C32.1152 6.48062 31.3453 6.78389 30.7093 7.52522L30.2239 6.51432H28.1318V15.6124H31.2449V10.996C31.2449 9.83344 31.7135 9.34483 32.8014 9.34483H34.0232V6.48062H33.1864Z" fill="url(#paint2_linear_7_2)" />
							<path
								d="M44.7752 10.8813C44.7752 8.25063 42.7879 6.18605 39.9064 6.18605C37.0912 6.18605 35.0543 8.21733 35.0543 10.9645C35.0543 13.7118 37.1077 15.7597 39.9064 15.7597C42.1421 15.7597 43.9637 14.4777 44.593 12.4297H41.5128C41.2313 12.9625 40.6185 13.2789 39.9064 13.2789C38.9294 13.2789 38.2835 12.7461 38.0848 11.7138H44.7255C44.7586 11.4307 44.7752 11.1643 44.7752 10.8813ZM39.9064 8.61692C40.8338 8.61692 41.4797 9.09977 41.7446 9.99886H38.1345C38.3829 9.09977 39.0122 8.61692 39.9064 8.61692Z"
								fill="url(#paint3_linear_7_2)"
							/>
							<path
								d="M52.0281 6.48062L50.235 11.5154L48.3077 6.48062H44.9225L48.6597 14.8607C48.2407 15.9926 47.8888 16.3137 46.6989 16.3137H45.8274V19H46.9C49.2462 19 50.3523 18.0032 51.5756 15.1986L55.3799 6.48062H52.0281Z"
								fill="url(#paint4_linear_7_2)"
							/>
							<path
								d="M63.3589 6.45291L63.0402 7.15342C62.3023 6.53631 61.3464 6.18605 60.2731 6.18605C57.506 6.18605 55.5271 8.17083 55.5271 10.9562C55.5271 13.7582 57.506 15.7597 60.2731 15.7597C61.3296 15.7597 62.2688 15.4261 63.0067 14.8257L63.275 15.4595H65.6899V6.45291H63.3589ZM60.6924 13.0244C59.5185 13.0244 58.6632 12.1404 58.6632 10.9562C58.6632 9.78868 59.5185 8.92138 60.6924 8.92138C61.8663 8.92138 62.7216 9.78868 62.7216 10.9562C62.7216 12.1404 61.8663 13.0244 60.6924 13.0244Z"
								fill="url(#paint5_linear_7_2)"
							/>
							<defs>
								<linearGradient id="paint0_linear_7_2" x1="4.02237" y1="9.46943e-08" x2="8.24281" y2="16.4905" gradientUnits="userSpaceOnUse">
									<stop stopColor="var(--primary-400)" />
									<stop offset="1" stopColor="var(--primary-700)" />
								</linearGradient>
								<linearGradient id="paint1_linear_7_2" x1="25.0035" y1="0.213131" x2="18.0327" y2="13.0728" gradientUnits="userSpaceOnUse">
									<stop stopColor="var(--primary-400)" />
									<stop offset="1" stopColor="var(--primary-700)" />
								</linearGradient>
								<linearGradient id="paint2_linear_7_2" x1="30.3648" y1="0.168197" x2="23.1051" y2="13.5662" gradientUnits="userSpaceOnUse">
									<stop stopColor="var(--primary-400)" />
									<stop offset="1" stopColor="var(--primary-700)" />
								</linearGradient>
								<linearGradient id="paint3_linear_7_2" x1="29.6161" y1="0.521788" x2="21.5283" y2="15.4296" gradientUnits="userSpaceOnUse">
									<stop stopColor="var(--primary-400)" />
									<stop offset="1" stopColor="var(--primary-700)" />
								</linearGradient>
								<linearGradient id="paint4_linear_7_2" x1="35.5631" y1="0.11682" x2="27.7574" y2="14.5441" gradientUnits="userSpaceOnUse">
									<stop stopColor="var(--primary-400)" />
									<stop offset="1" stopColor="var(--primary-700)" />
								</linearGradient>
								<linearGradient id="paint5_linear_7_2" x1="23.0068" y1="1.38676" x2="15.3473" y2="15.3525" gradientUnits="userSpaceOnUse">
									<stop stopColor="var(--primary-400)" />
									<stop offset="1" stopColor="var(--primary-700)" />
								</linearGradient>
							</defs>
						</svg>
					</a>
					<StyleClass nodeRef={barRef as NodeRef} selector="@next" enterClassName="hidden" enterActiveClassName="px-fadein" leaveToClassName="hidden" leaveActiveClassName="px-fadeout" hideOnOutsideClick>
						<a ref={barRef} className="cursor-pointer block md:hidden text-700 text-primary">
							<i className="pi pi-bars text-4xl"></i>
						</a>
					</StyleClass>
					<ul ref={menuRef} style={{ top: '0px', right: '0%' }} className="list-none flex-grow-1 justify-content-end hidden md:flex absolute md:relative h-screen md:h-auto surface-card md:surface-ground m-0 z-5 w-full sm:w-6 md:w-full py-6 md:py-0">
						<StyleClass nodeRef={closeButtonRef as NodeRef} selector="@parent" enterClassName="hidden" leaveToClassName="hidden" hideOnOutsideClick>
							<a ref={closeButtonRef} style={{ top: '3rem', right: '2rem' }} className="cursor-pointer block md:hidden text-700 text-primary absolute">
								<i className="pi pi-times text-4xl"></i>
							</a>
							<Ripple></Ripple>
						</StyleClass>

						<li className="mt-5 md:mt-0">
							<StyleClass nodeRef={homeButtonRef as NodeRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-fadein" leaveToClassName="hidden">
								<a href="#home" ref={homeButtonRef} className="flex m-0 md:ml-5 md:px-0 px-3 py-3 text-900 font-medium line-height-3 hover:text-primary cursor-pointer">
									<span>Home</span>
								</a>
							</StyleClass>
						</li>

						<li>
							<StyleClass nodeRef={featuresButtonRef as NodeRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-fadein" leaveToClassName="hidden">
								<a href="#features" ref={featuresButtonRef} className="flex m-0 md:ml-5 md:px-0 px-3 py-3 text-900 font-medium line-height-3 hover:text-primary cursor-pointer" onClick={() => scrollToElement(featuresRef)}>
									<span>Features</span>
								</a>
							</StyleClass>
						</li>

						<li>
							<StyleClass nodeRef={customizationsButtonRef as NodeRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-fadein" leaveToClassName="hidden">
								<a href="#customizations" ref={customizationsButtonRef} className="flex m-0 md:ml-5 md:px-0 px-3 py-3 text-900 font-medium line-height-3 hover:text-primary cursor-pointer" onClick={() => scrollToElement(customizationsRef)}>
									<span>Customizations</span>
								</a>
							</StyleClass>
						</li>
						<li>
							<StyleClass nodeRef={appButtonRef as NodeRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-fadein" leaveToClassName="hidden">
								<a href="#apps" ref={appButtonRef} className="flex m-0 md:ml-5 md:px-0 px-3 py-3 text-900 font-medium line-height-3 hover:text-primary cursor-pointer" onClick={() => scrollToElement(appRef)}>
									<span>Apps</span>
								</a>
							</StyleClass>
						</li>
						<li>
							<StyleClass nodeRef={pricingButtonRef as NodeRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-fadein" leaveToClassName="hidden">
								<a href="#pricing" ref={pricingButtonRef} className="flex m-0 md:ml-5 md:px-0 px-3 py-3 text-900 font-medium line-height-3 hover:text-primary cursor-pointer" onClick={() => scrollToElement(pricingRef)}>
									<span>Pricing</span>
								</a>
							</StyleClass>
						</li>
						<li className="flex align-items-center">
							<StyleClass nodeRef={buttonRef as NodeRef} selector="@grandparent" enterClassName="hidden" enterActiveClassName="px-fadein" leaveToClassName="hidden">
								<Button ref={buttonRef} type="button" label="Buy Now" className="m-0 mt-3 md:mt-0 ml-3 md:ml-5"></Button>
							</StyleClass>
						</li>
					</ul>
				</div>
				<div ref={homeRef} id="home" className="landing-banner px-4 md:px-8 py-8 lg:flex flex-wrap">
					<div className="banner-left w-full lg:w-8">
						<span className="block font-normal mb-6 text-6xl sm:text-7xl xl:text-8xl text-900 w-12">
							Start Your Business With The All-In-One <b className="text-primary font-medium">FREYA</b> Dashboard Template!
						</span>
						<h4 className="font-normal text-900 m-0 mb-6 line-height-3 w-10" style={{ letterSpacing: '0.6px' }}>
							Say goodbye to clunky, outdated dashboards and hello to modern, user-friendly design. With an array of pages and components at your fingertips, building your business dashboard has never been easier. Start streamlining your operations and
							making data-driven decisions with FREYA today!
						</h4>
						<Button label="Learn More" icon="pi pi-arrow-right" className="p-button-lg mb-6"></Button>

						<div className="logo-section relative w-full md:w-8 mt-6">
							<div className="fade-left h-2rem w-6rem block absolute top-0 left-0" style={{ background: 'linear-gradient(to right, var(--surface-ground), transparent)', zIndex: '2' }}></div>
							<div className="marquee-wrapper relative overflow-hidden flex gap-6">
								<div className="marquee flex gap-6" style={{ animationDuration: '50s' }}>
									<img src="/layout/images/landing/logocloud/alfred-500.svg" className="h-2rem" alt="" />
									<img src="/layout/images/landing/logocloud/bastion-500.svg" className="h-2rem" alt="" />
									<img src="/layout/images/landing/logocloud/charot-500.svg" className="h-2rem" alt="" />
									<img src="/layout/images/landing/logocloud/franki-500.svg" className="h-2rem" alt="" />
									<img src="/layout/images/landing/logocloud/hodly-500.svg" className="h-2rem" alt="" />
									<img src="/layout/images/landing/logocloud/hyper-500.svg" className="h-2rem" alt="" />
									<img src="/layout/images/landing/logocloud/shodan-500.svg" className="h-2rem" alt="" />
								</div>
								<div className="marquee flex gap-6" style={{ animationDuration: '50s' }}>
									<img src="/layout/images/landing/logocloud/alfred-500.svg" className="h-2rem" alt="" />
									<img src="/layout/images/landing/logocloud/bastion-500.svg" className="h-2rem" alt="" />
									<img src="/layout/images/landing/logocloud/charot-500.svg" className="h-2rem" alt="" />
									<img src="/layout/images/landing/logocloud/franki-500.svg" className="h-2rem" alt="" />
									<img src="/layout/images/landing/logocloud/hodly-500.svg" className="h-2rem" alt="" />
									<img src="/layout/images/landing/logocloud/hyper-500.svg" className="h-2rem" alt="" />
									<img src="/layout/images/landing/logocloud/shodan-500.svg" className="h-2rem" alt="" />
								</div>
							</div>
							<div className="fade-right h-2rem w-6rem block absolute top-0 right-0" style={{ background: 'linear-gradient(to left, var(--surface-ground), transparent)', zIndex: '2' }}></div>
						</div>
					</div>
					<div className="banner-right w-4 hidden lg:block">
						<div id="ex1" className="cards w-full flex flex-column align-items-end mt-8 pl-3">
							<svg id="ex1-layer" className="w-full lg:mr-0" viewBox="0 0 261 311" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M212.774 11.5565C212.161 11.2497 211.274 10.9089 210.251 10.5681C208.751 10.091 206.841 9.75017 204.863 9.57977C204.727 7.46675 204.386 5.42189 203.943 3.78601C203.636 2.66134 203.295 1.70707 203.022 1.05954C202.749 0.411999 202.545 0.0371094 202.545 0.0371094C202.545 0.0371094 202.34 0.411999 202.067 1.05954C201.795 1.70707 201.454 2.66134 201.147 3.78601C200.703 5.42189 200.397 7.43267 200.226 9.57977C198.248 9.75017 196.373 10.091 194.839 10.5681C193.781 10.9089 192.929 11.2497 192.315 11.5565C191.701 11.8291 191.36 12.0677 191.36 12.0677C191.36 12.0677 191.701 12.3062 192.315 12.5789C192.929 12.8515 193.816 13.2264 194.839 13.5672C196.339 14.0444 198.248 14.3852 200.226 14.5556C200.362 16.7027 200.703 18.7135 201.147 20.3493C201.454 21.474 201.795 22.4283 202.067 23.0758C202.34 23.7233 202.545 24.0982 202.545 24.0982C202.545 24.0982 202.749 23.7233 203.022 23.0758C203.295 22.4283 203.636 21.474 203.943 20.3493C204.386 18.7135 204.693 16.7027 204.863 14.5556C206.841 14.3852 208.717 14.0444 210.251 13.5672C211.308 13.2264 212.161 12.8856 212.774 12.5789C213.388 12.3062 213.729 12.0677 213.729 12.0677C213.729 12.0677 213.388 11.8632 212.774 11.5565ZM214.504 198.797C204.683 192.083 194.658 192.117 187.634 193.48C181.428 179.166 173.995 166.454 167.107 155.412C162.094 147.369 155.888 138.031 147.978 129.954C140.919 122.762 132.77 116.321 123.7 110.902C105.764 100.099 86.6347 95.8726 66.8577 98.3265L65.221 98.531L64.8118 100.133C64.2662 102.348 63.4478 106.37 63.0387 109.301C62.3226 114.753 62.0839 120.445 62.3567 126.239C62.8682 136.736 65.2551 147.028 69.4151 156.809C73.5751 166.488 78.9967 175.588 85.6118 183.835C92.636 192.628 100.99 200.058 108.219 206.158C120.358 216.383 132.224 224.835 144.159 231.821C143.272 234.48 142.556 237.615 142.351 241.057C141.976 247.294 143.238 253.326 146.136 258.984C150.637 267.777 164.379 278.342 169.596 278.308C170.824 278.308 171.369 277.728 171.642 277.251C172.051 276.433 172.29 275.479 172.358 274.388C172.596 270.55 170.53 265.831 168.862 262.021L168.846 261.983C167.891 259.836 167.073 257.961 166.868 256.735C166.8 256.292 166.766 255.78 166.8 255.303C167.005 251.997 169.528 248.351 172.324 245.317C172.5 245.381 172.675 245.444 172.85 245.507C173.997 245.92 175.126 246.326 176.279 246.681C177.643 247.124 179.041 247.567 180.405 247.976C180.814 248.112 181.258 248.214 181.701 248.317C182.417 248.487 183.099 248.657 183.645 248.896C185.418 249.612 186.952 248.726 188.146 247.771C196.568 254.826 204.649 260.586 206.695 258.779C207.002 258.507 207.207 258.064 207.241 257.518C207.411 254.553 203.217 246.987 198.068 238.944C198.852 238.229 199.807 237.206 199.909 235.604C199.909 235.264 199.909 234.889 199.841 234.514C199.603 233.151 199.33 231.821 199.057 230.526C198.852 229.538 198.648 228.55 198.477 227.561C198.205 226.096 197.898 224.63 197.557 223.131C201.444 220.37 206.081 218.019 209.662 219.075C210.782 219.395 212.382 220.345 214.238 221.447L214.606 221.665L214.69 221.715C219.313 224.468 225.066 227.893 229.405 226.334C229.95 226.13 230.666 225.585 230.734 224.187C231.075 218.802 222.38 204.216 214.435 198.797H214.504ZM122.984 211.85C140.067 199.547 156.025 185.54 170.38 170.101C170.568 170.442 170.764 170.782 170.96 171.123C171.156 171.464 171.352 171.805 171.54 172.146C157.696 187.312 141.669 201.455 124.859 213.281L123.018 211.85H122.984ZM113.402 110.868L115.55 111.891C99.9672 123.342 85.3731 136.224 72.0747 150.266C71.9998 150.069 71.9223 149.87 71.8443 149.67L71.8442 149.669L71.8439 149.669C71.6382 149.14 71.4294 148.603 71.2564 148.085C83.8728 134.486 98.3305 121.74 113.402 110.868ZM67.1646 126.034C66.8918 120.547 67.0964 115.128 67.8124 109.948C68.0852 107.835 68.6308 105.006 69.1082 102.893C82.7134 101.462 95.9777 103.405 108.73 108.687C94.8524 118.979 81.7928 130.499 69.8583 142.972C68.4262 137.417 67.4715 131.76 67.1987 126L67.1646 126.034ZM89.3626 180.905C83.0885 173.066 77.9396 164.443 73.9842 155.276C87.7941 140.348 103.65 126.341 120.188 114.481C120.528 114.685 120.869 114.856 121.21 115.026L121.21 115.026C129.906 120.241 137.748 126.409 144.534 133.328C152.138 141.064 158.139 150.129 163.049 157.968C164.515 160.32 166.05 162.808 167.55 165.33C153.024 181.245 136.214 196.071 118.619 208.442C116.198 206.533 113.811 204.591 111.356 202.546C104.298 196.616 96.1823 189.391 89.3967 180.905H89.3626ZM193.772 228.413C193.885 229.095 194.029 229.777 194.173 230.458C194.245 230.799 194.317 231.14 194.386 231.481C194.59 232.401 194.761 233.287 194.897 234.173C189.373 225.959 183.508 218.189 181.019 215.326C175.154 208.715 167.209 206.124 163.288 209.601C161.992 210.725 161.242 212.429 161.14 214.474C160.901 218.53 163.049 223.642 166.8 227.902C168.675 230.015 175.87 237.07 183.679 243.92C183.516 243.879 183.353 243.827 183.197 243.776L183.197 243.776C183.092 243.742 182.99 243.709 182.894 243.682C182.769 243.647 182.644 243.617 182.519 243.587C182.269 243.526 182.019 243.466 181.769 243.375C180.439 243 179.109 242.591 177.814 242.148C173.074 240.58 168.232 238.672 163.083 236.286C151.729 231.038 140.544 224.46 129.224 216.383C145.42 204.727 160.526 191.401 174.165 176.781C180.098 187.687 185.725 199.751 189.85 212.975C191.726 219.007 192.953 223.744 193.806 228.345L193.772 228.413ZM139.76 183.052C145.761 177.769 149.342 170.442 149.819 162.467C150.33 154.492 147.671 146.79 142.386 140.791C131.474 128.42 112.515 127.227 100.138 138.167C94.1364 143.45 90.556 150.743 90.0787 158.752C89.5672 166.727 92.2269 174.429 97.5121 180.427C102.797 186.426 110.128 190.004 118.108 190.515C126.087 191.027 133.793 188.368 139.794 183.086L139.76 183.052ZM94.8524 159.025C95.2616 152.311 98.2623 146.176 103.309 141.746C113.709 132.578 129.633 133.566 138.805 143.961C143.238 149.005 145.454 155.446 145.045 162.16C144.636 168.874 141.635 175.009 136.589 179.439C131.542 183.87 125.098 186.085 118.38 185.676C111.663 185.267 105.525 182.268 101.092 177.224C96.6596 172.18 94.4433 165.739 94.8524 159.025ZM132.838 175.179C140.919 168.056 141.669 155.753 134.543 147.71C127.416 139.667 115.107 138.883 107.06 146.006C99.0124 153.129 98.2282 165.432 105.355 173.475C112.481 181.518 124.791 182.302 132.838 175.179ZM108.73 158.759L113.145 154.695L115.735 157.509L122.368 148.473L125.754 152.152L119.121 161.188L120.249 162.414L126.882 153.378L130.268 157.057L123.635 166.093L126.689 169.412L122.274 173.475L108.73 158.759ZM91.2477 296.507C92.3048 296.848 93.1572 297.189 93.771 297.495C94.3848 297.802 94.7258 298.007 94.7258 298.007C94.7258 298.007 94.3848 298.245 93.771 298.518C93.1572 298.824 92.3048 299.165 91.2477 299.506C89.7133 299.983 87.8379 300.358 85.8602 300.494C85.6897 302.642 85.3828 304.652 84.9395 306.288C84.6326 307.413 84.2917 308.367 84.0189 309.015C83.7461 309.662 83.5415 310.037 83.5415 310.037C83.5415 310.037 83.3369 309.662 83.0641 309.015C82.7913 308.367 82.4503 307.413 82.1435 306.288C81.7002 304.652 81.3592 302.607 81.2228 300.494C79.2451 300.324 77.3356 299.983 75.8353 299.506C74.8123 299.165 73.9258 298.824 73.312 298.518C72.6982 298.245 72.3572 298.007 72.3572 298.007C72.3572 298.007 72.6982 297.768 73.312 297.495C73.9258 297.189 74.7782 296.848 75.8353 296.507C77.3697 296.03 79.2451 295.689 81.2228 295.519C81.3592 293.372 81.7002 291.361 82.1435 289.725C82.4503 288.6 82.7913 287.646 83.0641 286.998C83.3369 286.351 83.5415 285.976 83.5415 285.976C83.5415 285.976 83.7461 286.351 84.0189 286.998C84.2917 287.646 84.6326 288.6 84.9395 289.725C85.3828 291.361 85.7238 293.372 85.8602 295.519C87.8379 295.689 89.7474 296.03 91.2477 296.507ZM22.0621 191.095C21.4484 190.788 20.5959 190.447 19.5389 190.106C18.0385 189.629 16.129 189.288 14.1513 189.118C14.0149 186.971 13.6739 184.96 13.2307 183.324C12.9238 182.2 12.5828 181.245 12.31 180.598C12.0372 179.95 11.8326 179.575 11.8326 179.575C11.8326 179.575 11.628 179.95 11.3553 180.598C11.0825 181.245 10.7415 182.2 10.4346 183.324C9.99133 184.96 9.65034 186.971 9.51395 189.118C7.53625 189.288 5.66084 189.629 4.12641 190.106C3.06936 190.447 2.2169 190.788 1.60313 191.095C0.98936 191.367 0.648376 191.606 0.648376 191.606C0.648376 191.606 0.98936 191.845 1.60313 192.117C2.2169 192.424 3.10346 192.765 4.12641 193.105C5.62674 193.583 7.53625 193.923 9.51395 194.094C9.65034 196.207 9.99133 198.252 10.4346 199.888C10.7415 201.012 11.0825 201.967 11.3553 202.614C11.628 203.262 11.8326 203.637 11.8326 203.637C11.8326 203.637 12.0372 203.262 12.31 202.614C12.5828 201.967 12.9238 201.012 13.2307 199.888C13.6739 198.252 13.9808 196.241 14.1513 194.094C16.129 193.958 18.0044 193.583 19.5389 193.105C20.5959 192.765 21.4484 192.424 22.0621 192.117C22.6759 191.845 23.0169 191.606 23.0169 191.606C23.0169 191.606 22.6759 191.401 22.0621 191.095ZM238.45 153.572C239.507 153.912 240.36 154.253 240.974 154.56C241.587 154.867 241.928 155.071 241.928 155.071C241.928 155.071 241.587 155.31 240.974 155.582C240.36 155.889 239.507 156.23 238.45 156.571C236.916 157.048 235.041 157.423 233.063 157.559C232.892 159.706 232.585 161.717 232.142 163.353C231.835 164.478 231.494 165.432 231.221 166.079C230.949 166.727 230.744 167.102 230.744 167.102C230.744 167.102 230.54 166.727 230.267 166.079C229.994 165.432 229.653 164.478 229.346 163.353C228.903 161.717 228.562 159.672 228.425 157.559C226.448 157.389 224.538 157.048 223.038 156.571C222.015 156.23 221.128 155.889 220.515 155.582C219.901 155.31 219.56 155.071 219.56 155.071C219.56 155.071 219.901 154.833 220.515 154.56C221.128 154.253 221.981 153.912 223.038 153.572C224.572 153.094 226.448 152.754 228.425 152.583C228.562 150.436 228.903 148.425 229.346 146.79C229.653 145.665 229.994 144.711 230.267 144.063C230.54 143.416 230.744 143.041 230.744 143.041C230.744 143.041 230.949 143.416 231.221 144.063C231.494 144.711 231.835 145.665 232.142 146.79C232.585 148.425 232.926 150.436 233.063 152.583C235.041 152.754 236.95 153.094 238.45 153.572ZM119.277 44.4445C120.3 44.7853 121.186 45.1262 121.8 45.4329C122.414 45.7396 122.755 45.9441 122.755 45.9441C122.755 45.9441 122.414 46.1827 121.8 46.4553C121.186 46.762 120.334 47.1029 119.277 47.4437C117.742 47.9208 115.867 48.2616 113.889 48.432C113.719 50.5791 113.412 52.5899 112.968 54.2258C112.661 55.3504 112.321 56.3047 112.048 56.9522C111.775 57.5998 111.57 57.9747 111.57 57.9747C111.57 57.9747 111.366 57.5998 111.093 56.9522C110.82 56.3047 110.479 55.3504 110.172 54.2258C109.729 52.5899 109.388 50.545 109.252 48.432C107.274 48.2616 105.364 47.9208 103.864 47.4437C102.807 47.1029 101.955 46.762 101.341 46.4553C100.727 46.1827 100.386 45.9441 100.386 45.9441C100.386 45.9441 100.727 45.7055 101.341 45.4329C101.955 45.1262 102.807 44.7853 103.864 44.4445C105.399 43.9674 107.274 43.6266 109.252 43.4562C109.388 41.3091 109.729 39.2983 110.172 37.6624C110.479 36.5378 110.82 35.5835 111.093 34.936C111.366 34.2884 111.57 33.9135 111.57 33.9135C111.57 33.9135 111.775 34.2884 112.048 34.936C112.321 35.5835 112.661 36.5378 112.968 37.6624C113.412 39.2983 113.753 41.3432 113.889 43.4562C115.867 43.6266 117.742 43.9674 119.277 44.4445ZM185.598 97.3722C185.189 97.1677 184.609 96.9632 183.927 96.7247C182.938 96.4179 181.677 96.1794 180.381 96.0771C180.279 94.6798 180.074 93.3166 179.767 92.2601C179.562 91.5103 179.358 90.8968 179.153 90.4538C178.983 90.0107 178.846 89.7722 178.846 89.7722C178.846 89.7722 178.71 90.0107 178.54 90.4538L178.524 90.493L178.524 90.4934L178.524 90.4937C178.355 90.9334 178.124 91.5326 177.926 92.2601C177.619 93.3506 177.414 94.6798 177.312 96.0771C176.016 96.1794 174.755 96.4179 173.766 96.7247C173.084 96.9632 172.504 97.1677 172.095 97.3722C171.686 97.5767 171.447 97.713 171.447 97.713C171.447 97.713 171.686 97.8493 172.095 98.0538C172.504 98.2583 173.084 98.4969 173.766 98.7014C174.755 99.0081 176.016 99.2467 177.312 99.3489C177.414 100.746 177.619 102.109 177.926 103.166C178.13 103.916 178.335 104.529 178.54 104.972C178.71 105.415 178.846 105.654 178.846 105.654C178.846 105.654 178.983 105.415 179.153 104.972L179.168 104.933L179.168 104.933C179.338 104.493 179.568 103.894 179.767 103.166C180.074 102.075 180.279 100.746 180.381 99.3489C181.677 99.2467 182.938 99.0081 183.927 98.7014C184.609 98.4969 185.189 98.2583 185.598 98.0538C186.007 97.8834 186.246 97.713 186.246 97.713C186.246 97.713 186.007 97.5767 185.598 97.3722ZM258.398 74.4698C259.08 74.7084 259.66 74.9129 260.069 75.1174C260.478 75.3219 260.717 75.4582 260.717 75.4582C260.717 75.4582 260.478 75.6286 260.069 75.799C259.66 76.0035 259.08 76.242 258.398 76.4465C257.409 76.7533 256.147 76.9918 254.852 77.0941C254.749 78.4914 254.545 79.8205 254.238 80.9111C254.039 81.6389 253.809 82.2382 253.639 82.6779L253.639 82.6782L253.624 82.7174C253.454 83.1605 253.317 83.399 253.317 83.399C253.317 83.399 253.181 83.1605 253.01 82.7174C252.806 82.2744 252.601 81.6609 252.397 80.9111C252.09 79.8546 251.885 78.4914 251.783 77.0941C250.487 76.9918 249.225 76.7533 248.237 76.4465C247.555 76.242 246.975 76.0035 246.566 75.799C246.157 75.5945 245.918 75.4582 245.918 75.4582C245.918 75.4582 246.157 75.3219 246.566 75.1174C246.975 74.9129 247.555 74.7084 248.237 74.4698C249.225 74.1631 250.487 73.9245 251.783 73.8223C251.885 72.425 252.09 71.0958 252.397 70.0052C252.595 69.2772 252.826 68.6778 252.995 68.238L252.995 68.2377L253.01 68.1989C253.181 67.7559 253.317 67.5173 253.317 67.5173C253.317 67.5173 253.454 67.7559 253.624 68.1989C253.829 68.642 254.033 69.2554 254.238 70.0052C254.545 71.0617 254.749 72.425 254.852 73.8223C256.147 73.9245 257.409 74.1631 258.398 74.4698ZM76.4149 238.876C76.0057 238.672 75.4261 238.467 74.7441 238.229C73.7553 237.922 72.4936 237.683 71.1979 237.581C71.0956 236.184 70.891 234.821 70.5841 233.764C70.3795 233.014 70.1749 232.401 69.9703 231.958C69.7999 231.515 69.6635 231.276 69.6635 231.276C69.6635 231.276 69.5271 231.515 69.3566 231.958L69.3415 231.997C69.1722 232.437 68.9414 233.036 68.7428 233.764C68.4359 234.855 68.2313 236.184 68.129 237.581C66.8333 237.683 65.5717 237.922 64.5828 238.229C63.9008 238.467 63.3212 238.672 62.912 238.876C62.5028 239.081 62.2641 239.217 62.2641 239.217C62.2641 239.217 62.5028 239.353 62.912 239.558C63.3212 239.762 63.9008 240.001 64.5828 240.205C65.5717 240.512 66.8333 240.751 68.129 240.853C68.2313 242.25 68.4359 243.613 68.7428 244.67C68.9474 245.42 69.152 246.033 69.3566 246.476C69.5271 246.919 69.6635 247.158 69.6635 247.158C69.6635 247.158 69.7999 246.919 69.9703 246.476L69.9855 246.437C70.1548 245.997 70.3855 245.398 70.5841 244.67C70.891 243.579 71.0956 242.25 71.1979 240.853C72.4936 240.751 73.7553 240.512 74.7441 240.205C75.4261 240.001 76.0057 239.762 76.4149 239.558C76.8241 239.387 77.0628 239.217 77.0628 239.217C77.0628 239.217 76.8241 239.081 76.4149 238.876ZM13.1284 266.311C13.8103 266.55 14.39 266.754 14.7992 266.959H14.8333C15.2425 267.163 15.4812 267.3 15.4812 267.3C15.4812 267.3 15.2425 267.436 14.8333 267.64C14.4241 267.845 13.8444 268.049 13.1625 268.288C12.1736 268.595 10.912 268.833 9.61625 268.936C9.51395 270.333 9.30936 271.662 9.00247 272.753C8.80383 273.481 8.57304 274.08 8.40374 274.52L8.3887 274.559C8.21821 275.002 8.08182 275.24 8.08182 275.24C8.08182 275.24 7.94543 275.002 7.77493 274.559C7.57034 274.116 7.36575 273.502 7.16116 272.753C6.85428 271.696 6.64969 270.333 6.54739 268.936C5.25166 268.833 3.99002 268.595 3.00116 268.288C2.3192 268.049 1.73952 267.845 1.33034 267.64C0.921163 267.436 0.682475 267.3 0.682475 267.3C0.682475 267.3 0.921163 267.163 1.33034 266.959C1.73952 266.754 2.3192 266.516 3.00116 266.311C3.99002 266.005 5.25166 265.766 6.54739 265.664C6.64969 264.266 6.85428 262.937 7.16116 261.847C7.35978 261.119 7.59054 260.519 7.75983 260.08L7.77493 260.04C7.94543 259.597 8.08182 259.359 8.08182 259.359C8.08182 259.359 8.21821 259.597 8.3887 260.04C8.5592 260.483 8.76379 261.097 8.96838 261.847C9.27526 262.937 9.47985 264.266 9.58215 265.664C10.8779 265.766 12.1395 266.005 13.1284 266.311Z"
									fill="var(--primary-color)"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div ref={featuresRef} id="features" className="landing-section px-4 md:px-8 py-8 mb-8">
					<div className="section-top lg:flex w-full gap-6 align-items-center mb-6">
						<span className="block font-normal text-6xl sm:text-7xl xl:text-8xl text-900 lg:w-8">
							Wide range of features and the stylish use of <b className="text-primary font-medium">PrimeReact</b> components
						</span>
						<div className="lg:w-4 lg:mt-0 mt-5">
							<h3 className="font-normal text-900 m-0 mb-6 w-full" style={{ letterSpacing: '0.6px' }}>
								With customizability at the forefront, our templates can be tailored to your specific needs and preferences. Whether you&lsquo;re looking for a simple and intuitive interface or a more complex and feature-rich solution, our templates have you
								covered.
							</h3>
							<Button label="Learn More" icon="pi pi-arrow-right" className="p-button-lg"></Button>
						</div>
					</div>
					<div className="feature-cards grid mt-8 pt-4">
						<div className="col-12 sm:col-6 lg:col-4">
							<div className="card p-0 h-full">
								<svg viewBox="0 0 443 257" className="fadein w-full border-round-3xl mb-4" fill="none" xmlns="http://www.w3.org/2000/svg">
									<mask id="mask0_436_2188" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="443" height="257">
										<rect width="442.667" height="257" fill="url(#paint0_linear_436_2188)" />
									</mask>
									<g mask="url(#mask0_436_2188)">
										<g opacity="0.05">
											<rect x="-30.082" y="-14.1369" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="-30.082" y="-14.1369" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="141.918" y="-14.1369" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="141.918" y="-14.1369" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="313.918" y="-14.1369" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="313.918" y="-14.1369" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="-116.082" y="15.8631" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="-116.082" y="15.8631" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="55.918" y="15.8631" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="55.918" y="15.8631" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.15">
											<rect x="227.918" y="15.8631" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="227.918" y="15.8631" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="399.918" y="15.8631" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="399.918" y="15.8631" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.15">
											<rect x="-30.082" y="45.8631" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="-30.082" y="45.8631" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="141.918" y="45.8631" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="141.918" y="45.8631" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="313.918" y="45.8631" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="313.918" y="45.8631" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="-116.082" y="75.8631" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="-116.082" y="75.8631" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="55.918" y="75.8631" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="55.918" y="75.8631" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="227.918" y="75.8631" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="227.918" y="75.8631" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.15">
											<rect x="399.918" y="75.8631" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="399.918" y="75.8631" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="-30.082" y="105.863" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="-30.082" y="105.863" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.15">
											<rect x="141.918" y="105.863" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="141.918" y="105.863" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="313.918" y="105.863" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="313.918" y="105.863" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.15">
											<rect x="-116.082" y="135.863" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="-116.082" y="135.863" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="55.918" y="135.863" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="55.918" y="135.863" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="227.918" y="135.863" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="227.918" y="135.863" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.15">
											<rect x="399.918" y="135.863" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="399.918" y="135.863" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="-30.082" y="165.863" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="-30.082" y="165.863" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="141.918" y="165.863" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="141.918" y="165.863" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="313.918" y="165.863" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="313.918" y="165.863" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="-116.082" y="195.863" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="-116.082" y="195.863" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="55.918" y="195.863" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="55.918" y="195.863" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="227.918" y="195.863" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="227.918" y="195.863" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<g opacity="0.05">
											<rect x="399.918" y="195.863" width="155" height="15" rx="6.5" fill="var(--primary-500)" />
											<rect x="399.918" y="195.863" width="155" height="15" rx="6.5" stroke="var(--primary-300)" />
										</g>
										<rect x="84.5507" y="97.8894" width="273.565" height="45" rx="13.5" fill="var(--primary-300)" style={{ opacity: '0.9' }} />
										<path
											d="M106.244 121.563L99.3427 118.989V116.6L108.202 120.404V122.024L106.244 121.563ZM99.3427 123.778L106.264 121.153L108.202 120.742V122.352L99.3427 126.167V123.778ZM117.912 119.163V127.889H115.441V116.795H117.769L117.912 119.163ZM117.472 121.932L116.672 121.922C116.679 121.135 116.788 120.414 117 119.758C117.219 119.102 117.519 118.538 117.902 118.066C118.292 117.594 118.757 117.232 119.297 116.979C119.837 116.719 120.438 116.59 121.101 116.59C121.635 116.59 122.117 116.665 122.547 116.815C122.985 116.959 123.357 117.195 123.665 117.523C123.979 117.851 124.219 118.278 124.383 118.804C124.547 119.324 124.629 119.963 124.629 120.722V127.889H122.147V120.712C122.147 120.178 122.069 119.758 121.911 119.45C121.761 119.136 121.539 118.914 121.245 118.784C120.958 118.647 120.599 118.579 120.168 118.579C119.745 118.579 119.365 118.668 119.03 118.845C118.695 119.023 118.411 119.266 118.179 119.573C117.953 119.881 117.779 120.237 117.656 120.64C117.533 121.043 117.472 121.474 117.472 121.932ZM129.633 118.927V132.155H127.161V116.795H129.438L129.633 118.927ZM136.862 122.239V122.455C136.862 123.261 136.766 124.01 136.575 124.7C136.39 125.384 136.113 125.982 135.744 126.495C135.382 127.001 134.934 127.394 134.401 127.674C133.868 127.954 133.252 128.094 132.555 128.094C131.865 128.094 131.26 127.968 130.74 127.715C130.227 127.455 129.793 127.09 129.438 126.618C129.082 126.146 128.795 125.593 128.577 124.957C128.365 124.314 128.214 123.61 128.125 122.844V122.014C128.214 121.2 128.365 120.462 128.577 119.799C128.795 119.136 129.082 118.565 129.438 118.087C129.793 117.608 130.227 117.239 130.74 116.979C131.253 116.719 131.851 116.59 132.535 116.59C133.232 116.59 133.85 116.726 134.391 117C134.931 117.266 135.385 117.649 135.754 118.148C136.123 118.64 136.4 119.235 136.585 119.932C136.769 120.623 136.862 121.392 136.862 122.239ZM134.391 122.455V122.239C134.391 121.727 134.343 121.252 134.247 120.814C134.151 120.37 134.001 119.98 133.796 119.645C133.591 119.31 133.328 119.051 133.006 118.866C132.692 118.675 132.312 118.579 131.868 118.579C131.431 118.579 131.055 118.654 130.74 118.804C130.426 118.948 130.162 119.15 129.951 119.409C129.739 119.669 129.575 119.973 129.458 120.322C129.342 120.664 129.26 121.036 129.212 121.44V123.429C129.294 123.921 129.434 124.372 129.633 124.782C129.831 125.193 130.111 125.521 130.474 125.767C130.843 126.006 131.314 126.126 131.889 126.126C132.333 126.126 132.712 126.03 133.027 125.839C133.341 125.647 133.598 125.384 133.796 125.049C134.001 124.707 134.151 124.314 134.247 123.87C134.343 123.426 134.391 122.954 134.391 122.455ZM141.435 119.051V127.889H138.964V116.795H141.291L141.435 119.051ZM141.035 121.932L140.194 121.922C140.194 121.156 140.29 120.448 140.481 119.799C140.673 119.15 140.953 118.586 141.322 118.107C141.691 117.622 142.149 117.249 142.696 116.989C143.25 116.723 143.889 116.59 144.614 116.59C145.12 116.59 145.581 116.665 145.998 116.815C146.422 116.959 146.787 117.188 147.095 117.502C147.41 117.817 147.649 118.22 147.813 118.712C147.984 119.204 148.069 119.799 148.069 120.496V127.889H145.598V120.712C145.598 120.172 145.516 119.748 145.352 119.44C145.195 119.133 144.966 118.914 144.665 118.784C144.371 118.647 144.019 118.579 143.609 118.579C143.144 118.579 142.747 118.668 142.419 118.845C142.098 119.023 141.835 119.266 141.63 119.573C141.425 119.881 141.274 120.237 141.179 120.64C141.083 121.043 141.035 121.474 141.035 121.932ZM147.915 121.276L146.757 121.532C146.757 120.862 146.849 120.23 147.034 119.635C147.225 119.033 147.502 118.507 147.864 118.056C148.233 117.598 148.688 117.239 149.228 116.979C149.768 116.719 150.387 116.59 151.084 116.59C151.651 116.59 152.157 116.668 152.601 116.825C153.053 116.976 153.435 117.215 153.75 117.543C154.064 117.871 154.304 118.299 154.468 118.825C154.632 119.344 154.714 119.973 154.714 120.712V127.889H152.232V120.701C152.232 120.141 152.15 119.707 151.986 119.399C151.829 119.092 151.603 118.88 151.309 118.763C151.016 118.64 150.663 118.579 150.253 118.579C149.87 118.579 149.532 118.651 149.238 118.794C148.951 118.931 148.708 119.126 148.51 119.379C148.312 119.625 148.161 119.908 148.059 120.23C147.963 120.551 147.915 120.9 147.915 121.276ZM165.132 116.795V127.889H162.65V116.795H165.132ZM162.486 113.883C162.486 113.507 162.609 113.196 162.855 112.949C163.108 112.697 163.457 112.57 163.901 112.57C164.339 112.57 164.684 112.697 164.937 112.949C165.19 113.196 165.316 113.507 165.316 113.883C165.316 114.252 165.19 114.559 164.937 114.805C164.684 115.051 164.339 115.175 163.901 115.175C163.457 115.175 163.108 115.051 162.855 114.805C162.609 114.559 162.486 114.252 162.486 113.883ZM170.289 119.163V127.889H167.818V116.795H170.146L170.289 119.163ZM169.849 121.932L169.049 121.922C169.056 121.135 169.165 120.414 169.377 119.758C169.596 119.102 169.896 118.538 170.279 118.066C170.669 117.594 171.134 117.232 171.674 116.979C172.214 116.719 172.815 116.59 173.478 116.59C174.012 116.59 174.494 116.665 174.924 116.815C175.362 116.959 175.734 117.195 176.042 117.523C176.356 117.851 176.596 118.278 176.76 118.804C176.924 119.324 177.006 119.963 177.006 120.722V127.889H174.524V120.712C174.524 120.178 174.446 119.758 174.288 119.45C174.138 119.136 173.916 118.914 173.622 118.784C173.335 118.647 172.976 118.579 172.545 118.579C172.121 118.579 171.742 118.668 171.407 118.845C171.072 119.023 170.788 119.266 170.556 119.573C170.33 119.881 170.156 120.237 170.033 120.64C169.91 121.043 169.849 121.474 169.849 121.932ZM185.752 124.885C185.752 124.639 185.691 124.417 185.568 124.218C185.445 124.013 185.209 123.829 184.86 123.665C184.518 123.501 184.013 123.35 183.343 123.214C182.755 123.084 182.215 122.93 181.723 122.752C181.237 122.568 180.82 122.345 180.472 122.086C180.123 121.826 179.853 121.518 179.661 121.163C179.47 120.807 179.374 120.397 179.374 119.932C179.374 119.481 179.474 119.054 179.672 118.651C179.87 118.247 180.154 117.892 180.523 117.584C180.892 117.277 181.34 117.034 181.866 116.856C182.399 116.678 182.994 116.59 183.65 116.59C184.58 116.59 185.376 116.747 186.039 117.061C186.709 117.369 187.222 117.789 187.578 118.322C187.933 118.849 188.111 119.444 188.111 120.107H185.64C185.64 119.813 185.564 119.539 185.414 119.286C185.27 119.027 185.052 118.818 184.758 118.661C184.464 118.497 184.095 118.415 183.65 118.415C183.226 118.415 182.874 118.483 182.594 118.62C182.321 118.75 182.116 118.921 181.979 119.133C181.849 119.344 181.784 119.577 181.784 119.83C181.784 120.014 181.818 120.182 181.887 120.332C181.962 120.476 182.085 120.609 182.256 120.732C182.427 120.848 182.659 120.958 182.953 121.06C183.254 121.163 183.63 121.262 184.081 121.358C184.929 121.535 185.657 121.764 186.265 122.045C186.88 122.318 187.352 122.674 187.68 123.111C188.008 123.542 188.172 124.089 188.172 124.752C188.172 125.244 188.066 125.695 187.854 126.105C187.649 126.509 187.349 126.861 186.952 127.161C186.556 127.455 186.08 127.684 185.527 127.848C184.98 128.012 184.365 128.094 183.681 128.094C182.676 128.094 181.825 127.917 181.128 127.561C180.431 127.199 179.901 126.738 179.538 126.177C179.183 125.61 179.005 125.022 179.005 124.413H181.394C181.422 124.871 181.548 125.237 181.774 125.51C182.006 125.777 182.293 125.972 182.635 126.095C182.984 126.211 183.343 126.269 183.712 126.269C184.156 126.269 184.529 126.211 184.829 126.095C185.13 125.972 185.359 125.808 185.516 125.603C185.674 125.391 185.752 125.152 185.752 124.885ZM195.422 116.795V118.599H189.167V116.795H195.422ZM190.972 114.077H193.443V124.823C193.443 125.165 193.491 125.428 193.586 125.613C193.689 125.791 193.829 125.91 194.007 125.972C194.184 126.033 194.393 126.064 194.632 126.064C194.803 126.064 194.967 126.054 195.124 126.033C195.282 126.013 195.408 125.992 195.504 125.972L195.514 127.859C195.309 127.92 195.07 127.975 194.796 128.023C194.53 128.071 194.222 128.094 193.873 128.094C193.306 128.094 192.804 127.995 192.366 127.797C191.929 127.592 191.587 127.26 191.341 126.802C191.095 126.344 190.972 125.736 190.972 124.977V114.077ZM203.584 125.664V120.373C203.584 119.977 203.512 119.635 203.369 119.348C203.225 119.061 203.006 118.839 202.712 118.681C202.425 118.524 202.063 118.446 201.625 118.446C201.222 118.446 200.873 118.514 200.579 118.651C200.286 118.787 200.057 118.972 199.892 119.204C199.728 119.437 199.646 119.7 199.646 119.994H197.185C197.185 119.556 197.291 119.133 197.503 118.722C197.715 118.312 198.023 117.947 198.426 117.625C198.829 117.304 199.311 117.051 199.872 116.866C200.432 116.682 201.061 116.59 201.759 116.59C202.593 116.59 203.331 116.73 203.974 117.01C204.623 117.29 205.132 117.714 205.501 118.281C205.877 118.842 206.065 119.546 206.065 120.394V125.326C206.065 125.832 206.099 126.286 206.168 126.69C206.243 127.086 206.349 127.431 206.486 127.725V127.889H203.953C203.837 127.623 203.745 127.284 203.676 126.874C203.615 126.457 203.584 126.054 203.584 125.664ZM203.943 121.142L203.963 122.67H202.189C201.731 122.67 201.328 122.715 200.979 122.803C200.631 122.885 200.34 123.009 200.108 123.173C199.875 123.337 199.701 123.535 199.585 123.767C199.469 124 199.411 124.263 199.411 124.557C199.411 124.851 199.479 125.121 199.616 125.367C199.752 125.606 199.951 125.794 200.21 125.931C200.477 126.068 200.798 126.136 201.174 126.136C201.68 126.136 202.121 126.033 202.497 125.828C202.88 125.616 203.181 125.36 203.399 125.059C203.618 124.752 203.734 124.461 203.748 124.188L204.548 125.285C204.466 125.565 204.326 125.866 204.127 126.187C203.929 126.509 203.669 126.816 203.348 127.11C203.034 127.397 202.654 127.633 202.21 127.818C201.772 128.002 201.266 128.094 200.692 128.094C199.968 128.094 199.322 127.951 198.754 127.664C198.187 127.37 197.743 126.977 197.421 126.485C197.1 125.986 196.939 125.422 196.939 124.793C196.939 124.205 197.049 123.685 197.267 123.234C197.493 122.776 197.821 122.393 198.252 122.086C198.689 121.778 199.223 121.546 199.851 121.388C200.48 121.224 201.198 121.142 202.005 121.142H203.943ZM211.295 112.139V127.889H208.813V112.139H211.295ZM216.647 112.139V127.889H214.166V112.139H216.647Z"
											fill="var(--primary-700)"
										/>
										<rect x="84.5507" y="97.8894" width="273.565" height="45" rx="13.5" stroke="var(--primary-300)" />
									</g>
									<defs>
										<linearGradient id="paint0_linear_436_2188" x1="221.333" y1="0" x2="221.333" y2="257" gradientUnits="userSpaceOnUse">
											<stop offset="0.750409" stopColor="white" />
											<stop offset="1" stopColor="white" stopOpacity="0" />
										</linearGradient>
									</defs>
								</svg>
								<h4 className="font-medium m-0 mb-3 px-5">Easy to use</h4>
								<span className="p-0 m-0 text-xl block line-height-3 px-5 pb-5" style={{ letterSpacing: '0.4px' }}>
									A user-friendly interface that is intuitive and simple to navigate, enabling users to quickly find the information they need.
								</span>
							</div>
						</div>
						<div className="col-12 sm:col-6 lg:col-4">
							<div className="card p-0 h-full">
								<svg className="w-full border-round-3xl mb-4" viewBox="0 0 444 257" fill="none" xmlns="http://www.w3.org/2000/svg">
									<mask id="mask0_436_2247" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="444" height="257">
										<rect width="442.667" height="257" transform="translate(0.666656)" fill="url(#paint0_linear_436_2247)" />
									</mask>
									<g mask="url(#mask0_436_2247)">
										<g opacity="0.05" clipPath="url(#clip0_436_2247)">
											<path
												d="M35.131 5.26917C24.9985 5.26917 16.756 13.5117 16.756 23.6442C16.756 33.7767 24.9985 42.0192 35.131 42.0192C45.2635 42.0192 53.506 33.7767 53.506 23.6442C53.506 13.5117 45.2635 5.26917 35.131 5.26917ZM35.131 38.0817C27.1773 38.0817 20.6935 31.5979 20.6935 23.6442C20.6935 15.6904 27.1773 9.20667 35.131 9.20667C43.0848 9.20667 49.5685 15.6904 49.5685 23.6442C49.5685 31.5979 43.0848 38.0817 35.131 38.0817ZM26.5998 1.98792C26.5998 0.911665 27.4923 0.019165 28.5685 0.019165H41.6935C42.7698 0.019165 43.6623 0.911665 43.6623 1.98792C43.6623 3.06417 42.7698 3.95667 41.6935 3.95667H28.5685C27.4923 3.95667 26.5998 3.06417 26.5998 1.98792ZM37.0998 15.7692V23.6442C37.0998 24.7204 36.2073 25.6129 35.131 25.6129C34.0548 25.6129 33.1623 24.7204 33.1623 23.6442V15.7692C33.1623 14.6929 34.0548 13.8004 35.131 13.8004C36.2073 13.8004 37.0998 14.6929 37.0998 15.7692ZM54.2673 11.2279C53.8735 11.6217 53.3748 11.8054 52.876 11.8054C52.3773 11.8054 51.8785 11.6217 51.4848 11.2279L47.5473 7.29041C46.786 6.52916 46.786 5.26917 47.5473 4.50792C48.3085 3.74667 49.5685 3.74667 50.3298 4.50792L54.2673 8.44542C55.0285 9.20667 55.0285 10.4667 54.2673 11.2279Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip1_436_2247)">
											<path
												d="M97.1987 5.26917C87.0662 5.26917 78.8237 13.5117 78.8237 23.6442C78.8237 33.7767 87.0662 42.0192 97.1987 42.0192C107.331 42.0192 115.574 33.7767 115.574 23.6442C115.574 13.5117 107.331 5.26917 97.1987 5.26917ZM97.1987 38.0817C89.2449 38.0817 82.7612 31.5979 82.7612 23.6442C82.7612 15.6904 89.2449 9.20667 97.1987 9.20667C105.152 9.20667 111.636 15.6904 111.636 23.6442C111.636 31.5979 105.152 38.0817 97.1987 38.0817ZM88.6674 1.98792C88.6674 0.911665 89.5599 0.019165 90.6362 0.019165H103.761C104.837 0.019165 105.73 0.911665 105.73 1.98792C105.73 3.06417 104.837 3.95667 103.761 3.95667H90.6362C89.5599 3.95667 88.6674 3.06417 88.6674 1.98792ZM99.1674 15.7692V23.6442C99.1674 24.7204 98.2749 25.6129 97.1987 25.6129C96.1224 25.6129 95.2299 24.7204 95.2299 23.6442V15.7692C95.2299 14.6929 96.1224 13.8004 97.1987 13.8004C98.2749 13.8004 99.1674 14.6929 99.1674 15.7692ZM116.335 11.2279C115.941 11.6217 115.442 11.8054 114.944 11.8054C114.445 11.8054 113.946 11.6217 113.552 11.2279L109.615 7.29041C108.854 6.52916 108.854 5.26917 109.615 4.50792C110.376 3.74667 111.636 3.74667 112.397 4.50792L116.335 8.44542C117.096 9.20667 117.096 10.4667 116.335 11.2279Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip2_436_2247)">
											<path
												d="M159.266 5.26917C149.134 5.26917 140.891 13.5117 140.891 23.6442C140.891 33.7767 149.134 42.0192 159.266 42.0192C169.399 42.0192 177.641 33.7767 177.641 23.6442C177.641 13.5117 169.399 5.26917 159.266 5.26917ZM159.266 38.0817C151.313 38.0817 144.829 31.5979 144.829 23.6442C144.829 15.6904 151.313 9.20667 159.266 9.20667C167.22 9.20667 173.704 15.6904 173.704 23.6442C173.704 31.5979 167.22 38.0817 159.266 38.0817ZM150.735 1.98792C150.735 0.911665 151.628 0.019165 152.704 0.019165H165.829C166.905 0.019165 167.798 0.911665 167.798 1.98792C167.798 3.06417 166.905 3.95667 165.829 3.95667H152.704C151.628 3.95667 150.735 3.06417 150.735 1.98792ZM161.235 15.7692V23.6442C161.235 24.7204 160.343 25.6129 159.266 25.6129C158.19 25.6129 157.298 24.7204 157.298 23.6442V15.7692C157.298 14.6929 158.19 13.8004 159.266 13.8004C160.343 13.8004 161.235 14.6929 161.235 15.7692ZM178.403 11.2279C178.009 11.6217 177.51 11.8054 177.011 11.8054C176.513 11.8054 176.014 11.6217 175.62 11.2279L171.683 7.29041C170.921 6.52916 170.921 5.26917 171.683 4.50792C172.444 3.74667 173.704 3.74667 174.465 4.50792L178.403 8.44542C179.164 9.20667 179.164 10.4667 178.403 11.2279Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip3_436_2247)">
											<path
												d="M221.334 5.26917C211.201 5.26917 202.959 13.5117 202.959 23.6442C202.959 33.7767 211.201 42.0192 221.334 42.0192C231.466 42.0192 239.709 33.7767 239.709 23.6442C239.709 13.5117 231.466 5.26917 221.334 5.26917ZM221.334 38.0817C213.38 38.0817 206.896 31.5979 206.896 23.6442C206.896 15.6904 213.38 9.20667 221.334 9.20667C229.288 9.20667 235.771 15.6904 235.771 23.6442C235.771 31.5979 229.288 38.0817 221.334 38.0817ZM212.803 1.98792C212.803 0.911665 213.695 0.019165 214.771 0.019165H227.896C228.973 0.019165 229.865 0.911665 229.865 1.98792C229.865 3.06417 228.973 3.95667 227.896 3.95667H214.771C213.695 3.95667 212.803 3.06417 212.803 1.98792ZM223.303 15.7692V23.6442C223.303 24.7204 222.41 25.6129 221.334 25.6129C220.258 25.6129 219.365 24.7204 219.365 23.6442V15.7692C219.365 14.6929 220.258 13.8004 221.334 13.8004C222.41 13.8004 223.303 14.6929 223.303 15.7692ZM240.47 11.2279C240.076 11.6217 239.578 11.8054 239.079 11.8054C238.58 11.8054 238.081 11.6217 237.688 11.2279L233.75 7.29041C232.989 6.52916 232.989 5.26917 233.75 4.50792C234.511 3.74667 235.771 3.74667 236.533 4.50792L240.47 8.44542C241.231 9.20667 241.231 10.4667 240.47 11.2279Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip4_436_2247)">
											<path
												d="M283.401 5.26917C273.269 5.26917 265.026 13.5117 265.026 23.6442C265.026 33.7767 273.269 42.0192 283.401 42.0192C293.534 42.0192 301.776 33.7767 301.776 23.6442C301.776 13.5117 293.534 5.26917 283.401 5.26917ZM283.401 38.0817C275.448 38.0817 268.964 31.5979 268.964 23.6442C268.964 15.6904 275.448 9.20667 283.401 9.20667C291.355 9.20667 297.839 15.6904 297.839 23.6442C297.839 31.5979 291.355 38.0817 283.401 38.0817ZM274.87 1.98792C274.87 0.911665 275.763 0.019165 276.839 0.019165H289.964C291.04 0.019165 291.933 0.911665 291.933 1.98792C291.933 3.06417 291.04 3.95667 289.964 3.95667H276.839C275.763 3.95667 274.87 3.06417 274.87 1.98792ZM285.37 15.7692V23.6442C285.37 24.7204 284.478 25.6129 283.401 25.6129C282.325 25.6129 281.433 24.7204 281.433 23.6442V15.7692C281.433 14.6929 282.325 13.8004 283.401 13.8004C284.478 13.8004 285.37 14.6929 285.37 15.7692ZM302.538 11.2279C302.144 11.6217 301.645 11.8054 301.146 11.8054C300.648 11.8054 300.149 11.6217 299.755 11.2279L295.818 7.29041C295.056 6.52916 295.056 5.26917 295.818 4.50792C296.579 3.74667 297.839 3.74667 298.6 4.50792L302.538 8.44542C303.299 9.20667 303.299 10.4667 302.538 11.2279Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip5_436_2247)">
											<path
												d="M345.469 5.26917C335.337 5.26917 327.094 13.5117 327.094 23.6442C327.094 33.7767 335.337 42.0192 345.469 42.0192C355.602 42.0192 363.844 33.7767 363.844 23.6442C363.844 13.5117 355.602 5.26917 345.469 5.26917ZM345.469 38.0817C337.515 38.0817 331.032 31.5979 331.032 23.6442C331.032 15.6904 337.515 9.20667 345.469 9.20667C353.423 9.20667 359.907 15.6904 359.907 23.6442C359.907 31.5979 353.423 38.0817 345.469 38.0817ZM336.938 1.98792C336.938 0.911665 337.83 0.019165 338.907 0.019165H352.032C353.108 0.019165 354 0.911665 354 1.98792C354 3.06417 353.108 3.95667 352.032 3.95667H338.907C337.83 3.95667 336.938 3.06417 336.938 1.98792ZM347.438 15.7692V23.6442C347.438 24.7204 346.545 25.6129 345.469 25.6129C344.393 25.6129 343.5 24.7204 343.5 23.6442V15.7692C343.5 14.6929 344.393 13.8004 345.469 13.8004C346.545 13.8004 347.438 14.6929 347.438 15.7692ZM364.605 11.2279C364.212 11.6217 363.713 11.8054 363.214 11.8054C362.715 11.8054 362.217 11.6217 361.823 11.2279L357.885 7.29041C357.124 6.52916 357.124 5.26917 357.885 4.50792C358.647 3.74667 359.907 3.74667 360.668 4.50792L364.605 8.44542C365.367 9.20667 365.367 10.4667 364.605 11.2279Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip6_436_2247)">
											<path
												d="M407.537 5.26917C397.404 5.26917 389.162 13.5117 389.162 23.6442C389.162 33.7767 397.404 42.0192 407.537 42.0192C417.669 42.0192 425.912 33.7767 425.912 23.6442C425.912 13.5117 417.669 5.26917 407.537 5.26917ZM407.537 38.0817C399.583 38.0817 393.099 31.5979 393.099 23.6442C393.099 15.6904 399.583 9.20667 407.537 9.20667C415.491 9.20667 421.974 15.6904 421.974 23.6442C421.974 31.5979 415.491 38.0817 407.537 38.0817ZM399.006 1.98792C399.006 0.911665 399.898 0.019165 400.974 0.019165H414.099C415.176 0.019165 416.068 0.911665 416.068 1.98792C416.068 3.06417 415.176 3.95667 414.099 3.95667H400.974C399.898 3.95667 399.006 3.06417 399.006 1.98792ZM409.506 15.7692V23.6442C409.506 24.7204 408.613 25.6129 407.537 25.6129C406.461 25.6129 405.568 24.7204 405.568 23.6442V15.7692C405.568 14.6929 406.461 13.8004 407.537 13.8004C408.613 13.8004 409.506 14.6929 409.506 15.7692ZM426.673 11.2279C426.279 11.6217 425.781 11.8054 425.282 11.8054C424.783 11.8054 424.284 11.6217 423.891 11.2279L419.953 7.29041C419.192 6.52916 419.192 5.26917 419.953 4.50792C420.714 3.74667 421.974 3.74667 422.736 4.50792L426.673 8.44542C427.434 9.20667 427.434 10.4667 426.673 11.2279Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip7_436_2247)">
											<path
												d="M4.09723 61.2692C-6.03527 61.2692 -14.2778 69.5117 -14.2778 79.6442C-14.2778 89.7767 -6.03527 98.0192 4.09723 98.0192C14.2297 98.0192 22.4722 89.7767 22.4722 79.6442C22.4722 69.5117 14.2297 61.2692 4.09723 61.2692ZM4.09723 94.0817C-3.85652 94.0817 -10.3403 87.5979 -10.3403 79.6442C-10.3403 71.6904 -3.85652 65.2067 4.09723 65.2067C12.051 65.2067 18.5347 71.6904 18.5347 79.6442C18.5347 87.5979 12.051 94.0817 4.09723 94.0817ZM-4.43402 57.9879C-4.43402 56.9117 -3.54152 56.0192 -2.46527 56.0192H10.6597C11.736 56.0192 12.6285 56.9117 12.6285 57.9879C12.6285 59.0642 11.736 59.9567 10.6597 59.9567H-2.46527C-3.54152 59.9567 -4.43402 59.0642 -4.43402 57.9879ZM6.06598 71.7692V79.6442C6.06598 80.7204 5.17348 81.6129 4.09723 81.6129C3.02098 81.6129 2.12848 80.7204 2.12848 79.6442V71.7692C2.12848 70.6929 3.02098 69.8004 4.09723 69.8004C5.17348 69.8004 6.06598 70.6929 6.06598 71.7692ZM23.2335 67.2279C22.8397 67.6217 22.341 67.8054 21.8422 67.8054C21.3435 67.8054 20.8447 67.6217 20.451 67.2279L16.5135 63.2904C15.7522 62.5292 15.7522 61.2692 16.5135 60.5079C17.2747 59.7467 18.5347 59.7467 19.296 60.5079L23.2335 64.4454C23.9947 65.2067 23.9947 66.4667 23.2335 67.2279Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip8_436_2247)">
											<path
												d="M66.1648 61.2692C56.0323 61.2692 47.7898 69.5117 47.7898 79.6442C47.7898 89.7767 56.0323 98.0192 66.1648 98.0192C76.2973 98.0192 84.5398 89.7767 84.5398 79.6442C84.5398 69.5117 76.2973 61.2692 66.1648 61.2692ZM66.1648 94.0817C58.2111 94.0817 51.7273 87.5979 51.7273 79.6442C51.7273 71.6904 58.2111 65.2067 66.1648 65.2067C74.1186 65.2067 80.6023 71.6904 80.6023 79.6442C80.6023 87.5979 74.1186 94.0817 66.1648 94.0817ZM57.6336 57.9879C57.6336 56.9117 58.5261 56.0192 59.6023 56.0192H72.7273C73.8036 56.0192 74.6961 56.9117 74.6961 57.9879C74.6961 59.0642 73.8036 59.9567 72.7273 59.9567H59.6023C58.5261 59.9567 57.6336 59.0642 57.6336 57.9879ZM68.1336 71.7692V79.6442C68.1336 80.7204 67.2411 81.6129 66.1648 81.6129C65.0886 81.6129 64.1961 80.7204 64.1961 79.6442V71.7692C64.1961 70.6929 65.0886 69.8004 66.1648 69.8004C67.2411 69.8004 68.1336 70.6929 68.1336 71.7692ZM85.3011 67.2279C84.9073 67.6217 84.4086 67.8054 83.9098 67.8054C83.4111 67.8054 82.9123 67.6217 82.5186 67.2279L78.5811 63.2904C77.8198 62.5292 77.8198 61.2692 78.5811 60.5079C79.3423 59.7467 80.6023 59.7467 81.3636 60.5079L85.3011 64.4454C86.0623 65.2067 86.0623 66.4667 85.3011 67.2279Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip9_436_2247)">
											<path
												d="M128.232 61.2692C118.1 61.2692 109.857 69.5117 109.857 79.6442C109.857 89.7767 118.1 98.0192 128.232 98.0192C138.365 98.0192 146.607 89.7767 146.607 79.6442C146.607 69.5117 138.365 61.2692 128.232 61.2692ZM128.232 94.0817C120.279 94.0817 113.795 87.5979 113.795 79.6442C113.795 71.6904 120.279 65.2067 128.232 65.2067C136.186 65.2067 142.67 71.6904 142.67 79.6442C142.67 87.5979 136.186 94.0817 128.232 94.0817ZM119.701 57.9879C119.701 56.9117 120.594 56.0192 121.67 56.0192H134.795C135.871 56.0192 136.764 56.9117 136.764 57.9879C136.764 59.0642 135.871 59.9567 134.795 59.9567H121.67C120.594 59.9567 119.701 59.0642 119.701 57.9879ZM130.201 71.7692V79.6442C130.201 80.7204 129.309 81.6129 128.232 81.6129C127.156 81.6129 126.264 80.7204 126.264 79.6442V71.7692C126.264 70.6929 127.156 69.8004 128.232 69.8004C129.309 69.8004 130.201 70.6929 130.201 71.7692ZM147.369 67.2279C146.975 67.6217 146.476 67.8054 145.977 67.8054C145.479 67.8054 144.98 67.6217 144.586 67.2279L140.649 63.2904C139.887 62.5292 139.887 61.2692 140.649 60.5079C141.41 59.7467 142.67 59.7467 143.431 60.5079L147.369 64.4454C148.13 65.2067 148.13 66.4667 147.369 67.2279Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip10_436_2247)">
											<path
												d="M190.3 61.2692C180.168 61.2692 171.925 69.5117 171.925 79.6442C171.925 89.7767 180.168 98.0192 190.3 98.0192C200.433 98.0192 208.675 89.7767 208.675 79.6442C208.675 69.5117 200.433 61.2692 190.3 61.2692ZM190.3 94.0817C182.346 94.0817 175.863 87.5979 175.863 79.6442C175.863 71.6904 182.346 65.2067 190.3 65.2067C198.254 65.2067 204.738 71.6904 204.738 79.6442C204.738 87.5979 198.254 94.0817 190.3 94.0817ZM181.769 57.9879C181.769 56.9117 182.661 56.0192 183.738 56.0192H196.863C197.939 56.0192 198.831 56.9117 198.831 57.9879C198.831 59.0642 197.939 59.9567 196.863 59.9567H183.738C182.661 59.9567 181.769 59.0642 181.769 57.9879ZM192.269 71.7692V79.6442C192.269 80.7204 191.376 81.6129 190.3 81.6129C189.224 81.6129 188.331 80.7204 188.331 79.6442V71.7692C188.331 70.6929 189.224 69.8004 190.3 69.8004C191.376 69.8004 192.269 70.6929 192.269 71.7692ZM209.436 67.2279C209.043 67.6217 208.544 67.8054 208.045 67.8054C207.546 67.8054 207.048 67.6217 206.654 67.2279L202.716 63.2904C201.955 62.5292 201.955 61.2692 202.716 60.5079C203.478 59.7467 204.738 59.7467 205.499 60.5079L209.436 64.4454C210.198 65.2067 210.198 66.4667 209.436 67.2279Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip11_436_2247)">
											<path
												d="M252.368 61.2692C242.235 61.2692 233.993 69.5117 233.993 79.6442C233.993 89.7767 242.235 98.0192 252.368 98.0192C262.5 98.0192 270.743 89.7767 270.743 79.6442C270.743 69.5117 262.5 61.2692 252.368 61.2692ZM252.368 94.0817C244.414 94.0817 237.93 87.5979 237.93 79.6442C237.93 71.6904 244.414 65.2067 252.368 65.2067C260.321 65.2067 266.805 71.6904 266.805 79.6442C266.805 87.5979 260.321 94.0817 252.368 94.0817ZM243.836 57.9879C243.836 56.9117 244.729 56.0192 245.805 56.0192H258.93C260.006 56.0192 260.899 56.9117 260.899 57.9879C260.899 59.0642 260.006 59.9567 258.93 59.9567H245.805C244.729 59.9567 243.836 59.0642 243.836 57.9879ZM254.336 71.7692V79.6442C254.336 80.7204 253.444 81.6129 252.368 81.6129C251.291 81.6129 250.399 80.7204 250.399 79.6442V71.7692C250.399 70.6929 251.291 69.8004 252.368 69.8004C253.444 69.8004 254.336 70.6929 254.336 71.7692ZM271.504 67.2279C271.11 67.6217 270.611 67.8054 270.113 67.8054C269.614 67.8054 269.115 67.6217 268.721 67.2279L264.784 63.2904C264.023 62.5292 264.023 61.2692 264.784 60.5079C265.545 59.7467 266.805 59.7467 267.566 60.5079L271.504 64.4454C272.265 65.2067 272.265 66.4667 271.504 67.2279Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip12_436_2247)">
											<path
												d="M314.435 61.2692C304.303 61.2692 296.06 69.5117 296.06 79.6442C296.06 89.7767 304.303 98.0192 314.435 98.0192C324.568 98.0192 332.81 89.7767 332.81 79.6442C332.81 69.5117 324.568 61.2692 314.435 61.2692ZM314.435 94.0817C306.482 94.0817 299.998 87.5979 299.998 79.6442C299.998 71.6904 306.482 65.2067 314.435 65.2067C322.389 65.2067 328.873 71.6904 328.873 79.6442C328.873 87.5979 322.389 94.0817 314.435 94.0817ZM305.904 57.9879C305.904 56.9117 306.797 56.0192 307.873 56.0192H320.998C322.074 56.0192 322.967 56.9117 322.967 57.9879C322.967 59.0642 322.074 59.9567 320.998 59.9567H307.873C306.797 59.9567 305.904 59.0642 305.904 57.9879ZM316.404 71.7692V79.6442C316.404 80.7204 315.512 81.6129 314.435 81.6129C313.359 81.6129 312.467 80.7204 312.467 79.6442V71.7692C312.467 70.6929 313.359 69.8004 314.435 69.8004C315.512 69.8004 316.404 70.6929 316.404 71.7692ZM333.572 67.2279C333.178 67.6217 332.679 67.8054 332.18 67.8054C331.682 67.8054 331.183 67.6217 330.789 67.2279L326.852 63.2904C326.09 62.5292 326.09 61.2692 326.852 60.5079C327.613 59.7467 328.873 59.7467 329.634 60.5079L333.572 64.4454C334.333 65.2067 334.333 66.4667 333.572 67.2279Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip13_436_2247)">
											<path
												d="M376.503 61.2692C366.37 61.2692 358.128 69.5117 358.128 79.6442C358.128 89.7767 366.37 98.0192 376.503 98.0192C386.635 98.0192 394.878 89.7767 394.878 79.6442C394.878 69.5117 386.635 61.2692 376.503 61.2692ZM376.503 94.0817C368.549 94.0817 362.065 87.5979 362.065 79.6442C362.065 71.6904 368.549 65.2067 376.503 65.2067C384.457 65.2067 390.94 71.6904 390.94 79.6442C390.94 87.5979 384.457 94.0817 376.503 94.0817ZM367.972 57.9879C367.972 56.9117 368.864 56.0192 369.94 56.0192H383.065C384.142 56.0192 385.034 56.9117 385.034 57.9879C385.034 59.0642 384.142 59.9567 383.065 59.9567H369.94C368.864 59.9567 367.972 59.0642 367.972 57.9879ZM378.472 71.7692V79.6442C378.472 80.7204 377.579 81.6129 376.503 81.6129C375.427 81.6129 374.534 80.7204 374.534 79.6442V71.7692C374.534 70.6929 375.427 69.8004 376.503 69.8004C377.579 69.8004 378.472 70.6929 378.472 71.7692ZM395.639 67.2279C395.245 67.6217 394.747 67.8054 394.248 67.8054C393.749 67.8054 393.25 67.6217 392.857 67.2279L388.919 63.2904C388.158 62.5292 388.158 61.2692 388.919 60.5079C389.68 59.7467 390.94 59.7467 391.702 60.5079L395.639 64.4454C396.4 65.2067 396.4 66.4667 395.639 67.2279Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip14_436_2247)">
											<path
												d="M438.571 61.2692C428.438 61.2692 420.196 69.5117 420.196 79.6442C420.196 89.7767 428.438 98.0192 438.571 98.0192C448.703 98.0192 456.946 89.7767 456.946 79.6442C456.946 69.5117 448.703 61.2692 438.571 61.2692ZM438.571 94.0817C430.617 94.0817 424.133 87.5979 424.133 79.6442C424.133 71.6904 430.617 65.2067 438.571 65.2067C446.524 65.2067 453.008 71.6904 453.008 79.6442C453.008 87.5979 446.524 94.0817 438.571 94.0817ZM430.039 57.9879C430.039 56.9117 430.932 56.0192 432.008 56.0192H445.133C446.209 56.0192 447.102 56.9117 447.102 57.9879C447.102 59.0642 446.209 59.9567 445.133 59.9567H432.008C430.932 59.9567 430.039 59.0642 430.039 57.9879ZM440.539 71.7692V79.6442C440.539 80.7204 439.647 81.6129 438.571 81.6129C437.494 81.6129 436.602 80.7204 436.602 79.6442V71.7692C436.602 70.6929 437.494 69.8004 438.571 69.8004C439.647 69.8004 440.539 70.6929 440.539 71.7692ZM457.707 67.2279C457.313 67.6217 456.814 67.8054 456.316 67.8054C455.817 67.8054 455.318 67.6217 454.924 67.2279L450.987 63.2904C450.226 62.5292 450.226 61.2692 450.987 60.5079C451.748 59.7467 453.008 59.7467 453.769 60.5079L457.707 64.4454C458.468 65.2067 458.468 66.4667 457.707 67.2279Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip15_436_2247)">
											<path
												d="M35.131 117.269C24.9985 117.269 16.756 125.512 16.756 135.644C16.756 145.777 24.9985 154.019 35.131 154.019C45.2635 154.019 53.506 145.777 53.506 135.644C53.506 125.512 45.2635 117.269 35.131 117.269ZM35.131 150.082C27.1773 150.082 20.6935 143.598 20.6935 135.644C20.6935 127.69 27.1773 121.207 35.131 121.207C43.0848 121.207 49.5685 127.69 49.5685 135.644C49.5685 143.598 43.0848 150.082 35.131 150.082ZM26.5998 113.988C26.5998 112.912 27.4923 112.019 28.5685 112.019H41.6935C42.7698 112.019 43.6623 112.912 43.6623 113.988C43.6623 115.064 42.7698 115.957 41.6935 115.957H28.5685C27.4923 115.957 26.5998 115.064 26.5998 113.988ZM37.0998 127.769V135.644C37.0998 136.72 36.2073 137.613 35.131 137.613C34.0548 137.613 33.1623 136.72 33.1623 135.644V127.769C33.1623 126.693 34.0548 125.8 35.131 125.8C36.2073 125.8 37.0998 126.693 37.0998 127.769ZM54.2673 123.228C53.8735 123.622 53.3748 123.805 52.876 123.805C52.3773 123.805 51.8785 123.622 51.4848 123.228L47.5473 119.29C46.786 118.529 46.786 117.269 47.5473 116.508C48.3085 115.747 49.5685 115.747 50.3298 116.508L54.2673 120.445C55.0285 121.207 55.0285 122.467 54.2673 123.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip16_436_2247)">
											<path
												d="M97.1987 117.269C87.0662 117.269 78.8237 125.512 78.8237 135.644C78.8237 145.777 87.0662 154.019 97.1987 154.019C107.331 154.019 115.574 145.777 115.574 135.644C115.574 125.512 107.331 117.269 97.1987 117.269ZM97.1987 150.082C89.2449 150.082 82.7612 143.598 82.7612 135.644C82.7612 127.69 89.2449 121.207 97.1987 121.207C105.152 121.207 111.636 127.69 111.636 135.644C111.636 143.598 105.152 150.082 97.1987 150.082ZM88.6674 113.988C88.6674 112.912 89.5599 112.019 90.6362 112.019H103.761C104.837 112.019 105.73 112.912 105.73 113.988C105.73 115.064 104.837 115.957 103.761 115.957H90.6362C89.5599 115.957 88.6674 115.064 88.6674 113.988ZM99.1674 127.769V135.644C99.1674 136.72 98.2749 137.613 97.1987 137.613C96.1224 137.613 95.2299 136.72 95.2299 135.644V127.769C95.2299 126.693 96.1224 125.8 97.1987 125.8C98.2749 125.8 99.1674 126.693 99.1674 127.769ZM116.335 123.228C115.941 123.622 115.442 123.805 114.944 123.805C114.445 123.805 113.946 123.622 113.552 123.228L109.615 119.29C108.854 118.529 108.854 117.269 109.615 116.508C110.376 115.747 111.636 115.747 112.397 116.508L116.335 120.445C117.096 121.207 117.096 122.467 116.335 123.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip17_436_2247)">
											<path
												d="M159.266 117.269C149.134 117.269 140.891 125.512 140.891 135.644C140.891 145.777 149.134 154.019 159.266 154.019C169.399 154.019 177.641 145.777 177.641 135.644C177.641 125.512 169.399 117.269 159.266 117.269ZM159.266 150.082C151.313 150.082 144.829 143.598 144.829 135.644C144.829 127.69 151.313 121.207 159.266 121.207C167.22 121.207 173.704 127.69 173.704 135.644C173.704 143.598 167.22 150.082 159.266 150.082ZM150.735 113.988C150.735 112.912 151.628 112.019 152.704 112.019H165.829C166.905 112.019 167.798 112.912 167.798 113.988C167.798 115.064 166.905 115.957 165.829 115.957H152.704C151.628 115.957 150.735 115.064 150.735 113.988ZM161.235 127.769V135.644C161.235 136.72 160.343 137.613 159.266 137.613C158.19 137.613 157.298 136.72 157.298 135.644V127.769C157.298 126.693 158.19 125.8 159.266 125.8C160.343 125.8 161.235 126.693 161.235 127.769ZM178.403 123.228C178.009 123.622 177.51 123.805 177.011 123.805C176.513 123.805 176.014 123.622 175.62 123.228L171.683 119.29C170.921 118.529 170.921 117.269 171.683 116.508C172.444 115.747 173.704 115.747 174.465 116.508L178.403 120.445C179.164 121.207 179.164 122.467 178.403 123.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip18_436_2247)">
											<path
												d="M221.334 117.269C211.201 117.269 202.959 125.512 202.959 135.644C202.959 145.777 211.201 154.019 221.334 154.019C231.466 154.019 239.709 145.777 239.709 135.644C239.709 125.512 231.466 117.269 221.334 117.269ZM221.334 150.082C213.38 150.082 206.896 143.598 206.896 135.644C206.896 127.69 213.38 121.207 221.334 121.207C229.288 121.207 235.771 127.69 235.771 135.644C235.771 143.598 229.288 150.082 221.334 150.082ZM212.803 113.988C212.803 112.912 213.695 112.019 214.771 112.019H227.896C228.973 112.019 229.865 112.912 229.865 113.988C229.865 115.064 228.973 115.957 227.896 115.957H214.771C213.695 115.957 212.803 115.064 212.803 113.988ZM223.303 127.769V135.644C223.303 136.72 222.41 137.613 221.334 137.613C220.258 137.613 219.365 136.72 219.365 135.644V127.769C219.365 126.693 220.258 125.8 221.334 125.8C222.41 125.8 223.303 126.693 223.303 127.769ZM240.47 123.228C240.076 123.622 239.578 123.805 239.079 123.805C238.58 123.805 238.081 123.622 237.688 123.228L233.75 119.29C232.989 118.529 232.989 117.269 233.75 116.508C234.511 115.747 235.771 115.747 236.533 116.508L240.47 120.445C241.231 121.207 241.231 122.467 240.47 123.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip19_436_2247)">
											<path
												d="M283.401 117.269C273.269 117.269 265.026 125.512 265.026 135.644C265.026 145.777 273.269 154.019 283.401 154.019C293.534 154.019 301.776 145.777 301.776 135.644C301.776 125.512 293.534 117.269 283.401 117.269ZM283.401 150.082C275.448 150.082 268.964 143.598 268.964 135.644C268.964 127.69 275.448 121.207 283.401 121.207C291.355 121.207 297.839 127.69 297.839 135.644C297.839 143.598 291.355 150.082 283.401 150.082ZM274.87 113.988C274.87 112.912 275.763 112.019 276.839 112.019H289.964C291.04 112.019 291.933 112.912 291.933 113.988C291.933 115.064 291.04 115.957 289.964 115.957H276.839C275.763 115.957 274.87 115.064 274.87 113.988ZM285.37 127.769V135.644C285.37 136.72 284.478 137.613 283.401 137.613C282.325 137.613 281.433 136.72 281.433 135.644V127.769C281.433 126.693 282.325 125.8 283.401 125.8C284.478 125.8 285.37 126.693 285.37 127.769ZM302.538 123.228C302.144 123.622 301.645 123.805 301.146 123.805C300.648 123.805 300.149 123.622 299.755 123.228L295.818 119.29C295.056 118.529 295.056 117.269 295.818 116.508C296.579 115.747 297.839 115.747 298.6 116.508L302.538 120.445C303.299 121.207 303.299 122.467 302.538 123.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip20_436_2247)">
											<path
												d="M345.469 117.269C335.337 117.269 327.094 125.512 327.094 135.644C327.094 145.777 335.337 154.019 345.469 154.019C355.602 154.019 363.844 145.777 363.844 135.644C363.844 125.512 355.602 117.269 345.469 117.269ZM345.469 150.082C337.515 150.082 331.032 143.598 331.032 135.644C331.032 127.69 337.515 121.207 345.469 121.207C353.423 121.207 359.907 127.69 359.907 135.644C359.907 143.598 353.423 150.082 345.469 150.082ZM336.938 113.988C336.938 112.912 337.83 112.019 338.907 112.019H352.032C353.108 112.019 354 112.912 354 113.988C354 115.064 353.108 115.957 352.032 115.957H338.907C337.83 115.957 336.938 115.064 336.938 113.988ZM347.438 127.769V135.644C347.438 136.72 346.545 137.613 345.469 137.613C344.393 137.613 343.5 136.72 343.5 135.644V127.769C343.5 126.693 344.393 125.8 345.469 125.8C346.545 125.8 347.438 126.693 347.438 127.769ZM364.605 123.228C364.212 123.622 363.713 123.805 363.214 123.805C362.715 123.805 362.217 123.622 361.823 123.228L357.885 119.29C357.124 118.529 357.124 117.269 357.885 116.508C358.647 115.747 359.907 115.747 360.668 116.508L364.605 120.445C365.367 121.207 365.367 122.467 364.605 123.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip21_436_2247)">
											<path
												d="M407.537 117.269C397.404 117.269 389.162 125.512 389.162 135.644C389.162 145.777 397.404 154.019 407.537 154.019C417.669 154.019 425.912 145.777 425.912 135.644C425.912 125.512 417.669 117.269 407.537 117.269ZM407.537 150.082C399.583 150.082 393.099 143.598 393.099 135.644C393.099 127.69 399.583 121.207 407.537 121.207C415.491 121.207 421.974 127.69 421.974 135.644C421.974 143.598 415.491 150.082 407.537 150.082ZM399.006 113.988C399.006 112.912 399.898 112.019 400.974 112.019H414.099C415.176 112.019 416.068 112.912 416.068 113.988C416.068 115.064 415.176 115.957 414.099 115.957H400.974C399.898 115.957 399.006 115.064 399.006 113.988ZM409.506 127.769V135.644C409.506 136.72 408.613 137.613 407.537 137.613C406.461 137.613 405.568 136.72 405.568 135.644V127.769C405.568 126.693 406.461 125.8 407.537 125.8C408.613 125.8 409.506 126.693 409.506 127.769ZM426.673 123.228C426.279 123.622 425.781 123.805 425.282 123.805C424.783 123.805 424.284 123.622 423.891 123.228L419.953 119.29C419.192 118.529 419.192 117.269 419.953 116.508C420.714 115.747 421.974 115.747 422.736 116.508L426.673 120.445C427.434 121.207 427.434 122.467 426.673 123.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip22_436_2247)">
											<path
												d="M4.09723 173.269C-6.03527 173.269 -14.2778 181.512 -14.2778 191.644C-14.2778 201.777 -6.03527 210.019 4.09723 210.019C14.2297 210.019 22.4722 201.777 22.4722 191.644C22.4722 181.512 14.2297 173.269 4.09723 173.269ZM4.09723 206.082C-3.85652 206.082 -10.3403 199.598 -10.3403 191.644C-10.3403 183.69 -3.85652 177.207 4.09723 177.207C12.051 177.207 18.5347 183.69 18.5347 191.644C18.5347 199.598 12.051 206.082 4.09723 206.082ZM-4.43402 169.988C-4.43402 168.912 -3.54152 168.019 -2.46527 168.019H10.6597C11.736 168.019 12.6285 168.912 12.6285 169.988C12.6285 171.064 11.736 171.957 10.6597 171.957H-2.46527C-3.54152 171.957 -4.43402 171.064 -4.43402 169.988ZM6.06598 183.769V191.644C6.06598 192.72 5.17348 193.613 4.09723 193.613C3.02098 193.613 2.12848 192.72 2.12848 191.644V183.769C2.12848 182.693 3.02098 181.8 4.09723 181.8C5.17348 181.8 6.06598 182.693 6.06598 183.769ZM23.2335 179.228C22.8397 179.622 22.341 179.805 21.8422 179.805C21.3435 179.805 20.8447 179.622 20.451 179.228L16.5135 175.29C15.7522 174.529 15.7522 173.269 16.5135 172.508C17.2747 171.747 18.5347 171.747 19.296 172.508L23.2335 176.445C23.9947 177.207 23.9947 178.467 23.2335 179.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip23_436_2247)">
											<path
												d="M66.1648 173.269C56.0323 173.269 47.7898 181.512 47.7898 191.644C47.7898 201.777 56.0323 210.019 66.1648 210.019C76.2973 210.019 84.5398 201.777 84.5398 191.644C84.5398 181.512 76.2973 173.269 66.1648 173.269ZM66.1648 206.082C58.2111 206.082 51.7273 199.598 51.7273 191.644C51.7273 183.69 58.2111 177.207 66.1648 177.207C74.1186 177.207 80.6023 183.69 80.6023 191.644C80.6023 199.598 74.1186 206.082 66.1648 206.082ZM57.6336 169.988C57.6336 168.912 58.5261 168.019 59.6023 168.019H72.7273C73.8036 168.019 74.6961 168.912 74.6961 169.988C74.6961 171.064 73.8036 171.957 72.7273 171.957H59.6023C58.5261 171.957 57.6336 171.064 57.6336 169.988ZM68.1336 183.769V191.644C68.1336 192.72 67.2411 193.613 66.1648 193.613C65.0886 193.613 64.1961 192.72 64.1961 191.644V183.769C64.1961 182.693 65.0886 181.8 66.1648 181.8C67.2411 181.8 68.1336 182.693 68.1336 183.769ZM85.3011 179.228C84.9073 179.622 84.4086 179.805 83.9098 179.805C83.4111 179.805 82.9123 179.622 82.5186 179.228L78.5811 175.29C77.8198 174.529 77.8198 173.269 78.5811 172.508C79.3423 171.747 80.6023 171.747 81.3636 172.508L85.3011 176.445C86.0623 177.207 86.0623 178.467 85.3011 179.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip24_436_2247)">
											<path
												d="M128.232 173.269C118.1 173.269 109.857 181.512 109.857 191.644C109.857 201.777 118.1 210.019 128.232 210.019C138.365 210.019 146.607 201.777 146.607 191.644C146.607 181.512 138.365 173.269 128.232 173.269ZM128.232 206.082C120.279 206.082 113.795 199.598 113.795 191.644C113.795 183.69 120.279 177.207 128.232 177.207C136.186 177.207 142.67 183.69 142.67 191.644C142.67 199.598 136.186 206.082 128.232 206.082ZM119.701 169.988C119.701 168.912 120.594 168.019 121.67 168.019H134.795C135.871 168.019 136.764 168.912 136.764 169.988C136.764 171.064 135.871 171.957 134.795 171.957H121.67C120.594 171.957 119.701 171.064 119.701 169.988ZM130.201 183.769V191.644C130.201 192.72 129.309 193.613 128.232 193.613C127.156 193.613 126.264 192.72 126.264 191.644V183.769C126.264 182.693 127.156 181.8 128.232 181.8C129.309 181.8 130.201 182.693 130.201 183.769ZM147.369 179.228C146.975 179.622 146.476 179.805 145.977 179.805C145.479 179.805 144.98 179.622 144.586 179.228L140.649 175.29C139.887 174.529 139.887 173.269 140.649 172.508C141.41 171.747 142.67 171.747 143.431 172.508L147.369 176.445C148.13 177.207 148.13 178.467 147.369 179.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip25_436_2247)">
											<path
												d="M190.3 173.269C180.168 173.269 171.925 181.512 171.925 191.644C171.925 201.777 180.168 210.019 190.3 210.019C200.433 210.019 208.675 201.777 208.675 191.644C208.675 181.512 200.433 173.269 190.3 173.269ZM190.3 206.082C182.346 206.082 175.863 199.598 175.863 191.644C175.863 183.69 182.346 177.207 190.3 177.207C198.254 177.207 204.738 183.69 204.738 191.644C204.738 199.598 198.254 206.082 190.3 206.082ZM181.769 169.988C181.769 168.912 182.661 168.019 183.738 168.019H196.863C197.939 168.019 198.831 168.912 198.831 169.988C198.831 171.064 197.939 171.957 196.863 171.957H183.738C182.661 171.957 181.769 171.064 181.769 169.988ZM192.269 183.769V191.644C192.269 192.72 191.376 193.613 190.3 193.613C189.224 193.613 188.331 192.72 188.331 191.644V183.769C188.331 182.693 189.224 181.8 190.3 181.8C191.376 181.8 192.269 182.693 192.269 183.769ZM209.436 179.228C209.043 179.622 208.544 179.805 208.045 179.805C207.546 179.805 207.048 179.622 206.654 179.228L202.716 175.29C201.955 174.529 201.955 173.269 202.716 172.508C203.478 171.747 204.738 171.747 205.499 172.508L209.436 176.445C210.198 177.207 210.198 178.467 209.436 179.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip26_436_2247)">
											<path
												d="M252.368 173.269C242.235 173.269 233.993 181.512 233.993 191.644C233.993 201.777 242.235 210.019 252.368 210.019C262.5 210.019 270.743 201.777 270.743 191.644C270.743 181.512 262.5 173.269 252.368 173.269ZM252.368 206.082C244.414 206.082 237.93 199.598 237.93 191.644C237.93 183.69 244.414 177.207 252.368 177.207C260.321 177.207 266.805 183.69 266.805 191.644C266.805 199.598 260.321 206.082 252.368 206.082ZM243.836 169.988C243.836 168.912 244.729 168.019 245.805 168.019H258.93C260.006 168.019 260.899 168.912 260.899 169.988C260.899 171.064 260.006 171.957 258.93 171.957H245.805C244.729 171.957 243.836 171.064 243.836 169.988ZM254.336 183.769V191.644C254.336 192.72 253.444 193.613 252.368 193.613C251.291 193.613 250.399 192.72 250.399 191.644V183.769C250.399 182.693 251.291 181.8 252.368 181.8C253.444 181.8 254.336 182.693 254.336 183.769ZM271.504 179.228C271.11 179.622 270.611 179.805 270.113 179.805C269.614 179.805 269.115 179.622 268.721 179.228L264.784 175.29C264.023 174.529 264.023 173.269 264.784 172.508C265.545 171.747 266.805 171.747 267.566 172.508L271.504 176.445C272.265 177.207 272.265 178.467 271.504 179.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip27_436_2247)">
											<path
												d="M314.435 173.269C304.303 173.269 296.06 181.512 296.06 191.644C296.06 201.777 304.303 210.019 314.435 210.019C324.568 210.019 332.81 201.777 332.81 191.644C332.81 181.512 324.568 173.269 314.435 173.269ZM314.435 206.082C306.482 206.082 299.998 199.598 299.998 191.644C299.998 183.69 306.482 177.207 314.435 177.207C322.389 177.207 328.873 183.69 328.873 191.644C328.873 199.598 322.389 206.082 314.435 206.082ZM305.904 169.988C305.904 168.912 306.797 168.019 307.873 168.019H320.998C322.074 168.019 322.967 168.912 322.967 169.988C322.967 171.064 322.074 171.957 320.998 171.957H307.873C306.797 171.957 305.904 171.064 305.904 169.988ZM316.404 183.769V191.644C316.404 192.72 315.512 193.613 314.435 193.613C313.359 193.613 312.467 192.72 312.467 191.644V183.769C312.467 182.693 313.359 181.8 314.435 181.8C315.512 181.8 316.404 182.693 316.404 183.769ZM333.572 179.228C333.178 179.622 332.679 179.805 332.18 179.805C331.682 179.805 331.183 179.622 330.789 179.228L326.852 175.29C326.09 174.529 326.09 173.269 326.852 172.508C327.613 171.747 328.873 171.747 329.634 172.508L333.572 176.445C334.333 177.207 334.333 178.467 333.572 179.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip28_436_2247)">
											<path
												d="M376.503 173.269C366.37 173.269 358.128 181.512 358.128 191.644C358.128 201.777 366.37 210.019 376.503 210.019C386.635 210.019 394.878 201.777 394.878 191.644C394.878 181.512 386.635 173.269 376.503 173.269ZM376.503 206.082C368.549 206.082 362.065 199.598 362.065 191.644C362.065 183.69 368.549 177.207 376.503 177.207C384.457 177.207 390.94 183.69 390.94 191.644C390.94 199.598 384.457 206.082 376.503 206.082ZM367.972 169.988C367.972 168.912 368.864 168.019 369.94 168.019H383.065C384.142 168.019 385.034 168.912 385.034 169.988C385.034 171.064 384.142 171.957 383.065 171.957H369.94C368.864 171.957 367.972 171.064 367.972 169.988ZM378.472 183.769V191.644C378.472 192.72 377.579 193.613 376.503 193.613C375.427 193.613 374.534 192.72 374.534 191.644V183.769C374.534 182.693 375.427 181.8 376.503 181.8C377.579 181.8 378.472 182.693 378.472 183.769ZM395.639 179.228C395.245 179.622 394.747 179.805 394.248 179.805C393.749 179.805 393.25 179.622 392.857 179.228L388.919 175.29C388.158 174.529 388.158 173.269 388.919 172.508C389.68 171.747 390.94 171.747 391.702 172.508L395.639 176.445C396.4 177.207 396.4 178.467 395.639 179.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip29_436_2247)">
											<path
												d="M438.571 173.269C428.438 173.269 420.196 181.512 420.196 191.644C420.196 201.777 428.438 210.019 438.571 210.019C448.703 210.019 456.946 201.777 456.946 191.644C456.946 181.512 448.703 173.269 438.571 173.269ZM438.571 206.082C430.617 206.082 424.133 199.598 424.133 191.644C424.133 183.69 430.617 177.207 438.571 177.207C446.524 177.207 453.008 183.69 453.008 191.644C453.008 199.598 446.524 206.082 438.571 206.082ZM430.039 169.988C430.039 168.912 430.932 168.019 432.008 168.019H445.133C446.209 168.019 447.102 168.912 447.102 169.988C447.102 171.064 446.209 171.957 445.133 171.957H432.008C430.932 171.957 430.039 171.064 430.039 169.988ZM440.539 183.769V191.644C440.539 192.72 439.647 193.613 438.571 193.613C437.494 193.613 436.602 192.72 436.602 191.644V183.769C436.602 182.693 437.494 181.8 438.571 181.8C439.647 181.8 440.539 182.693 440.539 183.769ZM457.707 179.228C457.313 179.622 456.814 179.805 456.316 179.805C455.817 179.805 455.318 179.622 454.924 179.228L450.987 175.29C450.226 174.529 450.226 173.269 450.987 172.508C451.748 171.747 453.008 171.747 453.769 172.508L457.707 176.445C458.468 177.207 458.468 178.467 457.707 179.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip30_436_2247)">
											<path
												d="M16.3514 229.269C6.21889 229.269 -2.02361 237.512 -2.02361 247.644C-2.02361 257.777 6.21889 266.019 16.3514 266.019C26.4839 266.019 34.7264 257.777 34.7264 247.644C34.7264 237.512 26.4839 229.269 16.3514 229.269ZM16.3514 262.082C8.39764 262.082 1.91389 255.598 1.91389 247.644C1.91389 239.69 8.39764 233.207 16.3514 233.207C24.3051 233.207 30.7889 239.69 30.7889 247.644C30.7889 255.598 24.3051 262.082 16.3514 262.082ZM7.82014 225.988C7.82014 224.912 8.71264 224.019 9.78889 224.019H22.9139C23.9901 224.019 24.8826 224.912 24.8826 225.988C24.8826 227.064 23.9901 227.957 22.9139 227.957H9.78889C8.71264 227.957 7.82014 227.064 7.82014 225.988ZM18.3201 239.769V247.644C18.3201 248.72 17.4276 249.613 16.3514 249.613C15.2751 249.613 14.3826 248.72 14.3826 247.644V239.769C14.3826 238.693 15.2751 237.8 16.3514 237.8C17.4276 237.8 18.3201 238.693 18.3201 239.769ZM35.4876 235.228C35.0939 235.622 34.5951 235.805 34.0964 235.805C33.5976 235.805 33.0989 235.622 32.7051 235.228L28.7676 231.29C28.0064 230.529 28.0064 229.269 28.7676 228.508C29.5289 227.747 30.7889 227.747 31.5501 228.508L35.4876 232.445C36.2489 233.207 36.2489 234.467 35.4876 235.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip31_436_2247)">
											<path
												d="M74.9178 229.269C64.7853 229.269 56.5428 237.512 56.5428 247.644C56.5428 257.777 64.7853 266.019 74.9178 266.019C85.0503 266.019 93.2928 257.777 93.2928 247.644C93.2928 237.512 85.0503 229.269 74.9178 229.269ZM74.9178 262.082C66.9641 262.082 60.4803 255.598 60.4803 247.644C60.4803 239.69 66.9641 233.207 74.9178 233.207C82.8716 233.207 89.3553 239.69 89.3553 247.644C89.3553 255.598 82.8716 262.082 74.9178 262.082ZM66.3866 225.988C66.3866 224.912 67.2791 224.019 68.3553 224.019H81.4803C82.5566 224.019 83.4491 224.912 83.4491 225.988C83.4491 227.064 82.5566 227.957 81.4803 227.957H68.3553C67.2791 227.957 66.3866 227.064 66.3866 225.988ZM76.8866 239.769V247.644C76.8866 248.72 75.9941 249.613 74.9178 249.613C73.8416 249.613 72.9491 248.72 72.9491 247.644V239.769C72.9491 238.693 73.8416 237.8 74.9178 237.8C75.9941 237.8 76.8866 238.693 76.8866 239.769ZM94.0541 235.228C93.6603 235.622 93.1616 235.805 92.6628 235.805C92.1641 235.805 91.6653 235.622 91.2716 235.228L87.3341 231.29C86.5728 230.529 86.5728 229.269 87.3341 228.508C88.0953 227.747 89.3553 227.747 90.1166 228.508L94.0541 232.445C94.8153 233.207 94.8153 234.467 94.0541 235.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip32_436_2247)">
											<path
												d="M133.484 229.269C123.352 229.269 115.109 237.512 115.109 247.644C115.109 257.777 123.352 266.019 133.484 266.019C143.617 266.019 151.859 257.777 151.859 247.644C151.859 237.512 143.617 229.269 133.484 229.269ZM133.484 262.082C125.53 262.082 119.047 255.598 119.047 247.644C119.047 239.69 125.53 233.207 133.484 233.207C141.438 233.207 147.922 239.69 147.922 247.644C147.922 255.598 141.438 262.082 133.484 262.082ZM124.953 225.988C124.953 224.912 125.845 224.019 126.922 224.019H140.047C141.123 224.019 142.015 224.912 142.015 225.988C142.015 227.064 141.123 227.957 140.047 227.957H126.922C125.845 227.957 124.953 227.064 124.953 225.988ZM135.453 239.769V247.644C135.453 248.72 134.56 249.613 133.484 249.613C132.408 249.613 131.515 248.72 131.515 247.644V239.769C131.515 238.693 132.408 237.8 133.484 237.8C134.56 237.8 135.453 238.693 135.453 239.769ZM152.62 235.228C152.227 235.622 151.728 235.805 151.229 235.805C150.73 235.805 150.232 235.622 149.838 235.228L145.9 231.29C145.139 230.529 145.139 229.269 145.9 228.508C146.662 227.747 147.922 227.747 148.683 228.508L152.62 232.445C153.382 233.207 153.382 234.467 152.62 235.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip33_436_2247)">
											<path
												d="M192.051 229.269C181.918 229.269 173.676 237.512 173.676 247.644C173.676 257.777 181.918 266.019 192.051 266.019C202.183 266.019 210.426 257.777 210.426 247.644C210.426 237.512 202.183 229.269 192.051 229.269ZM192.051 262.082C184.097 262.082 177.613 255.598 177.613 247.644C177.613 239.69 184.097 233.207 192.051 233.207C200.004 233.207 206.488 239.69 206.488 247.644C206.488 255.598 200.004 262.082 192.051 262.082ZM183.519 225.988C183.519 224.912 184.412 224.019 185.488 224.019H198.613C199.689 224.019 200.582 224.912 200.582 225.988C200.582 227.064 199.689 227.957 198.613 227.957H185.488C184.412 227.957 183.519 227.064 183.519 225.988ZM194.019 239.769V247.644C194.019 248.72 193.127 249.613 192.051 249.613C190.974 249.613 190.082 248.72 190.082 247.644V239.769C190.082 238.693 190.974 237.8 192.051 237.8C193.127 237.8 194.019 238.693 194.019 239.769ZM211.187 235.228C210.793 235.622 210.294 235.805 209.796 235.805C209.297 235.805 208.798 235.622 208.404 235.228L204.467 231.29C203.706 230.529 203.706 229.269 204.467 228.508C205.228 227.747 206.488 227.747 207.249 228.508L211.187 232.445C211.948 233.207 211.948 234.467 211.187 235.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip34_436_2247)">
											<path
												d="M250.617 229.269C240.485 229.269 232.242 237.512 232.242 247.644C232.242 257.777 240.485 266.019 250.617 266.019C260.75 266.019 268.992 257.777 268.992 247.644C268.992 237.512 260.75 229.269 250.617 229.269ZM250.617 262.082C242.663 262.082 236.18 255.598 236.18 247.644C236.18 239.69 242.663 233.207 250.617 233.207C258.571 233.207 265.055 239.69 265.055 247.644C265.055 255.598 258.571 262.082 250.617 262.082ZM242.086 225.988C242.086 224.912 242.978 224.019 244.055 224.019H257.18C258.256 224.019 259.148 224.912 259.148 225.988C259.148 227.064 258.256 227.957 257.18 227.957H244.055C242.978 227.957 242.086 227.064 242.086 225.988ZM252.586 239.769V247.644C252.586 248.72 251.693 249.613 250.617 249.613C249.541 249.613 248.648 248.72 248.648 247.644V239.769C248.648 238.693 249.541 237.8 250.617 237.8C251.693 237.8 252.586 238.693 252.586 239.769ZM269.753 235.228C269.36 235.622 268.861 235.805 268.362 235.805C267.863 235.805 267.365 235.622 266.971 235.228L263.033 231.29C262.272 230.529 262.272 229.269 263.033 228.508C263.795 227.747 265.055 227.747 265.816 228.508L269.753 232.445C270.515 233.207 270.515 234.467 269.753 235.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip35_436_2247)">
											<path
												d="M309.183 229.269C299.051 229.269 290.808 237.512 290.808 247.644C290.808 257.777 299.051 266.019 309.183 266.019C319.316 266.019 327.558 257.777 327.558 247.644C327.558 237.512 319.316 229.269 309.183 229.269ZM309.183 262.082C301.23 262.082 294.746 255.598 294.746 247.644C294.746 239.69 301.23 233.207 309.183 233.207C317.137 233.207 323.621 239.69 323.621 247.644C323.621 255.598 317.137 262.082 309.183 262.082ZM300.652 225.988C300.652 224.912 301.545 224.019 302.621 224.019H315.746C316.822 224.019 317.715 224.912 317.715 225.988C317.715 227.064 316.822 227.957 315.746 227.957H302.621C301.545 227.957 300.652 227.064 300.652 225.988ZM311.152 239.769V247.644C311.152 248.72 310.26 249.613 309.183 249.613C308.107 249.613 307.215 248.72 307.215 247.644V239.769C307.215 238.693 308.107 237.8 309.183 237.8C310.26 237.8 311.152 238.693 311.152 239.769ZM328.32 235.228C327.926 235.622 327.427 235.805 326.928 235.805C326.43 235.805 325.931 235.622 325.537 235.228L321.6 231.29C320.838 230.529 320.838 229.269 321.6 228.508C322.361 227.747 323.621 227.747 324.382 228.508L328.32 232.445C329.081 233.207 329.081 234.467 328.32 235.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip36_436_2247)">
											<path
												d="M367.75 229.269C357.617 229.269 349.375 237.512 349.375 247.644C349.375 257.777 357.617 266.019 367.75 266.019C377.882 266.019 386.125 257.777 386.125 247.644C386.125 237.512 377.882 229.269 367.75 229.269ZM367.75 262.082C359.796 262.082 353.312 255.598 353.312 247.644C353.312 239.69 359.796 233.207 367.75 233.207C375.704 233.207 382.187 239.69 382.187 247.644C382.187 255.598 375.704 262.082 367.75 262.082ZM359.219 225.988C359.219 224.912 360.111 224.019 361.187 224.019H374.312C375.389 224.019 376.281 224.912 376.281 225.988C376.281 227.064 375.389 227.957 374.312 227.957H361.187C360.111 227.957 359.219 227.064 359.219 225.988ZM369.719 239.769V247.644C369.719 248.72 368.826 249.613 367.75 249.613C366.674 249.613 365.781 248.72 365.781 247.644V239.769C365.781 238.693 366.674 237.8 367.75 237.8C368.826 237.8 369.719 238.693 369.719 239.769ZM386.886 235.228C386.492 235.622 385.994 235.805 385.495 235.805C384.996 235.805 384.497 235.622 384.104 235.228L380.166 231.29C379.405 230.529 379.405 229.269 380.166 228.508C380.927 227.747 382.187 227.747 382.949 228.508L386.886 232.445C387.647 233.207 387.647 234.467 386.886 235.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<g opacity="0.05" clipPath="url(#clip37_436_2247)">
											<path
												d="M426.316 229.269C416.184 229.269 407.941 237.512 407.941 247.644C407.941 257.777 416.184 266.019 426.316 266.019C436.449 266.019 444.691 257.777 444.691 247.644C444.691 237.512 436.449 229.269 426.316 229.269ZM426.316 262.082C418.363 262.082 411.879 255.598 411.879 247.644C411.879 239.69 418.363 233.207 426.316 233.207C434.27 233.207 440.754 239.69 440.754 247.644C440.754 255.598 434.27 262.082 426.316 262.082ZM417.785 225.988C417.785 224.912 418.678 224.019 419.754 224.019H432.879C433.955 224.019 434.848 224.912 434.848 225.988C434.848 227.064 433.955 227.957 432.879 227.957H419.754C418.678 227.957 417.785 227.064 417.785 225.988ZM428.285 239.769V247.644C428.285 248.72 427.393 249.613 426.316 249.613C425.24 249.613 424.348 248.72 424.348 247.644V239.769C424.348 238.693 425.24 237.8 426.316 237.8C427.393 237.8 428.285 238.693 428.285 239.769ZM445.453 235.228C445.059 235.622 444.56 235.805 444.061 235.805C443.563 235.805 443.064 235.622 442.67 235.228L438.733 231.29C437.971 230.529 437.971 229.269 438.733 228.508C439.494 227.747 440.754 227.747 441.515 228.508L445.453 232.445C446.214 233.207 446.214 234.467 445.453 235.228Z"
												fill="var(--primary-600)"
											/>
										</g>
										<rect x="192.866" y="89.0972" width="58" height="58" rx="25.5" fill="var(--primary-300)" style={{ opacity: '0.9' }} />
										<g clipPath="url(#clip38_436_2247)">
											<path
												d="M232.938 130.94H231.768C231.095 128.531 229.023 122.543 223.974 118.097C229.023 113.651 231.095 107.663 231.768 105.254H232.938C233.664 105.254 234.266 104.652 234.266 103.926C234.266 103.199 233.664 102.597 232.938 102.597H210.795C210.068 102.597 209.466 103.199 209.466 103.926C209.466 104.652 210.068 105.254 210.795 105.254H211.964C212.637 107.663 214.71 113.651 219.758 118.097C214.71 122.543 212.637 128.531 211.964 130.94H210.795C210.068 130.94 209.466 131.542 209.466 132.269C209.466 132.995 210.068 133.597 210.795 133.597H232.938C233.664 133.597 234.266 132.995 234.266 132.269C234.266 131.542 233.664 130.94 232.938 130.94ZM214.745 105.254H228.97C228.172 107.77 226.135 112.783 221.848 116.379C217.562 112.765 215.524 107.77 214.727 105.254H214.745ZM221.866 119.815C226.153 123.429 228.19 128.425 228.987 130.94H214.745C215.542 128.425 217.579 123.411 221.866 119.815Z"
												fill="var(--primary-700)"
											/>
										</g>
										<rect x="192.866" y="89.0972" width="58" height="58" rx="25.5" stroke="var(--primary-300)" />
									</g>
									<defs>
										<linearGradient id="paint0_linear_436_2247" x1="221.333" y1="0" x2="221.333" y2="257" gradientUnits="userSpaceOnUse">
											<stop offset="0.750409" stopColor="white" />
											<stop offset="1" stopColor="white" stopOpacity="0" />
										</linearGradient>
										<clipPath id="clip0_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(14.7972 0.019165)" />
										</clipPath>
										<clipPath id="clip1_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(76.8648 0.019165)" />
										</clipPath>
										<clipPath id="clip2_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(138.932 0.019165)" />
										</clipPath>
										<clipPath id="clip3_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(201 0.019165)" />
										</clipPath>
										<clipPath id="clip4_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(263.068 0.019165)" />
										</clipPath>
										<clipPath id="clip5_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(325.135 0.019165)" />
										</clipPath>
										<clipPath id="clip6_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(387.203 0.019165)" />
										</clipPath>
										<clipPath id="clip7_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(-16.2366 56.0192)" />
										</clipPath>
										<clipPath id="clip8_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(45.831 56.0192)" />
										</clipPath>
										<clipPath id="clip9_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(107.899 56.0192)" />
										</clipPath>
										<clipPath id="clip10_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(169.966 56.0192)" />
										</clipPath>
										<clipPath id="clip11_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(232.034 56.0192)" />
										</clipPath>
										<clipPath id="clip12_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(294.101 56.0192)" />
										</clipPath>
										<clipPath id="clip13_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(356.169 56.0192)" />
										</clipPath>
										<clipPath id="clip14_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(418.237 56.0192)" />
										</clipPath>
										<clipPath id="clip15_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(14.7971 112.019)" />
										</clipPath>
										<clipPath id="clip16_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(76.8648 112.019)" />
										</clipPath>
										<clipPath id="clip17_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(138.932 112.019)" />
										</clipPath>
										<clipPath id="clip18_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(201 112.019)" />
										</clipPath>
										<clipPath id="clip19_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(263.068 112.019)" />
										</clipPath>
										<clipPath id="clip20_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(325.135 112.019)" />
										</clipPath>
										<clipPath id="clip21_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(387.203 112.019)" />
										</clipPath>
										<clipPath id="clip22_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(-16.2366 168.019)" />
										</clipPath>
										<clipPath id="clip23_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(45.831 168.019)" />
										</clipPath>
										<clipPath id="clip24_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(107.899 168.019)" />
										</clipPath>
										<clipPath id="clip25_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(169.966 168.019)" />
										</clipPath>
										<clipPath id="clip26_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(232.034 168.019)" />
										</clipPath>
										<clipPath id="clip27_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(294.101 168.019)" />
										</clipPath>
										<clipPath id="clip28_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(356.169 168.019)" />
										</clipPath>
										<clipPath id="clip29_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(418.237 168.019)" />
										</clipPath>
										<clipPath id="clip30_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(-3.98247 224.019)" />
										</clipPath>
										<clipPath id="clip31_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(54.584 224.019)" />
										</clipPath>
										<clipPath id="clip32_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(113.15 224.019)" />
										</clipPath>
										<clipPath id="clip33_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(171.717 224.019)" />
										</clipPath>
										<clipPath id="clip34_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(230.283 224.019)" />
										</clipPath>
										<clipPath id="clip35_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(288.85 224.019)" />
										</clipPath>
										<clipPath id="clip36_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(347.416 224.019)" />
										</clipPath>
										<clipPath id="clip37_436_2247">
											<rect width="42" height="42" fill="white" transform="translate(405.982 224.019)" />
										</clipPath>
										<clipPath id="clip38_436_2247">
											<rect width="31" height="31" fill="white" transform="translate(206.366 102.597)" />
										</clipPath>
									</defs>
								</svg>

								<h4 className="font-medium m-0 mb-3 px-5">Page Speed</h4>
								<span className="p-0 m-0 text-xl block line-height-3 px-5 pb-5" style={{ letterSpacing: '0.4px' }}>
									A website that loads quickly, providing users with a seamless browsing experience and improving SEO rankings.
								</span>
							</div>
						</div>
						<div className="col-12 sm:col-6 lg:col-4">
							<div className="card p-0 h-full">
								<svg className="w-full border-round-3xl mb-4" viewBox="0 0 443 257" fill="none" xmlns="http://www.w3.org/2000/svg">
									<mask id="mask0_436_2322" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="443" height="257">
										<rect width="442.667" height="257" transform="translate(0.333313)" fill="url(#paint0_linear_436_2322)" />
									</mask>
									<g mask="url(#mask0_436_2322)">
										<g opacity="0.75">
											<rect x="20.9327" y="15.1779" width="401.133" height="53.4844" rx="16.2779" fill="var(--surface-ground)" />
											<rect x="82.5561" y="33.7811" width="224.402" height="16.2779" rx="8.13893" fill="var(--surface-card)" />
											<g clipPath="url(#clip0_436_2322)">
												<path
													fillRule="evenodd"
													clipRule="evenodd"
													d="M44.2029 48.9424C45.9297 50.0962 47.9598 50.712 50.0365 50.712C51.4154 50.712 52.7808 50.4404 54.0548 49.9127C55.0057 49.5188 55.8918 48.988 56.6855 48.3386L62.1685 53.8216C62.265 53.9193 62.3801 53.9968 62.507 54.0495C62.634 54.1022 62.7701 54.129 62.9075 54.1284C63.0449 54.129 63.1811 54.1022 63.308 54.0495C63.4349 53.9968 63.55 53.9193 63.6466 53.8216C63.8424 53.6255 63.9524 53.3597 63.9524 53.0825C63.9524 52.8054 63.8424 52.5396 63.6466 52.3435L58.1636 46.8605C58.8129 46.0668 59.3436 45.1809 59.7374 44.2301C60.2651 42.9561 60.5367 41.5907 60.5367 40.2118C60.5367 38.1351 59.9209 36.105 58.7671 34.3782C57.6133 32.6515 55.9734 31.3057 54.0548 30.5109C52.1361 29.7162 50.0249 29.5083 47.988 29.9134C45.9512 30.3186 44.0802 31.3186 42.6118 32.7871C41.1433 34.2556 40.1432 36.1265 39.7381 38.1633C39.3329 40.2002 39.5409 42.3114 40.3356 44.2301C41.1303 46.1487 42.4762 47.7886 44.2029 48.9424ZM45.3882 33.2273C46.7641 32.308 48.3817 31.8173 50.0365 31.8173C52.2555 31.8173 54.3836 32.6987 55.9527 34.2678C57.5217 35.8369 58.4032 37.965 58.4032 40.1839C58.4032 41.8387 57.9125 43.4563 56.9932 44.8322C56.0738 46.2081 54.7671 47.2805 53.2383 47.9138C51.7095 48.547 50.0272 48.7127 48.4043 48.3899C46.7813 48.067 45.2905 47.2702 44.1204 46.1001C42.9503 44.93 42.1534 43.4392 41.8306 41.8162C41.5078 40.1932 41.6734 38.511 42.3067 36.9822C42.94 35.4533 44.0123 34.1466 45.3882 33.2273Z"
													fill="var(--text-color-secondary)"
												/>
											</g>
										</g>
										<rect x="36.9992" y="99.3926" width="369" height="26" rx="5.5" fill="var(--primary-300)" opacity="0.8" />
										<rect x="46.4992" y="108.893" width="350" height="7" rx="3" fill="var(--primary-700)" />
										<rect x="36.9992" y="99.3926" width="369" height="26" rx="5.5" stroke="var(--primary-300)" />

										<rect x="37.0806" y="138.682" width="305.791" height="6.97623" rx="2.90676" fill="var(--primary-500)" opacity="0.5" />
										<rect x="37.0806" y="138.682" width="305.791" height="6.97623" rx="2.90676" stroke="var(--primary-300)" strokeWidth="1.1627" />

										<rect x="37.0806" y="156.123" width="266.259" height="6.97623" rx="2.90676" fill="var(--primary-500)" opacity="0.5" />
										<rect x="37.0806" y="156.123" width="266.259" height="6.97623" rx="2.90676" stroke="var(--primary-300)" strokeWidth="1.1627" />

										<g opacity="0.75">
											<rect x="36.4992" y="185.819" width="349.974" height="23.2541" rx="6.97623" fill="var(--surface-ground)" />
											<rect x="36.4992" y="221.282" width="306.954" height="8.13893" rx="3.48811" fill="var(--surface-ground)" />
											<rect x="36.4992" y="238.722" width="267.422" height="8.13893" rx="3.48811" fill="var(--surface-ground)" />
										</g>
									</g>
									<defs>
										<linearGradient id="paint0_linear_436_2322" x1="221.333" y1="0" x2="221.333" y2="257" gradientUnits="userSpaceOnUse">
											<stop offset="0.750409" stopColor="white" />
											<stop offset="1" stopColor="white" stopOpacity="0" />
										</linearGradient>
										<clipPath id="clip0_436_2322">
											<rect width="24.4168" height="24.4168" fill="white" transform="translate(39.536 29.7116)" />
										</clipPath>
									</defs>
								</svg>

								<h4 className="font-medium m-0 mb-3 px-5">SEO</h4>
								<span className="p-0 m-0 text-xl block line-height-3 px-5 pb-5" style={{ letterSpacing: '0.4px' }}>
									Search engine optimization techniques that help improve a website&lsquo;s ranking in search engine results, making it more visible to potential users and driving traffic to the site.
								</span>
							</div>
						</div>
						<div className="col-12 sm:col-6 lg:col-4">
							<div className="card p-0 h-full">
								<svg className="w-full border-round-3xl mb-4" viewBox="0 0 443 257" fill="none" xmlns="http://www.w3.org/2000/svg">
									<mask id="mask0_436_2345" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="443" height="257">
										<rect width="442.667" height="257" fill="url(#paint0_linear_436_2345)" />
									</mask>
									<g mask="url(#mask0_436_2345)">
										<rect x="28.9248" y="26.5128" width="382.892" height="225.401" rx="7.94682" fill="var(--surface-card)" />
										<rect x="28.9248" y="26.5128" width="382.892" height="225.401" rx="7.94682" stroke="var(--primary-500)" strokeWidth="1.44488" />
										<rect x="139.458" y="49.6307" width="161.826" height="179.165" rx="7.94682" fill="var(--surface-card)" />
										<circle cx="220.371" cy="212.749" r="6.57779" stroke="var(--primary-600)" />
										<rect x="139.458" y="49.6307" width="161.826" height="179.165" rx="7.94682" stroke="var(--primary-500)" strokeWidth="1.44488" />
										<rect x="190.751" y="83.5854" width="59.24" height="111.256" rx="7.94682" fill="var(--primary-500)" opacity="0.5" />
										<circle cx="220.371" cy="177.957" r="6.57779" fill="var(--primary-300)" />
										<rect x="190.751" y="83.5854" width="59.24" height="111.256" rx="7.94682" stroke="var(--primary-500)" strokeWidth="1.44488" />
									</g>
									<defs>
										<linearGradient id="paint0_linear_436_2345" x1="221.333" y1="0" x2="221.333" y2="257" gradientUnits="userSpaceOnUse">
											<stop offset="0.750409" stopColor="white" />
											<stop offset="1" stopColor="white" stopOpacity="0" />
										</linearGradient>
									</defs>
								</svg>

								<h4 className="font-medium m-0 mb-3 px-5">Responsive</h4>
								<span className="p-0 m-0 text-xl block line-height-3 px-5 pb-5" style={{ letterSpacing: '0.4px' }}>
									A design that adapts to different screen sizes and devices, ensuring that content is accessible and easy to read on all devices.
								</span>
							</div>
						</div>
						<div className="col-12 sm:col-6 lg:col-4">
							<div className="card p-0 h-full">
								<svg className="w-full border-round-3xl mb-4" viewBox="0 0 444 257" fill="none" xmlns="http://www.w3.org/2000/svg">
									<mask id="mask0_436_2360" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="444" height="257">
										<rect width="442.667" height="257" transform="translate(0.666656)" fill="url(#paint0_linear_436_2360)" />
									</mask>
									<g mask="url(#mask0_436_2360)">
										<path
											d="M272.381 82.918C272.465 82.8297 272.548 82.7403 272.632 82.6492L272.637 82.6435L272.643 82.6379C272.659 82.6217 272.677 82.6026 272.696 82.5799L272.701 82.5749L272.705 82.57C272.891 82.3714 273.074 82.1729 273.251 81.9739L273.256 81.9677L273.257 81.9677L273.277 81.9462C273.278 81.9451 273.279 81.944 273.28 81.943C274.361 80.7255 275.312 79.4707 276.127 78.1859L276.128 78.1831C276.95 76.9204 277.616 75.6258 278.121 74.3089L278.123 74.3053C280.206 69.1359 280.142 63.7553 277.938 58.6024C275.408 52.6879 270.119 47.2866 262.645 42.9852L262.644 42.9848C261.363 42.2451 260.019 41.5413 258.651 40.8904C254.539 38.9694 247.518 36.2843 238.683 35.2252C253.125 38.9064 263.704 46.1078 267.994 54.0226C272.769 62.8337 269.757 72.555 255.563 79.2673C255.563 79.2673 255.563 79.2673 255.563 79.2673L255.174 78.9939C245.205 83.7107 231.271 82.8628 223.049 79.3305L272.381 82.918ZM272.381 82.918L272.369 82.9247L272.328 82.9678C269.711 85.6794 266.453 88.1678 262.649 90.3616L262.649 90.3618C239.988 103.444 203.262 103.448 180.599 90.3644C157.936 77.2811 157.934 56.0693 180.595 42.9875C180.753 42.8958 180.916 42.8058 181.083 42.7131L181.085 42.7116C181.25 42.6201 181.42 42.5261 181.587 42.4297L181.812 42.2995C182.084 42.1508 182.372 41.9976 182.654 41.8492L182.665 41.8436L182.675 41.8377L182.675 41.8375L182.676 41.8373L182.676 41.8372L182.676 41.837L182.677 41.8368L182.677 41.8366L182.677 41.8365L182.678 41.8363L182.678 41.8361L182.678 41.836L182.678 41.8358L182.679 41.8356L182.679 41.8355L182.679 41.8353L182.68 41.8351L182.68 41.835L182.68 41.8348L182.68 41.8346L182.681 41.8344L182.681 41.8343L182.681 41.8341L182.682 41.8339L182.682 41.8338L182.682 41.8336L182.682 41.8334L182.683 41.8333L182.683 41.8331L182.683 41.8329L182.684 41.8328L182.684 41.8326L182.684 41.8324L182.685 41.8323L182.685 41.8321L182.685 41.8319L182.685 41.8317L182.686 41.8316L182.686 41.8314L182.686 41.8312L182.687 41.8311L182.687 41.8309L182.687 41.8307L182.687 41.8306L182.688 41.8304L182.688 41.8302L182.688 41.8301L182.689 41.8299L182.689 41.8297L182.689 41.8295L182.69 41.8294L182.69 41.8292L182.69 41.829L182.69 41.8289L182.691 41.8287L182.691 41.8285L182.691 41.8284L182.692 41.8282L182.692 41.828L182.692 41.8279L182.692 41.8277L182.693 41.8275L182.693 41.8273L182.693 41.8272L182.694 41.827L182.694 41.8268L182.694 41.8267L182.695 41.8265L182.695 41.8263L182.695 41.8262L182.695 41.826L182.696 41.8258L182.696 41.8257L182.696 41.8255L182.697 41.8253L182.697 41.8252L182.697 41.825L182.697 41.8248L182.698 41.8246L182.698 41.8245L182.698 41.8243L182.699 41.8241L182.699 41.824L182.699 41.8238L182.699 41.8236L182.7 41.8235L182.7 41.8233L182.7 41.8231L182.701 41.823L182.701 41.8228L182.701 41.8226L182.702 41.8224L182.702 41.8223L182.702 41.8221L182.702 41.8219L182.703 41.8218L182.703 41.8216L182.703 41.8214L182.704 41.8213L182.704 41.8211L182.704 41.8209L182.704 41.8208L182.705 41.8206L182.705 41.8204L182.705 41.8202L182.706 41.8201L182.706 41.8199L182.706 41.8197L182.707 41.8196L182.707 41.8194L182.707 41.8192L182.707 41.8191L182.708 41.8189L182.708 41.8187L182.708 41.8186L182.709 41.8184L182.709 41.8182L182.709 41.8181L182.709 41.8179L182.71 41.8177L182.71 41.8175L182.71 41.8174L182.711 41.8172L182.711 41.817L182.711 41.8169L182.711 41.8167L182.712 41.8165L182.712 41.8164L182.712 41.8162L182.713 41.816L182.713 41.8159L182.713 41.8157L182.714 41.8155L182.714 41.8153L182.714 41.8152L182.714 41.815L182.715 41.8148L182.715 41.8147L182.715 41.8145L182.716 41.8143L182.716 41.8142L182.716 41.814L182.716 41.8138L182.717 41.8137L182.717 41.8135L182.717 41.8133L182.718 41.8131L182.718 41.813L182.718 41.8128L182.719 41.8126L182.719 41.8125L182.719 41.8123L182.719 41.8121L182.72 41.812L182.72 41.8118L182.72 41.8116L182.721 41.8115L182.721 41.8113L182.721 41.8111L182.721 41.811L182.722 41.8108L182.722 41.8106L182.722 41.8104L182.723 41.8103L182.723 41.8101L182.723 41.8099L182.723 41.8098L182.724 41.8096L182.724 41.8094L182.724 41.8093L182.725 41.8091L182.725 41.8089L182.725 41.8088L182.726 41.8086L182.726 41.8084L182.726 41.8082L182.726 41.8081L182.727 41.8079L182.727 41.8077L182.727 41.8076L182.728 41.8074L182.728 41.8072L182.728 41.8071L182.728 41.8069L182.729 41.8067L182.729 41.8066L182.729 41.8064L182.73 41.8062L182.73 41.806L182.73 41.8059L182.731 41.8057L182.731 41.8055L182.731 41.8054L182.731 41.8052L182.732 41.805L182.732 41.8049L182.732 41.8047L182.733 41.8045L182.733 41.8044L182.733 41.8042L182.733 41.804L182.734 41.8038L182.734 41.8037L182.734 41.8035L182.735 41.8033L182.735 41.8032L182.735 41.803L182.736 41.8028L182.736 41.8027L182.736 41.8025L182.736 41.8023L182.737 41.8022L182.737 41.802L182.737 41.8018L182.738 41.8017L182.738 41.8015L182.738 41.8013L182.738 41.8011L182.739 41.801L182.739 41.8008L182.739 41.8006L182.74 41.8005L182.74 41.8003L182.74 41.8001L182.74 41.8L182.741 41.7998L182.741 41.7996L182.741 41.7995L182.742 41.7993L182.742 41.7991L182.742 41.7989L182.743 41.7988L182.743 41.7986L182.743 41.7984L182.743 41.7983L182.744 41.7981L182.744 41.7979L182.744 41.7978L182.745 41.7976L182.745 41.7974L182.745 41.7973L182.745 41.7971L182.746 41.7969L182.746 41.7967L182.746 41.7966L182.747 41.7964L182.747 41.7962L182.747 41.7961L182.748 41.7959L182.748 41.7957L182.748 41.7956L182.748 41.7954L182.749 41.7952L182.749 41.7951L182.749 41.7949L182.75 41.7947L182.75 41.7946L182.75 41.7944L182.75 41.7942L182.751 41.794L182.751 41.7939L182.751 41.7937L182.752 41.7935L182.752 41.7934L182.752 41.7932L182.752 41.793L182.753 41.7929L182.753 41.7927L182.753 41.7925L182.754 41.7924L182.754 41.7922L182.754 41.792L182.755 41.7918L182.755 41.7917L182.755 41.7915L182.755 41.7913L182.756 41.7912L182.756 41.791L182.756 41.7908L182.757 41.7907L182.757 41.7905L182.757 41.7903L182.757 41.7902L182.758 41.79L182.758 41.7898L182.758 41.7896L182.759 41.7895L182.759 41.7893L182.759 41.7891L182.76 41.789L182.76 41.7888L182.76 41.7886L182.76 41.7885L182.761 41.7883L182.761 41.7881L182.761 41.788L182.762 41.7878L182.762 41.7876L182.762 41.7875L182.762 41.7873L182.763 41.7871L182.763 41.7869L182.763 41.7868L182.764 41.7866L182.764 41.7864L182.764 41.7863L182.764 41.7861L182.765 41.7859L182.765 41.7858L182.765 41.7856L182.766 41.7854L182.766 41.7853L182.766 41.7851L182.767 41.7849L182.767 41.7847L182.767 41.7846L182.767 41.7844L182.768 41.7842L182.768 41.7841L182.768 41.7839L182.769 41.7837L182.769 41.7836L182.769 41.7834L182.769 41.7832L182.77 41.7831L182.77 41.7829L182.77 41.7827L182.771 41.7825L182.771 41.7824L182.771 41.7822L182.772 41.782L182.772 41.7819L182.772 41.7817L182.772 41.7815L182.773 41.7814L182.773 41.7812L182.773 41.781L182.774 41.7809L182.774 41.7807L182.774 41.7805L182.774 41.7804L182.775 41.7802L182.775 41.78L182.775 41.7798L182.776 41.7797L182.776 41.7795L182.776 41.7793L182.777 41.7792L182.777 41.779L182.777 41.7788L182.777 41.7787L182.778 41.7785L182.778 41.7783L182.778 41.7782L182.779 41.778L182.779 41.7778L182.779 41.7776L182.779 41.7775L182.78 41.7773L182.78 41.7771L182.78 41.777L182.781 41.7768L182.781 41.7766L182.781 41.7765L182.781 41.7763L182.782 41.7761L182.782 41.776L182.782 41.7758L182.783 41.7756L182.783 41.7754L182.783 41.7753L182.784 41.7751L182.784 41.7749L182.784 41.7748L182.784 41.7746L182.785 41.7744L182.785 41.7743L182.785 41.7741L182.786 41.7739L182.786 41.7738L182.786 41.7736L182.786 41.7734L182.787 41.7733L182.787 41.7731L182.787 41.7729L182.788 41.7727L182.788 41.7726L182.788 41.7724L182.789 41.7722L182.789 41.7721L182.789 41.7719L182.789 41.7717L182.79 41.7716L182.79 41.7714L182.79 41.7712L182.791 41.7711L182.791 41.7709L182.791 41.7707L182.791 41.7705L182.792 41.7704L182.792 41.7702L182.792 41.77L182.793 41.7699L182.793 41.7697L182.793 41.7695L182.793 41.7694L182.794 41.7692L182.794 41.769L182.794 41.7689L182.795 41.7687L182.795 41.7685L182.795 41.7683L182.796 41.7682L182.796 41.768L182.796 41.7678L182.796 41.7677L182.797 41.7675L182.797 41.7673L182.797 41.7672L182.798 41.767L182.798 41.7668L182.798 41.7667L182.798 41.7665L182.799 41.7663L182.799 41.7661L182.799 41.766L182.8 41.7658L182.8 41.7656L182.8 41.7655L182.801 41.7653L182.801 41.7651L182.801 41.765L182.801 41.7648L182.802 41.7646L182.802 41.7645L182.802 41.7643L182.803 41.7641L182.803 41.764L182.803 41.7638L182.803 41.7636L182.804 41.7634L182.804 41.7633L182.804 41.7631L182.805 41.7629L182.805 41.7628L182.805 41.7626L182.805 41.7624L182.806 41.7623L182.806 41.7621L182.806 41.7619L182.807 41.7618L182.807 41.7616L182.807 41.7614L182.808 41.7612L182.808 41.7611L182.808 41.7609L182.808 41.7607L182.809 41.7606L182.809 41.7604L182.809 41.7602L182.81 41.7601L182.81 41.7599L182.81 41.7597L182.81 41.7596L182.811 41.7594L182.811 41.7592L182.811 41.759L182.812 41.7589L182.812 41.7587L182.812 41.7585L182.813 41.7584L182.813 41.7582L182.813 41.758L182.813 41.7579L182.814 41.7577L182.814 41.7575L182.814 41.7575C183.493 41.4037 184.183 41.0615 184.884 40.7309L184.886 40.7302C184.969 40.6906 185.045 40.6549 185.121 40.6207L185.121 40.6208L185.131 40.6159C185.367 40.5051 185.603 40.3964 185.841 40.2887C193.561 36.8058 201.119 35.3176 206.738 34.6989C209.549 34.3895 211.875 34.2976 213.494 34.2828C213.519 34.2826 213.545 34.2824 213.57 34.2822C208.255 35.8189 203.224 37.6665 198.558 39.7966L199.2 40.3935C215.867 35.8415 236.548 39.3574 249.65 48.6675C240.756 46.9396 230.882 47.597 222.479 49.8283C213.427 52.2321 205.996 56.4856 203.322 61.6347L204.45 61.901C207.318 58.7578 212.19 56.734 217.181 55.9914C221.703 55.3183 226.265 55.7023 229.541 57.2143C223.969 57.6984 217.826 59.7298 214.58 62.9866C211.027 66.5517 211.021 71.5004 218.671 77.3432L218.674 77.3451C219.818 78.2072 221.169 78.9714 222.685 79.6148L272.381 82.918Z"
											fill="var(--surface-card)"
											stroke="var(--primary-300)"
										/>
										<path
											d="M294.671 156.717C295.937 157.448 297.263 158.13 298.614 158.78C300.637 159.754 302.772 160.648 305.004 161.456C327.65 169.67 357.901 168.091 377.604 156.716C379.955 155.359 382.104 153.889 384.026 152.323L294.671 156.717ZM295.102 156.466C293.777 155.71 292.517 154.917 291.325 154.091L342.296 146.172C342.298 146.171 342.299 146.171 342.301 146.171C346.407 145.577 350.154 144.347 353.138 142.614C357.864 139.886 359.977 136.355 359.965 132.73L387.345 148.536C386.222 149.769 384.956 150.958 383.555 152.093L383.557 152.094C381.647 153.653 379.51 155.116 377.171 156.466C357.675 167.721 327.739 169.285 305.33 161.156L305.329 161.156C303.12 160.357 301.008 159.472 299.006 158.508L299.006 158.508C297.665 157.863 296.354 157.189 295.104 156.467L295.102 156.466ZM319.13 142.597L319.136 142.6C320.658 143.456 322.379 144.183 324.247 144.76L286.957 150.529C281.917 145.875 278.934 140.577 278.272 135.099C277.6 129.535 279.346 123.961 283.351 118.886C287.357 113.81 293.495 109.392 301.208 106.033C308.672 102.783 317.383 100.625 326.596 99.7376L312.953 129.21L312.953 129.212C310.831 133.874 312.746 138.911 319.13 142.597ZM393.556 137.59L393.556 137.591L393.518 137.592C392.901 139.93 391.896 142.227 390.518 144.453L353.217 122.919L353.216 122.918C349.294 120.66 344.138 119.256 338.625 118.945C333.633 118.664 328.628 119.294 324.308 120.735L334.157 99.3061C342.52 99.1409 350.848 100.022 358.569 101.891C366.429 103.793 373.468 106.672 379.183 110.323C384.898 113.974 389.15 118.306 391.636 123.013C394.122 127.719 394.78 132.684 393.565 137.554L393.556 137.59ZM319.485 130.863C320.141 128.962 321.758 127.216 324.133 125.846C327.323 124.015 331.639 122.988 336.137 122.989C340.636 122.99 344.951 124.018 348.141 125.85C350.516 127.221 352.133 128.967 352.788 130.869C353.443 132.77 353.107 134.741 351.822 136.532C350.537 138.323 348.361 139.853 345.569 140.93C342.777 142.007 339.494 142.581 336.136 142.581C332.778 142.58 329.495 142.005 326.703 140.927C323.911 139.85 321.735 138.318 320.45 136.527C319.165 134.736 318.83 132.765 319.485 130.863Z"
											fill="var(--surface-card)"
											stroke="var(--primary-300)"
										/>
										<path
											d="M93.6674 127.041C82.6253 128.128 73.4019 131.831 68.37 137.517L93.6674 127.041ZM93.6674 127.041C92.0693 128.118 90.9018 129.283 90.1866 130.368L90.186 130.368C83.2399 140.99 90.8982 149.236 93.3911 151.916C95.1721 153.837 97.9782 155.943 101.27 157.843C105.195 160.109 109.455 161.904 112.992 162.75L112.992 162.75C113.878 162.961 114.553 163.139 115.126 163.293C115.253 163.327 115.375 163.36 115.495 163.393C115.903 163.504 116.288 163.609 116.733 163.706L116.738 163.707L118.054 163.987C118.912 164.184 119.436 164.688 119.37 165.216C119.259 165.746 118.567 166.173 117.67 166.277L117.293 166.313C101.584 167.475 87.9607 165.942 76.5487 161.763C64.615 154.819 61.4032 145.395 68.3699 137.517L93.6674 127.041ZM110.999 108.512L110.998 108.512L110.938 108.477C103.715 104.307 94.8971 102.103 85.1795 101.953C107.312 96.8345 131.688 99.6017 148.708 109.427C151.381 110.971 153.81 112.673 155.918 114.474L155.919 114.475C173.298 129.263 163.493 143.788 160.055 147.897L160.055 147.898C159.051 149.102 156.618 151.664 152.538 153.923C148.464 156.179 142.773 158.121 135.224 158.133C126.224 158.147 120.894 155.735 117.193 153.599C114.784 152.208 112.62 150.519 110.952 148.899C109.279 147.274 108.13 145.742 107.716 144.668L107.715 144.664L107.53 144.206C107.449 143.958 107.397 143.764 107.371 143.636C107.337 143.007 108.134 142.469 109.214 142.391L109.601 142.371L109.616 142.37L109.63 142.369C109.663 142.366 109.698 142.364 109.735 142.361C110.568 142.296 112.495 142.147 115.261 141.208L115.261 141.208L115.267 141.206C117.587 140.398 120.878 138.921 122.539 136.51L122.545 136.513L122.888 136.013C125.741 131.849 125.839 126.755 123.704 121.824C121.568 116.891 117.182 112.091 110.999 108.512ZM62.4964 135.792L62.4957 135.793C57.9007 141.016 57.0048 146.774 59.5128 152.254C54.1302 147.8 51.8489 143.761 51.1572 142.344L50.5678 142.44L51.1572 142.344C45.7508 131.275 50.7684 116.427 69.3213 107.381C83.6491 104.273 96.719 105.629 106.296 111.157L106.355 111.192C112.871 114.987 117.172 120.504 118.279 125.807C116.141 124.671 113.534 123.882 110.809 123.506L110.81 123.478L110.305 123.423C89.9195 121.198 71.1281 126.046 62.4964 135.792Z"
											fill="var(--surface-card)"
											stroke="var(--primary-300)"
										/>
										<mask id="path-4-inside-1_436_2360" fill="white">
											<path d="M221.622 202.5V195.285L191.528 198.893L221.622 202.5ZM263.084 174.956C240.179 161.734 203.064 161.734 180.16 174.956C157.255 188.179 157.255 209.606 180.16 222.829C203.064 236.051 240.179 236.051 263.084 222.829C285.988 209.606 285.988 188.179 263.084 174.956ZM259.917 206.869L263.413 207.703C263.643 207.758 263.851 207.839 264.027 207.941C264.202 208.042 264.341 208.163 264.436 208.295C264.531 208.428 264.58 208.57 264.579 208.713C264.579 208.857 264.53 208.999 264.435 209.131C264.34 209.264 264.2 209.384 264.025 209.486C263.849 209.587 263.64 209.668 263.411 209.723C263.181 209.778 262.935 209.806 262.686 209.806C262.438 209.806 262.192 209.778 261.962 209.723L258.475 208.889C258.011 208.778 257.643 208.565 257.451 208.298C257.259 208.03 257.259 207.73 257.451 207.462C257.643 207.195 258.009 206.982 258.472 206.871C258.934 206.76 259.454 206.759 259.917 206.869ZM258.475 188.896L261.969 188.06C262.432 187.951 262.952 187.952 263.414 188.063C263.877 188.174 264.244 188.387 264.435 188.654C264.627 188.922 264.627 189.222 264.435 189.49C264.243 189.757 263.875 189.97 263.412 190.081L259.916 190.915C259.452 191.026 258.932 191.026 258.468 190.915C258.005 190.805 257.637 190.592 257.445 190.325C257.349 190.192 257.3 190.05 257.301 189.906C257.301 189.762 257.35 189.62 257.446 189.487C257.541 189.354 257.682 189.234 257.858 189.132C258.035 189.031 258.244 188.951 258.475 188.896ZM254.39 179.975C254.745 180.18 254.944 180.458 254.944 180.747C254.944 181.037 254.745 181.315 254.39 181.52L251.715 183.064C251.36 183.269 250.879 183.384 250.378 183.384C249.876 183.384 249.395 183.269 249.04 183.064C248.686 182.859 248.486 182.581 248.486 182.292C248.486 182.002 248.686 181.724 249.04 181.52L251.715 179.975C252.07 179.771 252.551 179.655 253.053 179.655C253.554 179.655 254.035 179.771 254.39 179.975ZM239.357 174.177C239.587 174.231 239.795 174.312 239.971 174.413C240.147 174.515 240.287 174.635 240.382 174.768C240.477 174.9 240.526 175.042 240.526 175.186C240.526 175.329 240.477 175.472 240.382 175.604L238.937 177.617C238.845 177.753 238.708 177.876 238.533 177.98C238.358 178.084 238.148 178.167 237.917 178.224C237.685 178.281 237.436 178.31 237.185 178.311C236.934 178.312 236.684 178.284 236.452 178.228C236.22 178.172 236.009 178.091 235.832 177.987C235.655 177.884 235.515 177.762 235.421 177.627C235.328 177.492 235.281 177.348 235.285 177.203C235.288 177.058 235.342 176.915 235.443 176.782L236.889 174.763C237.083 174.497 237.451 174.286 237.913 174.176C238.376 174.066 238.895 174.066 239.357 174.177ZM221.623 172.141C222.125 172.141 222.606 172.256 222.96 172.461C223.315 172.666 223.514 172.943 223.514 173.233L223.508 175.412C223.506 175.7 223.307 175.977 222.954 176.181C222.6 176.385 222.121 176.5 221.622 176.501C221.12 176.501 220.639 176.386 220.285 176.181C219.93 175.976 219.731 175.699 219.731 175.409L219.731 173.226C219.734 172.937 219.934 172.661 220.288 172.458C220.643 172.254 221.122 172.14 221.622 172.14L221.623 172.141ZM188.853 179.975C189.208 179.771 189.689 179.655 190.191 179.655C190.693 179.655 191.174 179.771 191.528 179.975L194.203 181.52C194.558 181.724 194.757 182.002 194.757 182.292C194.757 182.581 194.558 182.859 194.203 183.064C193.849 183.269 193.367 183.384 192.866 183.384C192.364 183.384 191.883 183.269 191.528 183.064L188.853 181.52C188.499 181.315 188.299 181.037 188.299 180.747C188.299 180.458 188.499 180.18 188.853 179.975ZM183.326 190.916L179.83 190.082C179.601 190.027 179.392 189.946 179.217 189.844C179.041 189.743 178.902 189.623 178.807 189.49C178.713 189.357 178.664 189.215 178.664 189.072C178.664 188.928 178.714 188.787 178.809 188.654C178.904 188.521 179.043 188.401 179.219 188.299C179.394 188.198 179.603 188.117 179.833 188.062C180.062 188.007 180.309 187.979 180.557 187.979C180.806 187.979 181.052 188.007 181.282 188.062L184.769 188.896C185.232 189.007 185.6 189.22 185.792 189.487C185.984 189.755 185.984 190.055 185.792 190.323C185.601 190.59 185.234 190.803 184.772 190.914C184.31 191.025 183.79 191.026 183.326 190.916ZM206.787 178.208C206.557 178.264 206.311 178.293 206.061 178.293C205.812 178.294 205.565 178.266 205.334 178.211C205.103 178.156 204.894 178.075 204.718 177.973C204.541 177.872 204.401 177.751 204.306 177.617L202.859 175.6C202.668 175.333 202.67 175.033 202.863 174.766C203.056 174.499 203.424 174.287 203.887 174.177C204.35 174.066 204.871 174.066 205.334 174.177C205.797 174.287 206.166 174.5 206.358 174.767L207.804 176.785C207.995 177.053 207.995 177.353 207.804 177.62C207.612 177.887 207.245 178.1 206.782 178.211L206.787 178.208ZM184.769 208.889L181.275 209.725C181.045 209.779 180.799 209.808 180.551 209.808C180.302 209.808 180.056 209.78 179.827 209.725C179.597 209.67 179.388 209.59 179.213 209.488C179.037 209.387 178.897 209.266 178.802 209.134C178.707 209.001 178.658 208.859 178.658 208.716C178.658 208.572 178.707 208.43 178.802 208.298C178.897 208.165 179.036 208.045 179.212 207.943C179.387 207.842 179.596 207.761 179.825 207.706L183.321 206.872C183.552 206.813 183.8 206.782 184.051 206.78C184.303 206.778 184.552 206.805 184.786 206.859C185.019 206.913 185.231 206.994 185.41 207.096C185.589 207.198 185.73 207.32 185.827 207.454C185.923 207.588 185.972 207.732 185.971 207.877C185.969 208.022 185.918 208.166 185.82 208.3C185.721 208.433 185.578 208.554 185.397 208.655C185.217 208.756 185.003 208.836 184.769 208.889ZM191.528 217.81C191.174 218.014 190.693 218.13 190.191 218.13C189.689 218.13 189.208 218.014 188.853 217.81C188.499 217.605 188.299 217.327 188.299 217.038C188.299 216.748 188.499 216.47 188.853 216.265L191.528 214.721C191.883 214.516 192.364 214.401 192.866 214.401C193.367 214.401 193.849 214.516 194.203 214.721C194.558 214.926 194.757 215.204 194.757 215.493C194.757 215.783 194.558 216.061 194.203 216.265L191.528 217.81ZM203.887 223.608C203.657 223.554 203.448 223.473 203.272 223.372C203.096 223.27 202.957 223.15 202.862 223.017C202.767 222.885 202.718 222.743 202.718 222.599C202.718 222.456 202.767 222.313 202.862 222.181L204.306 220.168C204.498 219.9 204.867 219.688 205.33 219.577C205.793 219.466 206.314 219.466 206.777 219.577C207.241 219.688 207.609 219.9 207.801 220.168C207.992 220.435 207.992 220.736 207.801 221.003L206.354 223.022C206.161 223.288 205.793 223.499 205.33 223.609C204.868 223.719 204.349 223.719 203.887 223.608ZM221.62 225.644C221.119 225.644 220.638 225.529 220.283 225.324C219.929 225.119 219.729 224.842 219.729 224.552L219.736 222.373C219.737 222.085 219.937 221.808 220.29 221.604C220.643 221.4 221.122 221.285 221.622 221.284C222.123 221.284 222.604 221.399 222.959 221.604C223.313 221.809 223.512 222.086 223.513 222.376V224.559C223.51 224.848 223.309 225.124 222.955 225.327C222.601 225.531 222.121 225.645 221.622 225.645L221.62 225.644ZM221.622 204.732L172.917 198.893L221.622 193.053L270.326 198.893L221.622 204.732ZM239.357 223.608C238.893 223.719 238.373 223.719 237.909 223.608C237.446 223.498 237.078 223.285 236.886 223.018L235.44 221C235.248 220.732 235.248 220.432 235.44 220.164C235.632 219.897 236 219.684 236.463 219.573C236.693 219.518 236.939 219.49 237.188 219.49C237.438 219.49 237.684 219.518 237.914 219.574C238.144 219.629 238.353 219.71 238.528 219.812C238.704 219.914 238.843 220.035 238.937 220.168L240.385 222.185C240.575 222.452 240.574 222.752 240.381 223.019C240.188 223.286 239.82 223.498 239.357 223.608ZM251.715 217.81L249.04 216.265C248.686 216.061 248.486 215.783 248.486 215.493C248.486 215.204 248.686 214.926 249.04 214.721C249.395 214.516 249.876 214.401 250.378 214.401C250.879 214.401 251.36 214.516 251.715 214.721L254.39 216.265C254.745 216.47 254.944 216.748 254.944 217.038C254.944 217.327 254.745 217.605 254.39 217.81C254.035 218.014 253.554 218.13 253.053 218.13C252.551 218.13 252.07 218.014 251.715 217.81Z" />
										</mask>
										<path
											d="M221.622 202.5V195.285L191.528 198.893L221.622 202.5ZM263.084 174.956C240.179 161.734 203.064 161.734 180.16 174.956C157.255 188.179 157.255 209.606 180.16 222.829C203.064 236.051 240.179 236.051 263.084 222.829C285.988 209.606 285.988 188.179 263.084 174.956ZM259.917 206.869L263.413 207.703C263.643 207.758 263.851 207.839 264.027 207.941C264.202 208.042 264.341 208.163 264.436 208.295C264.531 208.428 264.58 208.57 264.579 208.713C264.579 208.857 264.53 208.999 264.435 209.131C264.34 209.264 264.2 209.384 264.025 209.486C263.849 209.587 263.64 209.668 263.411 209.723C263.181 209.778 262.935 209.806 262.686 209.806C262.438 209.806 262.192 209.778 261.962 209.723L258.475 208.889C258.011 208.778 257.643 208.565 257.451 208.298C257.259 208.03 257.259 207.73 257.451 207.462C257.643 207.195 258.009 206.982 258.472 206.871C258.934 206.76 259.454 206.759 259.917 206.869ZM258.475 188.896L261.969 188.06C262.432 187.951 262.952 187.952 263.414 188.063C263.877 188.174 264.244 188.387 264.435 188.654C264.627 188.922 264.627 189.222 264.435 189.49C264.243 189.757 263.875 189.97 263.412 190.081L259.916 190.915C259.452 191.026 258.932 191.026 258.468 190.915C258.005 190.805 257.637 190.592 257.445 190.325C257.349 190.192 257.3 190.05 257.301 189.906C257.301 189.762 257.35 189.62 257.446 189.487C257.541 189.354 257.682 189.234 257.858 189.132C258.035 189.031 258.244 188.951 258.475 188.896ZM254.39 179.975C254.745 180.18 254.944 180.458 254.944 180.747C254.944 181.037 254.745 181.315 254.39 181.52L251.715 183.064C251.36 183.269 250.879 183.384 250.378 183.384C249.876 183.384 249.395 183.269 249.04 183.064C248.686 182.859 248.486 182.581 248.486 182.292C248.486 182.002 248.686 181.724 249.04 181.52L251.715 179.975C252.07 179.771 252.551 179.655 253.053 179.655C253.554 179.655 254.035 179.771 254.39 179.975ZM239.357 174.177C239.587 174.231 239.795 174.312 239.971 174.413C240.147 174.515 240.287 174.635 240.382 174.768C240.477 174.9 240.526 175.042 240.526 175.186C240.526 175.329 240.477 175.472 240.382 175.604L238.937 177.617C238.845 177.753 238.708 177.876 238.533 177.98C238.358 178.084 238.148 178.167 237.917 178.224C237.685 178.281 237.436 178.31 237.185 178.311C236.934 178.312 236.684 178.284 236.452 178.228C236.22 178.172 236.009 178.091 235.832 177.987C235.655 177.884 235.515 177.762 235.421 177.627C235.328 177.492 235.281 177.348 235.285 177.203C235.288 177.058 235.342 176.915 235.443 176.782L236.889 174.763C237.083 174.497 237.451 174.286 237.913 174.176C238.376 174.066 238.895 174.066 239.357 174.177ZM221.623 172.141C222.125 172.141 222.606 172.256 222.96 172.461C223.315 172.666 223.514 172.943 223.514 173.233L223.508 175.412C223.506 175.7 223.307 175.977 222.954 176.181C222.6 176.385 222.121 176.5 221.622 176.501C221.12 176.501 220.639 176.386 220.285 176.181C219.93 175.976 219.731 175.699 219.731 175.409L219.731 173.226C219.734 172.937 219.934 172.661 220.288 172.458C220.643 172.254 221.122 172.14 221.622 172.14L221.623 172.141ZM188.853 179.975C189.208 179.771 189.689 179.655 190.191 179.655C190.693 179.655 191.174 179.771 191.528 179.975L194.203 181.52C194.558 181.724 194.757 182.002 194.757 182.292C194.757 182.581 194.558 182.859 194.203 183.064C193.849 183.269 193.367 183.384 192.866 183.384C192.364 183.384 191.883 183.269 191.528 183.064L188.853 181.52C188.499 181.315 188.299 181.037 188.299 180.747C188.299 180.458 188.499 180.18 188.853 179.975ZM183.326 190.916L179.83 190.082C179.601 190.027 179.392 189.946 179.217 189.844C179.041 189.743 178.902 189.623 178.807 189.49C178.713 189.357 178.664 189.215 178.664 189.072C178.664 188.928 178.714 188.787 178.809 188.654C178.904 188.521 179.043 188.401 179.219 188.299C179.394 188.198 179.603 188.117 179.833 188.062C180.062 188.007 180.309 187.979 180.557 187.979C180.806 187.979 181.052 188.007 181.282 188.062L184.769 188.896C185.232 189.007 185.6 189.22 185.792 189.487C185.984 189.755 185.984 190.055 185.792 190.323C185.601 190.59 185.234 190.803 184.772 190.914C184.31 191.025 183.79 191.026 183.326 190.916ZM206.787 178.208C206.557 178.264 206.311 178.293 206.061 178.293C205.812 178.294 205.565 178.266 205.334 178.211C205.103 178.156 204.894 178.075 204.718 177.973C204.541 177.872 204.401 177.751 204.306 177.617L202.859 175.6C202.668 175.333 202.67 175.033 202.863 174.766C203.056 174.499 203.424 174.287 203.887 174.177C204.35 174.066 204.871 174.066 205.334 174.177C205.797 174.287 206.166 174.5 206.358 174.767L207.804 176.785C207.995 177.053 207.995 177.353 207.804 177.62C207.612 177.887 207.245 178.1 206.782 178.211L206.787 178.208ZM184.769 208.889L181.275 209.725C181.045 209.779 180.799 209.808 180.551 209.808C180.302 209.808 180.056 209.78 179.827 209.725C179.597 209.67 179.388 209.59 179.213 209.488C179.037 209.387 178.897 209.266 178.802 209.134C178.707 209.001 178.658 208.859 178.658 208.716C178.658 208.572 178.707 208.43 178.802 208.298C178.897 208.165 179.036 208.045 179.212 207.943C179.387 207.842 179.596 207.761 179.825 207.706L183.321 206.872C183.552 206.813 183.8 206.782 184.051 206.78C184.303 206.778 184.552 206.805 184.786 206.859C185.019 206.913 185.231 206.994 185.41 207.096C185.589 207.198 185.73 207.32 185.827 207.454C185.923 207.588 185.972 207.732 185.971 207.877C185.969 208.022 185.918 208.166 185.82 208.3C185.721 208.433 185.578 208.554 185.397 208.655C185.217 208.756 185.003 208.836 184.769 208.889ZM191.528 217.81C191.174 218.014 190.693 218.13 190.191 218.13C189.689 218.13 189.208 218.014 188.853 217.81C188.499 217.605 188.299 217.327 188.299 217.038C188.299 216.748 188.499 216.47 188.853 216.265L191.528 214.721C191.883 214.516 192.364 214.401 192.866 214.401C193.367 214.401 193.849 214.516 194.203 214.721C194.558 214.926 194.757 215.204 194.757 215.493C194.757 215.783 194.558 216.061 194.203 216.265L191.528 217.81ZM203.887 223.608C203.657 223.554 203.448 223.473 203.272 223.372C203.096 223.27 202.957 223.15 202.862 223.017C202.767 222.885 202.718 222.743 202.718 222.599C202.718 222.456 202.767 222.313 202.862 222.181L204.306 220.168C204.498 219.9 204.867 219.688 205.33 219.577C205.793 219.466 206.314 219.466 206.777 219.577C207.241 219.688 207.609 219.9 207.801 220.168C207.992 220.435 207.992 220.736 207.801 221.003L206.354 223.022C206.161 223.288 205.793 223.499 205.33 223.609C204.868 223.719 204.349 223.719 203.887 223.608ZM221.62 225.644C221.119 225.644 220.638 225.529 220.283 225.324C219.929 225.119 219.729 224.842 219.729 224.552L219.736 222.373C219.737 222.085 219.937 221.808 220.29 221.604C220.643 221.4 221.122 221.285 221.622 221.284C222.123 221.284 222.604 221.399 222.959 221.604C223.313 221.809 223.512 222.086 223.513 222.376V224.559C223.51 224.848 223.309 225.124 222.955 225.327C222.601 225.531 222.121 225.645 221.622 225.645L221.62 225.644ZM221.622 204.732L172.917 198.893L221.622 193.053L270.326 198.893L221.622 204.732ZM239.357 223.608C238.893 223.719 238.373 223.719 237.909 223.608C237.446 223.498 237.078 223.285 236.886 223.018L235.44 221C235.248 220.732 235.248 220.432 235.44 220.164C235.632 219.897 236 219.684 236.463 219.573C236.693 219.518 236.939 219.49 237.188 219.49C237.438 219.49 237.684 219.518 237.914 219.574C238.144 219.629 238.353 219.71 238.528 219.812C238.704 219.914 238.843 220.035 238.937 220.168L240.385 222.185C240.575 222.452 240.574 222.752 240.381 223.019C240.188 223.286 239.82 223.498 239.357 223.608ZM251.715 217.81L249.04 216.265C248.686 216.061 248.486 215.783 248.486 215.493C248.486 215.204 248.686 214.926 249.04 214.721C249.395 214.516 249.876 214.401 250.378 214.401C250.879 214.401 251.36 214.516 251.715 214.721L254.39 216.265C254.745 216.47 254.944 216.748 254.944 217.038C254.944 217.327 254.745 217.605 254.39 217.81C254.035 218.014 253.554 218.13 253.053 218.13C252.551 218.13 252.07 218.014 251.715 217.81Z"
											fill="var(--surface-card)"
											stroke="var(--primary-300)"
											strokeWidth="2"
											mask="url(#path-4-inside-1_436_2360)"
										/>
										<rect y="0.561843" width="65.178" height="65.1791" rx="32.589" transform="matrix(0.866044 0.499967 -0.866044 0.499967 336.923 66.7666)" fill="var(--primary-500)" />
										<g clipPath="url(#clip0_436_2360)">
											<path
												d="M321.927 102.691C321.771 102.595 321.651 102.481 321.574 102.357C321.496 102.234 321.464 102.102 321.478 101.97L321.478 92.7286C321.425 92.5834 321.429 92.433 321.491 92.2889C321.552 92.1447 321.67 92.0105 321.835 91.8965C321.999 91.7824 322.207 91.6914 322.441 91.6304C322.676 91.5694 322.931 91.54 323.188 91.5443C323.445 91.5486 323.697 91.5866 323.925 91.6554C324.153 91.7242 324.351 91.822 324.504 91.9414C324.657 92.0608 324.761 92.1987 324.808 92.3446C324.855 92.4906 324.844 92.6409 324.776 92.7841L324.824 101.018L358.298 101.046C358.67 101.092 359.004 101.209 359.248 101.377C359.492 101.546 359.63 101.757 359.641 101.976C359.652 102.196 359.535 102.411 359.309 102.588C359.083 102.764 358.761 102.892 358.394 102.95L323.175 102.95C322.947 102.958 322.719 102.939 322.505 102.895C322.29 102.85 322.093 102.781 321.927 102.691Z"
												fill="var(--primary-700)"
											/>
										</g>
										<rect y="0.561843" width="65.178" height="65.1791" rx="32.589" transform="matrix(0.866044 0.499967 -0.866044 0.499967 336.923 66.7666)" stroke="var(--primary-300)" strokeWidth="1.12376" />

										<rect y="0.561843" width="65.178" height="65.1791" rx="32.589" transform="matrix(0.866044 0.499967 -0.866044 0.499967 222.081 127.852)" fill="var(--primary-500)" />
										<g clipPath="url(#clip1_436_2360)">
											<path
												d="M207.085 163.777C206.929 163.681 206.809 163.567 206.732 163.443C206.655 163.319 206.622 163.187 206.637 163.056L206.637 153.814C206.583 153.669 206.587 153.519 206.649 153.375C206.711 153.23 206.828 153.096 206.993 152.982C207.158 152.868 207.365 152.777 207.6 152.716C207.834 152.655 208.09 152.626 208.347 152.63C208.604 152.634 208.856 152.672 209.084 152.741C209.312 152.81 209.51 152.908 209.663 153.027C209.816 153.146 209.919 153.284 209.967 153.43C210.014 153.576 210.003 153.727 209.934 153.87L209.983 162.104L243.456 162.132C243.828 162.178 244.163 162.294 244.406 162.463C244.65 162.632 244.788 162.843 244.799 163.062C244.81 163.281 244.694 163.497 244.467 163.673C244.241 163.85 243.919 163.977 243.552 164.036L208.334 164.036C208.106 164.044 207.878 164.025 207.663 163.981C207.448 163.936 207.252 163.867 207.085 163.777Z"
												fill="var(--primary-700)"
											/>
										</g>
										<rect y="0.561843" width="65.178" height="65.1791" rx="32.589" transform="matrix(0.866044 0.499967 -0.866044 0.499967 222.081 127.852)" stroke="var(--primary-300)" strokeWidth="1.12376" />

										<rect y="0.561843" width="65.178" height="65.1791" rx="32.589" transform="matrix(0.866044 0.499967 -0.866044 0.499967 222.109 10.8927)" fill="var(--primary-500)" />
										<g clipPath="url(#clip2_436_2360)">
											<path
												d="M207.112 46.8173C206.957 46.7211 206.836 46.6075 206.759 46.4836C206.682 46.3596 206.65 46.2279 206.664 46.0965L206.664 36.8547C206.61 36.7095 206.615 36.5591 206.676 36.415C206.738 36.2708 206.856 36.1366 207.02 36.0226C207.185 35.9085 207.393 35.8175 207.627 35.7565C207.862 35.6955 208.117 35.6661 208.374 35.6704C208.631 35.6747 208.883 35.7127 209.111 35.7815C209.339 35.8503 209.537 35.9481 209.69 36.0675C209.843 36.1869 209.947 36.3248 209.994 36.4707C210.041 36.6167 210.03 36.767 209.962 36.9102L210.01 45.1446L243.484 45.1723C243.856 45.2181 244.19 45.3347 244.434 45.5033C244.677 45.672 244.816 45.8829 244.827 46.1024C244.838 46.3219 244.721 46.5371 244.495 46.7137C244.269 46.8902 243.947 47.0178 243.58 47.0761L208.361 47.0761C208.133 47.0843 207.905 47.0656 207.69 47.0211C207.476 46.9766 207.279 46.9072 207.112 46.8173Z"
												fill="var(--primary-700)"
											/>
										</g>
										<rect y="0.561843" width="65.178" height="65.1791" rx="32.589" transform="matrix(0.866044 0.499967 -0.866044 0.499967 222.109 10.8927)" stroke="var(--primary-300)" strokeWidth="1.12376" />

										<rect y="0.561843" width="65.178" height="65.1791" rx="32.589" transform="matrix(0.866044 0.499967 -0.866044 0.499967 107.267 71.9784)" fill="var(--primary-500)" />
										<g clipPath="url(#clip3_436_2360)">
											<path
												d="M92.2708 107.903C92.115 107.807 91.9949 107.693 91.9178 107.569C91.8407 107.445 91.8083 107.314 91.8225 107.182L91.8225 97.9404C91.7689 97.7952 91.7731 97.6448 91.8348 97.5007C91.8965 97.3565 92.0142 97.2223 92.1789 97.1083C92.3436 96.9942 92.551 96.9032 92.7855 96.8422C93.02 96.7812 93.2755 96.7517 93.5326 96.7561C93.7897 96.7604 94.0417 96.7984 94.2697 96.8672C94.4977 96.936 94.6956 97.0337 94.8485 97.1531C95.0014 97.2726 95.1053 97.4105 95.1524 97.5564C95.1995 97.7024 95.1885 97.8527 95.1203 97.9959L95.1683 106.23L128.642 106.258C129.014 106.304 129.349 106.42 129.592 106.589C129.836 106.758 129.974 106.969 129.985 107.188C129.996 107.408 129.879 107.623 129.653 107.799C129.427 107.976 129.105 108.104 128.738 108.162L93.5194 108.162C93.2918 108.17 93.0636 108.151 92.8489 108.107C92.6341 108.062 92.4374 107.993 92.2708 107.903Z"
												fill="var(--primary-700)"
											/>
										</g>
										<rect y="0.561843" width="65.178" height="65.1791" rx="32.589" transform="matrix(0.866044 0.499967 -0.866044 0.499967 107.267 71.9784)" stroke="var(--primary-300)" strokeWidth="1.12376" />
									</g>
									<defs>
										<linearGradient id="paint0_linear_436_2360" x1="221.333" y1="0" x2="221.333" y2="257" gradientUnits="userSpaceOnUse">
											<stop offset="0.750409" stopColor="white" />
											<stop offset="1" stopColor="white" stopOpacity="0" />
										</linearGradient>
										<clipPath id="clip0_436_2360">
											<rect width="34.8365" height="34.8365" fill="white" transform="matrix(0.866044 0.499967 -0.866044 0.499967 336.436 82.2176)" />
										</clipPath>
										<clipPath id="clip1_436_2360">
											<rect width="34.8365" height="34.8365" fill="white" transform="matrix(0.866044 0.499967 -0.866044 0.499967 221.594 143.303)" />
										</clipPath>
										<clipPath id="clip2_436_2360">
											<rect width="34.8365" height="34.8365" fill="white" transform="matrix(0.866044 0.499967 -0.866044 0.499967 221.622 26.3437)" />
										</clipPath>
										<clipPath id="clip3_436_2360">
											<rect width="34.8365" height="34.8365" fill="white" transform="matrix(0.866044 0.499967 -0.866044 0.499967 106.78 87.4294)" />
										</clipPath>
									</defs>
								</svg>

								<h4 className="font-medium m-0 mb-3 px-5">Browser Support</h4>
								<span className="p-0 m-0 text-xl block line-height-3 px-5 pb-5" style={{ letterSpacing: '0.4px' }}>
									A website that is compatible with a variety of browsers, including Chrome, Firefox, and Safari, to ensure a seamless experience for all users.
								</span>
							</div>
						</div>
						<div className="col-12 sm:col-6 lg:col-4">
							<div className="card p-0 h-full">
								<svg className="w-full border-round-3xl mb-4" viewBox="0 0 443 257" fill="none" xmlns="http://www.w3.org/2000/svg">
									<mask id="mask0_436_2387" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="443" height="257">
										<rect width="442.667" height="257" transform="translate(0.333313)" fill="url(#paint0_linear_436_2387)" />
									</mask>
									<g mask="url(#mask0_436_2387)">
										<mask id="mask1_436_2387" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="124" y="34" width="219" height="189">
											<ellipse cx="108.636" cy="94.2142" rx="108.636" ry="94.2142" transform="matrix(-1 0 0 1 342.236 34.2857)" fill="url(#paint1_radial_436_2387)" />
										</mask>
										<g mask="url(#mask1_436_2387)">
											<path
												opacity="0.5"
												d="M125.424 128.5C125.424 180.221 173.793 222.256 233.601 222.256C293.408 222.256 341.777 180.221 341.777 128.5C341.777 76.7793 293.408 34.7443 233.601 34.7443C173.793 34.7443 125.424 76.7793 125.424 128.5Z"
												fill="var(--primary-500)"
												stroke="var(--primary-500)"
												strokeWidth="0.917219"
											/>
										</g>
										<g opacity="0.5">
											<mask id="mask2_436_2387" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="209" y="57" width="166" height="143">
												<ellipse cx="82.2843" cy="71.3611" rx="82.2843" ry="71.3611" transform="matrix(-1 0 0 1 374.163 57.139)" fill="url(#paint2_radial_436_2387)" />
											</mask>
											<g mask="url(#mask2_436_2387)">
												<path
													d="M209.941 128.5C209.941 167.675 246.578 199.514 291.878 199.514C337.179 199.514 373.815 167.675 373.815 128.5C373.815 89.3251 337.179 57.4863 291.878 57.4863C246.578 57.4863 209.941 89.3251 209.941 128.5Z"
													fill="var(--primary-500)"
													stroke="var(--primary-500)"
													strokeWidth="0.694733"
												/>
											</g>
										</g>
										<g opacity="0.25">
											<mask id="mask3_436_2387" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="288" y="81" width="109" height="95">
												<ellipse cx="54.0017" cy="46.833" rx="54.0017" ry="46.833" transform="matrix(-1 0 0 1 396.238 81.667)" fill="url(#paint3_radial_436_2387)" />
											</mask>
											<g mask="url(#mask3_436_2387)">
												<path
													d="M288.462 128.5C288.462 154.21 312.506 175.105 342.236 175.105C371.966 175.105 396.01 154.21 396.01 128.5C396.01 102.79 371.966 81.895 342.236 81.895C312.506 81.895 288.462 102.79 288.462 128.5Z"
													fill="var(--primary-500)"
													stroke="var(--primary-500)"
													strokeWidth="0.455941"
												/>
											</g>
										</g>
										<mask id="mask4_436_2387" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="101" y="34" width="218" height="189">
											<ellipse cx="209.733" cy="128.5" rx="108.636" ry="94.2142" fill="url(#paint4_radial_436_2387)" />
										</mask>
										<g mask="url(#mask4_436_2387)">
											<path
												opacity="0.5"
												d="M317.91 128.5C317.91 180.221 269.541 222.256 209.733 222.256C149.925 222.256 101.556 180.221 101.556 128.5C101.556 76.7793 149.925 34.7443 209.733 34.7443C269.541 34.7443 317.91 76.7793 317.91 128.5Z"
												fill="var(--primary-500)"
												stroke="var(--primary-500)"
												strokeWidth="0.917219"
											/>
										</g>
										<g opacity="0.5">
											<mask id="mask5_436_2387" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="69" y="57" width="165" height="143">
												<ellipse cx="151.455" cy="128.5" rx="82.2843" ry="71.3611" fill="url(#paint5_radial_436_2387)" />
											</mask>
											<g mask="url(#mask5_436_2387)">
												<path
													d="M233.392 128.5C233.392 167.675 196.756 199.514 151.455 199.514C106.154 199.514 69.518 167.675 69.518 128.5C69.518 89.3251 106.154 57.4863 151.455 57.4863C196.756 57.4863 233.392 89.3251 233.392 128.5Z"
													fill="var(--primary-500)"
													stroke="var(--primary-500)"
													strokeWidth="0.694733"
												/>
											</g>
										</g>
										<g opacity="0.25">
											<mask id="mask6_436_2387" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="47" y="81" width="109" height="95">
												<ellipse cx="101.097" cy="128.5" rx="54.0017" ry="46.833" fill="url(#paint6_radial_436_2387)" />
											</mask>
											<g mask="url(#mask6_436_2387)">
												<path
													d="M154.871 128.5C154.871 154.21 130.827 175.105 101.097 175.105C71.3674 175.105 47.3237 154.21 47.3237 128.5C47.3237 102.79 71.3674 81.895 101.097 81.895C130.827 81.895 154.871 102.79 154.871 128.5Z"
													fill="var(--primary-500)"
													stroke="var(--primary-500)"
													strokeWidth="0.455941"
												/>
											</g>
										</g>
										<rect x="139.84" y="57.5968" width="163.653" height="141.806" rx="70.9032" fill="var(--primary-500)" opacity="0.89" />
										<path
											d="M221.654 84.2834C231.884 84.2805 241.799 87.8251 249.709 94.3132C257.619 100.801 263.034 109.831 265.032 119.865C267.03 129.898 265.487 140.314 260.666 149.337C255.845 158.36 248.044 165.432 238.593 169.349C229.142 173.265 218.625 173.783 208.835 170.814C199.045 167.845 190.587 161.573 184.903 153.067C179.219 144.561 176.66 134.348 177.663 124.167C178.666 113.985 183.168 104.467 190.402 97.2333C194.5 93.1212 199.371 89.8601 204.735 87.6377C210.098 85.4152 215.848 84.2753 221.654 84.2834ZM221.373 137.651L214.935 155.443C214.776 155.889 214.53 156.298 214.212 156.648C213.893 156.998 213.508 157.28 213.078 157.479C212.433 157.781 211.713 157.885 211.009 157.778C210.305 157.671 209.649 157.357 209.123 156.876C208.598 156.395 208.227 155.769 208.057 155.077C207.888 154.385 207.928 153.659 208.172 152.99L212.661 140.558C213.017 139.622 213.299 138.66 213.503 137.68C213.684 136.685 213.814 135.681 213.891 134.673C214.064 132.853 214.186 130.881 214.28 128.989C214.373 127.097 214.438 125.263 214.488 123.745C214.553 121.852 214.042 121.73 212.524 121.37L212.208 121.298L199.258 118.86C198.792 118.777 198.347 118.604 197.949 118.35C197.55 118.096 197.205 117.765 196.934 117.378C196.532 116.79 196.313 116.097 196.305 115.385C196.296 114.673 196.5 113.975 196.889 113.378C197.278 112.782 197.835 112.315 198.49 112.035C199.145 111.756 199.868 111.677 200.567 111.809L214.481 114.421C215.035 114.471 215.575 114.536 216.143 114.6C217.855 114.835 219.581 114.962 221.309 114.982C223.46 114.94 225.607 114.779 227.74 114.5C228.388 114.428 228.999 114.349 229.611 114.291L242.741 111.831C243.672 111.637 244.642 111.821 245.439 112.341C245.833 112.609 246.171 112.951 246.432 113.35C246.693 113.749 246.872 114.195 246.959 114.664C247.046 115.132 247.04 115.614 246.939 116.079C246.838 116.545 246.646 116.987 246.374 117.378C246.107 117.768 245.765 118.101 245.369 118.359C244.973 118.617 244.529 118.795 244.064 118.881L231.518 121.241C231.1 121.334 230.726 121.399 230.395 121.45C229.086 121.673 228.438 121.788 228.517 123.651C228.575 125.011 228.74 126.637 228.956 128.335C229.208 130.327 229.539 132.443 229.884 134.378C230.107 135.651 230.316 136.673 230.604 137.651C230.892 138.63 231.172 139.63 231.604 140.831L236 152.99C236.244 153.659 236.283 154.385 236.114 155.077C235.945 155.769 235.574 156.395 235.048 156.876C234.523 157.357 233.866 157.671 233.162 157.778C232.458 157.885 231.738 157.781 231.093 157.479C230.664 157.28 230.278 156.998 229.96 156.648C229.641 156.298 229.395 155.889 229.237 155.443L222.776 137.687L222.057 136.371L221.337 137.651H221.373ZM221.654 99.147C223.124 99.1457 224.549 99.6542 225.685 100.586C226.822 101.517 227.601 102.814 227.889 104.255C228.177 105.697 227.956 107.193 227.264 108.49C226.572 109.787 225.452 110.803 224.095 111.367C222.737 111.93 221.226 112.006 219.82 111.58C218.413 111.154 217.197 110.254 216.38 109.032C215.562 107.811 215.194 106.344 215.337 104.881C215.48 103.418 216.126 102.05 217.165 101.01C217.753 100.419 218.453 99.9499 219.223 99.6301C219.994 99.3103 220.82 99.1461 221.654 99.147ZM247.806 102.334C241.763 96.2714 233.805 92.4917 225.288 91.6393C216.771 90.7868 208.222 92.9142 201.097 97.6591C193.973 102.404 188.715 109.472 186.218 117.66C183.722 125.848 184.142 134.648 187.407 142.56C190.673 150.473 196.581 157.008 204.124 161.052C211.668 165.097 220.381 166.4 228.779 164.74C237.176 163.08 244.737 158.559 250.175 151.948C255.612 145.337 258.589 137.045 258.597 128.486C258.608 123.631 257.66 118.822 255.808 114.334C253.956 109.846 251.237 105.768 247.806 102.334Z"
											fill="var(--primary-700)"
										/>
										<rect x="139.84" y="57.5968" width="163.653" height="141.806" rx="70.9032" stroke="var(--primary-300)" strokeWidth="0.915632" />
									</g>
									<defs>
										<linearGradient id="paint0_linear_436_2387" x1="221.333" y1="0" x2="221.333" y2="257" gradientUnits="userSpaceOnUse">
											<stop offset="0.750409" stopColor="white" />
											<stop offset="1" stopColor="white" stopOpacity="0" />
										</linearGradient>
										<radialGradient id="paint1_radial_436_2387" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(217.271 94.2142) rotate(180) scale(209.792 143.525)">
											<stop offset="0.887131" stopColor="white" stopOpacity="0" />
											<stop offset="1" stopColor="var(--primary-700)" />
										</radialGradient>
										<radialGradient id="paint2_radial_436_2387" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(164.569 71.3611) rotate(180) scale(158.904 151.525)">
											<stop offset="0.776042" stopColor="var(--primary-700)" stopOpacity="0" />
											<stop offset="1" stopColor="var(--primary-700)" />
										</radialGradient>
										<radialGradient id="paint3_radial_436_2387" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(108.003 46.833) rotate(180) scale(104.286 99.4435)">
											<stop offset="0.776042" stopColor="var(--primary-700)" stopOpacity="0" />
											<stop offset="1" stopColor="var(--primary-700)" />
										</radialGradient>
										<radialGradient id="paint4_radial_436_2387" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(318.368 128.5) rotate(180) scale(209.792 143.525)">
											<stop offset="0.887131" stopColor="white" stopOpacity="0" />
											<stop offset="1" stopColor="var(--primary-700)" />
										</radialGradient>
										<radialGradient id="paint5_radial_436_2387" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(233.739 128.5) rotate(180) scale(158.904 151.525)">
											<stop offset="0.776042" stopColor="var(--primary-700)" stopOpacity="0" />
											<stop offset="1" stopColor="var(--primary-700)" />
										</radialGradient>
										<radialGradient id="paint6_radial_436_2387" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(155.099 128.5) rotate(180) scale(104.286 99.4435)">
											<stop offset="0.776042" stopColor="var(--primary-700)" stopOpacity="0" />
											<stop offset="1" stopColor="var(--primary-700)" />
										</radialGradient>
									</defs>
								</svg>

								<h4 className="font-medium m-0 mb-3 px-5">Accessibility</h4>
								<span className="p-0 m-0 text-xl block line-height-3 px-5 pb-5" style={{ letterSpacing: '0.4px' }}>
									Ensuring that all users, including those with disabilities, can access and use your website with ease, through features such as alt tags, transcripts, and keyboard navigation.
								</span>
							</div>
						</div>
					</div>
				</div>
				<div ref={customizationsRef} id="customizations" className="landing-section px-4 md:px-8 py-8 mt-8">
					<div className="section-top flex w-full flex-column gap-6 align-items-center justify-content-center mb-6">
						<span className="block font-normal text-6xl sm:text-7xl xl:text-8xl text-900">Make it Your Own </span>
						<h4 className="lg:w-8 font-normal text-900 m-0 mb-6 text-center line-height-3" style={{ letterSpacing: '0.6px' }}>
							Take control of your dashboard with FREYA. Make it your own with customizations to suit your business needs. Get creative and elevate your operations with FREYA&lsquo;s Config feature. <br />
							<b className="font-medium">Try it now!</b>
						</h4>
					</div>
					<div className="video relative" style={{ maxWidth: '62rem', margin: '0 auto' }}>
						<img src="/layout/images/landing/image-3.png" className="w-full border-round-3xl mb-4" alt="" />
						<Button icon="pi pi-play text-8xl ml-3" onClick={showModalDialog} className="absolute top-50 right-50 p-button-rounded text-3xl" style={{ marginRight: '-5rem', marginTop: '-5rem', height: '10rem', width: '10rem' }}></Button>
					</div>
					<Dialog
						pt={{
							content: { className: 'flex-grow:1' },
						}}
						header="Video Content"
						visible={displayModal}
						onHide={() => setDisplayModal(false)}
						modal
						style={{ width: '80vw', height: '45vw' }}
						draggable={false}
						resizable={false}
					>
						<iframe
							style={{ width: '100%', height: '100%' }}
							src="https://www.youtube.com/embed/Op4sPxdV_1Q?si=HmXsS-l4yCcQo04F"
							title="YouTube video player"
							frameBorder={0}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
						></iframe>
					</Dialog>
				</div>
				<div ref={appRef} id="apps" className="landing-section px-4 md:px-8 py-8 mt-8">
					<div className="section-top flex w-full gap-6 align-items-center justify-content-start mb-6">
						<span className="block font-normal text-6xl sm:text-7xl xl:text-8xl text-900">Ready to Use Applications </span>
					</div>
					<div className="content lg:flex justify-content-between gap-6">
						<div className="left lg:w-6">
							<h4 className="w-11 font-normal text-900 m-0 mb-6 line-height-3" style={{ letterSpacing: '0.6px' }}>
								Streamline your project building process and save valuable time with the ready-to-use applications offered by <b className="font-medium">FREYA</b>. From Chat to Mail, Product Reviews, Checkout and more, our suite of pre-made tools will have
								you up and running in no time. Start fast-tracking your success and take advantage of the time-saving features of <b className="font-medium">FREYA today.</b>
							</h4>
							<ul className="list-none p-0 m-0">
								<li className="mb-4 flex align-items-center">
									<a onMouseOver={() => changeImageOnHover(0)} style={{ color: activeLink == 0 ? 'var(--primary-color) !important' : '' }} className="text-4xl font-medium text-900 hover:text-primary transition-duration-200 cursor-pointer">
										Chat{' '}
									</a>
									{activeLink === 0 && <i className="pi pi-arrow-right text-4xl text-primary ml-3"></i>}
								</li>
								<li className="mb-4 flex align-items-center">
									<a onMouseOver={() => changeImageOnHover(1)} style={{ color: activeLink == 1 ? 'var(--primary-color) !important' : '' }} className="text-4xl font-medium text-900 hover:text-primary transition-duration-200 cursor-pointer">
										Mail
									</a>
									{activeLink === 1 && <i className="pi pi-arrow-right text-4xl text-primary ml-3"></i>}
								</li>
								<li className="mb-4 flex align-items-center">
									<a onMouseOver={() => changeImageOnHover(2)} style={{ color: activeLink == 2 ? 'var(--primary-color) !important' : '' }} className="text-4xl font-medium text-900 hover:text-primary transition-duration-200 cursor-pointer">
										Task List
									</a>
									{activeLink === 2 && <i className="pi pi-arrow-right text-4xl text-primary ml-3"></i>}
								</li>
								<li className="mb-4 flex align-items-center">
									<a onMouseOver={() => changeImageOnHover(3)} style={{ color: activeLink == 3 ? 'var(--primary-color) !important' : '' }} className="text-4xl font-medium text-900 hover:text-primary transition-duration-200 cursor-pointer">
										Blog
									</a>
									{activeLink === 3 && <i className="pi pi-arrow-right text-4xl text-primary ml-3"></i>}
								</li>
							</ul>
						</div>
						<div className="right lg:w-6 mt-5 lg:mt-0">
							<img src={activeImage.src} className="w-full border-round-3xl mb-4" alt={activeImage.name} />
						</div>
					</div>
				</div>
				<div ref={pricingRef} id="pricing" className="landing-section px-4 md:px-8 py-8 mt-8">
					<div className="surface-ground px-4 py-8 md:px-6 lg:px-8 bg-no-repeat bg-cover" style={{ borderRadius: '24px', background: 'linear-gradient(to left bottom, var(--primary-lighter-color), var(--surface-0))' }}>
						<div className="flex flex-wrap align-items-center">
							<div className="w-full lg:w-6 lg:pr-8">
								<div className="text-900 font-normal text-6xl sm:text-7xl xl:text-8xl mb-4">Pricing</div>
								<h4 className="text-900 font-normal mb-4 lg:mb-0 line-height-3" style={{ letterSpacing: '0.6px' }}>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velitnumquam eligendi quos.
								</h4>
							</div>
							<div className="w-full md:w-6 lg:w-3">
								<ul className="list-none p-0 m-0">
									<li className="flex align-items-center mb-4">
										<i className="pi pi-check text-primary-500 mr-3"></i>
										<span className="text-xl">Arcu vitae elementum</span>
									</li>
									<li className="flex align-items-center mb-4">
										<i className="pi pi-check text-primary-500 mr-3"></i>
										<span className="text-xl">Dui faucibus in ornare</span>
									</li>
									<li className="flex align-items-center mb-4">
										<i className="pi pi-check text-primary-500 mr-3"></i>
										<span className="text-xl">Morbi tincidunt augue</span>
									</li>
								</ul>
							</div>
							<div className="w-full md:w-6 lg:w-3 md:pl-5">
								<ul className="list-none p-0 m-0">
									<li className="flex align-items-center mb-4">
										<i className="pi pi-check text-primary-500 mr-3"></i>
										<span className="text-xl">Duis ultricies lacus sed</span>
									</li>
									<li className="flex align-items-center mb-4">
										<i className="pi pi-check text-primary-500 mr-3"></i>
										<span className="text-xl">Imperdiet proin</span>
									</li>
									<li className="flex align-items-center mb-4">
										<i className="pi pi-check text-primary-500 mr-3"></i>
										<span className="text-xl">Nisi scelerisque</span>
									</li>
								</ul>
							</div>
						</div>
						<div className="flex flex-wrap mt-5 -mx-3">
							<div className="w-full lg:w-4 p-3">
								<div className="p-4 h-full surface-card" style={{ borderRadius: '24px' }}>
									<div className="font-medium text-xl mb-5 text-900">Free Forever</div>
									<div className="font-bold text-5xl mb-5 text-900">Free</div>
									<Button label="Create Account" icon="pi pi-arrow-right" iconPos="right" className="lg:w-full font-medium p-2 p-button-lg p-button-outlined"></Button>
									<p className="text-sm line-height-3 mb-0 mt-5 line-height-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
								</div>
							</div>
							<div className="w-full lg:w-4 p-3">
								<div className="p-4 h-full surface-card" style={{ borderRadius: '24px' }}>
									<div className="font-medium text-xl mb-5 text-900">Monthly</div>
									<div className="flex align-items-center mb-5">
										<span className="text-900 font-bold text-5xl">$29</span>
										<span className="font-medium text-500 ml-2">per month</span>
									</div>
									<Button label="Proceed Monthly" icon="pi pi-arrow-right" iconPos="right" className="lg:w-full font-medium p-2 p-button-lg"></Button>
									<p className="text-sm line-height-3 mb-0 mt-5">Nec ultrices dui sapien eget. Amet nulla facilisi morbi tempus.</p>
								</div>
							</div>
							<div className="w-full lg:w-4 p-3">
								<div className="p-4 h-full flex flex-column surface-card" style={{ borderRadius: '24px' }}>
									<div className="flex flex-row justify-content-between mb-5 align-items-center">
										<div className="text-900 text-xl font-medium">Yearly</div>
										<span className="500 text-green-500 font-semibold px-2 py-1 border-round" style={{ backgroundColor: 'rgba(76, 175, 80, 0.1)' }}>
											🎉 Save 20%
										</span>
									</div>
									<div className="flex align-items-center mb-5">
										<span className="text-900 font-bold text-5xl">$275</span>
										<span className="font-medium text-500 ml-2">per year</span>
									</div>
									<Button label="Proceed Yearly" icon="pi pi-arrow-right" iconPos="right" className="lg:w-full font-medium p-2 p-button-lg"></Button>
									<p className="text-sm line-height-3 mb-0 mt-5">Placerat in egestas erat imperdiet sed euismod nisi porta.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="landing-section px-4 md:px-8 pt-8 mt-8">
					<div className="pt-8 pb-6">
						<div className="grid pb-6 border-bottom-1 border-300">
							<div className="col-12 md:col-3">
								<div className="text-900 font-bold line-height-3 mb-3">Company</div>
								<a className="text-700 block cursor-pointer line-height-3 mb-2 hover:text-primary transition-duration-200">About Us</a>
								<a className="text-700 block cursor-pointer line-height-3 mb-2 hover:text-primary transition-duration-200">News</a>
								<a className="text-700 block cursor-pointer line-height-3 mb-2 hover:text-primary transition-duration-200">Investor Relations</a>
								<a className="text-700 block cursor-pointer line-height-3 mb-2 hover:text-primary transition-duration-200">Careers</a>
								<a className="text-700 block cursor-pointer line-height-3 hover:text-primary transition-duration-200">Media Kit</a>
							</div>
							<div className="col-12 md:col-3">
								<div className="text-900 font-bold line-height-3 mb-3">Resourses</div>
								<a className="text-700 block cursor-pointer line-height-3 mb-2 hover:text-primary transition-duration-200">Get Started</a>
								<a className="text-700 block cursor-pointer line-height-3 mb-2 hover:text-primary transition-duration-200">Learn</a>
								<a className="text-700 block cursor-pointer line-height-3 hover:text-primary transition-duration-200">Case Studies</a>
							</div>
							<div className="col-12 md:col-3">
								<div className="text-900 font-bold line-height-3 mb-3">Community</div>
								<a className="text-700 block cursor-pointer line-height-3 mb-2 hover:text-primary transition-duration-200">Discord</a>
								<a className="text-700 block cursor-pointer line-height-3 mb-2 hover:text-primary transition-duration-200">Events</a>
								<a className="text-700 block cursor-pointer line-height-3 mb-2 hover:text-primary transition-duration-200">FAQ</a>
								<a className="text-700 block cursor-pointer line-height-3 hover:text-primary transition-duration-200">Blog</a>
							</div>
							<div className="col-12 md:col-3">
								<div className="text-700 line-height-3 mb-3">Join our community to get weekly updates and unique gifts every friday.</div>
								<InputText placeholder="Enter your email" className="w-full" />
								<Button label="Join" className="px-5 mt-3 py-3"></Button>
							</div>
						</div>
						<div className="flex flex-wrap align-items-center justify-content-between mt-6">
							<div className="flex align-items-center justify-content-start md:mb-0 mb-3">
								<svg height="32" viewBox="0 0 66 19" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0 0H4.99056V3.20992L14.1395 1.39922V5.5969L4.99056 7.40759V8.80682L14.1395 6.99612V11.1938L4.99056 13.0045V16.7907H0V0Z" fill="url(#paint0_linear_7_2)" />
									<path
										d="M26.6589 6.69198H24.5387V6.08721C24.5387 5.61683 24.8058 5.34804 25.2732 5.34804H26.6422V2.94574H24.4719C22.5686 2.94574 21.5669 4.0041 21.5669 5.83522V6.69198H20.031L20.0477 9.14468H21.5336V15.6124H24.6388V9.14468H26.6589V6.69198Z"
										fill="url(#paint1_linear_7_2)"
									/>
									<path d="M33.1864 6.48062C32.1152 6.48062 31.3453 6.78389 30.7093 7.52522L30.2239 6.51432H28.1318V15.6124H31.2449V10.996C31.2449 9.83344 31.7135 9.34483 32.8014 9.34483H34.0232V6.48062H33.1864Z" fill="url(#paint2_linear_7_2)" />
									<path
										d="M44.7752 10.8813C44.7752 8.25063 42.7879 6.18605 39.9064 6.18605C37.0912 6.18605 35.0543 8.21733 35.0543 10.9645C35.0543 13.7118 37.1077 15.7597 39.9064 15.7597C42.1421 15.7597 43.9637 14.4777 44.593 12.4297H41.5128C41.2313 12.9625 40.6185 13.2789 39.9064 13.2789C38.9294 13.2789 38.2835 12.7461 38.0848 11.7138H44.7255C44.7586 11.4307 44.7752 11.1643 44.7752 10.8813ZM39.9064 8.61692C40.8338 8.61692 41.4797 9.09977 41.7446 9.99886H38.1345C38.3829 9.09977 39.0122 8.61692 39.9064 8.61692Z"
										fill="url(#paint3_linear_7_2)"
									/>
									<path
										d="M52.0281 6.48062L50.235 11.5154L48.3077 6.48062H44.9225L48.6597 14.8607C48.2407 15.9926 47.8888 16.3137 46.6989 16.3137H45.8274V19H46.9C49.2462 19 50.3523 18.0032 51.5756 15.1986L55.3799 6.48062H52.0281Z"
										fill="url(#paint4_linear_7_2)"
									/>
									<path
										d="M63.3589 6.45291L63.0402 7.15342C62.3023 6.53631 61.3464 6.18605 60.2731 6.18605C57.506 6.18605 55.5271 8.17083 55.5271 10.9562C55.5271 13.7582 57.506 15.7597 60.2731 15.7597C61.3296 15.7597 62.2688 15.4261 63.0067 14.8257L63.275 15.4595H65.6899V6.45291H63.3589ZM60.6924 13.0244C59.5185 13.0244 58.6632 12.1404 58.6632 10.9562C58.6632 9.78868 59.5185 8.92138 60.6924 8.92138C61.8663 8.92138 62.7216 9.78868 62.7216 10.9562C62.7216 12.1404 61.8663 13.0244 60.6924 13.0244Z"
										fill="url(#paint5_linear_7_2)"
									/>
									<defs>
										<linearGradient id="paint0_linear_7_2" x1="4.02237" y1="9.46943e-08" x2="8.24281" y2="16.4905" gradientUnits="userSpaceOnUse">
											<stop stopColor="var(--primary-400)" />
											<stop offset="1" stopColor="var(--primary-700)" />
										</linearGradient>
										<linearGradient id="paint1_linear_7_2" x1="25.0035" y1="0.213131" x2="18.0327" y2="13.0728" gradientUnits="userSpaceOnUse">
											<stop stopColor="var(--primary-400)" />
											<stop offset="1" stopColor="var(--primary-700)" />
										</linearGradient>
										<linearGradient id="paint2_linear_7_2" x1="30.3648" y1="0.168197" x2="23.1051" y2="13.5662" gradientUnits="userSpaceOnUse">
											<stop stopColor="var(--primary-400)" />
											<stop offset="1" stopColor="var(--primary-700)" />
										</linearGradient>
										<linearGradient id="paint3_linear_7_2" x1="29.6161" y1="0.521788" x2="21.5283" y2="15.4296" gradientUnits="userSpaceOnUse">
											<stop stopColor="var(--primary-400)" />
											<stop offset="1" stopColor="var(--primary-700)" />
										</linearGradient>
										<linearGradient id="paint4_linear_7_2" x1="35.5631" y1="0.11682" x2="27.7574" y2="14.5441" gradientUnits="userSpaceOnUse">
											<stop stopColor="var(--primary-400)" />
											<stop offset="1" stopColor="var(--primary-700)" />
										</linearGradient>
										<linearGradient id="paint5_linear_7_2" x1="23.0068" y1="1.38676" x2="15.3473" y2="15.3525" gradientUnits="userSpaceOnUse">
											<stop stopColor="var(--primary-400)" />
											<stop offset="1" stopColor="var(--primary-700)" />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div className="flex align-items-center justify-content-between md:mb-0 mb-3">
								<a className="text-700 cursor-pointer md:ml-5 ml-2 hover:text-primary transition-duration-200">Brand Policy</a>
								<a className="text-700 cursor-pointer md:ml-5 ml-2 hover:text-primary transition-duration-200">Privacy Policy</a>
								<a className="text-700 cursor-pointer md:ml-5 ml-2 hover:text-primary transition-duration-200">Terms of Service</a>
							</div>
							<div className="flex align-items-center justify-content-between">
								<a className="cursor-pointer text-500 md:ml-3 ml-2 hover:text-primary transition-duration-200">
									<i className="pi pi-twitter text-xl"></i>
								</a>
								<a className="cursor-pointer text-500 md:ml-3 ml-2 hover:text-primary transition-duration-200">
									<i className="pi pi-facebook text-xl"></i>
								</a>
								<a className="cursor-pointer text-500 md:ml-3 ml-2 hover:text-primary transition-duration-200">
									<i className="pi pi-github text-xl"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ScrollTop></ScrollTop>
		</>
	);
};

export default LandingPage;
