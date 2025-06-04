import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Box, FormHelperText, IconButton, InputAdornment } from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { camelToTitle } from '~helper/index';

type TextInputProps = Omit<TextFieldProps, 'inputRef'> & {
  name: string;
  sx?: object;
  containerSx?: object;
  type?: 'text' | 'password' | string;
  multiline?: boolean;
  placeholder?: string;
  shrink?: boolean;
  rows?: number;
  disabled?: boolean;
  showLabelAtPlaceholder?: boolean;
  startAdornment?: any;
  endAdornment?: any;
  varient?: string;
};

function TextInput({
  name,
  sx,
  containerSx,
  type = 'text',
  multiline = false,
  placeholder,
  varient = 'outlined',
  shrink,
  rows = 1,
  disabled,
  showLabelAtPlaceholder,
  startAdornment,
  endAdornment,
  ...rest
}: TextInputProps) {
  const {
    register,
    formState: { errors },
  }: any = useFormContext();

  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === 'password' ? (showPassword ? 'text' : 'password') : type;

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const renderError = () => {
    let errorMessage = errors?.[name]?.message;

    if (name.includes('.')) {
      const names = name.split('.');

      let error = errors;

      for (let i = 0; i < names.length; i++) {
        error = error?.[names[i]];
      }

      errorMessage = error?.message;
    }

    return (
      <FormHelperText
        sx={{
          background: '#00000088',
          px: 1,
          display: 'flex',
        }}
        error
      >
        {errorMessage}
      </FormHelperText>
    );
  };

  return (
    <Box sx={{ border: '0px solid red', width: '100%', ...containerSx }}>
      <TextField
        {...register(name)}
        label={showLabelAtPlaceholder ? '' : camelToTitle(name)}
        fullWidth
        placeholder={
          showLabelAtPlaceholder && !placeholder
            ? camelToTitle(name)
            : placeholder
        }
        multiline={multiline}
        rows={rows}
        type={inputType}
        variant={varient}
        slotProps={{
          input: {
            endAdornment:
              type === 'password' ? (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {!showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ) : endAdornment ? (
                <InputAdornment position="end">{endAdornment}</InputAdornment>
              ) : undefined,
            startAdornment: startAdornment ? (
              <InputAdornment position="end">{startAdornment}</InputAdornment>
            ) : undefined,
          },
          inputLabel: { shrink },
        }}
        sx={{
          background: '#00000088',
          ...sx,
        }}
        disabled={disabled}
        {...rest}
      />
      {renderError()}
    </Box>
  );
}

export default TextInput;
