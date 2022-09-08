import styled from '@emotion/styled';

interface Props {
  name?: string;
}

export default function ImgSocialsMedia({ name }: Props) {

  const Img = styled.img`
  width: 24px;
  height: 21px;
  margin-right: 10px;

    z-index: 1;
    `

  return (
    <>
        <Img src={require(`../assets/buttons/socials_${name}.png`)} alt={name} />
    </>
  );
}