import { useState, useMemo, useCallback } from 'react'
import { request } from '../../utilities'
 
const HomeViewModel = () => {
    
    const [text, setText] = useState('')
    
    const canSubmit = useMemo(() => text.length > 0, [text])
    
    const handleSubmit = useCallback(async e => {
        
        if (!canSubmit)
            return
        
        try {
            
            const res = await request('/api/submit', 'post', {
                text,
            })
            
            if (res.ok) {
                const responseData = await res.json()
                console.log(responseData)
            } else {
                const error = await res.json()
                console.error('Error:', error.error)
            }
            
        } catch (e) {
            
            console.error('handleSubmit:', e)
            
        }
        
    }, [canSubmit, text])
    
    return {
        text,
        setText,
        canSubmit,
        handleSubmit,
    }
    
}

export default HomeViewModel
