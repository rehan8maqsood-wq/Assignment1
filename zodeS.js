import {z} from 'zode';
const zSignup = z.object({
    FirstName: z.string().min(1,{message:"at least 1 character"}).trim().max(20,{message:"Max of 20 Characters"}),
    SecondName : z.string().min(1,{message:"at least 1 character"}).trim().optional().max(20,{message:"Max of 20 Characters"}),
    LastName: z.string().min(1,{message:"at least 1 character"}).trim().max(20,{message:"Max of 20 Characters"}),
    username: z.string().min(1,{message:"at least 1 character"}).trim().max(20,{message:"Max of 20 Characters"}),
    Gender : z.Boolean().min(1,{message:"at least 1 character"}).trim().max(20,{message:"Max of 20 Characters"}).Gender({message:"invalide option"}),
    Mobile: z.Number().min(1,{message:"at least 1 Number"}).trim().max(20,{message:"at least 20 Numbers"}),
    Email:z.string().Email({message:"invalid email"}).trim().lowercase(),
    Password:z.string().min(1,{message:"at least 1 character"}).max(20,{message:"at least 20 characters"}).trim(),
    ConfirmPassword:z.string().min(1,{message:"at least 1 character"}).max(20,{message:"at least 20 characters"}).trim(),
    Address: z.string().min(1,{message:"at least 1 Length"}).trim().max(20,{message:"at least 20 Length"}),
    Building : z.string().min(1,{message:"at least 1 Length"}).trim().max(20,{message:"at least 20 Length"}),
    lane: z.string().min(1,{message:"at least 1 Length"}).trim().max(20,{message:"at least 20 Length"}),
    lane2: z.string().min(1,{message:"at least 1 Length"}).trim().max(20,{message:"at least 20 Length"}).optional(),
    landmark: z.string().min(1,{message:"at least 1 Length"}).trim().max(20,{message:"at least 20 Length"}).optional(),
    Pincode: z.Number().min(1,{message:"at least 1 Number"}).trim().max(20,{message:"at least 20 Number"}),
});
const Validation = (zSignup)=>(req,res,next)=>{
    const result = zSignup.safeParse(req.body);
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
export{zSignup,Validation};