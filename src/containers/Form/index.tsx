import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from '../../state';

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: {}) => console.log(data);
  const name = useSelector((state) => state);
  console.log(name);

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
