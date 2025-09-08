

const authoriz = (...roles) => {
    return (req, res, next) => {
        try {
            const { role } = req.user;
            if (roles.includes(role)) {
                return next();
            }
            return res.status(403).json({ message: "Not authorized" });

        } catch (error) {
            console.error("Error during authorization", error);
            return res.status(500).json({ message: "Something went wrong" });
        }
    };
};

module.exports = authoriz;
