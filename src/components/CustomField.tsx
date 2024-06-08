import { Field, FieldRenderProps, SupportedInputs } from "react-final-form";
import { ReactNode, FC, ComponentType } from "react";

interface CustomFieldProps {
    children?: ReactNode,
    fullWidth?: boolean,
    name: string,
    component?: SupportedInputs | ComponentType<FieldRenderProps<any, HTMLElement, any>> | undefined,
    label: string,
    type?: string
}

export const CustomField: FC<CustomFieldProps> = ({ children, fullWidth, name, component, label, type }) => {

    const labelStyle = {
        fontWeight: "bold",
        fontSize: "16px",
        color: "black",
    };

    const fieldStyle = {
        borderRadius: "3px",
        width: fullWidth ? "100%" : "192px",
        padding: "10px",
        marginBottom: "7px"
    };

    const errorStyle = {
        fontSize: "14px",
        color: "#8D0000",
        fontWeight: "bold"
    };

    return (
        <div>
            <label htmlFor={name} style={labelStyle}>{label}</label>
            <Field
                component={component}
                name={name}
            >{({ input, meta }) => (
                <div>
                    {component === 'select' ? (
                        <select {...input} style={fieldStyle}>
                            {children}
                        </select>
                    ) : (
                        <input {...input} style={fieldStyle} type={type} />
                    )}
                    {meta.error && meta.touched && <span style={errorStyle}>{meta.error}</span>}
                </div>
            )}
            </Field>
        </div>
    );
}

export default CustomField;
