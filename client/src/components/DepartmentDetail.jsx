import React from 'react'

function DepartmentDetail() {
  return (
    <div style={{height:'100vh',width:'100vw',position:'relative'}}>
        <div style={{position:'absolute',height:'100vh',width:'60vw',float:'left',left:'0'}}>
          <table style={{border:'2px solid black',fontSize:'23px' ,padding:'10px'}}>
            <tr >
                <td>Department Name</td>
                <td>Emergency Department</td>
            </tr>
            <tr >
                <td>Year Found</td>
                <td>1987</td>
            </tr>
            <tr >
                <td>Department Discription</td>
                <td>Emergency Department defines an emergency department as a hospital facility that is staffed 24 hours a day, 7 days a week, and provides unscheduled outpatient services to patients whose condition requires immediate attention.

With a competent emergency room team, many lives could have been saved under the guidance of an experienced physician and aided by advanced medical equipment.

The emergency Department is the first point of contact for any critically ill patient, needing immediate medical attention. Modern Emergency Departments are managed by qualified Emergency Physicians and nurses, trained specifically for providing emergent care to save a life or limb.</td>
            </tr>
            <tr >
                <td colSpan={2}>Department Head</td>
            </tr>
            <tr >
                <td>Name</td>
                <td><img src="https://www.shutterstock.com/image-photo/handsome-hispanic-millennial-man-sit-260nw-2174725871.jpg" alt="" /><br />
                    James Luther</td>
            </tr>
          </table>
        </div>
        <div style={{position:'absolute',height:'100vh',width:'40vw',float:'right',right:'0'}}>
            <img style={{height:'500px',width:'400px'}} src="https://www.statnews.com/wp-content/uploads/2019/11/AdobeStock_58628393.jpeg" alt="" />
        </div>
    </div>
  )
}

export default DepartmentDetail