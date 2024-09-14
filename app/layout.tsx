'use client'
import type { Metadata } from 'next'
import ThemeToggle from './components/ThemeToggle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './globals.css'

const queryClient = new QueryClient()

export default function RootLayout({
    children,
}) {
    
    const mode = localStorage.getItem('post-wall.mode') ?? 'light'
    const theme = localStorage.getItem('post-wall.theme') ?? 'garden'
    
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
