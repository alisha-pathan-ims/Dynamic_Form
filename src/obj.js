import Checkbox from "./Components/Checkbox"

const obj = [
    {
        "label": "full name",
        "type": "Text",
        "required": "Enter your full name",
        "placeholder": "Enter Your Name",
        "title": "Must be alphabets a-z",
        "disable": false,
        "name": "name",
        "pattern": /^[A-Za-z ]+$/
    },
    {
        "label": "email",
        "type": "email",
        "required": true,
        "placeholder": "Enter Your Email",
        "disable": false,
        "title": "It must include @ and .com",
        "name": "email",
        "pattern": /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    },
    {
        "label": "password",
        "type": "password",
        "required": true,
        "placeholder": "Enter Your Password",
        "disable": false,
        "name": "password",

    },
    {
        "label": "url",
        "type": "url",
        "required": true,
        "disable": false,
        "name": "url",
        "placeholder": "Enter Url",
        "title": "ex :- http://example.com/path/page?query=1"
    },
    {
        "label": "date",
        "type": "date",
        "required": true,
        "disable": false,
        "name": "date",
        "minDate": new Date(), //for salary practice
        // "maxDate": new Date() // for bdayte practice 
        // range 

    },
    {
        "label": "Address",
        "type": "textarea",
        "rows": "5",
        "cols": "30",
        "required": true,
        "placeholder": "Enter Your Address",
        "disable": false,
        "name": "address",

    },

    {
        "label": "checkbox",
        "type": "checkbox",
        "checkbox": [
            { "label1": "data1", "value ": "data1", "name": "data1", "checked": "" },
            { "label2": "data2", "value ": "data2", "name": "data2", "checked": "" },
            { "label3": "data3", "value ": "data3", "name": "data3", "checked": "" },
            { "label4": "data4", "value ": "data4", "name": "data4", "checked": "" }
        ],
        "required": true,
        "disable": false,
    },




]







export default obj