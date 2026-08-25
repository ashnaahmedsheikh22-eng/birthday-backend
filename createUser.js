const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
require('dotenv').config()

const User = require('./user')

const createUser = async () => {
    try {
        console.log(process.env.MONGODB_URI)

        await mongoose.connect(process.env.MONGODB_URI)

        const password = 'ashna22122010'

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            email: 'ashnaahmedsheikh.22@gmail.com',
            password: hashedPassword
        })

        console.log('User created:', user.email)

        await mongoose.disconnect()
    } catch (error) {
        console.log(error)
    }
}

createUser()