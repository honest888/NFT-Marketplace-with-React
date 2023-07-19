import { Link } from "react-router-dom"

export default function Faq() {
  return(
    <main className="main">

        <div className="breadcrumb-area" >
            <div className="container">
                <div className="breadcrumb-wrapper">
                    <h1>Faq</h1>
                    <div>
                        <ul className="breadcrumb">
                            <li className="breadcrumb__item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb__item breadcrumb__item--active">Faq</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="faq-area faq-area2 pt-100">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <div className="accordion" id="accordionfaq">
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="faq1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                    <strong>01. How to start as a seller?</strong>
                                </button>
                              </h2>
                              <div id="collapse1" className="accordion-collapse collapse show" aria-labelledby="faq1" data-bs-parent="#accordionfaq">
                                <div className="accordion-body">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="faq2">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                    <strong>02. What is the service fee for sellers?</strong>
                                </button>
                              </h2>
                              <div id="collapse2" className="accordion-collapse collapse" aria-labelledby="faq2" data-bs-parent="#accordionfaq">
                                <div className="accordion-body">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <h2 className="accordion-header" id="faq3">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                    <strong>03. Why getting rejected shares?</strong>
                                </button>
                              </h2>
                              <div id="collapse3" className="accordion-collapse collapse" aria-labelledby="faq3" data-bs-parent="#accordionfaq">
                                <div className="accordion-body">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="faq4">
                                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                      <strong>04. When and how do you get paid?</strong>
                                  </button>
                                </h2>
                                <div id="collapse4" className="accordion-collapse collapse" aria-labelledby="faq4" data-bs-parent="#accordionfaq">
                                  <div className="accordion-body">
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                                  </div>
                                </div>
                              </div>
                          </div>
                          <div className="accordion-item">
                            <h2 className="accordion-header" id="faq5">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                                  <strong>05. What is the NFTs reward system?</strong>
                              </button>
                            </h2>
                            <div id="collapse5" className="accordion-collapse collapse" aria-labelledby="faq5" data-bs-parent="#accordionfaq">
                              <div className="accordion-body">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
    </main>
  )
}