import './CustomersLoveMobiles.css'
import bg_1 from './../../assets/bg-1.png';
import Accordion from 'react-bootstrap/Accordion';



export const CustomersLoveMobiles = () => {
  return (
    <div className="bg w-100">
      <div className="container mx-auto py-5">
        <div className="d-flex flex-column align-items-center my-4">
          <h2 className="text-white text-center mb-4 fw-bold"> SEE WHY CUSTOMERS LOVE THE OUR MOBILES </h2>
          <p className="exp text-white"> DESIGNED TO PERFECTION </p>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
            <img className="h-100 w-75" src={bg_1} alt="" />
          </div>
          <div className="acc col-lg-6 col-md-12 col-sm-10 col-10">
            <Accordion>
              <Accordion.Item eventKey="0" className='bg-transparent'>
                <Accordion.Header className='bg-transparent text-white border-bottom'>NEW GRADIENT COLOR FINISHES</Accordion.Header>
                <Accordion.Body className='text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className='bg-transparent'>
                <Accordion.Header className='bg-transparent text-white border-bottom '>FOUR-SIDED CURVED CERAMIC BODY</Accordion.Header>
                <Accordion.Body className='bg-transparent text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className='bg-transparent'>
                <Accordion.Header className='bg-transparent text-white border-bottom '>4000MAH HIGH-CAPACITY BATTERY</Accordion.Header>
                <Accordion.Body className='bg-transparent text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className='bg-transparent'>
                <Accordion.Header className='bg-transparent text-white border-bottom '>FULLY HIDDEN CAMERA LENS</Accordion.Header>
                <Accordion.Body className='bg-transparent text-white'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}
