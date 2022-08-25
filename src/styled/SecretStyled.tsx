import styled from "@emotion/styled";

interface Props {
    children?: React.ReactNode;
    onMouseEnter: () => void;
    onMouseLeave: () => void;

}

export default function SecretStyled({ children, onMouseEnter, onMouseLeave }: Props){

    function handleEnter() {
        onMouseEnter()
    }

    function handleLeave() {
        onMouseLeave()
    }

    const Section = styled.section`
        width: 100%;
        min-height: 100vh;

        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        margin-bottom: -100px;
        
        background: linear-gradient(to bottom, #010111 0%, #000000 100%);
   
    `
    return (
        <Section onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            {children}
        </Section>   
    )
}

