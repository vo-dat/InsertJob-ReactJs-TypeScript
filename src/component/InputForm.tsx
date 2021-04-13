import React, { useState } from 'react';
import '../App.css'

interface Props{
    onSubmit: Function;
}
interface item{
	myName:string;
    id:string;
}

const InputForm:React.FC<Props> = (props)=>{
    const [info, setInfo] = useState<item>({id:'',myName:''});

    function handelOnChange(event:any){
        const target= event.target;
        const value= target.value;
        const name= target.name;

        setInfo({...info,[name]:value});
    }
    
    // function handelOnChangeID(event:any){
    //     const newinfo={...info,id:event.target.value}
    //     setInfo(newinfo);
    // }
    const handelOnSubmit=(e: any)=>{
        e.preventDefault();
        props.onSubmit(info);
        setInfo({id:'',myName:''});
    }
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                    <h3 className="panel-title">Insert Job</h3>
            </div>
            <div className="panel-body">
                <form onSubmit={handelOnSubmit} className="form">
                    <div className="input-group">
                        <label >ID:</label>
                        <br/>
                        <input type="text" className="form-control" 
                            name="id" value={info.id} 
                            onChange={handelOnChange}/>
                        <label >Job Name:</label>
                        <br/>
                        <input type="text" className="form-control" 
                            name="myName" value={info.myName} 
                            onChange={handelOnChange}/>
                       
                        <button type="submit" className="btn btn-warning">Insert</button>&nbsp;	      	
                    </div>
                </form>
                   
                    
            </div>
        </div>
    );
};

export default InputForm;