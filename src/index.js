import React from 'react';
import ReactDOM from 'react-dom/client';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';
import './App.css'

function App(){
 return ( 
  <>
   <ApprovalCard>
      <CommentDetail 
      time ={'today at 5:00pm'} 
     img={faker.image.image()}
      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail 
      time ={'today at 6:00pm'}
       img={faker.image.image()}

      />
      </ApprovalCard>
      <ApprovalCard>
      <CommentDetail 
      time ={'today at 7:00pm'}
       img={faker.image.image()}

       />
  </ApprovalCard>
  </>
  )
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

