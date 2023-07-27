import React from 'react'
import rules from "../styles/rules.png"
import "../styles/Fotter.css";

const Footer1 = () => {
  return (
    <div>
        <p className='footerLine1 text-gray-300'>__________________________________________________________________________________________________________</p>

        <p className='footer-things font-bold text-2xl uppercase'>𝐄𝐬𝐬𝐞𝐧𝐭𝐢𝐚𝐥 𝐆𝐮𝐢𝐝𝐞𝐥𝐢𝐧𝐞𝐬, </p>

        <div className='footer-hold'>
            <img  src="https://community.withairbnb.com/t5/image/serverpage/image-id/60157i73651BB88BDE5092?v=v2" className="footer-pic" />
            {/* <img src="https://gigworker.com/wp-content/uploads/2019/01/Hosting-in-3-Steps-1536x548.png.webp" /> */}
        </div>
    </div>
  )
}

export default Footer1