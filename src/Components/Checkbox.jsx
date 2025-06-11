import React from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox } from "primereact/checkbox";

function Checkbox({ field }) {
    let { control } = useFormContext
    let checkbox = field.checkbox
    return (
        <>

            {/* <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox> */}
            {

                checkbox.map((val) => (

                    <Controller
                        name={val.name}
                        control={control}
                        defaultValue={null}
                        render={({ field: controllerField }) => (
                            <Checkbox {...controllerField}></Checkbox>
                        )}
                        key={val.name}
                    />
                ))
            }


        </>
    )
}

export default Checkbox