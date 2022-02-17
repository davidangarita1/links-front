import {useForm} from "react-hook-form";
import React from 'react'

const CreateResources = () => {

    const {register, handleSubmit} = useForm()

    const onSubmit = (data) => {
    }





  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" 
        {...register("name")}  
        name="name" 
        required
        defaultValue="Name" />

        <input type="text" 
        {...register("description")} 
        className="" 
        name="description" 
        defaultValue="Description" />

        <input type="text" 
        {...register("type")} 
        required className="" 
        name="type" 
        defaultValue="Type" />

        <button type="submit">Enviar</button>
    </form>
  )
}

export default CreateResources;
