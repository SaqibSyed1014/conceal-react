import {Link} from "react-router-dom";

export default function ContactUsBanner() {
    return (
        <div className="pt-40">
            <section className="container overflow-hidden">
                <div className="w-full bg-primary relative group">
                    <div className="absolute left-1/2 -translate-x-1/2">
                        <svg overflow="visible" width="215" height="470" viewBox="0 0 215 470" fill="none"
                             xmlns="http://www.w3.org/2000/svg" className="styles_contact-us-section__lamps__nIL0k">
                            <g className="js-svg-lamps" data-svg-origin="107.13300323486328 148.5"
                               transform="matrix(1,0,0,1,0,-15)">
                                <path d="M108-178h-2V62h2v-240z" fill="#263238"></path>
                                <g className="js-svg-lamps-object">
                                    <g className="js-svg-lamps-light">
                                        <path opacity="0.3"
                                              d="M195.33 409.076s-23.031 44.971-88.18 44.971c-65.15 0-88.198-44.971-88.198-44.971l32.885-311.71h110.608l32.885 311.71z"
                                              fill="url(#paint0_linear_37_2290)"></path>
                                        <path opacity="0.3"
                                              d="M214.266 414.93S186.367 475 107.133 475C27.9 475 0 414.93 0 414.93l39.953-306.622h134.294l40.019 306.622z"
                                              fill="url(#paint1_linear_37_2290)"></path>
                                    </g>
                                    <path
                                        d="M180.24 105.481l-5.875 14.041H39.903l-5.859-14.041 47.247-58.174a33.303 33.303 0 0151.702 0l47.247 58.174z"
                                        fill="#2C32BB"></path>
                                    <path d="M180.24 105.481l-5.892 14.042H39.903l-5.859-14.042H180.24z"
                                          fill="#1B209A"></path>
                                    <path opacity="0.1" d="M180.24 105.481l-5.892 14.042H39.903l-5.859-14.042H180.24z"
                                          fill="#0D1175"></path>
                                    <path opacity="0.1" d="M91.287 62.444l-.806-8.407 33.674-3.72-1.158 12.127h-31.71z"
                                          fill="#2C31BB"></path>
                                </g>
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_37_2290" x1="107.141" y1="97.366" x2="107.141"
                                                y2="454.047" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#fff"></stop>
                                    <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
                                </linearGradient>
                                <linearGradient id="paint1_linear_37_2290" x1="107.133" y1="108.308" x2="107.133"
                                                y2="475" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#fff"></stop>
                                    <stop offset="1" stopColor="#fff" stop-opacity="0"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="container">
                        <div className="pt-36 pb-20 text-center max-w-[568px] mx-auto opacity-50 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                            <h3 className="text-2xl lg:text-5xl font-apercu font-medium">
                                Have an idea?
                            </h3>
                            <p className="mt-3 text-xl lg:text-2xl">
                                We can help you bring it to life!
                            </p>

                            <Link to="/contact" className="styled-button mt-8">
                                Get in touch
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M10.97 14.47a.75.75 0 101.06 1.06l5-5a.75.75 0 000-1.06l-5-5a.75.75 0 10-1.06 1.06l3.72 3.72H4a.75.75 0 000 1.5h10.69l-3.72 3.72z" fill="currentColor"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
