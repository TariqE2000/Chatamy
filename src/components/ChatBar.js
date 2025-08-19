import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import {Box} from "@mui/material";

export default function ChatBar() {
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 'fullwidth' }}
        >
            <InputBase
                sx={{ ml: 1, flex :1}}
                placeholder="Type a massage..."
                inputProps={{ 'aria-label': 'search google maps' }}
            />

            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton sx={{ p: '10px', color:'#4682A9' }}>
                <SendRoundedIcon />
            </IconButton>
        </Paper>

    );
}
