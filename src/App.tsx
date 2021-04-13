import React, { useState } from 'react';
import './App.css';
import InputForm from './component/InputForm';
import ListName from './component/ListName';

interface item{
	id:string;
	myName:string;
}

function App() {
	const [Myname, setName] = useState([{id:'1',myName:'AcC'}]);
	function onSubmit(value:item){
		const newMyname=[...Myname];
		newMyname.push(value);
		setName(newMyname);
		console.log(Myname);
	}
  return (
    
    <div className="container">
		<div className='text-center'>
				<h1>Quản Lý Công Việc</h1>
				<hr/>
			</div>
		
		<div className="row">
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<InputForm  onSubmit={onSubmit}/>
			</div>
			<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
				<table className="table table-bordered table-hover ">
					<thead>
						<tr>
							<th>ID Job</th>
							<th>Job Name</th>
						</tr>
					</thead>
						<ListName listName={Myname}/>
				</table>	
			</div>
		</div>
		
		
		
    </div>
    
  );
}

export default App;
