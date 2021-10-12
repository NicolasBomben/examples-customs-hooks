import React, { useEffect }from 'react';
import { useForm } from '../../hooks/useForm';
import './form.css';



export const FormWhitCustomHook = () => {


    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect( () => {
        console.log('email change')
    }, [ email ]);


    const handleSubmit = ( e ) => {
        e.preventDefault();

        console.log( formValues );
    }

    return (
        <form onSubmit = { handleSubmit }>
           <h1>Form Whit Custom Hook</h1>
           <hr/>

           <div className="form-group">
               <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }     
               />
               

           </div>

           <div className="form-group">
               <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="example@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }     
               />
               

           </div>

           <div className="form-group">
               <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="********"
                    autoComplete="off"
                    value={ password }
                    onChange={ handleInputChange }     
               />
               

           </div>

           <button type ="submit" className="btn btn-primary">
               Guardar
           </button>


        </form>
    )
}
