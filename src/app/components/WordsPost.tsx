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
      console.log(res);
      const data = await res.json();
      console.log(data);
      setWords(data.words);
    };

    fetchWords(fileName);
  }, []);

  return (
    <main>
      <div>
        <Link href="/words" className="btn inline-block">
          <BackButton />
        </Link>
      </div>
      {words.map((word, index) => (
        <div key={index}>
          <p>{word}</p>
          <br></br>
        </div>
      ))}
    </main>
  );
};

export default WordsPost;
