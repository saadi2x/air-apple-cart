import React from "react";
import { Stack, Button, Typography } from "@mui/material";
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { AacCard } from "./Card";
import Table from "./Table";

export default function Dashboard(){



    return (

        <div className="dashboard">

            <div className="row1">
                <h2>Delegates</h2>
                <Button variant="contained" size="small" startIcon={<AddCircleIcon/>}>Invite Member</Button>

            </div>


            <div className="figures">
                <div className="figure-set">
                    <Typography variant="subtitle2" sx={{color:'#888'}}>Total Earnings</Typography>
                    <Typography variant="subtitle1">£ 1,230.00</Typography>
                </div>
                <div className="figure-set">
                    <Typography variant="subtitle2" sx={{color:'#888'}}>Pending From Inactive Members</Typography>
                    <Typography variant="subtitle1">£ 1,230.00</Typography>
                </div>


            </div>

            <Stack className="cardsrow" spacing={2} direction='row'>

                <AacCard></AacCard>
                <AacCard></AacCard>
                <AacCard></AacCard>

            </Stack>

            <div className="table"><Table/></div>



        </div>

    )

}