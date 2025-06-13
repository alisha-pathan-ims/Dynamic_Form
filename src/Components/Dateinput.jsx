import { Calendar } from 'primereact/calendar';
import { FloatLabel } from 'primereact/floatlabel';
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
        <div>
            <Controller
                name={field.name}
                control={control}
                rules={{ required: 'Date is required' }}
                defaultValue={null}
                render={({ field: controllerField }) => (

                    // <Calendar {...controllerField} minDate={minDate} maxDate={field.maxDate} readOnlyInput placeholder="dd/mm/yyyy" dateFormat="dd/mm/yy" showIcon /> //bdate
                    <FloatLabel>
                        <label htmlFor={field.labe}>{field.label}</label>

                        <Calendar {...controllerField} minDate={field.minDate} readOnlyInput dateFormat="dd/mm/yy" showIcon className='w-full mb-5' />
                    </FloatLabel>
                )}
            />
        </div>
    )

}

export default Dateinput