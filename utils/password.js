const bcrypt = require("bcryptjs")

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(process.env.PASSWORD_SALT); // Generate a salt
    const hash = await bcrypt.hash(password, salt); // Hash the password
    return hash;
};

module.exports = hashPassword