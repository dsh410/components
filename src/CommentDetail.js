import React from 'react';
import faker from 'faker';


export default function CommentDetail(props){
console.log(faker,'this is faker')
 let randomHr = Math.floor(Math.random() * (12-1) +1);
  let randomMin = Math.floor(Math.random() * (59 - 10)+10);
  return (
<div class="ui comments">
  <h3 class="ui dividing header">Comments</h3>
  <div class="comment">
    <a href="/" class="avatar">
      <img alt="description" src={faker.image.image()}/>
    </a>
    <div class="content">
      <a href="/"  class="author">{faker.name.firstName()}</a>
      <div class="metadata">
        <span class="date">Today at {randomHr}:{randomMin}PM</span>
      </div>
      <div class="text">
       {faker.random.words()}
      </div>
      <div class="actions">
        <a href="/"  class="reply">Reply</a>
      </div>
    </div>
  </div>
</div>
  )
};