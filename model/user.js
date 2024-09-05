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
                if (err)
                    return res.status(500).json({
                        status: res.statusCode,
                        message: 'in query',
                    });

                if (results.length === 0) {
                    return res.status(404).json({ 
                        status: res.statusCode, 
                        message: "No users found" 
                    });
                }

                res.status(200).json({ 
                    status: res.statusCode, 
                    results 
                });
            });
        } catch (e) {
            res.status(404).json({
                status: res.statusCode,
                msg: 'in catch',
            });
        }
    }

    async addUser(req, res) {
        try {
            const strQry = `
                INSERT INTO users SET ?;
            `;
            const userData = {
                UserName: req.body.UserName,
                UserRole: req.body.UserRole,
                UserEmail: req.body.UserEmail,
                UserPassword: req.body.UserPassword,
            };

            db.query(strQry, userData, (err) => {
                if (err)
                    return res.status(500).json({
                        status: res.statusCode,
                        message: "Unable to add a new user",
                    });

                res.json({
                    status: res.statusCode,
                    msg: "User was added successfully",
                });
            });
        } catch (e) {
            res.status(404).json({
                status: res.statusCode,
                msg: e.message,
            });
        }
    }
}

const users = new Users();

export default users;
