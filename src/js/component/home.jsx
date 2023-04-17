import React, { useEffect, useState } from "react";
import SecondCounter from "./card.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component

const Home = () => {
	const [seconds, setSeconds] = useState(0)

	useEffect(() => {
		setInterval(() => {
			setSeconds(prevSeconds => prevSeconds + 1);
		}, 1000)
	}, []);
	
	useEffect(() => {
		if (seconds === 11) {
			setSeconds(0)
		}
	}, [seconds])
    
	return (	

       //div variante de numero
		<div className="text-center">
			<SecondCounter number={seconds}/>
		</div>
	);

};

export default Home;
