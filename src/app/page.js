'use client';
import React from 'react';
import { Navbar } from '/pages/navbar';

export default function Home() {
	return (
		<>
			<div className="flex flex-row size-full box-border space-x-5 ">
				<div className="flex p-5 grow justify-center text-2xl font-bold
					min-w-fit min-h-full max-w-44 text-white bg-raisin-Black" 
				>
					<Navbar />
				</div>
					
				<div className="flex flex-nowrap p-5 flex-col grow justify-center bg-violet-400 text-1xl rounded-2xl 
					min-h-full space-y-10 max-w-screen-xl"
				>
						<div className="flex flex-nowrap justify-center grow-0 p-5 bg-indigo-400 text-1xl rounded-2xl
							min-h-7 max-h-1/8 border-4 border-solid border-violet-100 text-2xl font-bold"
						>
							Text	
						</div>	

						<div className="flex flex-nowrap justify-start flex-col grow bg-transparent">
							Text
						</div>
				</div>
			</div>
		</>
	);
};





