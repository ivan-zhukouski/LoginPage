import React,{Component} from 'react';
export default class UserPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            clientToken: false,
        }
    }
componentDidMount() {

     let url = "https://www.api.fastbuy.by/kiosk/api/v1/users/profile";
     // let currentUser = JSON.parse(localStorage.getItem('User'));
     // console.log(currentUser);
     // let bearer = 'Bearer ' + currentUser;
     fetch(url, {
         method: 'GET',
         headers: {
             // 'Authorization': bearer,
             'Content-Type': 'application/json'
         }
     }).then(responseJson => {
         console.log(responseJson);
     })
         .catch(error => {
             console.log(error);
         });
 }

    render(){
        return(
            <div className='back_ground_user'>
                <h1>Hallo User</h1>
            </div>
        )
    }
}