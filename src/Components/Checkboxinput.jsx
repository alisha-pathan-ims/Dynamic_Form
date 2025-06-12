import React, { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox } from "primereact/checkbox";

function Checkboxinput({ field }) {

    
    let { control } = useFormContext()
    let { checkbox,label } = field

    return (
        <div className='flex flex-wrap align-items-center gap-4'>
        <div>
            <label htmlFor={label} className='p-2' >{label}</label>
        </div>
            <div className='flex flex-wrap mx-2 gap-4 pb-2' >

                {
                    checkbox.map((val) => (

                        <div key={val.name} className="flex align-items-center gap-3 ">
                            <Controller
                                name={val.name}
                                control={control}
                                defaultValue={''}
                                render={({ field: controllerField }) => (
                                    <>
                                        <Checkbox
                                            inputId={val.name}
                                            onChange={(e) => {
                                                controllerField.onChange(e.checked ? val.label : '');
                                            }}
                                            checked={controllerField.value === val.label}

                                        ></Checkbox>
                                        <label htmlFor={val.name} className='pt-2 '>{val.label}</label>
                                    </>
                                )}

                                key={val.name}
                            />

                        </div>
                    ))
                }

            </div >

        </div>
    )
}

export default Checkboxinput