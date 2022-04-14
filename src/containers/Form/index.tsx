import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useSelector } from '@hooks';
import { Payload } from './interface';
import { setProfile } from '../../state';

function Form() {
  const store = useSelector();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (payload: Payload) => {
    dispatch(setProfile(payload));
  };

  return (
    <>
      <div>
        <img src={store.profile.picture} alt={`${store.profile.username}`} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input {...register('username')} />
        <input type='file' {...register('profilePicture')} />
        <input {...register('description')} />

        {/* include validation with required or other standard HTML validation rules */}
        {/* <input {...register('lastName', { required: true })} /> */}
        {/* errors will return when field validation fails  */}
        {/* {errors.lastName && <span>This field is required</span>} */}

        <button>Submit</button>
      </form>
    </>
  );
}

export default Form;
