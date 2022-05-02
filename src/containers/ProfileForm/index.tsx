import React, { useState } from 'react';
import { Field, Form, Input } from '~components';
import { useSelector, useDispatch } from '~hooks';
import { storage } from '~services/firebase';
import { Values } from './interface';
import { setProfile } from '../../state';

function ProfileForm() {
  const [profilePicture, setProfilePicture] = useState<File>({} as File);
  const store = useSelector();
  const dispatch = useDispatch();
  console.log(store);

  const handleSubmit = async (values: Values) => {
    try {
      await storage.uploadFile(store.user, profilePicture);
      const picture = await storage.getFile(store.user);
      dispatch(setProfile({ ...values, picture }));
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setProfilePicture(file || ({} as File));
  };

  const initialValues = {
    username: '',
    description: '',
  };

  return (
    <>
      <div>
        <h1>{store.profile.username}</h1>
        <h2>{store.profile.description}</h2>
        <img src={store.profile.picture} alt={`${store.profile.username}`} />
      </div>
      <Form onSubmit={handleSubmit} initialValues={initialValues}>
        <Field name='username' label='Name *' />
        <Input
          name='profilePicture'
          type='file'
          onChangeFunction={handleInputFile}
          label='Profile Image *'
        />
        <Field name='description' label='Description *' />
        <button type='submit'>Submit</button>
      </Form>
    </>
  );
}

export default ProfileForm;
