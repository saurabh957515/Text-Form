import React from 'react'

export default function Alert(props) {
 const capitalize = (word) => {
  const lower = word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
 }

  return (
   <div style={{height:'50px'}}>

{/* understand the concept of curly braces when to use it like here they use it before without curly in props  */}
{    props.alert && <div className={`alert alert-${props.alert.type } alert-dismissible fade show`}role="alert">
       <strong>{capitalize(props.alert.type) } </strong> :{props.alert.msg} 
       
       {/* <strong>Holy guacamole!</strong> You should check in on some of those fields below. */}
       {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
       </div>
      }
         {/* there was already an div how does this come don't know
         oh it was with props also don't how */}
      </div>

            
  )
}
 