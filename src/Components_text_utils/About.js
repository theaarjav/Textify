import React from 'react'

export default function About(props) {
  return (
    <>
    <div className={`container col-xxl-8 px-4 py-5 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src="https://bulk.ly/wp-content/uploads/2020/12/social-media-tools-3.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">Developer:</h1><br/><h2>Aarjav Desai</h2><hr/>
        <p className="lead">A coding enthusiast & Fullstack Developer interested in Software & Game Development with a good command over NodeJS. I also know Game Development with Unity & C#.</p>
        <p className="lead"><strong>Educational Status:</strong> Currently a IIIrd yearite persuing B. Tech in Electronics & Communications Engineering holding 8.3 CGPA</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
          {/* <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
          <a></a>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
