import { Field, FieldRenderProps, SupportedInputs } from "react-final-form";
import { FC, ComponentType, CSSProperties } from "react";
import { InputAdornment, MenuItem } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { Input, Select, FormControl } from '@mui/material'

interface CustomFieldProps {
    fullWidth?: boolean,
    underline?: boolean,
    name: string,
    component?: SupportedInputs | ComponentType<FieldRenderProps<any, HTMLElement, any>> | undefined,
    label: string,
    type?: string,
    value?: string,
    onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
    readOnly?: boolean,
    editIcon?: boolean,
    options?: { label: string, value: string }[],
    placeHolder?: string
}

export const CustomField: FC<CustomFieldProps> = ({  
    fullWidth, 
    name, 
    component, 
    label, 
    type, 
    value, 
    underline, 
    onChange, 
    readOnly,
    editIcon,
    placeHolder,
    options = [] }) => {

    const labelStyle: CSSProperties = {
        fontWeight: "bold",
        fontSize: "16px",
        color: "black",
    };

    const fieldStyle: CSSProperties = {
        borderRadius: "3px",
        width: fullWidth ? "100%" : "192px",
        padding: "10px",
        marginBottom: "7px",
        background: "#FFF"
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
        <FormControl variant="standard" fullWidth>
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
                        <Select placeholder={placeHolder} {...input} style={fieldStyle} defaultValue={value}>
                            {options.map((item) => (
                                <MenuItem key={item.value} value={item.value}>{item.label}</MenuItem>
                            ))}
                        </Select>
                    ) : (
                        <><Input placeholder={placeHolder} {...input} style={fieldStyle} readOnly={readOnly} endAdornment={
                            editIcon &&
                            <InputAdornment aria-label="edit" position="end">
                                <EditIcon />
                            </InputAdornment>
                        }/>
 
                        </>
                    )}
                    {meta.error && meta.touched && <span style={errorStyle}>{meta.error}</span>}
                </div>
            )}
            </Field>
        </FormControl>
    );
}

export default CustomField;
