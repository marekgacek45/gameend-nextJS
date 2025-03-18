import React from "react";

const badgeColors: Record<string, string> = {
  artykuł: "bg-blue-300 ",
  recenzja: "bg-red-300 ",
  news: "bg-green-300 ",
};

const Badge = ({
  size,
  title,
}: {
  size?: "default" | "small";
  title: string;
}) => {
  const colorClass = badgeColors[title] || "bg-yellow-300 ";

  return (
    <div
      className={`border-2 ${colorClass} border-black ${
        size === "small" ? "px-2" : "px-4"
      } py-1 rounded-sm flex justify-center items-center`}
    >
      <span
        className={`uppercase font-accent ${
          size === "small" ? "text-[8px]" : "text-[10px]"
        }`}
      >
        {title}
      </span>
    </div>
  );
};

export default Badge;
