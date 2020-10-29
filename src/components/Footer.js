import React from "react"

import "../Styles/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faTwitter,faInstagram,faWhatsapp,faSnapchat,faCanadianMapleLeaf} from '@fortawesome/free-brands-svg-icons'


const footer = () =>{


    const arroba = <FontAwesomeIcon icon={faAt} />
    const facebook = <FontAwesomeIcon icon={faFacebook} />
    const instagram = <FontAwesomeIcon icon={faTwitter} />
    const twitter = <FontAwesomeIcon icon={faInstagram} />
    const whatsApp = <FontAwesomeIcon icon={faWhatsapp} />
    const snap = <FontAwesomeIcon icon={faSnapchat} />
    const logo = <FontAwesomeIcon icon={faCanadianMapleLeaf} />

    return (
        <div className="footer">
     <div className="footerInside">
           <div className="brandLogo">
           <h3>Electromatic  </h3> {logo}</div>
           <div className="socialBar">
       <ul>
           <li>{arroba}</li>
          <li>{facebook}</li> 
           <li>{instagram}</li>
           <li>{twitter}</li>
           <li>{whatsApp}</li>
           <li>{snap}</li>
           </ul>
          
</div>
</div>
            
        </div>

    )
}
export default footer
