import { apiKey } from '../../constants'
import cache from '../../cache'
import { nanoid } from 'nanoid'

export default async function postSubmit(req, res) {
    
    try {
        
        if (!req.method === 'POST')
            return res.status(405).json({ error: 'Method not allowed' })
        
        if (!req.headers.authorization?.includes(apiKey))
            return res.status(401).json({ error: 'Unauthorized' })
        
        const { text } = req.body
        
        if (!text?.length)
            return res.status(422).json({ error: 'No text provided' })
        
        console.log('api/submit:', text)
        
        const newPost = {
            id: nanoid(),
            text,
            createdAt: new Date().toISOString(),
        }
        
        cache.update(data => ({
            ...data,
            posts: [
                newPost,
                ...(data.posts || []),
            ],
        }))
        
        return res.json({ message: 'Ok' }) 
        
    } catch (e) {
        
        console.error('api/submit error:', e)
        
        return res.status(500).json({
            error: 'An error occurred while processing the request'
        })
        
    }
    
}
