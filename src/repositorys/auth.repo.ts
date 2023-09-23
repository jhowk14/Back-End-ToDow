import prisma from "../services/prisma"

const GetAuthUser = async (email: string)=>{
    const user = await prisma.user.findUnique({
        where: {
            email: email, 
        },
    });
    return user
}
export default GetAuthUser