import { Calendar } from 'primereact/calendar';
import React, { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form'

function Dateinput({ field }) {
    const { control } = useFormContext()
    let today = new Date();

    const [daate, setDay] = useState(null);

    // console.log(field);
    // let minDate = new Date()
    // let date = today.getFullYear() - 20
    // minDate.setFullYear(date)


    return (
        <>
            <Controller
                name={field.name}
                control={control}
                rules={{ required: 'Date is required' }}
                defaultValue={null}
                render={({ field: controllerField }) => (

                    // <Calendar {...controllerField} minDate={minDate} maxDate={field.maxDate} readOnlyInput placeholder="dd/mm/yyyy" dateFormat="dd/mm/yy" showIcon /> //bdate
                    <Calendar {...controllerField} minDate={field.minDate} readOnlyInput placeholder="dd/mm/yyyy" dateFormat="dd/mm/yy" showIcon /> //salary purpose

                )}
            />
        </>
    )

}

export default Dateinput