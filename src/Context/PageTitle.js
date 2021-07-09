import { useState, createContext, useEffect } from "react"
import { withRouter } from 'react-router-dom'

export const PageTitleContext = createContext();

const PageTitleProvider = ({ children, location }) => {

    // State
    const [title, setTitle] = useState('')

    const getTitle = (name) => {
        switch (name) {
            case '/':
                return 'Home';
            case '/techweekly':
                return 'Tech Weekly';
            case '/programmingrush':
                return 'Programming Rush';
            case '/hardwareflu':
                return 'Hardware Flu';
            case '/monthlycrackhead':
                return 'Monthly Crackhead';
            case '/creators':
                return 'Creators';
            default:
                return '404';
        }
    }

    useEffect(() => {
        setTitle(getTitle(location.pathname))
    }, [location]);

    return (
        <PageTitleContext.Provider value={[title, setTitle]}>{children}</PageTitleContext.Provider>
    )
}

export default withRouter(PageTitleProvider);