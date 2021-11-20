const useStyle = () => {
	const style = {
		background: {
			minHeight: '100vh',
			backgroundImage: `url(https://i.ibb.co/kgvNf9f/apartmentbg2.jpg)`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			margin: 0,
		},
		form: {
			display: 'flex',
			flexDirection: 'column',

			justifyContent: 'center',
			alignItems: 'center',

			paddingTop: 5,
		},
		formBackground: {
			minHeight: '70vh',
			background: 'rgba(0,0,1,0.5)',
			marginTop: 20,
		},
		input: {
			width: '70%',
			height: '2rem',
			paddingLeft: 10,
			fontWeight: 'bold',
			fontSize: '1.1rem',
			marginBottom: 2,
		},
	};
	return style;
};

export default useStyle;
