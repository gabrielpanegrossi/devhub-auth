import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Payload } from './interface';

function Form() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (payload: Payload) => {
    console.log(payload);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input {...register('email')} />
      <input {...register('password')} />

      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register('lastName', { required: true })} /> */}
      {/* errors will return when field validation fails  */}
      {/* {errors.lastName && <span>This field is required</span>} */}

      <button>submit</button>
    </form>
  );
}

export default Form;
