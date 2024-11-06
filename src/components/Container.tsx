import React, { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="container max-w-screen-lg mx-auto py-3 px-6">
            {children}
        </div>
    )
}

export default Container