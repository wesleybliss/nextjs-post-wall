'use client'
import { useState, useEffect } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ThemeToggle from './components/ThemeToggle'
import './globals.css'

const queryClient = new QueryClient()

export default function RootLayout({
    children,
}) {
    
    const [mode, setMode] = useState('light')
    const [theme, setTheme] = useState('garden')
    
    useEffect(() => {
        
        setMode(localStorage.getItem('post-wall.mode') ?? 'light')
        setTheme(localStorage.getItem('post-wall.theme') ?? 'garden')
        
    }, [])
    
    return (
        
        <html lang="en" data-mode={mode} data-theme={theme}>
        <body className="antialiased">
            <div className="flex justify-end p-2">
                <ThemeToggle />
            </div>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </body>
        </html>
        
    )
    
}
