import styled from 'styled-components';
import { Container, Button, Header } from 'semantic-ui-react';

const StyledContainer = styled(Container)`
    &&& {  
        margin:  30px auto
    }  
`;
export {StyledContainer};

export const StyledButton = styled(Button)`
    
&&& {
    background-color: #a9a6c9;
    color: white !important;
    width: 90%;
    margin: 20px auto;
}`

export const StyledHeader2 = styled(Header)`
    
&&& {
    size: 18px;
    color: #a9a6c9;
}`

export const StyledImage = styled(Image)`
    
&&& {
    width: 100%;
    position: absolute; 
    filter: brightness(50%) !important;
}`
