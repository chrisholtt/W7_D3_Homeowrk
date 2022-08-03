import React from 'react'

const LightModeButton = ({ handleLightMode, lightMode }) => {

    const handleClick = () => {
        handleLightMode()
    }

    return (
        <>
            <button className='btn' onClick={handleClick}>
                <div className='outer-btn'>
                    <div className={lightMode ? 'inner-btn-left' : 'inner-btn-right'}></div>
                </div>
            </button>
        </>
    )
}

export default LightModeButton