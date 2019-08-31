import React, { Component } from 'react';

export default class UserPage extends Component {
 constructor(props) {
  super(props);
  this.state = {
   clientToken: false,
  };
 }

 componentDidMount() {
  let url = 'https://www.api.fastbuy.by/kiosk/api/v1/users/profile';
  let currentUser = JSON.parse(localStorage.getItem('User'));
  let tokenClient = JSON.stringify(currentUser);
  let bearer = 'Bearer ' + tokenClient;
  fetch(url, {
   method: 'GET',
   headers: {
    'Accept': 'application/json',
    'Authorization': bearer,
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
