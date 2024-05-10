import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Excel2PDF from './components/excel2pdf';
import App from './components/img2pdf';


export const metadata = {
	title: 'Homepage',
};

const page = () => {
	return (
		<>
			<Hero />
			<About />
			<div className='flex flex-row justify-evenly'>
			<Excel2PDF />
			<App />
			</div>

		</>
	);
};

export default page;