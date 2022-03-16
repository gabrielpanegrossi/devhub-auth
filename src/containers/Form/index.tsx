import React from 'react';
import { useForm } from 'react-hook-form';

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: {}) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register('username')} />
      <input type='file' {...register('profilePicture')} />
      <input {...register('description')} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register('lastName', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.lastName && <span>This field is required</span>}

      <input type='submit' />
    </form>
  );
}

export default Form;
