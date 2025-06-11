import React from "react"
import obj from "./obj"
import Formfield from "./Components/Formfield"
import { FormProvider, useForm } from "react-hook-form"
import { Button } from "primereact/button"

// console.log(obj);
function App() {
  const methods = useForm();
  const onsubmit = (data) => {
    console.log("hii");
    
    console.log("Form data:", data);
  };
  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onsubmit)}>
          <div className="container">
            {
              obj.map((field) => (

                <Formfield key={field.label} field={field} className='inputfields'>
                </Formfield>
              ))
            }

            <Button label="Submit" />
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default App
