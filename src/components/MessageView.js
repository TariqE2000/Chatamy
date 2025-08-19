import {Box} from "@mui/material";
import ChatDisplay from "./ChatDisplay";
import Divider from "@mui/material/Divider";
import * as React from "react";
import ChatBar from "./ChatBar";

export default function MessageView() {
    return(
        <Box
            sx={{
                display:'flex',
                flexDirection:'column',
                height:'100dvh'
        }}
        >
            <ChatDisplay/>
            <Divider sx={{ m:'5px' }} />
            <ChatBar/>
        </Box>
    );
}