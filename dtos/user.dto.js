export const validateCreateUserDTO = (req, res, next) => {
    console.log("Using DTO to validate create user");

    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            success: false,
            message: "Name and email are required"
        });
    }

    // basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: "Invalid email format"
        });
    }

    next();
};

export const updateUserDTO = (req, res, next) => {
    console.log("Using DTO to validate update user");

    const { name, email } = req.body;

    // At least one field required
    if (!name && !email) {
        return res.status(400).json({
            success: false,
            message: "At least name or email is required to update"
        });
    }

    // If email is present, validate it
    if (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: "Invalid email format"
            });
        }
    }

    next();
};
