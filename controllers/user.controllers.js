// import {users} from '../data/users.js';

// export const updateUser = (req, res) => {
//     try {
//         const { id } = req.params;
//         const { name, email } = req.body;

//         if (!name && !email) {
//             return res.status(400).json({
//                 success: false,
//                 message: "Provide name or email to update"
//             });
//         }

//         const user = users.find(u => String(u.id) === String(id));


//         if (!user) {
//             return res.status(404).json({
//                 success: false,
//                 message: "User not found"
//             });
//         }

//         if (name) user.name = name;
//         if (email) user.email = email;

//         res.status(200).json({
//             success: true,
//             data: user
//         });

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// };



// export const deleteUser = (req, res) => {
//     try {
//         const { id } = req.params;

//         const index = users.findIndex(u => u.id === id);

//         if (index === -1) {
//             return res.status(404).json({
//                 success: false,
//                 message: "User not found"
//             });
//         }

//         // Remove user
//         const deletedUser = users.splice(index, 1);

//         res.status(200).json({
//             success: true,
//             message: "User deleted successfully",
//             data: deletedUser[0]
//         });

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// };

// export const getUsers =(req,res)=>{
//     res.status(200).json({
//         success:true,
//         count: users.length,
//         data: users
//     });
// }

// export const createUser =(req,res)=>{
//     try{
//         const{name,email}=req.body;

//         //Validation
//         if(!name || !email){
//             return res.status(400).json({
//                 success:false,
//                 message:"Name and Email are required"
//             });
//         }
//         const newUser={
//             id: Date.now().toString(),
//             name,
//             email
//         };

//         users.push(newUser);
//         res.status(201).json({
//             success:true,
//             data: newUser
//         });
//     } catch(error){
//         res.status(500).json({
//             success:false,
//             message:error.message
//         });
//     }
// }


import {
    createUserService,
    getUsersService,
    updateUserService,
    deleteUserService
} from "../service/user.service.js";

// GET USERS
export const getUsers = (req, res) => {
    const users = getUsersService();
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
};

// CREATE USER
export const createUser = (req, res) => {
    try {
        const { name, email } = req.body;

        const newUser = createUserService(name, email);

        res.status(201).json({
            success: true,
            data: newUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// UPDATE USER
export const updateUser = (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        const updatedUser = updateUserService(id, name, email);

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            data: updatedUser
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// DELETE USER
export const deleteUser = (req, res) => {
    try {
        const { id } = req.params;

        const deleted = deleteUserService(id);

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
