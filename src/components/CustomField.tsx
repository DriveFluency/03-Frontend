import { Field } from "react-final-form";

export default function CustomField(props: any) {
    
    const labelStyle = {
        fontWeight: "bold",
        fontSize: "16px",
        color: "black",
    };

    const fieldStyle = {
        borderRadius: "3px",
        width: "192px",
        padding: "10px",
        marginBottom: "7px"
    }

    const errorStyle = {
        fontSize: "14px",
        color: "#8D0000",
        fontWeight: "bold"
    }

    if (props?.fullWidth) {
        fieldStyle.width = "100%";
    }

    return (
        <div>
            <label htmlFor={props.name} style={labelStyle}>{props.label}</label>
            <Field
                component={props.component}
                name={props.name}
            >{({ input, meta }) => (
                <div>
                    <input {...input} style={fieldStyle} type={props.type} />
                    {meta.error && meta.touched && <span style={errorStyle}>{meta.error}</span>}
                </div>
            )}
            </Field>
        </div>
    );
} 