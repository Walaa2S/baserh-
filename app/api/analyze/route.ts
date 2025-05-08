import { NextRequest, NextResponse } from "next/server";
import { Ollama } from "ollama";
import { writeFile } from "fs/promises";
import { join } from "path";
import { v4 as uuidv4 } from "uuid";

const ollama = new Ollama();

export async function POST(req: NextRequest) {
  try {
    const { csv } = await req.json();

    if (!csv) {
      return NextResponse.json(
        { error: "CSV data is missing" },
        { status: 400 }
      );
    }

    const prompt = `
You are a professional data analyst. Analyze the following CSV data and extract key insights, trends, anomalies, and important statistics. Present the findings clearly in bullet points.

CSV:
${csv}
`;

    const response = await ollama.chat({
      model: "llama3",
      messages: [{ role: "user", content: prompt }],
    });

    const result = response.message.content;

    // Save result to a file for export
    const fileName = `${uuidv4()}.txt`;
    const filePath = join(process.cwd(), "public", "exports", fileName);
    await writeFile(filePath, result);

    return NextResponse.json({ result, exportUrl: `/exports/${fileName}` });
  } catch (error) {
    console.error("AI Analysis Error:", error);
    return NextResponse.json(
      { error: "Failed to analyze data." },
      { status: 500 }
    );
  }
}
