import React, { Component } from 'react';

export default class UserPage extends Component {
 constructor(props) {
  super(props);
  this.state = {
   clientToken: false,
  };
 }

 componentDidMount() {
  const url = 'https://www.api.fastbuy.by/kiosk/api/v1/users/profile';
  const currentUser = JSON.parse(localStorage.getItem('User'));
  fetch(url, {
   method: 'GET',
   headers: {
    'Accept': 'application/json',
    'Authorization': `${currentUser.token.tokenType} ${currentUser.token.accessToken}`,
    'Content-Type': 'application/json',
   },
  }).then(response => {
   return response.json();
  }).then((data) => {
   console.log(data);
  })
      .catch(error => {
       console.log(error);
      });
 }

 render() {
  return (
      <div className='back_ground_user'>
       <h1>Hallo User</h1>
      </div>
  );
 }
}
