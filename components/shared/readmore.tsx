"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ReadMoreTextProps {
  text: string;
  maxLength?: number;
}

export function ReadMoreText({ text, maxLength = 80 }: ReadMoreTextProps) {
  const [expanded, setExpanded] = useState(false);

  const isLong = text.length > maxLength;
  const shortText = text.slice(0, maxLength) + "...";

  return (
    <div className="space-y-1 text-sm text-muted-foreground">
      <p className="transition-all">{expanded || !isLong ? text : shortText}</p>
      {isLong && (
        <Button
          variant="link"
          className="h-auto px-0 text-purple-500 text-xs"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read less" : "Read more"}
        </Button>
      )}
    </div>
  );
}
