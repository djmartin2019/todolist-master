import React from 'react';
import '../styling/App.css';

function About(){
    return(
        <React.Fragment>
            <div className="row">
                <div className="col-1"/>
                <div className="col-10 bg-white text-center text-dark shading">
                    <div className="row pt-3 pb-5">
                        <div className="col-2"/>
                        <div className="col-8">
                            <h2 className="pb-3">About Me</h2>
                            <p>
                                My name is David Martin and I am currently a Technical Support Analyst at HCSS. My dream is to become a MERN stack web developer and this 
                                website will be my first attempt at improving my skills. Please feel free to reach out to me at the contact information below!
                            </p>
                        </div>
                    </div>
                    <div className="container marketing">

                        {/* <!-- Three columns of text below the carousel --> */}
                        <div className="row">
                        <div className="col-lg-4">
                            <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                            <h2>Heading</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                            <h2>Heading</h2>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        <div className="col-lg-4">
                            <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140"/>
                            <h2>Heading</h2>
                            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                            <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                    </div>
                    <p>
                        Email: djmartin2019@gmail.com
                    </p>
                    <p>
                        Phone: (732) 357-5452
                    </p>
                    </div> 
                </div>
            </div>
        </React.Fragment>
    );
}

export default About;