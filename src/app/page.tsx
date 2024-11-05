"use client"

import ImagesGrid from "@/components/ImagesGrid";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem 0.75rem;
`
const Title = styled.h1`
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  text-align: center;
`

export default function Home() {
  return (
    <Container>
      <Title>
        Unsplash images tagged with AI
      </Title>
      <ImagesGrid></ImagesGrid>
    </Container>
  );
}
