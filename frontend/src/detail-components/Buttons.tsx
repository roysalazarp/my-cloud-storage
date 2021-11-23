import { css } from '@emotion/css';

interface Button {
  onClick: () => any;
  buttonStyle: string;
}

interface TextButton extends Button {
  buttonText: string;
}

export const TextButton: React.FC<TextButton> = (props) => {
  const { onClick, buttonText, buttonStyle } = props;

  const removeDefaultButtonStyle = css`
    border: none;
    margin: 0;
    text-decoration: none;
    cursor: pointer;
    text-align: center;
    align-content: center;
    text-transform: capitalize;
  `
  const customButtonStyle = css`
   ${removeDefaultButtonStyle}
   ${buttonStyle}
  `

  return (
    <>
      <button 
        className={customButtonStyle}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </>
  )
}

interface IconButton extends Button {
  iconUrl: string;
  iconUrlDescription: string;
}

export const IconButton: React.FC<IconButton> = (props) => {
  const { onClick, buttonStyle, iconUrl, iconUrlDescription } = props;
  return (
    <>
      <button 
        className={buttonStyle}
        onClick={onClick}
      >
        <img src={iconUrl} alt={iconUrlDescription} />
      </button>
    </>
  )
}