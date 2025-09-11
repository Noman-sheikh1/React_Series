

import './App.css'
import{useForm} from 'react-hook-form'

function App() {
   const {
    register,
    handleSubmit,
    formState:{errors,isSubmitting}
    } = useForm();
  
  async function onSubmit(data){
  await new  Promise((resolve)=>(setTimeout(resolve,5000)));
  console.log("data after from submission :", data);
 }
  return (
    <div className='form_container'>
 <form  onSubmit={handleSubmit(onSubmit)}>
     
      <input
       {...register("firstName",{
         required: { value: true, message: "First Name is required" },
         minLength:{value:3,message:'minimum length  should be 3'},
       maxLength: {value:10,message:'maximum length should not exceed by 10' }})} placeholder=' firstName' />
       {errors.firstName &&<p >{errors.firstName.message}</p>}
      <br/>
      <br/>

      <input {...register("lastName", {required: { value: true, message: " last Name is required" },

      minLength:{value:3,message:'minimum length  should be 3'},
       maxLength: {value:10,message:'maximum length should not exceed by 10' }}) } placeholder=' lastName' />
        {errors.lastName &&<p>{errors.lastName.message}</p>}
      <br/>
      <br/>

      <input type="submit" disabled={isSubmitting}  value={isSubmitting ? "isSubmitting":"submit"}/>
    </form>
    </div>
  )
}

export default App
