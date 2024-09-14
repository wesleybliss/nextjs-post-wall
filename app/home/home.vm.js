import { useState, useMemo, useCallback } from 'react'
import { request } from '../../utilities'
 
const HomeViewModel = () => {
    
    const [text, setText] = useState('')
    
    const canSubmit = useMemo(() => text.length > 0, [text])
    
    const handleSubmit = useCallback(async () => {
        
        if (!canSubmit)
            return
        
        try {
            
            const res = await request('submit', 'post', {
                text,
            })
            
            if (res.ok) {
                const responseData = await res.json()
                console.log(responseData)
                setText('')
            } else {
                const error = await res.json()
                throw new Error(error.error)
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
