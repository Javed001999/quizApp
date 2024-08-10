
import React from 'react'

export default function Contact() {
  return (
    <>
      <div className='contactpage'>
        <h1>Contact Us</h1>
        <h2>You can reach us via the following methods:</h2>

        <div className='ul-li-style'>
          <ul style={{ color: "white", marginTop: "20px", listStyleType: "none" }}>
            <h3 className='contactpagehover' style={{ fontFamily: "sans-serif" }}>
              <li className='contactpage1'>Email: javedansari@test.com</li>
              <li className='contactpage2'>Phone: 123-456-7890</li>
              <li className='contactpage3'>Address: 123 Main Street, City: Gurgaon</li>
            </h3>
          </ul>
        </div>
      </div>
    </>
  );
};



















