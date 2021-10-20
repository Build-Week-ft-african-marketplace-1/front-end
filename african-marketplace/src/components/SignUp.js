import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

import * as yup from 'yup';
import schema from '../validation/signupSchema';

import styled from "styled-components";

import { StyledForm, StyledButton } from "./styles/OurStyles";

const StyledTerms = styled.div`
   div {
      justify-self: center;
      border-bottom: none;
   }
   label {
      padding-left: 0;
   }
   input {
      box-shadow: none;
      &:focus{
         //! fixed the shadow on the Terms Checkbox
         box-shadow: none;
      }
   }

`



const initialFormVals = {
   name:'',
   email: "",
   username: "",
   password: "",
   terms: false,
}

const initialDisabled = true;

const initialFormErrors = {
   name:'',
   email: '',
   username: '',
   password: '',
   terms: '',
}


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
      // console.log(newUser) //! proof of working
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
      setFormVals({...formVals, [name]: value})
   }

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
      <div >
         <label> Email: </label>
            <input
               type='email'
               name='email'
               value={formVals.email}
               onChange={onChange}
               placeholder='example@example.com'
               />
      </div>
      <div>
         <label> Username:</label>
            <input
               type='text'
               name='username'
               value={formVals.username}
               onChange={onChange}
               placeholder='Please enter username'
               />
      </div>
      <div >
         <label> Password: </label>
            <input
               type='password'
               name='password'
               value={formVals.password}
               onChange={onChange}
               placeholder= ''
               />
         </div>
         <div>
            <StyledTerms>
               <label> Terms of Service </label>
               <input
                  type='checkbox'
                  name='terms'
                  checked={formVals.terms}
                  onChange={onChange}
                  />  
            </StyledTerms> 
         </div>
         <StyledButton>
            <button id='submitBtn' type='submit'> Sign Up </button> 
         </StyledButton>
      </section>
      </form>
     
   </StyledForm>
   );
}