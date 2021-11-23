import { useState } from 'react';
import { TextButton } from './Buttons';
import { css } from '@emotion/css';

interface Modal {
  title: string;
  buttonText: string;
  body?: string;
  action?: any;
}

export const Modal: React.FC<Modal> = (props) => {
  const { title, body, buttonText, action, children } = props;

  const [open, setOpen] = useState(false)

  const openModal = () => {
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  return (
    <>
      <TextButton buttonStyle={buttonStyle} onClick={openModal} buttonText={buttonText} />
      {!open ? null : 
        <div className={modalBackgroundStyle}>
          <div className={modalContainerBoxdStyle}>
            <div className={contentContainerdStyle}>
              <h1 className={headerStyle}>{title}</h1>
              {body === undefined ? null : <div className={bodyStyle}>{body}</div>}
              {children ?? children}
              <div className={footerStyle}>
                <TextButton buttonStyle={buttonStyle} onClick={closeModal} buttonText={"close"} />
                {!action ? null : <TextButton buttonStyle={buttonStyle} onClick={action} buttonText={"submit"} />}
              </div>
            </div>
          </div>
        </div> 
      }
    </>
  )
}

const modalBackgroundStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #000000a0;
  backdrop-filter: blur(5px);
`

const modalContainerBoxdStyle = css`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  border-radius: 3px;
  padding: 20px;
`

const contentContainerdStyle = css`
  /* background-color: #794d4d; */
  display: grid;
  gap: 20px;
  width: auto;
`

const headerStyle = css`
  /* background-color: #9b7c24; */
  display: grid; 
  text-align: center;
  line-height: normal;
  font-weight: normal;
`

const bodyStyle = css`
  /* background-color: aqua; */
  display: grid;
`

const footerStyle = css`
  /* background-color: #00ff6a; */
  display: flex;
  justify-content: space-between;
`

const buttonStyle = css`
  background-color: #006CFF;
  color: #ffffff;
  padding: 10px;
  border-radius: 3px;
  &:hover {
    background-color: #009dff;
  }
`