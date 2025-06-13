import React from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Checkbox } from 'primereact/checkbox'

function Checkboxinput({ field }) {
    const { control } = useFormContext()
    const { checkbox, label, name } = field

    return (
        <div className='flex flex-wrap align-items-center gap-4 m-3 mx-0'>
            <div>
                <label htmlFor={label} className='p-2'>{label}</label>
            </div>
            <div className='grid m-2 gap-4 pb-2'>
                <Controller
                    name={name}
                    control={control}
                    defaultValue={[]}
                    render={({ field: controllerField }) => (
                        <>
                            {checkbox.map((val) => {
                                const isChecked = controllerField.value.some(obj => obj.id === val.id)

                                const toggleValue = () => {
                                    if (isChecked) {
                                        controllerField.onChange(
                                            controllerField.value.filter(obj => obj.id !== val.id)
                                        )
                                    } else {
                                        controllerField.onChange([
                                            ...controllerField.value,
                                            { id: val.id }
                                        ])
                                    }
                                }

                                return (
                                    <div key={val.id} className="flex col-3 align-items-center gap-3 m-1">
                                        <Checkbox
                                            inputId={val.name}
                                            onChange={toggleValue}
                                            checked={isChecked}
                                        />
                                        <label htmlFor={val.name}>{val.label}</label>
                                    </div>
                                )
                            })}
                        </>
                    )}
                />
            </div>
        </div>
    )
}

export default Checkboxinput
