import React from 'react';
import faker from 'faker';


export default function CommentDetail(props){
console.log(faker,'this is faker')
 let randomNum = Math.floor(Math.random() * 100);
  let randomYear = Math.floor(Math.random() * (23 - 10)+ 10);
  return (
 <div className="ui card">
  <div className="image">
    <img alt='description' src={props.img}/>
  </div>
  <div className="content">
    <a href='/' className="header">{faker.name.firstName()}</a>
    <div className="meta">
      <span className="date">{randomYear === 22 ? 'Joined  10 months ago': `Joined 20${randomYear}`}</span>
    </div>
    <div className="description">
     {faker.random.words()}
    </div>
  </div>
  <div className="extra content">
    <a href='/'>
      <i className="user icon"></i>
      {randomNum} Friends
    </a>
  </div>
</div>
  )
};