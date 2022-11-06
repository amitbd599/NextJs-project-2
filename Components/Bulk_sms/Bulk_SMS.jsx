const Bulk_SMS = () => {
  return (
    <>
      <section id='ClientList' className='Admin openTicket'>
        <div className='container custom_width'>
          {/* Header */}
          <div className='row d_flex bgss'>
            <div className='col-lg-6'>
              <div className='header_part d_flex'>
                {/* svg */}
                <div className='svg'>
                  <svg
                    width={41}
                    height={41}
                    viewBox='0 0 41 41'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M20.5 0C9.1963 0 0 7.35745 0 16.4C0 22.3614 3.8909 27.7057 10.25 30.6147V41L21.197 32.7897C32.1788 32.4966 41 25.256 41 16.4C41 7.35745 31.8037 0 20.5 0ZM20.5 28.7H19.8173L14.35 32.8V27.8451L13.0359 27.3388C7.5235 25.2171 4.1 21.0248 4.1 16.4C4.1 9.61655 11.4574 4.1 20.5 4.1C29.5425 4.1 36.9 9.61655 36.9 16.4C36.9 23.1834 29.5425 28.7 20.5 28.7Z'
                      fill='#747474'
                    />
                    <path
                      d='M10.25 10.25H30.75V14.35H10.25V10.25ZM10.25 18.45H24.6V22.55H10.25V18.45Z'
                      fill='#747474'
                    />
                  </svg>
                </div>
                {/* Text Part */}
                <div className='text'>
                  <h3>Bulk SMS</h3>
                  <p>
                    Get SMS report, send messages in large range to your clients
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class='section_gaps'></div>
    </>
  );
};

export default Bulk_SMS;
