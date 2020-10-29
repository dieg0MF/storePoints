import React, { useContext } from "react";
import '../Styles/SocialBar.css'

const SocialBar = ()=>{ 



return(
    <section className="trial-block shadow3" id="ContactUs">
         <div className="height450">
            <div className="section-title text-center">
               <span className="badge badge-info">Get Started</span>
               <h2>Social Link</h2>
               <span className="section-title-line section-title-line"></span>
            </div>
             <div className="social-overlap process-scetion mt100">
              <div className="container">
                  <div className="row justify-content-center">
                      <div className="col-md-10">
                          <div className="social-bar">
                              <div className="social-icons mb-3 iconpad text-center">
                                 
                                  
                                  <a href="" target="_blank" className="slider-nav-item"><i class="fab fa-facebook"></i></a>
                                  <a href="" target="_blank" className="slider-nav-item"><i className="fab fa-google-plus"></i></a>
                                  <a href="" target="_blank" className="slider-nav-item"><i className="fab fa-twitter"></i></a>
                                  <a href="" target="_blank" className="slider-nav-item"><i className="fab fa-instagram"></i></a>
                                  <a href="" target="_blank" className="slider-nav-item"><i className="fab fa-linkedin"></i></a>
                                  <a href="https://www.pinterest.co.uk/CommixtureSoft" target="_blank" className="slider-nav-item"><i className="fab fa-pinterest"></i></a>
                                  <a href="" target="_blank" className="slider-nav-item"><i className="fab fa-skype"></i></a>                                
                                  <a href="#" className="slider-nav-item"><i className="fab fa-youtube"></i></a>
                                  <a href="#" className="behance slider-nav-item"><i className="fab fa-behance"></i></a>
                                  <a href="" target="_blank" className="slider-nav-item"><i className="fab fa-dribbble"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
         </div> 
</section>
)



}
export default SocialBar
