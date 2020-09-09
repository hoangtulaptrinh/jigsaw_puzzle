import styled from 'styled-components';

export default styled.div`
  flex: 1;

  .neon {
    max-height: 100%;
    position: relative;
    overflow: hidden;
    filter: brightness(200%);
    transition: all 100ms ease-in-out;
  }

  .text {
    margin-left: 200px;
    background-color: black;
    color: white;
    font-size: 120px;
    font-weight: bold;
    font-family: sans-serif;
    text-transform: uppercase;
    position: relative;
    user-select: none;
    white-space: nowrap;
  }

  .text::before {
    content: attr(data-text);
    position: absolute;
    color: white;
    filter: blur(0.02em);
    mix-blend-mode: difference;
  }

  .gradient {
    position: absolute;
    background: linear-gradient(45deg, red, gold, lightgreen, gold, red);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    mix-blend-mode: multiply;
  }

  .spotlight {
    position: absolute;
    top: -100%;
    left: -100%;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, white, transparent 25%) center / 25% 25%,
      radial-gradient(circle, white, black 25%) center / 12.5% 12.5%;
    animation: light 5s linear infinite;
    mix-blend-mode: color-dodge;
  }

  @keyframes light {
    to {
      transform: translate(50%, 50%);
    }
  }
`;
