import { db } from "../config/index.js";

class Users {
    async fetchUsers(req, res) {
        try {
            const strQry = `
                SELECT
                    ID,
                    UserName,
                    UserRole,
                    UserEmail
                FROM users;
            `;
            db.query(strQry, (err, results) => {
                if (err) {
                    return res.status(500).json({
                        status: res.statusCode,
                        message: 'Unable to fetch users',
                        error: err.message
                    });
                }

                if (results.length === 0) {
                    return res.status(404).json({
                        status: res.statusCode,
                        message: 'No users found',
                    });
                }

                res.status(200).json({
                    status: res.statusCode,
                    results,
                });
            });
        } catch (e) {
            res.status(500).json({
                status: res.statusCode,
                message: 'Server error',
                error: e.message
            });
        }
    }

    async fetchUser(req, res) {
        try {
            const userId = req.params.id;
            const strQry = `
                SELECT 
                    ID,
                    UserName,
                    UserRole,
                    UserEmail
                FROM users
                WHERE ID = ?;
            `;
            db.query(strQry, [userId], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        status: res.statusCode,
                        message: 'Unable to fetch user',
                        error: err.message
                    });
                }

                if (results.length === 0) {
                    return res.status(404).json({
                        status: res.statusCode,
                        message: `User with ID ${userId} not found`,
                    });
                }

                res.status(200).json({
                    status: res.statusCode,
                    result: results[0],
                });
            });
        } catch (e) {
            res.status(500).json({
                status: res.statusCode,
                message: 'Server error',
                error: e.message
            });
        }
    }

    async updateUser(req, res) {
        try {
            const userId = req.params.id;
            const strQry = `
                UPDATE users
                SET UserName = ?, UserRole = ?, UserEmail = ?, UserPassword = ?
                WHERE ID = ?;
            `;
            const { UserName, UserRole, UserEmail, UserPassword } = req.body;
            db.query(strQry, [UserName, UserRole, UserEmail, UserPassword, userId], (err, results) => {
                if (err) {
                    return res.status(500).json({
                        status: res.statusCode,
                        message: 'Unable to update user',
                        error: err.message
                    });
                }

                if (results.affectedRows === 0) {
                    return res.status(404).json({
                        status: res.statusCode,
                        message: 'User not found',
                    });
                }

                res.json({
                    status: res.statusCode,
                    message: 'User updated successfully',
                });
            });
        } catch (e) {
            res.status(500).json({
                status: res.statusCode,
                message: 'Server error',
                error: e.message
            });
        }
    }

    async deleteUser(req, res) {
        try {
            const userId = req.params.id;
            const strQry = `
                DELETE FROM users
                WHERE ID = ?;
            `;
            db.query(strQry, [userId], (err, results) => {
                if (err) {
                    console.error('Error executing delete query:', err.message);
                    return res.status(500).json({
                        status: res.statusCode,
                        message: 'Unable to delete user',
                        error: err.message
                    });
                }

                if (results.affectedRows === 0) {
                    return res.status(404).json({
                        status: res.statusCode,
                        message: 'User not found',
                    });
                }

                res.json({
                    status: res.statusCode,
                    message: 'User deleted successfully',
                });
            });
        } catch (e) {
            console.error('Server error:', e.message);
            res.status(500).json({
                status: res.statusCode,
                message: 'Server error',
                error: e.message
            });
        }
    }
}

const users = new Users();

export default users;
