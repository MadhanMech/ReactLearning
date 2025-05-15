const withClickTracking = (WrappedComponent) => {


    return (props)=> {
        const handleClick = () => {
        console.log('Component clicked!',props.trackingInfo);
        };
    
        return (
        <div onClick={handleClick}>
            <WrappedComponent {...props} />
        </div>
        );
    };  
}

export default withClickTracking;