import { users } from "../data/users.js";

// CREATE USER
export const createUserService = (name, email) => {
    console.log("Processing data in service");

    const newUser = {
        id: Date.now().toString(),
        name,
        email
    };

    users.push(newUser);
    return newUser;
};

// GET ALL USERS
export const getUsersService = () => {
    return users;
};

// UPDATE USER
export const updateUserService = (id, name, email) => {
    const user = users.find(u => u.id === id);

    if (!user) {
        return null;
    }

    if (name) user.name = name;
    if (email) user.email = email;

    return user;
};

// DELETE USER
export const deleteUserService = (id) => {
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
        return false;
    }

    users.splice(index, 1);
    return true;
};
