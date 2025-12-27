import User from "@/models/User";
import {getServerSession} from "next-auth/next";
import connectDB from "@/lib/dbConnect";
import {Imessage} from "@/models/User";
import {NextRequest} from "next/server";
import {authOptions} from "../../auth/[...nextauth]/options";

export async function DELETE(request: NextRequest, {params}: {params: {messageid: string}}) {
  const messageId = params.messageid;
  await connectDB();
  const session = await getServerSession(authOptions);
  const _user = session?.user;
  if (!session || !_user) {
    return Response.json({success: false, message: "Not authenticated"}, {status: 401});
  }

  try {
    const updateResult = await User.updateOne(
      {_id: _user._id},
      {$pull: {messages: {_id: messageId}}}
    );

    if (updateResult.modifiedCount === 0) {
      return Response.json(
        {message: "Message not found or already deleted", success: false},
        {status: 404}
      );
    }

    return Response.json({message: "Message deleted", success: true}, {status: 200});
  } catch (error) {
    console.error("Error deleting message:", error);
    return Response.json({message: "Error deleting message", success: false}, {status: 500});
  }
}
