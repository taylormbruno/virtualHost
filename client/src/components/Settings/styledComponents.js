import styled from 'styled-components';
import { Segment, Header, Icon, Form, Button } from 'semantic-ui-react';


export const StyledSegment = styled(Segment)`
    &&& {  
        margin-top: 100px !important;
    }   
    `;

export const StyledHeader = styled(Header)`
    &&& {  
        font-family: 'Source Sans Pro', sans-serif;   
        color: #c7cba9;
        font-weight: 400;
        font-size: 36px;
        letter-spacing: 5px;
    }   
    `;
export const StyledIcon = styled(Icon)`
    &&& {  
        vertical-align: middle !important;
        margin: 0 25px 30px 25px;
    }   
    `;

export const StyledForm = styled(Form)`
    &&& {  
        width: 60%;
        margin: auto;
    }   
    `;

export const StyledButton = styled(Button)`
    &&& {
        background-color: #c7cba9;
        color: white !important;
        width: 30%;
        margin: 2% !important;  
        margin-bottom: 20px !important;  
    }`

// export const StyledRadio = styled(Radio)`
//     &&&::after, &&&:disabled {  
//         background-color: red;
//         color: red
//     }   
//     `;

