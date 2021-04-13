import React from 'react';
import PropTypes from 'prop-types';


interface item{
	myName:string;
	id:string;

}
interface Props{
    listName: Array<item>;
}

const ListName:React.FC<Props>=(props)=> {
    return (
        <tbody>
            {props.listName.map((item,index)=>(
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.myName}</td>
                    {console.log(item.myName)}
                </tr>
            ))}
        </tbody>
         
    );
}

export default ListName;