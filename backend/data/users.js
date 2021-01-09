import bcrypt from 'bcryptjs'

const users = [
    { name:'Admin User',
      email:'admin@example.com',
     password: bcrypt.hashSync('123456',10),
      isAdmin: true,
    },


    {  name:'Kashif Ahmed',
      email:'kashif@example.com',
       password: bcrypt.hashSync('123456',10),
    },
    {  name:'Ricky Ponting',
       email:'Ricky@example.com',
       password: bcrypt.hashSync('123456',10),
    },
]
export default users