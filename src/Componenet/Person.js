import React, { Component } from 'react'

export default class Person extends Component {

    constructor (props){
        
        super(props);
        this.state={
            fullName:"Sarah ba" ,
            bio:"This is my bio" ,
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXC_p6rGBRMZkz-ZUJzTSstKU6DdxodOhfaQ&usqp=CAU",
            profession:"Student"
        }
    }

    render() {
        return (
            <div style={{marginTop : "10px"}}>
                <img src={this.state.img} alt="my pic" width="400" />
                <div>
                    <p>FULLNAME: {this.state.fullName}</p>
                    <p>BIO: {this.state.bio}</p>
                    <p>PROFESSION: {this.state.profession}</p>
                </div>
            </div>
        )
    }
}