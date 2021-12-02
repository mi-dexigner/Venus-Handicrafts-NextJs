const TopBar = () => {
    return (
        <section className="topbar d-none d-lg-block d-xl-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <p>
              Welcome to our store call
              <a href="tel//+1123456789">+1 123 4567 89</a> for Support
            </p>
          </div>
          <div className="col-md-4 text-end">
            <ul className="list-inline">
              <li className="list-inline-item">
                <select className="form-select">
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="german">German</option>
                </select>
              </li>
              <li className="list-inline-item">
                <select className="form-select">
                  <option value="USD">USD</option>
                  <option value="POUND">POUND</option>
                  <option value="EURO">EURO</option>
                </select>
              </li>
              <li className="list-inline-item"><a href="#">Login</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    )
}

export default TopBar
