import { InputText } from 'primereact/inputtext'
import { FloatLabel } from "primereact/floatlabel";
import React from 'react'
import { Controller, useForm, useFormContext } from 'react-hook-form'

function Textinput({ field }) {
    const { control } = useFormContext()

    return (

        <>
            <Controller
                name={field.name}
                control={control}
                defaultValue=""
                rules={{
                    required: field.required,
                    ...(field.pattern && {
                        pattern: {
                            value: field.pattern,
                            message: field.errorMessage || "Invalid"
                        }
                    })

                }}
                render={({ field: controllerField }) => (

                    <FloatLabel className="mb-5 w-full mx-0">

                        <InputText
                            {...controllerField}
                            id={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            disabled={field.disable}
                            style={{ "width": "100%" }}
                        />
                        <label htmlFor={field.label} >{field.name}</label>
                    </FloatLabel>
                )}
            />

        </>
    )
}

export default Textinput

