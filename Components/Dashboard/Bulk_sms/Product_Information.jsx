import { Dropdown } from "react-bootstrap";
import Select from "react-select";
const Product_Information = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <>
      <section id='#ClientList' className='Admin bulkSMS'>
        <div className='container custom_width'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='product_information'>
                {/* Select Sender ID */}
                <div className='custome_input'>
                  <label> Select Sender ID </label>
                  <select name=''>
                    <option value=''>Select sender id here</option>
                    <option value=''>1</option>
                    <option value=''>2</option>
                    <option value=''>3</option>
                  </select>
                </div>
                {/* Enter Mobile Numbers */}
                <div className='custome_input'>
                  <label> Enter Mobile Numbers </label>
                  <input
                    type='text'
                    placeholder='Enter mobile numbers here starting with country code'
                  />
                </div>
                {/* Upload From Excel */}
                <div className='custome_input d_flex'>
                  <a href='' className='Save Upload'>
                    Upload From Excel
                  </a>
                  <div className='FilterBy_item d_flex DownloadReport AllClient'>
                    <div className=''>
                      {/* <div className='dropdown_part'> */}
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
                            color: "#fff",

                            fontSize: "15px",
                          }),
                          control: (styles) => ({
                            ...styles,
                            backgroundColor: "#556FF6",
                            padding: "3px 0px",
                            margin: "0px 0px",

                            ":focus-within": {
                              ...styles[":focus-within"],
                              border: "none",
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
                  </div>
                </div>
                {/* Enter SMS Content */}
                <div className='custome_input'>
                  <label> Enter SMS Content </label>
                  <textarea
                    name=''
                    rows={5}
                    defaultValue={"Enter your SMS body here"}
                  />
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
        </div>
      </section>
    </>
  );
};

export default Product_Information;
