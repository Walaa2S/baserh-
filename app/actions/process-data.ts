"use server";

import { revalidatePath } from "next/cache";

export async function processData(data: FormData) {
  const message = data.get("message") as string;
  
  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // Process the data (this is just an example)
  const processedData = `Processed: ${message} at ${new Date().toISOString()}`;
  
  // Revalidate the page to show updated data
  revalidatePath("/");
  
  return processedData;
}