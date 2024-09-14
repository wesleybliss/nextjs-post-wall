import dayjs from 'dayjs'
import useHistoryQuery from '../../queries/historyQuery'
import CircleSpinner from '../CircleSpinner'

const History = () => {
    
    const { isPending, error, data: posts } = useHistoryQuery()
    
    return (
        
        <ul id="History">
            
            {isPending && (
                <li className="p-2">
                    <CircleSpinner />
                </li>
            )}
            
            {error && (
                <li className="p-2 text-red-500">
                    {error.message}
                </li>
            )}
            
            {!isPending && !error && posts?.length > 0 && posts.map(it => (
                <li key={it.id} className="flex items-center gap-1 p-2 text-xs">
                    <div className="opacity-60">{dayjs(it.createdAt).format('MMM DD')}</div>
                    <div className="opacity-20">&nbsp;|&nbsp;</div>
                    <div>{it.text}</div>
                </li>
            ))}
            
        </ul>
        
    )
    
}

export default History
