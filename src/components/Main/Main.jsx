import React, { useContext, useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const { onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input
  } = useContext(Context);

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {showResult
          ? <div className="result">
            <div className='result-title'>
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading
                ? <div className="loader">
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                </div>
                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>

          </div>
          : <>
            <div className="greet">
              <p><span>Hello, Manish.</span></p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Lorem ipsum dolor sit amet.</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        }



        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here' />
            <div>
              <img src={assets.gallery_icon} width={30} alt="" />
              <img src={assets.mic_icon} width={30} alt="" />
              {input ? <img onClick={() => onSent()} src={assets.send_icon} width={30} alt="" /> : null}
            </div>
          </div>
          <p className="bottom-info">
            {/* Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps */}
            <p>© {currentYear} Manish Kumar. All Rights Reserved. Built with ❤️ by Manish Kumar</p>
          
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main