import React,{ Component } from 'react';

class MenuItem extends Component{

  handleClick(event){
    event.preventDefault();
    console.log("ok");
  }

  render(){
    return(
      <div className="category">
        <li>
        <a  href="#" onClick={this.handleClick.bind(this)}>{this.props.name}</a>
        </li>
      </div>
    );
  }
}

export default MenuItem;
