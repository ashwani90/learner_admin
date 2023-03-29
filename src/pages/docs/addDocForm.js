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

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

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

const AddDocForm = ({open, handleClose}) => {
    

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
                    doc_name: '',
                    category: '',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    doc_name: Yup.string().max(255).required('Doc Name is required'),
                    category: Yup.string().max(255).required('Category is required'),
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        console.log(values);
                        setStatus({ success: false });
                        setSubmitting(false);
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
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="doc_name">Doc Name*</InputLabel>
                                    <OutlinedInput
                                        id="doc_name"
                                        type="doc_name"
                                        value={values.doc_name}
                                        name="doc_name"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Doc"
                                        fullWidth
                                        error={Boolean(touched.doc_name && errors.doc_name)}
                                    />
                                    {touched.doc_name && errors.doc_name && (
                                        <FormHelperText error id="helper-text-doc_name">
                                            {errors.doc_name}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="file">File*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.file && errors.file)}
                                        id="file"
                                        type="file"
                                        value={values.categpry}
                                        name="file"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        inputProps={{}}
                                    />
                                    {touched.file && errors.file && (
                                        <FormHelperText error id="helper-text-file">
                                            {errors.category}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                            <Stack spacing={1}>
                                    <InputLabel htmlFor="category">Category*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.category && errors.category)}
                                        id="category"
                                        type="category"
                                        value={values.category}
                                        name="category"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Category"
                                        inputProps={{}}
                                    />
                                    {touched.category && errors.category && (
                                        <FormHelperText error id="helper-text-category">
                                            {errors.category}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
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
                                        Create Doc
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

export default AddDocForm;