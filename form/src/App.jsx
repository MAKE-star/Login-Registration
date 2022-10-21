import React,{ useState } from "react"
import "./app.css"
import Formdata from "./components/Formdata"

const App = () => {
    const[values ,setValues] = useState({
        username: "",
        email:"",
        birthday: "",
        password: "",
        confirmPassword: "",
        });

    const inputs = [
        {
            id: 1,
            name:"username",
            type: "text",
            placeholder:"Adeoye Mayopo",
            errorMessage: "no special character and username must be 5-10 characters long!",
            label: "Username:",
            pattern: "^[A-Za-z0-9]{5,20}$",
            required :true,
        },

        {
            id: 2,
            name:"email",
            type: "email",
            placeholder:"adeoyemayopoelijah@gmail.com",
            errorMessage: "email must be valid!",
            label: "Email:",
            required :true,
        },

        {
            id: 3,
            name:"birthday",
            type: "date",
            placeholder:"Birthday",
            label: "Birthday:",
        },

        {
            id: 4,
            name:"password",
            type: "password",
            placeholder:"********",
            errorMessage: "minimum of 8 characters!",
            pattern: "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])([a-zA-Z0-9!@#$%^&*]{8,20}$",
            label: "Password:",
            required :true,
        },

        {
            id: 5,
            name:"confirmPassword",
            type: "password",
            placeholder:"********",
            errorMessage: "password should match!",
            pattern: values.password,
            label: "Confirm Password:",
            required :true,
        }
    ]
    
  
    const processSubmit =(e) => {
      e.preventDefault();
    };
    
    const onChange =(e) => {
        setValues({...values,[e.target.name]: e.target.value})
      };
    console.log(values);

    return (
        <div className="app">
            <form onSubmit={processSubmit}>
                <h1>Registration Form</h1>
                {inputs.map((input) => (
                    <Formdata key={input.id}{...input} value={values[input.name]} onChange={onChange}/>
            ))}
                <button>Submit</button>
            </form>
        </div> 
    );
};

export default App