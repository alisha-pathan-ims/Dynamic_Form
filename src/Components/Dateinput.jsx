import { Calendar } from 'primereact/calendar';
import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'

function Dateinput({ field }) {
    
    const { control } = useFormContext()
    return (
        <>

            <Controller
                name={field.name}
                control={control}
                rules={{ required: 'Date is required' }}
                defaultValue={null}
                render={({ field: controllerField }) => (
                    <Calendar
                        {...controllerField}
                        id={field.name}
                        showIcon
                        placeholder="dd/mm/yyyy"
                    />
                )}
            />

        </>
    )
}

export default Dateinput