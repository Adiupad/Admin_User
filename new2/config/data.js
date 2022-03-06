const bcrypt = require("bcrypt")

const data = {
    users: [
        {
            name: "admin user",
            email: "adminuser@email.com",
            password: bcrypt.hashSync("12345678", 8),
            isAdmin: true,
        },
        {
            name: "normal user",
            email: "normaluser@email.com",
            password: bcrypt.hashSync("12345678",8),
            isAdmin: false
        }

    ]
}

module.exports = data;