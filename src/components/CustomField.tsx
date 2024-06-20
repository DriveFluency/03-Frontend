import { Field, FieldRenderProps, SupportedInputs } from "react-final-form";
import { ReactNode, FC, ComponentType, CSSProperties } from "react";
import { borderRadius } from "@mui/system";

interface CustomFieldProps {
    children?: ReactNode,
    fullWidth?: boolean,
    underline?: boolean,
    name: string,
    component?: SupportedInputs | ComponentType<FieldRenderProps<any, HTMLElement, any>> | undefined,
    label: string,
    type?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    readOnly?: boolean,
}

export const CustomField: FC<CustomFieldProps> = ({ children, fullWidth, name, component, label, type, value, underline, onChange, readOnly }) => {

    const labelStyle: CSSProperties = {
        fontWeight: "bold",
        fontSize: "16px",
        color: "black",
    };

    const fieldStyle: CSSProperties = {
        borderRadius: "3px",
        width: fullWidth ? "100%" : "192px",
        padding: "10px",
        marginBottom: "7px"
    };

    const errorStyle: CSSProperties = {
        fontSize: "14px",
        color: "#8D0000",
        fontWeight: "bold"
    };

    if (underline) {
        fieldStyle.borderBottom = "1px solid #000";
        fieldStyle.borderRadius = 0;
    }

    return (
        <div>
            <label htmlFor={name} style={labelStyle}>{label}</label>
            <Field
                component={component}
                name={name}
                onChange={onChange}
                value={value}
                type={type || "text"}
            >{({ input, meta }) => (
                <div>
                    {component === 'select' ? (
                        <select {...input} style={fieldStyle}>
                            {children}
                        </select>
                    ) : (
                        <input {...input} style={fieldStyle} readOnly={readOnly} />
                    )}
                    {meta.error && meta.touched && <span style={errorStyle}>{meta.error}</span>}
                </div>
            )}
            </Field>
        </div>
    );
}

export default CustomField;
