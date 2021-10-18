import React from "react";

const initialFormVals = {
   name:'MyName',
   email: "myEmail@aol.com",
   username: "username here",
   password: "password"
}

export default function SignUp(props){

   const onSubmit = (evt) =>{
      evt.preventDefault()
      props.submit()
   }

   const onChange = (evt) =>{
      const {name, value, } = evt.target

   }

   return (
      <form id="signUp" onSubmit={onSubmit}>
         <label> Full Name (first last):
            <input
               type='text'
               name='name'
               value={initialFormVals.name}
               onChange={onChange}
            />
         </label>
         <label> Email:
            <input
               type='email'
               name='email'
               value={initialFormVals.email}
               onChange={onChange}
            />
         </label>
         <label> Username:
            <input
               type='text'
               name='username'
               value={initialFormVals.username}
               onChange={onChange}
            />
         </label>
         <label> Password:
            <input
               type='password'
               name='password'
               value={initialFormVals.password}
               onChange={onChange}
            />
         </label>
         <input type='submit' /* onClick={(() => <Route path='/welcome'/>)} *//>
      </form>
   );
}