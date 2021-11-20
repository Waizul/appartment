import { useEffect, useState } from 'react';

const useApartment = (number) => {
	const [apartments, setApartments] = useState([]);
	useEffect(() => {
		fetch(
			`https://dry-falls-36649.herokuapp.com/apartments?number=${number}`,
		)
			.then((res) => res.json())
			.then((data) => {
				setApartments(data);
			});
	}, [number]);
	return apartments;
};
export default useApartment;
