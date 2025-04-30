import React from 'react'

const HeaderLogin = () => {
  return (
    <header className="custom-header pt-4 w-100 navbar navbar-dark justify-content-around align-items-center">
    <div id="info" className="d-flex gap-5 w-50 justify-content-between">
      <div id="logo" role="button" className="d-flex align-items-center me-5">
        <i className="bi bi-egg-fried fs-1 text-light me-3"></i>
        <span className="navbar-brand fw-bold fs-3">DevSteam</span>
      </div>

    </div>

  </header>
  )
}

export default HeaderLogin