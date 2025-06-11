import React from "react";
import Textinput from "./Textinput";
import Textareainput from "./Textareainput";
import Dateinput from "./Dateinput";
import Checkbox from "./Checkbox";

// You can extend this object anytime
const componentMap = {
    text: Textinput,
    textbox: Textinput,
    email: Textinput,
    password: Textinput,
    url: Textinput,
    textarea: Textareainput,
    date: Dateinput,
    checkbox: Checkbox
};

export default function ComponentMap({ field }) {
    const Component = componentMap[field.type?.toLowerCase()];

    // Render the matched component, or fallback UI
    return Component ? <Component field={field} /> : <p>Unknown field type: {field.type}</p>;
}
