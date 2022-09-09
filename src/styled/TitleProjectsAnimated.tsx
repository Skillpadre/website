import styled from '@emotion/styled';

export default function TitleProjectsAnimated({ children }: any) {

    const H2 = styled.h2`
    animation: 2s linear 1s 1 normal slidein;
    // animation-duration: 2s;
    // animation-name: zebi;
    

  @keyframes slidein {
  from {
    transform: translateX(-300%);
  }

  to {
    transform: translateX(0);
  }
}
    `
    return (
        <H2>
            {children}
        </H2>
    )
}