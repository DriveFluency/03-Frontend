import React, { useState } from 'react';
import { Input, IconButton, InputAdornment, InputProps } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface PasswordFieldProps extends InputProps {
    label: string;
    placeHolder?: string;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ label, placeHolder, ...props }): React.JSX.Element => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

    return (
        <Input
            {...props}
            type={showPassword ? 'text' : 'password'}
            placeholder={placeHolder}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            }
        />
    );
};

export default PasswordField;
