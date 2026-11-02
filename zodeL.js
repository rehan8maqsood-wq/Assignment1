import {z} from 'zod';
const zlogin = z.object({
    username: z.string().min(1,{message:"at least 1 character"}).trim().max(20,{message:"Max of 20 Characters"}),
    Email:z.string().email({message:"invalid email"}).trim().lowercase(),
     Password:z.string().min(1,{message:"at least 1 character"}).max(20,{message:"at least 20 characters"}).trim()
});
const valid = (zlogin)=>(req,res,next)=>{
    const result = zlogin.safeParse(req.body);
    if(!result.success){
        const error = result.error.issues.map((i)=>({
            field: i.path.join('-'),
            message: i.message
        }))
        res.status(400).json({message:"NOT found"});
    }
    req.body = result.data;
    next();
}
export{zlogin,valid};