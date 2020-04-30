import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className='navbar-brand' to='/'>
                    <h5 className='navbar-text'>Draketown Missionary Baptist Church</h5>
                    {/* <img
                        src={logo}
                        alt='logo'
                        className='brand-logo'
                    ></img> */}
                </Link> 

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarColor03"
                    aria-controls="navbarColor03"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link
                                to='/'
                                className={
                                    window.location.pathname === '/' ||
                                        window.location.pathname === '/home'
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/our_pastors'
                                className={
                                    window.location.pathname === '/our_pastors'
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >Our Pastors</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/ministries'
                                className={
                                    window.location.pathname === '/ministries'
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >Ministries</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/sermons'
                                className={
                                    window.location.pathname === '/sermons'
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >Sermons</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/watch'
                                className={
                                    window.location.pathname === '/watch'
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >Watch Us Live</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/missionaries'
                                className={
                                    window.location.pathname === '/missionaries'
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >Missionaries</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/calendar'
                                className={
                                    window.location.pathname === '/calendar'
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >Calendar</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to='/contact_us'
                                className={
                                    window.location.pathname === '/contact_us'
                                        ? 'nav-link active'
                                        : 'nav-link'
                                }
                            >Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;