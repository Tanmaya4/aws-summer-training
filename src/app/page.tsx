import ImageGrid from "./Layout/ImageGrid";

export default function Home() {
  return (
    <main
      className="min-h-96 h-auto p-6 mb-4 md:px-12 w-full 
    flex flex-col items-center justify-center gap-8"
    >
      <ImageGrid />
    </main>
  );
}