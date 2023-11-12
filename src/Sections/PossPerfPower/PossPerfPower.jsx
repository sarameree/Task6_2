import './PossPerfPower.css'
import { Link } from 'react-router-dom';
import hotspot from './../../assets/hotspot_2934b3a5-cd7e-49be-b709-8269a17f7390.png';
import ic7 from './../../assets/ic7.png';
import ic10 from './../../assets/ic10.png';
import ic9 from './../../assets/ic9_db35a001-6739-4b9f-b1d9-12a825ddf8d9.png';
import ic8 from './../../assets/ic8.png';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const PossPerfPower = () => {

    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleClose2 = () => setShow2(false);
    const handleClose3 = () => setShow3(false);
    const handleClose4 = () => setShow4(false);
    const handleShow1 = () => setShow1(true);
    const handleShow2 = () => setShow2(true);
    const handleShow3 = () => setShow3(true);
    const handleShow4 = () => setShow4(true);


    return (
        <div className="container mx-auto pt-4 my-5 con">
            <div className="d-flex flex-column align-items-center my-4">
                <h2 className="text-black text-center mb-4 fw-bold"> POSSIBILITIES. PERFORMANCE. POWER. </h2>
                <p className="exp text-black-50"> FASTER PROCESSING WITH LESS POWER </p>
            </div>
            <div className="par-img">
                <img className="hotspot-img" src={hotspot} alt="mobile" />
                <div className="point1 point" onClick={handleShow1}>
                    <Link to=''></Link>
                    <div className="after-p1">
                        <div className="d-flex flex-column justify-content-center align-items-center text-center gap-2 my-3">
                            <img className="img1" src={ic7} alt="" />
                            <Link to=''><h6 className="text-black">SCORPION PROCESSOR</h6></Link>
                            <p className="text-black-50">Tristique senectus et netus et malesuada fames ac turpis.</p>
                        </div>
                    </div>
                    <div className="spinner-grow text-danger" role="status">
                        <span className="scale visually-hidden">Loading...</span>
                    </div>
                </div>
                <div className="point2 point" onClick={handleShow2}>
                    <Link to=''></Link>
                    <div className="after-p2">
                        <div className="d-flex flex-column justify-content-center align-items-center text-center gap-2 my-3">
                            <img className="img1" src={ic10} alt="" />
                            <Link to=''><h6 className="text-black">DUAL SIM CARDS</h6></Link>
                            <p className="text-black-50">Donec ultrices tincidunt arcu non sodales neque sodales ut.</p>
                        </div>
                    </div>
                    <div className="spinner-grow text-danger" role="status">
                        <span className="scale visually-hidden">Loading...</span>
                    </div>
                </div>
                <div className="point3 point" onClick={handleShow3}>
                    <Link to=''></Link>
                    <div className="after-p3">
                        <div className="d-flex flex-column justify-content-center align-items-center text-center gap-2 my-3">
                            <img className="img1" src={ic9} alt="" />
                            <Link to=''><h6 className="text-black">48 MP CAMERA</h6></Link>
                            <p className="text-black-50">Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.</p>
                        </div>
                    </div>
                    <div className="spinner-grow text-danger" role="status">
                        <span className="scale visually-hidden">Loading...</span>
                    </div>
                </div>
                <div className="point4 point" onClick={handleShow4}>
                    <Link to=''></Link>
                    <div className="after-p4">
                        <div className="d-flex flex-column justify-content-center align-items-center text-center gap-2 my-3">
                            <img className="img1" src={ic8} alt="" />
                            <Link to=''><h6 className="text-black">48 HRS BACKUP</h6></Link>
                            <p className="text-black-50">Natoque penatibus et magnis dis parturient montes nascetur.</p>
                        </div>
                    </div>
                    <div className="spinner-grow text-danger" role="status">
                        <span className="scale visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>

            <Modal className='popup' show={show1} onHide={handleClose1} keyboard={false} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <img className="img1 m-2" src={ic7} alt="" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Link to=''><h6 className="text-black m-2 fw-bold">SCORPION PROCESSOR</h6></Link>
                    <p className="text-black m-2">Tristique senectus et netus et malesuada fames ac turpis.</p>
                </Modal.Body>
            </Modal>
            <Modal className='popup' show={show2} onHide={handleClose2} keyboard={false} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <img className="img1 m-2" src={ic10} alt="" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Link to=''><h6 className="text-black m-2 fw-bold">DUAL SIM CARDS</h6></Link>
                    <p className="text-black m-2">Donec ultrices tincidunt arcu non sodales neque sodales ut.</p>
                </Modal.Body>
            </Modal>
            <Modal className='popup' show={show3} onHide={handleClose3} keyboard={false} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <img className="img1 m-2" src={ic9} alt="" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Link to=''><h6 className="text-black m-2 fw-bold">48 MP CAMERA</h6></Link>
                    <p className="text-black m-2">Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed.</p>
                </Modal.Body>
            </Modal>
            <Modal className='popup' show={show4} onHide={handleClose4} keyboard={false} animation={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <img className="img1 m-2" src={ic8} alt="" />
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Link to=''><h6 className="text-black m-2 fw-bold">SCORPION48 HRS BACKUP</h6></Link>
                    <p className="text-black m-2">Natoque penatibus et magnis dis parturient montes nascetur.</p>
                </Modal.Body>
            </Modal>
        </div>
    )
}
