import React from 'react'
import './select.css'
import { useState } from 'react'

function SelectUI({ option, selected, setSelected, setSelectValue }) {
    const [active, setActive] = useState(false)

    return (
        <div className="dropdown">
            <div
                className="dropdown-btn"
                onClick={(e) => setActive(!active)}
            >
                {selected}
                {active ? (
                    <i className="ri-arrow-up-s-line"></i>
                ) : (
                    <i className="ri-arrow-down-s-line"></i>
                )}
            </div>
            {active && (
                <div className="dropdown-content">
                    {option.map(item => (
                        <div
                            key={item.id}
                            onClick={(e) => {
                                setSelected(item.title)
                                setActive(false)
                                setSelectValue(item.id)
                            }}
                            className="dropdown-item"
                        >
                            {item.title}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SelectUI