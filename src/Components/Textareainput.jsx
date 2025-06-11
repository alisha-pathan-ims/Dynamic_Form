import { InputTextarea } from 'primereact/inputtextarea'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

function Textareainput({field}) {
    const { control } = useFormContext()
    return (
        <>
            <Controller
                name={field.name}
                control={control}
                rules={{ required: field.required }}
                render={({ field: controllerField }) => (
                    <InputTextarea autoResize
                        {...controllerField}
                        type={field.type}
                        placeholder={field.placeholder}
                        disabled={field.disable}
                    />
                )}
            />
        </>
    )
}

export default Textareainput