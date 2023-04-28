import React, { useEffect } from 'react';
import { api } from "../../utils/api";

const index = () => {

        const newUser = {
            name: 'andro',
            email: 'email1@gmail.com',
            image: 'new image'
        }
    
    const {mutate, error} = api.user.createUser.useMutation();

    return (
        <form onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
         mutate(newUser);

        }}>
            
          <input name="title" />
          <input name="email" />
          <input name="image" />

          <button type='submit'>submit</button>

          {error?.data?.zodError?.fieldErrors.title && (
            <span className="mb-8 text-red-500">
              {error?.data?.zodError?.fieldErrors.title}
            </span>
          )}
          
        </form>
      );
}


export default index;