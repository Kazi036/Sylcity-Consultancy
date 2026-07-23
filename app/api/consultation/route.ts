import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      service,
      message,
    } = body;

    // Validation

    if (
      !name ||
      !email ||
      !phone ||
      !service
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All required fields are mandatory.",
        },
        { status: 400 }
      );
    }

    // Save Data

    const consultation =
      await prisma.consultation.create({
        data: {
          name: name,
          email,
          phone,
          service,
          message,
        },
      });

    return NextResponse.json(
      {
        success: true,
        message:
          "Consultation request submitted successfully.",
        consultation,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error.",
      },
      { status: 500 }
    );
  }
}