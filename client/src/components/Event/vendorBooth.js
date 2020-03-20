import React from "react";
//import {Table} from 'react-bootstrap';   ***THIS IS WHERE THE CARDS component will be imported*********

function VendorBooth(props) { 
    console.log(props)   
    const tableBody =()=>{
        const theList = props.vendorsBooths.map((vendorBooth, i)=>(
        <tr>
            <td>{i+1}</td>
            <td>{vendorBooth.name}</td>
            <td><img alt={vendorBooth.name} src={vendorBooth.picture.thumbnail} className="img-container"/></td>
            <td>{vendorBooth.gender}</td>                    
            <td>{vendorBooth.location.city}</td>
        </tr>
        ))
        return theList
    }
    return (
        //***********This will be where the cards will be populated according to the search filter** */
        // <Table striped bordered hover size="sm" responsive>
        //     <thead>
        //         <tr>
        //             <th>#</th>
        //             <th>Name</th>                                    
        //             <th>Image</th> 
        //             <th>Gender</th>                    
        //             <th>Location</th>
        //         </tr>
        //     </thead>            
        //     <tbody>
        //         {tableBody()}
        //     </tbody>            
        // </Table>        
    )
}

export default VendorBooth;