import Image from 'next/image';
import React from 'react';

const Hero = () =>
{
    return (
        <div className="h-screen flex justify-between items-center bg-center bg-cover bg-black/70">
            <div className=' text-white z-[2] text-center px-2 justify-evenly h-50% w-50%'>
            <span class="icon-[arcticons--pdfconverter]" style={{color: "white"}}></span>
                    <div className='text-5xl py-4'>PDF Fusion</div>
                    <p className='text-xl text-justify h-50 w-50 m-10'> A tool that converts documents to PDFs and PDFs to documents. 
                        PDF Fusion streamlines the process, making conversions faster and easier.</p>
            </div>
            <div className=' bg-white justify-around px-10 h-50% w-50% mr-5'>
            <Image
                src="/download.png"
                width={500}
                height={500}
                alt="Picture of the author"
            />

            </div>
        </div>
    )
}

export default Hero