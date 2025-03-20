import { User } from "../models/user.model.js"
import bcryptjs from "bcryptjs"
import { generateDefaultToken } from "../utils/generateTokens.js"
export const signup = async (req, res) =>{
    try {
        const { username,email,password } = req.body
        console.log(username)
        if (!email || !username || !password)
            return res.status(402).json({ status:false,message: 'All field has to be filled !!' })

        if (await User.findOne({ username: username }))
        {
            return res.status(400).json({ status: false, message: 'username already exist !!!' })
        }

        const emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        if (!emailReg.test(email))
            return res.status(400).json({ status: false, message: 'email is not valid' })

        if (await User.findOne({ email: email }))
        {
            return res.status(400).json({ status: false, message: 'email address already exist !!!' })
        }
console.log('till password')
        if (password.length < 6)
            return res.status(400).json({ status: false, message: 'password has less than 6 character !!' })

        //Its is for store the password in  hashed way in Database
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        const newUser = new User(
            {
                username,
                password: hashedPassword,
                email
            }
        )
        //generate Token

        generateDefaultToken(newUser._id, res)

        //to save the data in data base
        await newUser.save()
        return res.status(201).json({ status:true,message:'Signup Successfully', user: { ...newUser._doc, password: "" } })

    } catch (err) {
        console.log('error encounter -->',err)
        return res.status(500).json({ status: false, message:'Internal Server error !!' })
    }

}

export async function login(req, res) {
    try {
        const { email, password } = req.body

        console.log(email,'  ',password)
        if (!email || !password)
            return res.status(200).json({ succes: false, message: "All field has to be filled !!" })
        const user = await User.findOne({ email: email })
        console.log("user-->", user)
        if (!user)
            return res.status(400).json({ succes: false, message: "Invalid Credential --(email) !!" })
        const isPasswordCorrect = await bcryptjs.compare(password, user.password)
        if (!isPasswordCorrect)
            return res.status(400).json({ succes: false, message: "Invalid Credential--(password) !!" })
        generateDefaultToken(user._id, res)
        console.log('Done')
        return res.status(201).json({ status: 'sucesss !!!',message:'Login Successfully',user: { ...user._doc, password: "" } })
    }
    catch (err) {
        console.log(err.message)
        return res.status(400).json({ success: false, message: 'Internal Server Error !!' })
    }
}


export async function logout(req, res) {
    try {
        res.clearCookie('jwt-chainOptimization')
        res.status(200).json({ succes: true, message: 'Successfully Logedout  !!' })
    }
    catch (err) {
        console.log("Error Message-->", err.message)
        res.status(500).json({ success: false, message: 'internal Server Error !!' })
    }
}

export const authCheck=async (req,res)=>{
    try {
        res.status(200).json({status:true,user:req.user})
    } catch (error) {
        console.log('error in authcheck controller  --->',error.message)
        return res.status(500).json({success:false,message:'Internal Server error !!'})
    }

}