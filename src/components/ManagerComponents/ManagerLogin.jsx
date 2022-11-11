import React from "react"
import '../../css/ManagerLogin.css';
import ManagerService from '../../services/ManagerService';
export class ManagerLogin extends React.Component{ 
  constructor(props){
    super(props);
    this.state = {
        Manager: [],
        managerId: '',
        managerPassword : '',
        man : ''
    }
    this.changeManagerIdHandler = this.changeManagerIdHandler.bind(this);
    this.changeManagerPasswordHandler = this.changeManagerPasswordHandler.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    
}

componentDidMount(){
        
    ManagerService.getAllManager().then ((res) =>{
      console.log(res.data);
      this.setState({Manager : res.data});
      this.state.man = (res.data);
  })
}

changeManagerIdHandler(event){
  this.setState({managerId:event.target.value})
}
changeManagerPasswordHandler(event){
  this.setState({managerPassword:event.target.value})
}
buttonClickHandler = (e) => {

  e.preventDefault();
  let find = 0;
  for (let i = 0; i < this.state.man.length; i++) {

      if ((this.state.managerId == this.state.man[i].managerId) && (this.state.managerPassword == this.state.man[i].managerPassword)) {

          alert(" welcome " + " " + this.state.managerId);
          find = 1;
          this.props.history.push("/getallcustomers/"+this.state.managerId);
      }
  }
  if (find === 0) {
      alert("Inavlid Username or Password");
  }
}



    render(){
        return(
      <div className="Manager">

      <form className="Auth-form2">
        <div className="container">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form">
            <label>Enter id</label>
            <input type="text" name="managerId" Id="" className="form-control" placeholder="Id" 
            value={this.state.managerId} onChange = {this.changeManagerIdHandler}/>
        </div>
        <div className="form">
          <label>Enter Password</label>
            <input type="text" name="managerPassword" id="" className="form-control" placeholder="Password" 
            value={this.state.managerPassword} onChange = {this.changeManagerPasswordHandler}/>
          </div>

          <div>                                            
              <button className="btn btn-danger" onClick={this.buttonClickHandler}>Sign in</button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="/">password?</a>
          </p>
        </div>
      </form>
      
    </div>
    
  )
}
}