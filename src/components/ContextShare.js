import React, { createContext, useState } from 'react'

// createContext
export const registerContext = createContext()

// context to delete
export const deleteContext = createContext()

function ContextShare({ children }) {

    const [registerData, setRegisterData] = useState('')
    // state to store delete context
    const [deleteData, setDeleteData] = useState('')

    return (
        <div>
            <registerContext.Provider value={{ registerData, setRegisterData }}>
                {children}
            </registerContext.Provider>
        </div>
    )
}

export default ContextShare