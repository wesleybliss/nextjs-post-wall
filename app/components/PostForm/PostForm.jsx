
const PostForm = ({
    vm,
}) => {
    
    return (
        
        <div className="flex flex-col gap-4">
            
            <input
                className="input input-bordered"
                type="text"
                placeholder=""
                value={vm.text}
                onKeyUp={e => e.key === 'Enter' && vm.handleSubmit()}
                onChange={e => vm.setText(e.target.value)}
            />
            
            <button
                className="btn btn-primary"
                disabled={!vm.canSubmit}
                onClick={vm.handleSubmit}>
                SUBMIT
            </button>
            
        </div>
        
    )
    
}

export default PostForm
