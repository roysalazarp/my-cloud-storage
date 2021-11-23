import { css } from '@emotion/css';

interface Button {
  onClick: any;
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
        onClick={(e) => onClick(e)}
      >
        {buttonText}
      </button>
    </>
  )
}