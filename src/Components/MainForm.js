import React, {Component} from 'react'
import LoginPage from './LoginPage'
import { createBlogPost} from "./SomeThing";

export default class Form extends Component{
    handleOnSubmit(data){
      createBlogPost(data)
    }
    render(){
        return(
            <div>
                <LoginPage onSubmit={this.handleOnSubmit}/>
            </div>
        )
    }
}