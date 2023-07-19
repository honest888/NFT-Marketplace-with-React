import { Link } from "react-router-dom";

export default function Contract() {
  return (
    <main className="main">

        <div className="breadcrumb-area" >
            <div className="container">
                <div className="breadcrumb-wrapper">
                    <h1>Contact Us</h1>
                    <div>
                        <ul className="breadcrumb">
                            <li className="breadcrumb__item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb__item breadcrumb__item--active">Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="contact-area pt-70">
            <div className="container">
                <div className="row row--grid">
                    <div className="col-12 col-lg-7 col-xl-8">
                        <form method="post" id="contact-form" className="sign__form sign__form--contacts">
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="sign__group">
                                        <input type="text" name="name" className="sign__input" placeholder="Name" required/>
                                    </div>
                                </div>
    
                                <div className="col-12 col-md-6">
                                    <div className="sign__group">
                                        <input type="text" name="email" className="sign__input" placeholder="Email" required/>
                                    </div>
                                </div>
    
                                <div className="col-12">
                                    <div className="sign__group">
                                        <input type="text" name="subject" className="sign__input" placeholder="Subject" required/>
                                    </div>
                                </div>
    
                                <div className="col-12">
                                    <div className="sign__group">
                                        <textarea name="message" className="sign__textarea" placeholder="Type your message" required></textarea>
                                    </div>
                                </div>
    
                                <div className="col-12 col-xl-3">
                                    <button type="submit" className="sign__btn">Send Message</button>
                                </div>
                                <div className="col-12 my-3">
                                    <div className="form-messege text-success"></div>
                                </div>
                            </div>
                        </form>	
                    </div>
                    <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                        <div className="main__title main__title--sidebar">
                            <h2>Get In Touch</h2>
                            <p>It is a long fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
                        </div>
                        <ul className="contacts__list">
                            <li><a href="tel:+21234566789"> <i className="far fa-phone"></i>  +2 123 4566 789</a></li>
                            <li><a href="mailto:info@example.com"><i className="far fa-envelope"></i> info@example.com</a></li>
                            <li><a href="#"><i className="far fa-map-marker-alt"></i> 26 High Meadow Lane, New York, USA</a></li>
                        </ul>
                        <div className="contacts__social">
                            <a href="#"> <i className="fab fa-facebook-f"></i> </a>
                            <a href="#"> <i className="fab fa-twitter"></i> </a>
                            <a href="#"> <i className="fab fa-instagram"></i> </a>
                            <a href="#"> <i className="fab fa-linkedin-in"></i> </a>
                            <a href="#"> <i className="fab fa-vk"></i> </a>
                            <a href="#"> <i className="fab fa-pinterest"></i> </a>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </main>
  )
}