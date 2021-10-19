import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';


const Logout = () => {  
    const { push } = useHistory();
    useEffect(() => { 
            push('/');
        });
   return(<div></div>);
    }
export default Logout;