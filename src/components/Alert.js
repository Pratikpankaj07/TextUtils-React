import React from 'react'
const capitalize=(temp)=>{
    let newtemp=temp.charAt(0).toUpperCase()+temp.slice(1);
    return newtemp;
}
function Alert(props) {
    
  return (
    props.alert && <div>
      <div className={`alert alert-${props.alert.type}`} role="alert">
       <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
   </div>
    </div>
  )
}

export default Alert
