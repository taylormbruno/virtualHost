import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';


export const StyledIcon = styled(Icon)`
    &&& {  
        transform: scale(4);
        padding:0;
        margin: 0;
        color: #a9a6c9;
        transition: all .2s ease;
    }   
    &&&:hover {
        transform: scale(4.7);
    }
    `;