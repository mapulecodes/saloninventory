import 'dotenv/config';
import jwt from 'jsonwebtoken';

const { sign, verify } = jwt;

const createToken = (user) => {
    const payload = {
        emailAdd: user.emailAdd,
        pwd: user.pwd
    };
    const options = {
        expiresIn: '1h'
    };
    return sign(payload, process.env.SECRET_KEY, options);
};

const verifyAToken = (req, res, next) => {
    try {
        const token = req?.headers["authorization"];
        if (!token) {
            return res.status(401).json({ msg: "Please login." });
        }

        const verified = verify(token, process.env.SECRET_KEY);
        if (verified) {
            next();
        } else {
            res.status(403).json({ msg: "Invalid credentials." });
        }
    } catch (error) {
        res.status(403).json({ msg: "Invalid token.", error: error.message });
    }
};

export {
    createToken,
    verifyAToken
};
