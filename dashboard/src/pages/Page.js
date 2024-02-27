import React from 'react'
const Page = () => {
    return (
        <div className='container text-center '>
            <div className="row justify-content-center mt-5">

                <div className="col-lg-4 text-start p-4 shadow-lg mt-5">
                    <h3>Login</h3><br />
                    <p>Sign In to Your account</p>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div><br />
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="password" className="form-control" placeholder="Enter your Pasword" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <input class="btn btn-primary " type="button" value="Login"></input>
                </div>
                <div className="col-lg-4 p-4 bg-primary text-white shadow-lg mt-5">
                    <div>
                        <h4>Sign Up</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing <br />
                            industry. Lorem Ipsum has been<br />
                            the industry's</p><br />

                        <button type="button" className="btn btn-secondary ">Register Now!</button>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Page