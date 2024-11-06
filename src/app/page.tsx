import Container from "@/components/Container";
import ImagesGrid from "@/components/ImagesGrid";

export default async function Home() {
  const query = 'nature'
  const count = 10

  const url = `${process.env.NEXT_PUBLIC_API_URL}/images?query=${query}&count=${count}`
  const response = await fetch(url, { cache: 'no-store' })
  const images = await response.json()

  if (!response.ok) {
    return <div className="text-3xl">
      Failed to fetch images. Please try again after a while
    </div>
  }
  return (
    <Container>
      <ImagesGrid images={images}></ImagesGrid>
    </Container>
  );
}
