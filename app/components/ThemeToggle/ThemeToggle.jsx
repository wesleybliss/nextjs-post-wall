'use client'
import { useState, useEffect, useCallback } from 'react'

const ThemeToggle = () => {
    
    const [mode, setMode] = useState('light')
    const [theme, setTheme] = useState('garden')
    
    useEffect(() => {
        
        setMode(localStorage.getItem('post-wall.mode') ?? 'light')
        setTheme(localStorage.getItem('post-wall.theme') ?? 'garden')
        
    }, [])
    
    const toggleTheme = useCallback(() => {
        
        const html = document.querySelector('html')
        const nextMode = mode === 'light' ? 'dark' : 'light'
        const nextTheme = nextMode === 'light' ? 'garden' : 'sunset'
        
        html.setAttribute('data-mode', nextMode)
        html.setAttribute('data-theme', nextTheme)
        
        localStorage.setItem('post-wall.mode', nextMode)
        localStorage.setItem('post-wall.theme', nextTheme)
        
        setMode(nextMode)
        setTheme(nextTheme)
        
    }, [mode])
    
    return (
        
        <button
            className="btn bg-transparent hover:bg-transparent border-none
                outline-none shadow-none opacity-50 hover:opacity-100"
            onClick={toggleTheme}>
            {theme === 'light' ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
            ): (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                    </svg>
            )}
        </button>
        
    )
    
}

export default ThemeToggle
