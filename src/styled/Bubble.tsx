import styled from "@emotion/styled";

//import screen from '../assets/screens/masques-screen.png';

interface Props {
    screen?: string;
}

export default function Bubble({ screen }: Props) {

    const Bubble = styled.div`
    
    width: 30em;
	height: 30em;
    border-radius: 50%;

    cursor: pointer;
	position: relative;

    background-image:
		// radial-gradient(8% 8% at 22% 28%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		// radial-gradient(8% 8% at 23% 27%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		// radial-gradient(8% 8% at 24% 26%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		// radial-gradient(8% 8% at 25% 25%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		// radial-gradient(8% 8% at 26% 24%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		// radial-gradient(8% 8% at 27% 23%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%),
		// radial-gradient(8% 8% at 28% 22%,hsl(0,0%,100%) 45%,hsla(0,0%,100%,0) 50%);
        url(${screen});

    background-size: 150%;
    background-repeat: no-repeat;
    background-position: center;
    

    box-shadow:
		0 -0.6em 1em hsl(0,90%,100%) inset,
		0 -1.5em 4em rgb(11, 101, 218) inset,
		0 0.5em 0.5em rgb(11, 132, 218) inset,
		0.5em 0 1em hsl(0,90%,100%) inset,
		-0.5em 0 1em hsl(0,90%,100%) inset,
		0 1em 4em rgb(61, 141, 245) inset;

        
    transition-duration: 0.2s;
    --bubbleTiming: cubic-bezier(0.5,0.15,0.25,1.75);

    transform-style: preserve-3d;
	transition-property: box-shadow, transform, width, height;
	transition-timing-function: ease-in-out, ease-in-out, var(--bubbleTiming), var(--bubbleTiming);
	will-change: transform;
	-webkit-appearance: none;
	appearance: none;
	z-index: 0;


        &:hover {
            transform: scale(1.5);
            outline: none;
        }

    
        @media (prefers-reduced-motion: reduce) {
            Bubble {
                animation: none;
            }
        }
    
        @keyframes float {
            from, to {
                transform: translate(0,3%);
            }
            25% {
                transform: translate(-3%,0);
            }
            50% {
                transform: translate(0,-3%);
            }
            75% {
                transform: translate(3%,0);
            }
        }

    `
    
    return (
        <>
        <Bubble />
        </>
    )
}