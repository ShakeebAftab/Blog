import { useState, createContext, useEffect } from "react"
import { withRouter } from 'react-router-dom'

export const PageTitleContext = createContext();

const PageTitleProvider = ({ children, location }) => {

    // State
    const [title, setTitle] = useState('')

    const getTitle = (name) => {
        if (name === '/') return 'Home'
        if (name.includes('techweekly', 1)) return 'Tech Weekly'
        if (name.includes('programmingrush', 1)) return 'Programming Rush'
        if (name.includes('hardwareflu', 1)) return 'Hardware Flu'
        if (name.includes('monthlycrackhead', 1)) return 'Monthly Crackhead'
        if (name === '/creators') return 'Creators'
        return '404';
    }

    useEffect(() => {
        setTitle(getTitle(location.pathname))
    }, [location]);

    return (
        <PageTitleContext.Provider value={[title, setTitle]}>{children}</PageTitleContext.Provider>
    )
}

export default withRouter(PageTitleProvider);