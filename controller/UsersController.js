import { Router } from "express";
import user from "../model/user.js";

// Fetch all users
const getUsers = async (req, res) => {
    try {
        const users = await getUsersDb();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch users', error: error.message });
    }
};

// Fetch a single user by ID
const getUser = async (req, res) => {
    try {
        const user = await getUserDb(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user', error: error.message });
    }
};

// Insert a new user
const insertUser = async (req, res) => {
    try {
        const { UserName, UserRole, UserEmail, UserPassword } = req.body;
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(UserPassword, 10);

        // Insert the user into the database
        await insertUserDb(UserName, UserRole, UserEmail, hashedPassword);
        
        // Send success response
        res.status(200).send('User was inserted successfully');
    } catch (error) {
        // Handle errors
        res.status(500).json({ message: 'Failed to insert user', error: error.message });
    }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
    try {
        await deleteUserDb(req.params.id);
        res.send('User has been deleted');
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete user', error: error.message });
    }
};

// Update a user
const updateUser = async (req, res) => {
    try {
        const { UserName, UserRole, UserEmail, UserPassword } = req.body;
        const userID = req.params.id;

        // Fetch the current user details
        const existingUser = await getUserDb(userID);
        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Prepare updated values
        const updatedUser = {
            UserName: UserName || existingUser.UserName,
            UserRole: UserRole || existingUser.UserRole,
            UserEmail: UserEmail || existingUser.UserEmail,
            UserPassword: UserPassword ? await bcrypt.hash(UserPassword, 10) : existingUser.UserPassword
        };

        // Update the user in the database
        await updateUserDb(userID, updatedUser);

        // Send success response
        res.status(200).send('User was updated successfully');
    } catch (error) {
        res.status(500).json({ message: 'Failed to update user', error: error.message });
    }
};

// Login a user
const loginUser = async (req, res) => {
    res.json({ message: "Login successful", token: req.body.token });
};
export { usersRouter };
