# Model

## Description
- stores interfaces for objects
- each of them has a function to return the data in the object
- when the arrays storing these objects need to be imported to other files they can be used by importing the get*() function and instantiating a ref const
- ie 
1. import { getUsers, type User } from '@/model/User'
2. const users = ref([] as User[]); users.value = getUsers()