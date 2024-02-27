import React from "react";
const Typography = () => {
    return (
        <>
            <div className="container text-start">
                <div className="card mb-4">
                    <div className="card-header">
                        "headings"
                    </div>
                    <div className="card-body">
                        <div className="row align-items-center">

                            <div className="col-12">
                                <p>.h1 through.h6classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element</p>
                            </div>
                            <div className="col-12">
                                <h1>h1. Bootstrap heading</h1>
                            </div>
                            <div className="col-12">
                                <h2>h2. Bootstrap heading</h2>
                            </div>
                            <div className="col-12">
                                <h3>h3. Bootstrap heading</h3>
                            </div>
                            <div className="col-12">
                                <h4>h4. Bootstrap heading</h4>
                            </div>
                            <div className="col-12">
                                <h5>h5. Bootstrap heading</h5>
                            </div>
                            <div className="col-12">
                                <h6>h6. Bootstrap heading</h6>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            <div className="container text-start">
                <div className="card mb-4">
                    <div className="card-header">
                        "Display-headings"
                    </div>
                    <div className="card-body">
                        <div className="row align-items-center">

                            <div className="col-12">
                                <p>Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a display heading—a larger, slightly more opinionated heading style.</p>
                            </div>
                            <div className="col-12">
                                <p className="display-1">Display 1</p>
                            </div>
                            <div className="col-12">
                                <p className="display-2">Display 2</p>
                            </div>
                            <div className="col-12">
                                <p className="display-3">Display 3</p>
                            </div>
                            <div className="col-12">
                                <p className="display-4">Display 4</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Typography