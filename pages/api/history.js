import { apiKey } from '../../constants'
import cache from '../../cache'

export default async function getHistory(req, res) {
    
    try {
        
        if (!req.method === 'GET')
            return res.status(405).json({ error: 'Method not allowed' })
        
        if (!req.headers.authorization?.includes(apiKey))
            return res.status(401).json({ error: 'Unauthorized' })
        
        const data = cache.read()
        
        return res.json(data?.posts || [])
        
    } catch (e) {
        
        console.error('api/submit error:', e)
        
        return res.status(500).json({
            error: 'An error occurred while processing the request'
        })
        
    }
    
}
