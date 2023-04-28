import React from 'react';
import { Grid, Button, TextareaAutosize, Typography, Box } from '@mui/material';
import Search from 'layout/MainLayout/Header/HeaderContent/Search';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];



// Same item should be able to perform differently for different props
const DocAnalysis = () => {
    return (
        <Grid container columnSpacing={2.5}  >
            <Grid item sx={12} md={5} p={2} style={{ border: '5px solid gray', backgroundColor: "lightyellow" }}>
            <Typography variant="h2" color="warning" noWrap>
                                        Doc Content
                                    </Typography>
                <TextareaAutosize
    minRows={52}
    aria-label="maximum height"
    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua."
    style={{ width: '100%', border: "3px solid yellow", padding: "10px"}}
    sx={{ boxShadow: 3 }}
    />
            </Grid>
            <Grid md={1}>

            </Grid>
            <Grid item sx={12} md={5} p={2}  style={{ border: '5px solid gray', backgroundColor: "lightyellow" }}>
            <Typography variant="h2" color="warning" noWrap>
                                        Select Doc
                                    </Typography>
                                    <Box mt={2} mb={2}>
                                    <Search sx={{width: '100%'}} fullWidth={true}/>
                                    </Box>
                                    <div style={{ height: '100%', width: '100%' }}>
                                    <DataGrid
                                        rows={rows}
                                        columns={columns}
                                        pageSize={5}
                                        rowsPerPageOptions={[5]}
                                    />
                                    </div>
                
            </Grid>
            
        </Grid>
        
                );
}

export default DocAnalysis;