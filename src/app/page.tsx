import Container from "@/components/Container";
import ImagesGrid from "@/components/ImagesGrid";

export default async function Home() {
  const query = 'nature'
  const count = 10

  const url = `${process.env.NEXT_PUBLIC_API_URL}/images?query=${query}&count=${count}`
  const response = await fetch(url, { cache: 'no-store' })
  const images = await response.json()

  return (
    <Container>
      <ImagesGrid images={images}></ImagesGrid>
    </Container>
  );
}
