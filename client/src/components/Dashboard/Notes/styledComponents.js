import styled from 'styled-components';
import { Header, Table } from 'semantic-ui-react';


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

