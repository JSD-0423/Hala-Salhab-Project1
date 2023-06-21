import React from 'react'

function LoadingSpinner({ loadingMessage }) {
    const inlineStyles = {
        width: "3rem",
        height: "3rem"
    }

    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status" style={inlineStyles}>
                <span className="visually-hidden">{loadingMessage}</span>
            </div>
        </div>
    )
}

export default LoadingSpinner