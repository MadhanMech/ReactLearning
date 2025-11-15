import React from 'react'
import axios from 'axios'
const RegularFetch = () => {
    const [data, setData] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)

    const fetchData = async() => {
        try{
        
          setLoading(true)
            const response = await axios.get("http://localhost:3001/students")
            setData(response.data)

        }catch(error ){
          setError(error);
        }finally{
          setLoading(false)
        }
    }

    React.useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className='container'>
       <h3 >RegularFetch</h3> 
       {loading && <p>Loading...</p>}
       {error && <p>Error Occured</p>}
       {data.map((item) => (
         <div key={item.id}>
          <p>{item.id}</p>
           <h4>{item.name}</h4>
           <p>{item.email}</p>
           <p>{item.course}</p>
           <p>{item.joined_on}</p>
         </div>
       ))}




       
    </div>
  )
}

export default RegularFetch