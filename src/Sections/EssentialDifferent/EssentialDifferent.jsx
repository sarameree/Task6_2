import './EssentialDifferent.css'
import ic12  from './../../assets/ic12.png';
import ic13  from './../../assets/ic13.png';
import ic11  from './../../assets/ic11.png';


export const EssentialDifferent = () => {
  return (
    <div className="container mx-auto py-4 my-5">
            <div className="d-flex flex-column align-items-center">
                <h1 className="text-black text-center mb-4 fw-bold"> WHAT MAKES THE ESSENTIAL DIFFERENT? </h1>
                <p className="exp text-black-50"> EXPERIENCE HIGH PERFORMANCE AND SECURE </p> 
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
                    <div className="card d-flex flex-column align-items-center px-3 py-4 border-0">
                        <div className="d-flex align-items-center justify-content-center p-3 my-4">
                            <img src={ic12} alt="" />
                        </div>
                        <div className="card_body_edu card-body d-flex flex-column align-items-center px-0">
                          <h6 className="card-title text-black fw-bold my-1"><a href="">PERFECT CUT</a></h6>
                          <h4 className="card-text text-center px-0 text-black my-1"><a href="">DUAL CAMERA</a></h4>
                          <div>
                            <p className="text-center text-black-50 my-1">Tristique senectus et netus et malesuada ant reiet fames.</p>
                          </div>
                        </div>
                      </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
                    <div className="card d-flex flex-column align-items-center px-3 py-4 border-0">
                        <div className="d-flex align-items-center justify-content-center p-3 my-4">
                            <img src={ic13} alt="" />
                        </div>
                        <div className="card_body_edu card-body d-flex flex-column align-items-center px-0">
                          <h6 className="card-title text-black fw-bold my-1"><a href="">PRETTY</a></h6>
                          <h4 className="card-text text-center px-0 text-black my-1"><a href="">INTELLIGENT PROCESSING</a></h4>
                          <div>
                            <p className="text-center text-black-50 my-1">Consequat ac habit amet asse felis donec et odio pellentesque diam.</p>
                          </div>
                        </div>
                      </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 mt-4">
                    <div className="card d-flex flex-column align-items-center px-3 py-4 border-0">
                        <div className="d-flex align-items-center justify-content-center p-3 my-4">
                            <img src={ic11} alt="" />
                        </div>
                        <div className="card_body_edu card-body d-flex flex-column align-items-center px-0">
                          <h6 className="card-title text-black fw-bold my-1"><a href="">MOST POPULAR</a></h6>
                          <h4 className="card-text text-center px-0 text-black my-1"><a href="">8GB DDR5 RAM</a></h4>
                          <div>
                            <p className="text-center text-black-50 my-1">Dictum varius duis at consectetur lorem donec massa sap faucibus.</p>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
  )
}
