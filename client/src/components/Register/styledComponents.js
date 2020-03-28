import styled from 'styled-components';
import { Header, Segment, Button } from 'semantic-ui-react';


export const StyledHeader = styled(Header)`
    &&& {  
        font-family: 'Source Sans Pro', sans-serif;   
        color: #c5a6c4;
        font-weight: 400;
        text-align: center;
        font-size: 36px;
    }
    `;

export const StyledHeader2 = styled(Header)`
    &&& {  
        font-family: 'Source Sans Pro', sans-serif;   
        color: #c5a6c4;
        font-weight: 400;
        text-align: center;
        font-size: 18px;
    }
    `;

export const StyledSegment = styled(Segment)`
    &&& {  
        width: 75%;
        margin: auto;
        margin-top: 50px;
    }
    `;
export const StyledButton = styled(Button)`
    &&& {  
        background-color: #c5a6c4;
        color: white !important;
        margin: 20px auto;
        display: block;
    }
    `;