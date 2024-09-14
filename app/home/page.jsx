'use client'
import useInitQuery from '../queries/initQuery'
import useHomeViewModel from './home.vm'
import CircleSpinner from '../components/CircleSpinner'
import PostForm from '../components/PostForm'
import History from '../components/History'

const Home = () => {
    
    const { isPending, error } = useInitQuery()
    const vm = useHomeViewModel()
    
    return (
        
        <div id="Home" className="grid grid-rows-[20px_1fr_20px] items-center
            justify-items-center min-h-[calc(100vh - 20px)] p-8 pb-20 gap-16 sm:p-20">
            
            <main className="flex flex-col gap-8 pb-8 row-start-2 items-center text-center">
                
                <h1 className="mb-4">Post Wall</h1>
                
                {isPending && <CircleSpinner />}
                
                {error && <div className="p-4 rounded-sm text-red-500">
                    {error.message}
                </div>}
                
                {!isPending && !error && (<>
                    
                    <div className="card bg-accent/10 shadow rounded-md">
                        <div className="card-body">
                            <PostForm vm={vm} />
                        </div>
                    </div>
                    
                    <div className="card bg-accent/10 shadow rounded-md">
                        <div className="card-body">
                            <History />
                        </div>
                    </div>
                    
                </>)}
                
            </main>
            
        </div>
        
    )
    
}

export default Home
