import connectDB from "@/config/database";
import Property from "@/models/Property";

export const GET = async (request: any, { params }: any) => {
  try {
    await connectDB();
    const proporty = (await Property.findById(params.id)) as any;
    if (!proporty) return new Response("Property not found", { status: 404 });
    return new Response(proporty, {
      status: 200,
    });
  } catch (error) {
    return new Response("something went wrong!", { status: 500 });
  }
};
