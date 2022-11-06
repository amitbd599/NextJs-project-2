

const Header = () => {
  return (
    <section id="header">
      <div className="container">
        <div className="row d_flex">
          <div className="col-lg-3">
            <img className="img-fluid" src="frontend_asset/img/logo.png" alt="" width="169px" height="40px" />
          </div>
          <div className="col-lg-6">
            <div className="search input-group">
              <input type="text" className="form-control" placeholder="Search here..." aria-label="Recipient's username" aria-describedby="button-addon2" />
              <button type="button" id="button-addon2">
                <i className="fas fa-search" />
              </button>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="left_item d-flex align-self-center justify-content-center">
              <a href="#">
                <div className="d-flex align-items-center header_icon align-self-cente justify-content-center">
                  <div className="svg">
                    <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="#253D4E" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>7</span>
                  </div>
                  <h5 className="ml-2">Wishlist</h5>
                </div>
              </a>
              <a href="#">
                <div className="d-flex align-items-center header_icon align-self-cente justify-content-center">
                  <div className="svg">
                    <svg width={21} height={19} viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.1713 13.4698H6.23141L6.93133 12.0355L18.5608 12.0143C18.9541 12.0143 19.2912 11.7316 19.3614 11.3406L20.9719 2.27048C21.014 2.0326 20.9508 1.78765 20.7963 1.60159C20.72 1.51001 20.6247 1.43625 20.5172 1.38541C20.4097 1.33457 20.2925 1.30788 20.1737 1.30718L5.37933 1.25772L5.25293 0.659477C5.17334 0.277922 4.83157 0 4.44298 0H0.826329C0.607173 0 0.396993 0.0875948 0.242026 0.243515C0.0870594 0.399435 0 0.610908 0 0.831412C0 1.05192 0.0870594 1.26339 0.242026 1.41931C0.396993 1.57523 0.607173 1.66282 0.826329 1.66282H3.77349L4.32594 4.30544L5.68599 10.9308L3.93501 13.8066C3.84408 13.9301 3.78931 14.0767 3.7769 14.2299C3.76449 14.3831 3.79493 14.5367 3.86479 14.6734C4.00524 14.9536 4.28849 15.1303 4.60216 15.1303H6.07223C5.75883 15.5491 5.58955 16.0592 5.59001 16.5835C5.59001 17.9166 6.66682 19 7.99175 19C9.31669 19 10.3935 17.9166 10.3935 16.5835C10.3935 16.0583 10.2203 15.5472 9.91127 15.1303H13.6824C13.369 15.5491 13.1997 16.0592 13.2002 16.5835C13.2002 17.9166 14.277 19 15.6019 19C16.9269 19 18.0037 17.9166 18.0037 16.5835C18.0037 16.0583 17.8305 15.5472 17.5215 15.1303H20.1737C20.6278 15.1303 21 14.7582 21 14.2989C20.9986 14.0786 20.9107 13.8678 20.7555 13.7125C20.6003 13.5572 20.3903 13.4699 20.1713 13.4698ZM5.72344 2.89699L19.2022 2.94174L17.882 10.3797L7.29417 10.3985L5.72344 2.89699ZM7.99175 17.3278C7.58444 17.3278 7.25203 16.9933 7.25203 16.5835C7.25203 16.1737 7.58444 15.8392 7.99175 15.8392C8.39906 15.8392 8.73147 16.1737 8.73147 16.5835C8.73147 16.7809 8.65353 16.9702 8.51481 17.1098C8.37609 17.2493 8.18794 17.3278 7.99175 17.3278ZM15.6019 17.3278C15.1946 17.3278 14.8622 16.9933 14.8622 16.5835C14.8622 16.1737 15.1946 15.8392 15.6019 15.8392C16.0093 15.8392 16.3417 16.1737 16.3417 16.5835C16.3417 16.7809 16.2637 16.9702 16.125 17.1098C15.9863 17.2493 15.7981 17.3278 15.6019 17.3278Z" fill="#253D4E" />
                    </svg>
                    <span>7</span>
                  </div>
                  <h5 className="ml-2">Cart</h5>
                </div>
              </a>
              <a href="#">
                <div className="d-flex align-items-center header_icon align-self-cente justify-content-center">
                  <div className="svg">
                    <svg width={18} height={21} viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 19.6667V18.3333C1 15.3879 3.38781 13 6.33333 13H11.6667C14.6121 13 17 15.3879 17 18.3333V19.6667" stroke="#253D4E" strokeWidth={2} strokeLinecap="round" />
                      <path d="M9 9C6.7908 9 5 7.20913 5 5C5 2.79087 6.7908 1 9 1C11.2092 1 13 2.79087 13 5C13 7.20913 11.2092 9 9 9Z" stroke="#253D4E" strokeWidth={2} strokeLinecap="round" />
                    </svg>
                  </div>
                  <h5 className="ml-2">Account</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* ///border */}
      <hr />
    </section>
  );
};

export default Header;