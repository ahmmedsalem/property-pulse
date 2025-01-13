 import connectDB from "@/config/database";
 import Property from "@/models/Property";

export const GET = async () => {
    try {
        await connectDB();
        const proporties = await Property?.find({}) as any;
        return new Response(proporties, {
            status: 200,
        })
    } catch (error) {
        return new Response('something went wrong!',{status: 500})
    }
}