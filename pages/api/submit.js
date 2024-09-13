import { apiKey } from '../../constants'
import cache from '../../cache'

export default async function postSubmit(req, res) {
    
    try {
        
        if (!req.method === 'POST')
            return res.status(405).json({ error: 'Method not allowed' })
        
        if (!req.headers.authorization?.includes(apiKey))
            return res.status(401).json({ error: 'Unauthorized' })
        
        const { text } = req.body
        
        if (!text?.length)
            return res.status(422).json({ error: 'No text provided' })
        
        console.log('api/submit:', data)
        
        cache.update(data => ({
            ...data,
            posts: [
                ...data.posts,
                { text, createdAt: new Date().toISOString() },
            ],
        }))
        
        return res.json({ message: 'Data received successfully', data })
        
    } catch (e) {
        
        console.error('api/submit error:', e)
        
        return res.status(500).json({
            error: 'An error occurred while processing the request'
        })
        
    }
    
}
