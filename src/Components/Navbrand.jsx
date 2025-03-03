import React from 'react'
import { Typography } from '@mui/material';


function Navbrand() {
    return (
        <>
            <Typography
                variant="h3"
                component="h3"
                sx={{
                    fontSize: '1rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)',
                    padding: '10px 20px',
                    background: 'linear-gradient(135deg, #007BFF, #00CFFF)',
                    borderRadius: '5px',
                    color: 'white',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #00CFFF, #007BFF)',
                        transform: 'scale(1.05)',
                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                    },
                }}
            >
                MobileVista
            </Typography>

        </>
    )
}

export default Navbrand
