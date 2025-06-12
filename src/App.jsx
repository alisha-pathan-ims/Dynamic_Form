import React from "react"
import obj from "./obj"
import Formfield from "./Components/Formfield"
import { FormProvider, useForm } from "react-hook-form"
import { Button } from "primereact/button"
import 'primeflex/primeflex.css';
import axios from "axios"

// console.log(obj);
function App() {
  const methods = useForm();
  const onsubmit = async (data) => {
    console.log("hii");

    console.log("Form data:", data);
    try {
      let datafetch = await axios.get('http://localhost:2000/outcome')
      let dataget = datafetch.data
      console.log(dataget);

      let datapost = await axios.post('http://localhost:2000/outcome', data)

    }
    catch (e) {
      console.log(e, + " =====>errors");

    }
  };
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onsubmit)}>
          <div className="container mt-6">
            {
              obj.map((field) => (

                <Formfield key={field.label} field={field} className='inputfields'>
                </Formfield>
              ))
            }

            <Button label="Submit" type="submit" />
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default App
