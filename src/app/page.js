'use client';
import React from 'react';
import Router from 'next/router';
import Link from 'next/link';

export default function Home() {
	return (
		<>
		<div class="flex flex-row size-full box-border space-x-7">
				<div class="flex p-5 grow-0 justify-center bg-violet-300 text-2xl font-bold rounded-2xl 
					min-w-fit min-h-full" 
				>
					<Navbar />
				</div>

				<div class="flex flex-nowrap flex-col p-5 grow justify-center bg-violet-400 text-1xl rounded-2xl 
					min-w-25 min-h-full space-y-10"
				>
					<div className="flex p-3 grow-0 justify-center bg-violet-700 rounded-2xl text-1xl 
						min-h-2xl "
					>

					</div>

					<div className="flex ">

					</div>
				</div>
			</div>
		</>
	);
};


function Navbar() {

	return (
		<>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/route1">Route1</Link>
				</li>
				<li>
					<Link href="/route2">Route2</Link>
				</li>
				<li>
					<Link href="/route3">Route3</Link>
				</li>
				<li>
					<Link href="/about">About</Link>
				</li>
			</ul>
		</>
	);
};


