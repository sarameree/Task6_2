import './InnovativeQualities.css'
import ic5 from './../../assets/ic5.png';
import ic6 from './../../assets/ic6.png';
import ic3 from './../../assets/ic3.png';
import center from './../../assets/center-img_eb064c43-efaf-4d56-90df-f89acfdf85fe.png';
import ic1 from './../../assets/ic1.png';
import ic4 from './../../assets/ic4.png';
import ic2 from './../../assets/ic2.png';
import { Link } from 'react-router-dom';

export const InnovativeQualities = () => {
  return (
    <div className="container mx-auto py-4 my-5">
            <div className="d-flex flex-column align-items-center my-4">
                <h2 className="text-black text-center mb-4 fw-bold"> INNOVATIVE QUALITIES & FEATURES </h2>
                <p className="exp text-black-50"> SHOW YOURS TO THE WORLD </p> 
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mt-4 d-flex flex-column align-items-center justify-content-around gap-2">
                    <div className="box d-flex flex-row-reverse flex-wrap gap-2 pe-2">
                        <div className="">
                            <img src={ic5} alt=""/>
                        </div>
                        <div className="desc">
                            <h5 className="mb-2 text-end"><Link to='' className="fw-bold">INTELLIGENT PROCESSOR</Link></h5>
                            <p className="my-2 cc text-black-50 text-end">Tellus in hac habitasse platea dictumst vestibulum rhoncus srd mana erti qeueri</p>
                        </div>
                    </div>
                    <div className="box d-flex flex-row-reverse flex-wrap gap-2 pe-2">
                        <div className="">
                            <img src={ic6} alt=""/>
                        </div>
                        <div className="desc">
                            <h5 className="mb-2 text-end"><Link to='' className="fw-bold">HD SURROUND AUDIO</Link></h5>
                            <p className="my-2 cc text-black-50 text-end">Sagittis eu volutpat odio ante ut diam quam metus dictfacilisis mauris sit am.</p>
                        </div>
                    </div>
                    <div className="box d-flex flex-row-reverse flex-wrap gap-2 pe-2">
                        <div className="">
                            <img src={ic3} alt=""/>
                        </div>
                        <div className="desc">
                            <h5 className="mb-2 text-end"><Link to='' className="fw-bold">STYLISH BEVEL EDGES</Link></h5>
                            <p className="my-2 cc text-black-50 text-end">Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid</p>
                        </div>
                    </div>
                </div>
                <div className="order col-xl-4 col-lg-12 col-md-12 col-sm-11 mt-4 d-flex flex-column align-items-center justify-content-between">
                    <img className="v-100" src={center} alt=""/>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 mt-4 d-flex flex-column align-items-center justify-content-around gap-2">
                    <div className="box d-flex flex-row flex-wrap gap-2 ps-2">
                        <div className="">
                            <img src={ic1} alt=""/>
                        </div>
                        <div className="desc">
                            <h5 className="mb-2 text-start"><Link to='' className="fw-bold">4.0 WIFI SPECS</Link></h5>
                            <p className="my-2 cc text-black-50 text-start">Commodo nulla facilisi nullam vehicula ipsum a arcu sagitis ipsum sed iacus.</p>
                        </div>
                    </div>
                    <div className="box d-flex flex-row flex-wrap gap-2 ps-2">
                        <div className="">
                            <img className="img-icon" src={ic4} alt=""/>
                        </div>
                        <div className="desc">
                            <h5 className="mb-2 text-start"><Link to='' className="fw-bold">MULIT TASKING & THREADING</Link></h5>
                            <p className="my-2 cc text-black-50 text-start">Amet consectetur adipiscing velit laoreet nega id elit pellentesque habitant morbi .</p>
                        </div>
                    </div>
                    <div className="box d-flex flex-row flex-wrap gap-2 ps-2">
                        <div className="">
                            <img className="img-icon" src={ic2} alt=""/>
                        </div>
                        <div className="desc">
                            <h5 className="mb-2 text-start"><Link to='' className="fw-bold">CLOUD STORAGE</Link></h5>
                            <p className="my-2 cc text-black-50 text-start">Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
