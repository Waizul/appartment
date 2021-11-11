import { useEffect, useState } from 'react';

const useApartment = (number) => {
	const [apartments, setApartments] = useState([]);
	useEffect(() => {
		fetch(`http://localhost:7000/apartments?number=${number}`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setApartments(data);
			});
	}, []);
	return apartments;
};
export default useApartment;
