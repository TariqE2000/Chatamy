import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import {Box} from "@mui/material";
import {useState} from "react";
import ChatDisplay from "./ChatDisplay";




export default function ChatBar() {

    let [message, setMessage] = useState('');

    const restValue = () => {
        setMessage('')
    }

    return (
            <Paper
                component="form"
                sx={{ marginBottom:'5px', p: '2px 4px', display: 'flex', alignItems: 'center', width: 'fullwidth' }}
                elevation={3}
            >
                <InputBase
                    sx={{ ml: 1, flex :1}}
                    placeholder="Type a massage..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    inputProps={{ 'aria-label': 'search google maps' }}
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton
                    sx={{ p: '10px', color:'#4682A9' }}
                    onClick={() => restValue()}
                >
                    <SendRoundedIcon />
                </IconButton>
            </Paper>
    );
}
