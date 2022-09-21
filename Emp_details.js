import React from 'react'
class Employee extends React.Component{
    constructor(props){
        super(props);
        console.log("First Constructor");
        this.state={
            employees:[{"id":1,"first_name":"Christoper","gender":"Male"},
            {"id":2,"first_name":"Arlinda","gender":"Female"},
            {"id":3,"first_name":"Pernell","gender":"Male"},
            {"id":4,"first_name":"Athene","gender":"Female"},
            {"id":5,"first_name":"Jacobo","gender":"Male"},
            {"id":6,"first_name":"Sayres","gender":"Male"},
            {"id":7,"first_name":"Augie","gender":"Male"},
            {"id":8,"first_name":"Juli","gender":"Female"},
            {"id":9,"first_name":"Lammond","gender":"Bigender"},
            {"id":10,"first_name":"Armand","gender":"Polygender"},
            {"id":11,"first_name":"Astrid","gender":"Non-binary"},
            {"id":12,"first_name":"Gothart","gender":"Male"},
            {"id":13,"first_name":"Claudius","gender":"Male"},
            {"id":14,"first_name":"Gifford","gender":"Male"},
            {"id":15,"first_name":"Doll","gender":"Female"},
            {"id":16,"first_name":"Tabbi","gender":"Female"},
            {"id":17,"first_name":"Bud","gender":"Male"},
            {"id":18,"first_name":"Ruttger","gender":"Male"},
            {"id":19,"first_name":"Josy","gender":"Female"},
            {"id":20,"first_name":"Cynthia","gender":"Female"}]
        }
    }
    render(){
        console.log("Second-Render() Method");
        return <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead className="bg-primary text-white">
                            <tr>
                                
                                <th>ID</th>&nbsp;&nbsp;
                                <th>First Name</th>&nbsp;&nbsp;
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map((emp,index)=>{
                                    return <tr key={index}>
                                        
                                        <td>{emp.id}</td>&nbsp;&nbsp;
                                        <td>{emp.first_name}</td>&nbsp;&nbsp;
                                        <td>{emp.gender}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    }
}
export default Employee