import React from 'react'
import { useForm } from 'react-hook-form'
import Textinput from './Textinput'
import { first } from 'list'
import ComponentMap from './ComponentMap'
export default function Formfield({ field }) {


    return (
        <>
            <ComponentMap field={field}></ComponentMap>
            {/* <Textinput field={field}></Textinput> */}
        </>
    )
}
