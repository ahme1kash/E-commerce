import React ,{ useState}from 'react'
import {Form,Button} from 'react-bootstrap'

const SearchBox = ({history}) => {
const[keyword, setKeyword] = useState('')
  const submitHandler = (e) => {
      e.preventDefault()
      if(keyword.trim()){
          history.push(`/search/${keyword}`)
      }
      else{
          history.push('/')
      }

  }
    return (
        <div style = {{backgroundColor:'#ffffff'}}>
        
       <Form onSubmit={submitHandler}
       variant = 'light'
       
       inline>
     
        <Form.Control
           type='text'
           name='q'
           onChange={(e) => setKeyword(e.target.value)}
           placeholder = 'Search Products Here ...'
           className = 'mr-sm-2 ml-sm-5'>
               
               </Form.Control>
               
               
               <>
       <style type="text/css">
       {`
        .btn-flat {
            background-color: #336699; 
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            height: 44px;
          }
         
       `}
      
  </style>
               
               <Button 
               type='submit' 
               variant="flat" 
               className='p-2'>
                   Search
               </Button>

        </>
           
       </Form>
       </div>
       
      
    )
}

export default SearchBox
