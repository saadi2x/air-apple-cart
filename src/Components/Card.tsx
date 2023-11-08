import React from "react";
import { Box, Card, CardContent, Typography, CardActions, Button, CardMedia, Stack, colors } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';

export const AacCard = () => {

    return (

        <Box className='cardbox'>

            <Card sx={{
            backgroundColor: 'primary.main',
            color: '#fff',
            padding: '20px 10px',
            borderRadius: '16px',
            }} >

                <CardContent>
                    <Stack spacing={2} direction='row' sx={{
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        }}>
                            
                                <PersonIcon/>
                                <Typography>
                                    Total Members
                                </Typography>
                            
                            <Typography variant="h4">150</Typography>

                    </Stack>
                    
                </CardContent>
            </Card>
        </Box>


    )



}