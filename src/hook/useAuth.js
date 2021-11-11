import { useContext } from 'react';
import { authContext } from '../context/ProvideAuth';

const useAuth = () => {
	return useContext(authContext);
};
export default useAuth;
