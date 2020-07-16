import React from 'react'

interface IUser{
    name: string;
    email: string;
  }

interface Props {
      user : IUser;
  }

const user: React.FC<Props> = ({ user } : Props) =>{

    return(
        <div>
            <strong>Nome:{user.name} </strong> <br/>
            <strong>Email: {user.email}</strong> <br/> <br/>
        </div>
    )

}

export default user