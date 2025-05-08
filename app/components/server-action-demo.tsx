"use client";

import { useState, useTransition } from "react";
import { processData } from "@/app/actions/process-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";

export default function ServerActionDemo() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const result = await processData(formData);
      setResult(result);
      setMessage("");
    });
  }

  return (
    <div className="mx-auto max-w-md space-y-4 p-4">
      <div className="rounded-lg border bg-card p-4 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Server Action Demo</h2>
        <form action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter a message"
              className="w-full"
            />
          </div>
          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              "Process Data"
            )}
          </Button>
        </form>
        {result && (
          <div className="mt-4 rounded-md bg-muted p-4">
            <p className="text-sm">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}