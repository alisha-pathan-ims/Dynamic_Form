import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Checkbox } from 'primereact/checkbox';

function Checkboxinput({ field }) {
    const { control } = useFormContext();
    const { checkbox, name } = field;

    return (
        <div className="flex flex-wrap justify-content-center gap-3">
            <Controller
                name={name}
                control={control}
                defaultValue={[]}
                render={({ field: controllerField }) => {
                    const selectedValues = controllerField.value;

                    const handleChange = (e, optionValue) => {
                        const isChecked = e.checked;
                        let updatedValues = [...selectedValues];

                        if (isChecked) {
                            updatedValues.push(optionValue);
                        } else {
                            updatedValues = updatedValues.filter(val => val !== optionValue);
                        }

                        controllerField.onChange(updatedValues);
                    };

                    return checkbox.map((item) => (
                        <div key={item.value} className="flex align-items-center">
                            <Checkbox
                                inputId={item.value}
                                onChange={(e) => handleChange(e, item.value)}
                                checked={selectedValues.includes(item.value)}
                            />
                            <label htmlFor={item.value} className="ml-2">{item.label}</label>
                        </div>
                    ));
                }}
            />
        </div>
    );
}

export default Checkboxinput;
