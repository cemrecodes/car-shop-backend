import { sign } from 'jsonwebtoken';
import { serialize } from 'cookie';

const secret = process.env.SECRET;

export default async function (req, res){
    // const reqq = JSON.stringify(req.body)
    const {success, message, email} = req.body;
    console.log("here1")
    console.log(success,message,email)

    // logged
    if ( success == 1){
        console.log("here2");
        const token = sign(
        {
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
          //  _id: user._id,
            email: email  
        },
        console.log(token),
        secret
        );
        const serialized = serialize("Cookie", token,{
            httpOnly: true,
            secure: process.env.NODE_ENV != "development",
            sameSite: "strict",
            maxAge: 60 * 60,
            path: "/"
        })
        res.headers("Set-Cookie", serialized);
        res.status(200).json({ message: "Success!"});
    }
    else{
        res.json({ message: "Invalid credentials!"});
    }

}

