"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import BackButton from "./BackButton";

type Props = {
  fileName: string;
};

// a component representing a blog post
const WordsPost = ({ fileName }: Props) => {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    const fetchWords = async (fileName: string) => {
      const res = await fetch(`/words/${fileName}`);
      const data = await res.json();
      setWords(data.words);
    };

    fetchWords(fileName);
  }, [fileName]);

  return (
    <div>
      <div className="mb-4">
        <Link href="/words" className="btn">
          <BackButton />
        </Link>
      </div>
      {words.map((word, index) => (
        <div key={index}>
          <p>{word}</p>
          <br></br>
        </div>
      ))}
    </div>
  );
};

export default WordsPost;
