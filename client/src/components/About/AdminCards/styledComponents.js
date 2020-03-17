import styled from 'styled-components';
import { Button, Image } from 'semantic-ui-react';


export const StyledButton = styled(Button)`
    &&& {  
        background-color: #8b9fa3;
        color: white;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
        display: block;
        margin: 10px 5px;
        width: 100%;
        text-align: left;
    }  
    &&&:hover {
        background: #abc5cb;
    }
`;

export const StyledImg = styled(Image)`
    &&& {  
        border-radius: 15px;
        padding: 10px;
    }
`;

export const StyledIcon = styled(Image)`
    &&& {  
        width: 15px;
        margin-right: 8px;
        float: left;
    }
`;

export const Div = styled.div`
    color: white
`