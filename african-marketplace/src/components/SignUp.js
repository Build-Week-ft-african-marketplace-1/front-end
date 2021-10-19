import React, { useState, useEffect } from "react";
import axios from 'axios';


const initialFormVals = {
   name:'',
   email: "",
   username: "",
   password: "",
   terms: false,
}


export default function SignUp(props){
   const [ user, setUser ] = useState([]);
   const [ formVals, setFormVals ] = useState(initialFormVals);
   
   //submit new user
   const onSubmit = (evt) =>{
      evt.preventDefault()
      submit(formVals)
   }

   const submit = () =>{
      const newUser ={
         name: formVals.name .trim(),
         email: formVals.email.trim(),
         username: formVals.username.trim(),
         password: formVals.password.trim(),
         terms: !!formVals.terms
      }
      postNewUser(newUser)
      console.log(newUser) //proof of working
   }

   // useEffect(() => {
      const postNewUser = (newUser) =>{
         axios.post('https://reqres.in/api/users', newUser)
            .then(res =>{
               setUser([res.data, ...user]) // will we actually need to spread this here?
            })
            .catch( err => console.error(err))
            .finally(() => console.log('cleaning'))
      }
   //    postNewUser(user)

   //  }, [])

   // Changes here
   const onChange = (evt) =>{
      const {name, value, type, checked } = evt.target;
      const valToUse = type === 'checkbox' ? checked : value;
      update( name, valToUse );
   }
   const update = ( name, value ) =>{
      //! validate( name, value );
      setFormVals({...formVals, [name]: value})
   }

   return (
      <div>

      <form id="signUp" onSubmit={onSubmit}>
         <label> Full Name (first last):
            <input
               type='text'
               name='name'
               value={formVals.name}
               onChange={onChange}
               
               />
         </label>
         <label> Email:
            <input
               type='email'
               name='email'
               value={formVals.email}
               onChange={onChange}
               />
         </label>
         <label> Username:
            <input
               type='text'
               name='username'
               value={formVals.username}
               onChange={onChange}
               />
         </label>
         <label> Password:
            <input
               type='password'
               name='password'
               value={formVals.password}
               onChange={onChange}
               />
         </label>
         <label> Terms of service
            <input
               type='checkbox'
               name='terms'
               checked={formVals.terms}
               onChange={onChange}
               />   
         </label>
         <input type='submit' /* onClick={(() => <Route path='/welcome'/>)} *//>
      </form>
     
   </div>
   );
}