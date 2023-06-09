import React, {useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
    Modal,
    Button,
    Box,
    FormControl,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';
import { Formik } from 'formik';
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import Autocomplete from '@mui/material/Autocomplete';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { createLogs } from 'store/reducers/logs';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );


const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };

const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };



const AddLogForm = ({open, handleClose, formModel, buttonText, initialValues, validationSchema, handleCreateChange, apiFunction, ...props}) => {
    const dispatch = useDispatch();
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: false });
                        setSubmitting(false);
                        console.log(values);
                        if (apiFunction) {
                          apiFunction(values);
                        } else {
                          dispatch(createLogs(values));
                        }

                        handleClose();
                        handleCreateChange();
                    } catch (err) {
                        console.error(err);
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            {
                                formModel.map((item,index) => {
                                    if (item.type == 'autocomplete') {
                                        return (
                                            <Grid key={item.key} item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor={item.id}>{item.label}</InputLabel>
                                    <Autocomplete
                                            disablePortal
                                            id={item.id}
                                            onChange={(event, newValue) => {
                                                values[item.key] = newValue;
                                            }}
                                            options={props[item.data]}
                                            getOptionLabel={(option) => option.name}
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <TextField {...params} label={item.label} />}
                                          />
                                    {touched[item.key] && errors[item.key] && (
                                        <FormHelperText error id={item.helper_error_id}>
                                            {errors[item.key]}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                                        )
                                    }
                                    if (item.type == 'textarea') {
                                        return (
                                            <Grid key={item.key} item xs={12} md={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor={item.id}>{item.label}</InputLabel>
                                    <StyledTextarea
                                        id={item.id}
                                        aria-label={item.label}
                                        minRows={10}
                                        placeholder={item.placeholder}
                                        value={values[item.key]}
                                        name={item.name}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        />
                                    {touched[item.key] && errors[item.key] && (
                                        <FormHelperText error id={item.helper_error_id}>
                                            {errors[item.key]}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                                        )
                                    }
                                    return (
                                        <Grid key={item.key} item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor={item.id}>{item.label}</InputLabel>
                                    <OutlinedInput
                                        id={item.id}
                                        type={item.type}
                                        value={values[item.key]}
                                        name={item.name}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder={item.placeholder}
                                        fullWidth
                                        error={Boolean(touched[item.key] && errors[item.key])}
                                    />
                                    {touched[item.key] && errors[item.key] && (
                                        <FormHelperText error id={item.helper_error_id}>
                                            {errors[item.key]}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                                    );
                                })
                            }
                            {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        type="submit"
                                        color="primary"
                                        size="small" variant="contained" sx={{ textTransform: 'capitalize' }}
                                    >
                                        {buttonText}
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
            </Box>
      </Modal>
    );
}

export default AddLogForm;
