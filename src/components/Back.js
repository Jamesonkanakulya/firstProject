import React from 'react'

export const Back = ({children,hero}) => {
    return <header className={hero}>{children}</header>
}


export default Back
Back.defaultProps ={
    hero:"defaultHero"
}
