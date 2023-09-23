import prisma from "../services/prisma"

const GetAuthUser = async (email: string)=>{
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email, 
            },
        });
        return user
        
    } catch (error) {
        throw error
    }
    
}
export default GetAuthUser