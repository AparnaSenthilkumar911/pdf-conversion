import React from 'react'
import Excel2PDF from '../components/excel2pdf';
import App from '../components/img2pdf'
export const metadata = {
    title: 'conversion'
}

const page = () =>
{
    return (
        <div className='text-center bg-yellow-100 mt-[50px] h-[100vh]'>
            <h1 className="font-bold text-2xl uppercase pt-8">PDF Fusion!</h1>
            <p>This tool allows you to convert files into various formats</p>
            <div className='flex flex-row justify-evenly p-10'>
			<Excel2PDF />
			<App />
			</div>
        </div>
    )
}

export default page