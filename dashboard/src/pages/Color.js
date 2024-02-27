import '../App.css'
import React from 'react'

const Color = () => {
    return (
        <div className="container text-center">
            <div className='card mb-4'>
                <div className='card-header text-start'>
                    "Theme colors"
                    <div className='float-end'>docs</div>
                </div>
                <div className='card-body'>
                    <div className="row align-items-center">
                        <div className="col-lg-2 col-md-4 text-center  ">
                            <div className='bg-primary w-75 rounded mb-3' style={{ paddingTop: "75%" }}>
                            </div>
                            <h6>Brand Primary Color</h6>
                            <h6>HEX: #321fbd</h6>
                            <h6>RGb: rgb(50,31,219)</h6>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <div className='bg-secondary w-75 rounded mb-3' style={{ paddingTop: "75%" }}>
                            </div>
                            <h6>Brand Secondary Color</h6>
                            <h6>HEX: #321fbd</h6>
                            <h6>RGb: rgb(50,31,219)</h6>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <div className='bg-success w-75 rounded mb-3' style={{ paddingTop: "75%" }}>
                            </div>
                            <h6>Brand Success Color</h6>
                            <h6>HEX: #321fbd</h6>
                            <h6>RGb: rgb(50,31,219)</h6>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <div className='bg-danger w-75 rounded mb-3' style={{ paddingTop: "75%" }}>
                            </div>
                            <h6>Brand Danger Color</h6>
                            <h6>HEX: #321fbd</h6>
                            <h6>RGb: rgb(50,31,219)</h6>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <div className='bg-warning w-75 rounded mb-3' style={{ paddingTop: "75%" }}>
                            </div>
                            <h6>Brand Warning Color</h6>
                            <h6>HEX: #321fbd</h6>
                            <h6>RGb: rgb(50,31,219)</h6>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <div className='bg-info w-75 rounded mb-3' style={{ paddingTop: "75%" }}>
                            </div>
                            <h6>Brand Info Color</h6>
                            <h6>HEX: #321fbd</h6>
                            <h6>RGb: rgb(50,31,219)</h6>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <div className='bg-light-subtle w-75 rounded mb-3' style={{ paddingTop: "75%" }}>
                            </div>
                            <h6>Brand light Color</h6>
                            <h6>HEX: #321fbd</h6>
                            <h6>RGb: rgb(50,31,219)</h6>
                        </div>
                        <div className="col-lg-2 col-md-4">
                            <div className='bg-dark w-75 rounded mb-3' style={{ paddingTop: "75%" }}>
                            </div>
                            <h6>Brand dark Color</h6>
                            <h6>HEX: #321fbd</h6>
                            <h6>RGb: rgb(50,31,219)</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Color