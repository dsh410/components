import React from "react";

export default function ApprovalCard (){
return (<>
<div className="ui cards">
  <div className="card">
    <div className="content">
      {/* <img alt="description" className="right floated mini ui image" src="/images/avatar/large/elliot.jpg"/> */}
      <div className="header">
       Are you sure?
      </div>
      <div className="meta">
      
      </div>
      {/* <div className="description">
        Elliot requested permission to view your contact details
      </div> */}
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button">Decline</div>
      </div>
    </div>
  </div>

</div>
</>
)
};