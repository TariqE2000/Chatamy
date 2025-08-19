import * as React from 'react';
import Paper from '@mui/material/Paper';
import ChatChip from "./ChatChip";

export default function ChatDisplay() {

    return (
            <Paper
                sx={{
                    flex:1,
                    overflowY: 'auto' // Enable vertical scrolling when content overflows
                }}
                elevation={3}
            >
                <ChatChip/>
            </Paper>

    );
}
