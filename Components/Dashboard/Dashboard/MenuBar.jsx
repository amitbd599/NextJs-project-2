import Image from "next/image";
import profileImg from "../../../Assets/images/profile.png"; 
const MenuBar = ({ name }) => {
  return (
    <>
      <nav id='nab_bar'>
        <div className='container custom_width'>
          <div className='row d_flex justify-content-between'>
            {/* Welcome text */}
            <div className='col-lg-6'>
              <div className='menu_text'>
                <h1>
                  <span>{name}</span>
                </h1>
              </div>
            </div>
            {/* Search */}
            <div className='col-lg-4'>
              <div className='custome_input'>
                <input type='text' name='' placeholder='Search Here...' />
                <div className='search'>
                  <svg
                    width={27}
                    height={27}
                    viewBox='0 0 27 27'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M26 26L20.0974 20.0868M23.3684 12.1842C23.3684 15.1504 22.1901 17.9952 20.0926 20.0926C17.9952 22.1901 15.1504 23.3684 12.1842 23.3684C9.21797 23.3684 6.37323 22.1901 4.27578 20.0926C2.17833 17.9952 1 15.1504 1 12.1842C1 9.21797 2.17833 6.37323 4.27578 4.27578C6.37323 2.17833 9.21797 1 12.1842 1C15.1504 1 17.9952 2.17833 20.0926 4.27578C22.1901 6.37323 23.3684 9.21797 23.3684 12.1842V12.1842Z'
                      stroke='#A16CF8'
                      strokeWidth={2}
                      strokeLinecap='round'
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* Settings */}
            <div className='col-lg-2'>
              <div className='menu_settings d_flex d_justify '>
                {/* Notification */}
                <div className='notification'>
                  <svg
                    width={30}
                    height={38}
                    viewBox='0 0 30 38'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M14.68 37.4172C15.3099 37.4018 15.9144 37.1508 16.3866 36.7084C16.8588 36.266 17.1681 35.6609 17.26 35H12C12.0945 35.6788 12.4183 36.2982 12.9113 36.7428C13.4043 37.1875 14.0328 37.4271 14.68 37.4172Z'
                      fill='#A16CF8'
                    />
                    <path
                      d='M29.46 26.83C28.4957 25.9703 27.6515 24.9848 26.95 23.9C26.1842 22.4025 25.7252 20.7672 25.6 19.09V14.15C25.5959 13.5499 25.5424 12.9513 25.44 12.36C24.6529 12.2027 23.8965 11.919 23.2 11.52C23.4655 12.3748 23.6003 13.2649 23.6 14.16V19.1C23.7226 21.146 24.2854 23.1415 25.25 24.95C25.9404 26.044 26.7596 27.0512 27.69 27.95H2.08C3.01041 27.0512 3.8296 26.044 4.52 24.95C5.48461 23.1415 6.04743 21.146 6.17 19.1V14.15C6.16474 12.9927 6.38781 11.8457 6.82644 10.7747C7.26508 9.70373 7.91066 8.72979 8.72622 7.90866C9.54178 7.08752 10.5113 6.43532 11.5793 5.98941C12.6472 5.54349 13.7927 5.31261 14.95 5.30999C16.6438 5.31135 18.2995 5.81225 19.71 6.74999C19.5545 6.17898 19.4672 5.59155 19.45 4.99999V4.36999C18.4059 3.85635 17.2841 3.51848 16.13 3.36999V2.10999C16.13 1.75593 15.9893 1.41637 15.739 1.16601C15.4886 0.915645 15.1491 0.774994 14.795 0.774994C14.4409 0.774994 14.1014 0.915645 13.851 1.16601C13.6007 1.41637 13.46 1.75593 13.46 2.10999V3.41999C10.8757 3.78455 8.51057 5.07174 6.80122 7.04393C5.09187 9.01612 4.15373 11.5401 4.16 14.15V19.09C4.03475 20.7672 3.57578 22.4025 2.81 23.9C2.12088 24.9823 1.29019 25.9677 0.34 26.83C0.233332 26.9237 0.147841 27.0391 0.0892174 27.1684C0.0305935 27.2977 0.000179796 27.438 0 27.58V28.94C0 29.2052 0.105357 29.4596 0.292893 29.6471C0.48043 29.8346 0.734784 29.94 1 29.94H28.8C29.0652 29.94 29.3196 29.8346 29.5071 29.6471C29.6946 29.4596 29.8 29.2052 29.8 28.94V27.58C29.7998 27.438 29.7694 27.2977 29.7108 27.1684C29.6522 27.0391 29.5667 26.9237 29.46 26.83Z'
                      fill='#A16CF8'
                    />
                  </svg>
                  <div className='notification_alert' />
                </div>
                {/* Settings */}
                <div className='notification'>
                  <svg
                    width={30}
                    height={30}
                    viewBox='0 0 30 30'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12 1V5L10 6L7 3L3 7L6 10L5 12H1V18H5L6 20L3 23L7 27L10 24L12 25V29H18V25L20 24L23 27L27 23L24 20L25 18H29V12H25L24 10L27 7L23 3L20 6L18 5V1H12Z'
                      stroke='#A16CF8'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M15 19C17.2091 19 19 17.2091 19 15C19 12.7909 17.2091 11 15 11C12.7909 11 11 12.7909 11 15C11 17.2091 12.7909 19 15 19Z'
                      stroke='#A16CF8'
                      strokeWidth={2}
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                {/* profile */}
                <div className='profile_part'>
                  <Image src={profileImg} alt='' width={"äuto"} height={50} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- Sections Gaps --> */}
      <div class='section_gaps'></div>
    </>
  );
};

export default MenuBar;
