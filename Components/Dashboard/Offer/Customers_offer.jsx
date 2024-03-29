import Select from "react-select";
const Customers_offer = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" }, 
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <>
      <div class='section_gaps'></div>
      <section id='ClientList' className='Admin openTicket'>
        <div className='container custom_width'>
          {/* Header */}
          <div className='row d_flex bgss'>
            <div className='col-lg-5'>
              <div className='header_part d_flex'>
                {/* svg */}
                <div className='svg'>
                  <svg
                    width={35}
                    height={35}
                    viewBox='0 0 35 35'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M33.9675 16.765L18.2175 1.015C17.5875 0.385 16.7125 0 15.75 0H3.5C1.575 0 0 1.575 0 3.5V15.75C0 16.7125 0.385 17.5875 1.0325 18.235L16.7825 33.985C17.4125 34.615 18.2875 35 19.25 35C20.2125 35 21.0875 34.615 21.7175 33.9675L33.9675 21.7175C34.615 21.0875 35 20.2125 35 19.25C35 18.2875 34.5975 17.395 33.9675 16.765ZM19.25 31.5175L3.5 15.75V3.5H15.75V3.4825L31.5 19.2325L19.25 31.5175Z'
                      fill='#747474'
                    />
                    <path
                      d='M7.875 10.5C9.32475 10.5 10.5 9.32475 10.5 7.875C10.5 6.42525 9.32475 5.25 7.875 5.25C6.42525 5.25 5.25 6.42525 5.25 7.875C5.25 9.32475 6.42525 10.5 7.875 10.5Z'
                      fill='#747474'
                    />
                  </svg>
                </div>
                {/* Text Part */}
                <div className='text'>
                  <h3>Create Coupons</h3>
                  <p>Create coupons for your customers</p>
                </div>
              </div>
            </div>
          </div>
          {/* Create Coupons  */}
          <div className='row d_flex'>
            <div className='col-lg-12'>
              <div className='product_information Offers'>
                {/* Coupon Code (e.g. , NEW25, REGULAR10) */}
                <div className='custome_input'>
                  <label> Coupon Code (e.g. , NEW25, REGULAR10) </label>
                  <input type='text' placeholder='Enter coupon code here' />
                </div>
                {/* Discount Percentage */}
                <div className='custome_input'>
                  <label> Discount Percentage </label>
                  <input type='text' placeholder='Select discount percentage' />
                </div>
                {/* Sub Category Name */}
                <div className='custome_input'>
                  <a href='' className='Save'>
                    Next
                  </a>
                  <a href='' className='Cancle'>
                    Cancle
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Previous Coupons */}
          <div className='row d_flex bgss  mt-5'>
            <div className='col-lg-5'>
              <div className='header_part d_flex'>
                {/* svg */}
                <div className='svg'>
                  <svg
                    width={35}
                    height={35}
                    viewBox='0 0 35 35'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M33.9675 16.765L18.2175 1.015C17.5875 0.385 16.7125 0 15.75 0H3.5C1.575 0 0 1.575 0 3.5V15.75C0 16.7125 0.385 17.5875 1.0325 18.235L16.7825 33.985C17.4125 34.615 18.2875 35 19.25 35C20.2125 35 21.0875 34.615 21.7175 33.9675L33.9675 21.7175C34.615 21.0875 35 20.2125 35 19.25C35 18.2875 34.5975 17.395 33.9675 16.765ZM19.25 31.5175L3.5 15.75V3.5H15.75V3.4825L31.5 19.2325L19.25 31.5175Z'
                      fill='#747474'
                    />
                    <path
                      d='M7.875 10.5C9.32475 10.5 10.5 9.32475 10.5 7.875C10.5 6.42525 9.32475 5.25 7.875 5.25C6.42525 5.25 5.25 6.42525 5.25 7.875C5.25 9.32475 6.42525 10.5 7.875 10.5Z'
                      fill='#747474'
                    />
                  </svg>
                </div>
                {/* Text Part */}
                <div className='text'>
                  <h3>Previous Coupons</h3>
                  <p>Old coupons created for your customers</p>
                </div>
              </div>
            </div>
          </div>
          {/* Table Data */}
          <div className='table_part'>
            <table className='table'>
              <tbody>
                <tr>
                  <th>Coupon No.</th>
                  <th>Coupon Code</th>
                  <th>Discount Percentage</th>
                  <th>Created On</th>
                  <th>Use Count</th>
                  <th>Status</th>
                </tr>
                {/* item */}
                <tr>
                  <td>01</td>
                  <td>TJCYEND5B</td>
                  <td>32%</td>
                  <td>17 Oct, 2020</td>
                  <td>3292</td>
                  <td>
                    <div className='dropdown_part'>
                      <Select
                        className='select__color'
                        defaultValue={options[0]}
                        options={options}
                        styles={{
                          option: (provided, state) => ({
                            ...provided,
                            borderBottom: "1px solid #ddd",
                            color: state.isSelected ? "#fff" : "#666",
                            background: state.isSelected ? "#556FF6" : "#fff",
                            cursor: "pointer",
                            margin: "0px",
                            ":active": {
                              backgroundColor: "#ddd",
                              cursor: "pointer",
                            },
                          }),
                          singleValue: (provided, state) => ({
                            ...provided,
                            color: "#333",

                            fontSize: "15px",
                          }),
                          control: (styles) => ({
                            ...styles,
                            backgroundColor: "#fff",
                            padding: "3px 0px",
                            margin: "0px 0px",
                            border: "1px solid #ddd",

                            ":focus-within": {
                              ...styles[":focus-within"],
                              border: "1px solid #ddd",
                              boxShadow: "none",
                            },
                          }),
                          menuList: (styles) => ({
                            ...styles,
                            margin: "0px",
                            padding: "0px",
                          }),
                          noOptionsMessage: (styles) => ({
                            ...styles,
                            background: "red",
                            color: "#fff",
                          }),
                        }}
                      />
                    </div>
                  </td>
                </tr>
                {/* item */}
                <tr>
                  <td>01</td>
                  <td>TJCYEND5B</td>
                  <td>32%</td>
                  <td>17 Oct, 2020</td>
                  <td>3292</td>
                  <td>
                    <div className='dropdown_part'>
                      <Select
                        className='select__color'
                        defaultValue={options[0]}
                        options={options}
                        styles={{
                          option: (provided, state) => ({
                            ...provided,
                            borderBottom: "1px solid #ddd",
                            color: state.isSelected ? "#fff" : "#666",
                            background: state.isSelected ? "#556FF6" : "#fff",
                            cursor: "pointer",
                            margin: "0px",
                            ":active": {
                              backgroundColor: "#ddd",
                              cursor: "pointer",
                            },
                          }),
                          singleValue: (provided, state) => ({
                            ...provided,
                            color: "#333",

                            fontSize: "15px",
                          }),
                          control: (styles) => ({
                            ...styles,
                            backgroundColor: "#fff",
                            padding: "3px 0px",
                            margin: "0px 0px",
                            border: "1px solid #ddd",

                            ":focus-within": {
                              ...styles[":focus-within"],
                              border: "1px solid #ddd",
                              boxShadow: "none",
                            },
                          }),
                          menuList: (styles) => ({
                            ...styles,
                            margin: "0px",
                            padding: "0px",
                          }),
                          noOptionsMessage: (styles) => ({
                            ...styles,
                            background: "red",
                            color: "#fff",
                          }),
                        }}
                      />
                    </div>
                  </td>
                </tr>
                {/* item */}
                <tr>
                  <td>01</td>
                  <td>TJCYEND5B</td>
                  <td>32%</td>
                  <td>17 Oct, 2020</td>
                  <td>3292</td>
                  <td>
                    <div className='dropdown_part'>
                      <Select
                        className='select__color'
                        defaultValue={options[0]}
                        options={options}
                        styles={{
                          option: (provided, state) => ({
                            ...provided,
                            borderBottom: "1px solid #ddd",
                            color: state.isSelected ? "#fff" : "#666",
                            background: state.isSelected ? "#556FF6" : "#fff",
                            cursor: "pointer",
                            margin: "0px",
                            ":active": {
                              backgroundColor: "#ddd",
                              cursor: "pointer",
                            },
                          }),
                          singleValue: (provided, state) => ({
                            ...provided,
                            color: "#333",

                            fontSize: "15px",
                          }),
                          control: (styles) => ({
                            ...styles,
                            backgroundColor: "#fff",
                            padding: "3px 0px",
                            margin: "0px 0px",
                            border: "1px solid #ddd",

                            ":focus-within": {
                              ...styles[":focus-within"],
                              border: "1px solid #ddd",
                              boxShadow: "none",
                            },
                          }),
                          menuList: (styles) => ({
                            ...styles,
                            margin: "0px",
                            padding: "0px",
                          }),
                          noOptionsMessage: (styles) => ({
                            ...styles,
                            background: "red",
                            color: "#fff",
                          }),
                        }}
                      />
                    </div>
                  </td>
                </tr>
                {/* item */}
                <tr>
                  <td>01</td>
                  <td>TJCYEND5B</td>
                  <td>32%</td>
                  <td>17 Oct, 2020</td>
                  <td>3292</td>
                  <td>
                    <div className='dropdown_part'>
                      <Select
                        className='select__color'
                        defaultValue={options[0]}
                        options={options}
                        styles={{
                          option: (provided, state) => ({
                            ...provided,
                            borderBottom: "1px solid #ddd",
                            color: state.isSelected ? "#fff" : "#666",
                            background: state.isSelected ? "#556FF6" : "#fff",
                            cursor: "pointer",
                            margin: "0px",
                            ":active": {
                              backgroundColor: "#ddd",
                              cursor: "pointer",
                            },
                          }),
                          singleValue: (provided, state) => ({
                            ...provided,
                            color: "#333",

                            fontSize: "15px",
                          }),
                          control: (styles) => ({
                            ...styles,
                            backgroundColor: "#fff",
                            padding: "3px 0px",
                            margin: "0px 0px",
                            border: "1px solid #ddd",

                            ":focus-within": {
                              ...styles[":focus-within"],
                              border: "1px solid #ddd",
                              boxShadow: "none",
                            },
                          }),
                          menuList: (styles) => ({
                            ...styles,
                            margin: "0px",
                            padding: "0px",
                          }),
                          noOptionsMessage: (styles) => ({
                            ...styles,
                            background: "red",
                            color: "#fff",
                          }),
                        }}
                      />
                    </div>
                  </td>
                </tr>
                {/* item */}
                <tr>
                  <td>01</td>
                  <td>TJCYEND5B</td>
                  <td>32%</td>
                  <td>17 Oct, 2020</td>
                  <td>3292</td>
                  <td>
                    <div className='dropdown_part'>
                      <Select
                        className='select__color'
                        defaultValue={options[0]}
                        options={options}
                        styles={{
                          option: (provided, state) => ({
                            ...provided,
                            borderBottom: "1px solid #ddd",
                            color: state.isSelected ? "#fff" : "#666",
                            background: state.isSelected ? "#556FF6" : "#fff",
                            cursor: "pointer",
                            margin: "0px",
                            ":active": {
                              backgroundColor: "#ddd",
                              cursor: "pointer",
                            },
                          }),
                          singleValue: (provided, state) => ({
                            ...provided,
                            color: "#333",

                            fontSize: "15px",
                          }),
                          control: (styles) => ({
                            ...styles,
                            backgroundColor: "#fff",
                            padding: "3px 0px",
                            margin: "0px 0px",
                            border: "1px solid #ddd",

                            ":focus-within": {
                              ...styles[":focus-within"],
                              border: "1px solid #ddd",
                              boxShadow: "none",
                            },
                          }),
                          menuList: (styles) => ({
                            ...styles,
                            margin: "0px",
                            padding: "0px",
                          }),
                          noOptionsMessage: (styles) => ({
                            ...styles,
                            background: "red",
                            color: "#fff",
                          }),
                        }}
                      />
                    </div>
                  </td>
                </tr>
                {/* item */}
                <tr>
                  <td>01</td>
                  <td>TJCYEND5B</td>
                  <td>32%</td>
                  <td>17 Oct, 2020</td>
                  <td>3292</td>
                  <td>
                    <div className='dropdown_part'>
                      <Select
                        className='select__color'
                        defaultValue={options[0]}
                        options={options}
                        styles={{
                          option: (provided, state) => ({
                            ...provided,
                            borderBottom: "1px solid #ddd",
                            color: state.isSelected ? "#fff" : "#666",
                            background: state.isSelected ? "#556FF6" : "#fff",
                            cursor: "pointer",
                            margin: "0px",
                            ":active": {
                              backgroundColor: "#ddd",
                              cursor: "pointer",
                            },
                          }),
                          singleValue: (provided, state) => ({
                            ...provided,
                            color: "#333",

                            fontSize: "15px",
                          }),
                          control: (styles) => ({
                            ...styles,
                            backgroundColor: "#fff",
                            padding: "3px 0px",
                            margin: "0px 0px",
                            border: "1px solid #ddd",

                            ":focus-within": {
                              ...styles[":focus-within"],
                              border: "1px solid #ddd",
                              boxShadow: "none",
                            },
                          }),
                          menuList: (styles) => ({
                            ...styles,
                            margin: "0px",
                            padding: "0px",
                          }),
                          noOptionsMessage: (styles) => ({
                            ...styles,
                            background: "red",
                            color: "#fff",
                          }),
                        }}
                      />
                    </div>
                  </td>
                </tr>
                {/* item */}
                <tr>
                  <td>01</td>
                  <td>TJCYEND5B</td>
                  <td>32%</td>
                  <td>17 Oct, 2020</td>
                  <td>3292</td>
                  <td>
                    <div className='dropdown_part'>
                      <Select
                        className='select__color'
                        defaultValue={options[0]}
                        options={options}
                        styles={{
                          option: (provided, state) => ({
                            ...provided,
                            borderBottom: "1px solid #ddd",
                            color: state.isSelected ? "#fff" : "#666",
                            background: state.isSelected ? "#556FF6" : "#fff",
                            cursor: "pointer",
                            margin: "0px",
                            ":active": {
                              backgroundColor: "#ddd",
                              cursor: "pointer",
                            },
                          }),
                          singleValue: (provided, state) => ({
                            ...provided,
                            color: "#333",

                            fontSize: "15px",
                          }),
                          control: (styles) => ({
                            ...styles,
                            backgroundColor: "#fff",
                            padding: "3px 0px",
                            margin: "0px 0px",
                            border: "1px solid #ddd",

                            ":focus-within": {
                              ...styles[":focus-within"],
                              border: "1px solid #ddd",
                              boxShadow: "none",
                            },
                          }),
                          menuList: (styles) => ({
                            ...styles,
                            margin: "0px",
                            padding: "0px",
                          }),
                          noOptionsMessage: (styles) => ({
                            ...styles,
                            background: "red",
                            color: "#fff",
                          }),
                        }}
                      />
                    </div>
                  </td>
                </tr>
                {/* item */}
                <tr>
                  <td>01</td>
                  <td>TJCYEND5B</td>
                  <td>32%</td>
                  <td>17 Oct, 2020</td>
                  <td>3292</td>
                  <td>
                    <div className='dropdown_part'>
                      <Select
                        className='select__color'
                        defaultValue={options[0]}
                        options={options}
                        styles={{
                          option: (provided, state) => ({
                            ...provided,
                            borderBottom: "1px solid #ddd",
                            color: state.isSelected ? "#fff" : "#666",
                            background: state.isSelected ? "#556FF6" : "#fff",
                            cursor: "pointer",
                            margin: "0px",
                            ":active": {
                              backgroundColor: "#ddd",
                              cursor: "pointer",
                            },
                          }),
                          singleValue: (provided, state) => ({
                            ...provided,
                            color: "#333",

                            fontSize: "15px",
                          }),
                          control: (styles) => ({
                            ...styles,
                            backgroundColor: "#fff",
                            padding: "3px 0px",
                            margin: "0px 0px",
                            border: "1px solid #ddd",

                            ":focus-within": {
                              ...styles[":focus-within"],
                              border: "1px solid #ddd",
                              boxShadow: "none",
                            },
                          }),
                          menuList: (styles) => ({
                            ...styles,
                            margin: "0px",
                            padding: "0px",
                          }),
                          noOptionsMessage: (styles) => ({
                            ...styles,
                            background: "red",
                            color: "#fff",
                          }),
                        }}
                      />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div class='section_gaps'></div>
    </>
  );
};

export default Customers_offer;
