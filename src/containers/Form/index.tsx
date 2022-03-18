import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Data } from './interface';
import { setName } from '../../state';

function Form() {
  const name = useSelector((state) => state);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: Data) => {
    console.log(typeof data.username);
    dispatch(setName(data.username));
  };
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
