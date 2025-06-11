import { InputText } from 'primereact/inputtext'
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
                    <InputText
                        {...controllerField}
                        id={field.name}
                        type={field.type}
                        value={field.value}
                        placeholder={field.placeholder}
                        disabled={field.disable}
                    />
                )}
            />

        </>
    )
}

export default Textinput

