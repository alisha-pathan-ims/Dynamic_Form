import { FloatLabel } from 'primereact/floatlabel'
import { InputTextarea } from 'primereact/inputtextarea'
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

function Textareainput({ field }) {
    const { control } = useFormContext()
    return (
        <>
            <Controller
                name={field.name}
                control={control}
                rules={{ required: field.required }}
                render={({ field: controllerField }) => (
                    <FloatLabel className='w-full m-2 mx-0'>
                        <InputTextarea autoResize
                            {...controllerField}
                            type={field.type}
                            placeholder={field.placeholder}
                            disabled={field.disable}
                            className='w-full'
                        />
                        <label htmlFor={field.label}>{field.label}</label>
                    </FloatLabel>
                )}
            />
        </>
    )
}

export default Textareainput