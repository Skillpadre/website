import React from 'react';
import Grid from '@mui/material/Grid';

interface Props {
    children?: React.ReactNode;
    direction: 'row' | 'row-reverse';
}

export default function GridItemAboutMe({ children, direction }: Props) {

    return (
        <>
            <Grid container mb={10} direction={direction} justifyContent="center" alignItems="center" >
                <Grid item xs={10} sm={10} md={4} lg={3} xl={2} style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                    {children}
                </Grid>
                <Grid item xs={0} sm={0} md={3} lg={2} xl={1} style={{ display: 'flex', flexDirection: "column", justifyContent: "center", alignItems: "center" }} >
                </Grid>
            </Grid>
        </>
    )
}