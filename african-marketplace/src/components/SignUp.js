import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

import * as yup from 'yup';
import schema from '../validation/signupSchema';

import { StyledForm, StyledButton, StyledCheckbox } from "./styles/OurStyles";


const initialFormVals = {
   name:'',
   email: "",
   username: "",
   password: "",
   terms: false,
}

const initialFormErrors = {
   name:'',
   email: '',
   username: '',
   password: '',
   terms: false,
}

const initialDisabled = true;

export default function SignUp(props){
   const [ user, setUser ] = useState([]);
   const [ formVals, setFormVals ] = useState(initialFormVals);
   const [ disabled, setDisabled ] = useState(initialDisabled)
   const [ formErrors, setFormErrors ] = useState(initialFormErrors)
   
   const history = useHistory();

   //submit new user
   const onSubmit = (evt) =>{
      evt.preventDefault()
      submit(formVals)
   }

   const submit = () =>{
      const newUser = {
         name: formVals.name .trim(),
         email: formVals.email.trim(),
         username: formVals.username.trim(),
         password: formVals.password.trim(),
         terms: !!formVals.terms
      }
      postNewUser(newUser)
   }

   //? post new User to base
   // useEffect(() => {
      const postNewUser = (newUser) =>{
         axios.post('https://reqres.in/api/users', newUser)
            .then(res =>{
               setUser([res.data, ...user]) // will we actually need to spread this here?
            })
            .catch( err => console.error(err))
            .finally(() => history.push('/'))
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
      validate( name, value ); //validation on the update
      setFormVals({ ...formVals, [name]: value})
   }

   //! Validate
   const validate = (name, value) =>{
      yup.reach(schema, name)
         .validate(value)
         .then(() =>{
            setFormErrors({ ...formErrors, [name]: ''})
         })
         .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]})
         )
   }
   //! disable
   useEffect(() =>{
      schema.isValid(formVals)
         .then(valid =>{
            setDisabled(!valid)
         })
   }, [formVals])


//Return STATMENT
   return (
      <StyledForm>
      <form id="signUp" onSubmit={onSubmit}>
         <header> Sign Up </header>
      
      <section>
        <div>
         <label> Full Name: </label>
            <input
               type='text'
               name='name'
               value={formVals.name}
               onChange={onChange}
               placeholder= 'First Last'
               />
        </div>
        {disabled ? <span className='error'>{formErrors.name}</span> : null }
      <div >
         <label> Email: </label>
            <input
               type='email'
               name='email'
               value={formVals.email}
               onChange={onChange}
               placeholder='example@example.com'
               />
        {disabled ? <span className='error'>{formErrors.email}</span> : null }
      </div>
      <div>
         <label> Username:</label>
            <input
               type='text'
               name='username'
               value={formVals.username}
               onChange={onChange}
               placeholder='Please Enter Username'
               />
         {disabled ? <span className='error'>{formErrors.username}</span> : null }
      </div>
      <div >
         <label> Password: </label>
            <input
               type='password'
               name='password'
               value={formVals.password}
               onChange={onChange}
               placeholder= 'Please Enter Password'
               />
         {disabled ? <span className='error'>{formErrors.password}</span> : null }
      </div>
      <div>
         <StyledCheckbox>
            <label> Terms of Service </label>
            <input
               type='checkbox'
               name='terms'
               checked={formVals.terms}
               onChange={onChange}
               />  
         </StyledCheckbox> 
         {disabled ? <span className='error'>{formErrors.terms}</span> : null }
      </div>
         <StyledButton>
            <button disabled={disabled} id='submitBtn' type='submit'> Sign Up </button> 
         </StyledButton>
      </section>
      </form>
     
   </StyledForm>
   );
}