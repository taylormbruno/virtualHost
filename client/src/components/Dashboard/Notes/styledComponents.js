import styled from 'styled-components';
import { Header, Table, Button } from 'semantic-ui-react';


export const StyledHeader = styled(Header)`
    &&& {  
        font-family: 'Source Sans Pro', sans-serif;   
        color: #a9a6c9;
        font-weight: 400;
        text-align: left;
    } 
    &&&.noPadding {
        padding-top: 0;
        margin-top: 0;
    } 
    `;

export const StyledTable = styled(Table)`
    &&& {  
        height: 200px;
        overflow-y: auto;
    } 
    `;


    export const StyledButton = styled(Button)`
    
        &&& {
            background-color: #a9a6c9;
            color: white !important;
            width: 30%;
            margin: 2% !important;  
            margin-bottom: 20px !important;  
        }`
