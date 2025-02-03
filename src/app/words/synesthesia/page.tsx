import WordsPost from "@/app/components/WordsPost";

export default function base() {
  return (
    <main className="flex items-start mx-8 sm:mx-16">
      <WordsPost fileName="synesthesia.json"/>
    </main>
  );
}
