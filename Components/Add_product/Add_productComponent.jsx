import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";

const Add_productComponent = () => {
  return (
    <>
      <div class='section_gaps'></div>
      <section id='ClientList' className='Admin openTicket productData'>
        <div className='container custom_width'>
          {/* Billing Invoices */}
          <div className='row d_flex bgss mb-4'>
            <div className='col-lg-5'>
              <div className='header_part d_flex'>
                {/* svg */}
                <div className='svg'>
                  <svg
                    width={42}
                    height={38}
                    viewBox='0 0 42 38'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M21 0.641113L7.641 14.0001H0V23.0001H1.875L6.0465 36.9216L6.375 38.0001H35.625L35.9535 36.9216L40.125 23.0001H42V14.0001H34.359L21 0.641113ZM21 4.90711L30.0945 14.0001H11.907L21 4.90711ZM3 17.0001H39V20.0001H37.875L37.5465 21.0786L33.375 35.0001H8.625L4.4535 21.0786L4.125 20.0001H3V17.0001ZM13.5 21.5001V32.0001H16.5V21.5001H13.5ZM19.5 21.5001V32.0001H22.5V21.5001H19.5ZM25.5 21.5001V32.0001H28.5V21.5001H25.5Z'
                      fill='#747474'
                    />
                  </svg>
                </div>
                {/* Text Part */}
                <div className='text'>
                  <h3>Add New Products...</h3>
                  <p>Upload Your Products In The Store</p>
                </div>
              </div>
            </div>
          </div>
          {/* Table Part  */}
          <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
            <Row>
              <Col sm={2} className='part_1'>
                <Nav variant='pills' className='flex-column'>
                  <h4 className='mb-3'>Quick navigation</h4>
                  <Nav.Item>
                    <Nav.Link eventKey='first'>Product Information</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey='second'>Product Images</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={10}>
                <Tab.Content>
                  <Tab.Pane eventKey='first'>
                    <div className='product_information'>
                      {/* Product Name */}
                      <div className='custome_input'>
                        <label> Product Name </label>
                        <input
                          type='text'
                          placeholder='Enter product name here'
                        />
                      </div>
                      {/* Selling Price */}
                      <div className='custome_input'>
                        <label> Selling Price </label>
                        <input
                          type='text'
                          placeholder='Enter selling price here'
                        />
                      </div>
                      {/* Discount Price */}
                      <div className='custome_input'>
                        <label> Discount Price </label>
                        <input
                          type='text'
                          placeholder='Enter discount price here'
                        />
                      </div>
                      {/* Product Code */}
                      <div className='custome_input'>
                        <label> Product Code </label>
                        <input
                          type='text'
                          placeholder='Enter product code here'
                        />
                      </div>
                      {/* Available Quantity */}
                      <div className='custome_input'>
                        <label> Available Quantity </label>
                        <input
                          type='text'
                          placeholder='Enter available quantity here'
                        />
                      </div>
                      {/* Category Name */}
                      <div className='custome_input'>
                        <label> Category Name </label>
                        <input type='text' placeholder='Enter category here' />
                      </div>
                      {/* Sub Category Name */}
                      <div className='custome_input'>
                        <label> Sub Category Name </label>
                        <input
                          type='text'
                          placeholder='Enter sub category here'
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
                  </Tab.Pane>
                  <Tab.Pane eventKey='second'>
                    <div
                      className='tab-pane '
                      id='v-pills-ProductImages'
                      role='tabpanel'
                      aria-labelledby='v-pills-ProductImages-tab'
                    >
                      <div className='product_information'>
                        {/* Product Image ( Main image of product ) */}
                        <div className='custome_input'>
                          <label>Product Image ( Main image of product )</label>
                          <input type='file' />
                        </div>
                        {/* Product Image ( Other images of product ) */}
                        <div className='custome_input'>
                          <label>
                            Product Image ( Other images of product )
                          </label>
                          <input type='file' />
                        </div>
                        {/* Product Description */}
                        <div className='custome_input'>
                          <label> Product Description </label>
                          <textarea
                            name=''
                            rows={5}
                            defaultValue={"Write description here"}
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
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </section>
    </>
  );
};

export default Add_productComponent;
