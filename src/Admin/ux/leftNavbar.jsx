import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { logoutAdmin } from '../../Redux/slice/authSlice'
import { removeItem } from '../../Redux/helpers/persistance-storage'
import '../css/sidebar.css'

function LeftNavbar() {
    const [isOpen, setOpen] = useState(false)
    const toggle = () => setOpen(!isOpen)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logoutAdmin())
        removeItem('token')
        navigate('/admin-login')
    }

    return (
        <section
            className={isOpen ? ' sidebar-left navactive' : 'sidebar-left'}
            style={{ width: isOpen ? '250px' : '70px' }}
        >
            <i className="ri-menu-line" style={{ display: isOpen ? 'none' : 'block' }} onClick={toggle}></i>

            <div className="logo"
            >
                {isOpen ? (
                    <i className="ri-arrow-left-line"
                        style={{ paddingRight: isOpen ? '30px' : '0px' }}
                        onClick={toggle}></i>
                ) : (
                    <i className="ri-menu-line" onClick={toggle}></i>
                )}
                <h4 style={{ display: isOpen ? 'block' : 'none' }}>Sayla</h4>
            </div>
            <ul className='sidebar-menu'>
                {navbarItems.map((item, index) => (
                    <NavLink to={item.navigate}
                        key={index}
                        className={(navclassName) => navclassName.isActive ? 'nav-active' : ''}>
                        <li className="sidebar">
                            <span>{item.icon}</span>
                            <span style={{ display: isOpen ? 'block' : 'none' }}>{item.title}</span>
                        </li>
                    </NavLink>
                ))}
                <li className='sidebar text-light' onClick={logoutHandler}>
                    <i className="ri-logout-box-line"></i>
                    <span style={{ display: isOpen ? 'block' : 'none' }}>Logout</span>
                </li>
            </ul>
        </section>
    )
}

export default LeftNavbar

const navbarItems = [
    { title: 'Categories', navigate: '/admin', icon: <i className="ri-bar-chart-horizontal-line"></i> },
    { title: 'Project', navigate: '/admin/projects', icon: <i className="ri-product-hunt-line"></i> },
    { title: 'Feedback', navigate: '/admin/feedback', icon: <i className="ri-add-circle-line"></i> },
    { title: 'Vacanci', navigate: '/admin/vacanci', icon: <i className="ri-order-play-line"></i> },
    { title: 'Responds', navigate: '/admin/responds', icon: <i className="ri-user-search-line"></i> },
]