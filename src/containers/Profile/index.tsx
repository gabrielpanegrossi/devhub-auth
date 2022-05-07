import React from 'react';
import { Field, Form, Input } from '~components';
import { useSelector, useDispatch } from '~hooks';

function Profile() {
  const store = useSelector();

  return (
    <>
      <div>
        <img src={store.profile.picture} alt={`${store.profile.username}`} />
        <h1>{store.profile.username}</h1>
        <h2>{store.profile.description}</h2>
      </div>
    </>
  );
}

export default Profile;
