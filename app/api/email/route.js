import EmailModel from "@/lib/models/EmailModel";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const emails = await EmailModel.find({});

    if (emails.length === 0) {
      return NextResponse.json({ success: false, msg: "Email Not found" });
    }

    return NextResponse.json({ success: true, emails });
  } catch (err) {
    return NextResponse.json({ success: false, msg: err.toString() });
  }
};

// Email POST Request
export const POST = async (request) => {
  try {
    const requestData = await request.formData();
    const emailData = {
      email: `${requestData.get("email")}`,
    };
    await EmailModel.create(emailData);
    return NextResponse.json({ success: true, msg: "Email Subscribed" });
  } catch (err) {
    return NextResponse.json({ success: false, msg: err.toString() });
  }
};

// Email DELETE Request
export const DELETE = async (request) => {
  try {
    const emailId = request.nextUrl.searchParams.get("id");
    await EmailModel.findByIdAndDelete(emailId);
    return NextResponse.json({
      success: true,
      msg: "Email Subscription Deleted",
    });
  } catch (err) {
    return NextResponse.json({ success: false, msg: err.toString() });
  }
};
