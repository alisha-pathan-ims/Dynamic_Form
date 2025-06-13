// import Checkbox from "./Components/Checkboxinput"

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
        "label": "Information",
        "type": "checkbox",
        "name": "Information",
        "checkbox": [
            { "id": "1", "label": "label1", "value ": "value1", "name": "name1", "checked": Boolean },
            { "id": "2", "label": "label2", "value ": "value2", "name": "name2", "checked": Boolean },
            { "id": "3", "label": "label3", "value ": "value3", "name": "name3", "checked": Boolean },
            { "id": "4", "label": "label4", "value ": "value4", "name": "name4", "checked": Boolean },

        ],
        "required": true,
        "disable": false,
    },




]







export default obj