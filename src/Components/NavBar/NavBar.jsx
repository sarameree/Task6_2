import { Link, NavLink } from 'react-router-dom';
import './NavBar.css'
import logo from './../../assets/logo.png';
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import bg_1 from './../../assets/bg-1.png';
import { BiSolidUser } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useEffect, useState } from 'react';

export const NavBar = () => {

    const [country, setCountry] = useState([]);

    const getCountry = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const FinalData2 = await response.json();
        setCountry(FinalData2)
    }

    useEffect(() => {
        getCountry();
    }, [])

    return (
        <nav className='justify-content-between align-items-center flex-wrap d-flex '>
            <HiMenu className="menu-i" />
            <Link to='/'><img src={logo} alt="logo" /></Link>
            <div className="n">
                <ul className="nav-menu d-flex justify-content-between">
                    <AiOutlineClose className="close close-mobile" />
                    <li><NavLink to='/' className="fw-bold">Home</NavLink></li>
                    <li className="dropdown position-relative ">
                        <Link className="nav-link dropdown-toggle fw-bold" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Collaction
                        </Link>
                        <div className="dropdown-menu menu rounded-0 border-0 p-4">
                            <div className="d-flex">
                                <ul className="d-flex">
                                    <li className="w-menu"><Link className="fw-bold border-bottom py-2" href="#">SSD CARD</Link>
                                        <ul className="my-3">
                                            <li><Link>Affinity M20</Link></li>
                                            <li><Link>Affinity P40 Pro</Link></li>
                                            <li><Link>PO V40 ThinQ</Link></li>
                                            <li><Link>Tencho 7.3</Link></li>
                                            <li><Link>Tencho 8.1</Link></li>
                                            <li><Link>Nexian</Link></li>
                                            <li><Link>Ningbo</Link></li>
                                            <li><Link>Fix A Phone</Link></li>
                                            <li><Link>Hisense</Link></li>
                                            <li><Link>Force Cell</Link></li>
                                        </ul>
                                    </li>
                                    <li className="w-menu"><Link className="fw-bold border-bottom py-2">POWER BANKS</Link>
                                        <ul className="my-3">
                                            <li><Link>Spots 8 Lite</Link></li>
                                            <li><Link>Spots ERA 5X</Link></li>
                                            <li><Link>Tencho 8.1</Link></li>
                                            <li><Link >Phonelink</Link></li>
                                            <li><Link>Musah</Link></li>
                                            <li><Link>Connect 4</Link></li>
                                            <li><Link>Alcatel</Link></li>
                                            <li><Link>MobiAir</Link></li>
                                            <li><Link>Beat Cell</Link></li>
                                            <li><Link>Hunk Cell</Link></li>
                                        </ul>
                                    </li>
                                    <li className="w-menu"><Link className="fw-bold border-bottom py-2">EARPHONE</Link>
                                        <ul className="my-3">
                                            <li><Link>Spots Y93 1815</Link></li>
                                            <li><Link>Tencho F12 Pro</Link></li>
                                            <li><Link>Telefonika</Link></li>
                                            <li><Link>T-Blast</Link></li>
                                            <li><Link>Alcatel</Link></li>
                                            <li><Link>Ampy</Link></li>
                                            <li><Link>Crystal Cell</Link></li>
                                            <li><Link>MOI Cell</Link></li>
                                            <li><Link>Groove Cell</Link></li>
                                            <li><Link>Olly Cell</Link></li>
                                        </ul>
                                    </li>
                                    <li className="w-menu border-2"><Link className="fw-bold border-bottom py-2">ANDROID</Link>
                                        <ul className="my-3">
                                            <li><Link>Tencho 12 Lite</Link></li>
                                            <li><Link>Tencho 7.3</Link></li>
                                            <li><Link>Spectrum</Link></li>
                                            <li><Link>Hisense</Link></li>
                                            <li><Link>Bluesky</Link></li>
                                            <li><Link>GreatDid</Link></li>
                                            <li><Link>Mastic</Link></li>
                                            <li><Link>Pigeon Cell</Link></li>
                                            <li><Link>Arise Cell</Link></li>
                                            <li><Link>Ritz Cell</Link></li>
                                        </ul>
                                    </li>
                                    <li className="w-menu d-flex justify-content-start align-items-center">
                                        <div>
                                            <img className="img-collection" src={bg_1} alt="mobile" />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li><NavLink className="fw-bold" to='/about'>About</NavLink></li>
                    <li><NavLink className="fw-bold" to='/contact'>Contact</NavLink></li>
                    <li><Link className="fw-bold">Accessories</Link></li>
                    <li><Link className="fw-bold">Memory & Storage</Link></li>
                    <li className="dropdown border-0">
                        <Link className="nav-link dropdown-toggle fw-bold" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </Link>
                        <ul className="dropdown-menu border-0 rounded-0 menu-drop">
                            <li><Link className="dropdown-item my-3 ps-2">About us</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item my-3 ps-2">Contact us</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item my-3 ps-2">Blog</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item my-3 ps-2">Faq's</Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="d-flex gap-2 align-items-center">
                <div className="d-flex gap-3">
                    <Link><BiSolidUser className="ic" /></Link>
                    <Link><FaShoppingCart className="ic" /></Link>
                    <Link><FaMagnifyingGlass className="ic" /></Link>
                </div>
                <select className='drop-down'>
                    {
                        country.map((select) => {
                            return (
                                <option>
                                    {select.cca2}
                                </option>
                            )
                        })
                    }
                </select>
            </div>
        </nav>
    )
}
