import React from 'react';
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
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
import Autocomplete from '@mui/material/Autocomplete';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { createLogs } from 'store/reducers/logs';
import TextField from '@mui/material/TextField';

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

  

const AddLogForm = ({open, handleClose, formModel, ...props}) => {
    const dispatch = useDispatch();
    console.log(props);
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Formik
                initialValues={{
                    description: '',
                    time_spent: '',
                    category: '',
                    type: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    description: Yup.string().max(255).required('Description is required'),
                    time_spent: Yup.string().max(255).required('Time Spent is required'),
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        console.log(values);
                        setStatus({ success: false });
                        setSubmitting(false);
                        let data = JSON.stringify(values);
                        dispatch(createLogs(data));
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
                                        Create Log
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