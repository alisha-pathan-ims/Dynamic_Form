import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox } from "primereact/checkbox";

function Checkboxinput({ field }) {
    const { control } = useFormContext();
    const { checkbox, label, name } = field;

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
                    render={({ field: controllerField }) => {
                        const selectedIds = controllerField.value || [];

                        const toggleCheckbox = (id) => {
                            const exists = selectedIds.find(item => item.id === id);
                            let updated;
                            if (exists) {
                                updated = selectedIds.filter(item => item.id !== id);
                            } else {
                                updated = [...selectedIds, { id }];
                            }
                            controllerField.onChange(updated);
                        };

                        return checkbox.map((val) => (
                            <div key={val.id} className="flex col-3 align-items-center gap-3 m-1">
                                <Checkbox
                                    inputId={val.id}
                                    onChange={() => toggleCheckbox(val.id)}
                                    checked={selectedIds.some(item => item.id === val.id)}
                                />
                                <label htmlFor={val.id} className='pt-1/2'>{val.label}</label>
                            </div>
                        ));
                    }}
                />
            </div>
        </div>
    );
}

export default Checkboxinput;
