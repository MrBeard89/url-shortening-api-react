import '../../styles/ShortenLink/ShortenLink.scss'

import { useState } from 'react'
import axios from 'axios'

//CopyToClipboard Library
import CopyToClipboard from 'react-copy-to-clipboard'

export const ShortenLink = () => {
  //InputValue
  const [actualInput, setActualInput] = useState('')

  //The Links
  const [shortenedLink, setShortenedLink] = useState('')
  const [originalLink, setOriginalLink] = useState('')

  //Copy Button State
  const [copied, setCopied] = useState('Copy to Clipboard')

  //Apicall
  //async function

  const fetchData = async () => {
    axios.defaults.headers.post['Content-Type'] = 'application/json'
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
    try {
      const response = await axios(`https://api.shrtco.de/v2/shorten?url=${actualInput}`)

      //Setting the links

      setShortenedLink(response.data.result.full_short_link)
      setOriginalLink(response.data.result.original_link)
    } catch (e) {
      console.log(e)
    }

    //shortenedContainer reveal depend on Input length

    let element = document.getElementById('shortenedContainer')
    actualInput.length === 0 ? (element.style.display = 'none') : (element.style.display = 'flex')
  }

  //Copy btn timer function
  const copyBtnStyle = () => {
    setCopied('Copied!')
    let btn = document.getElementById('btn')
    btn.style.backgroundColor = 'hsl(257, 27%, 26%)'
    function myTimer() {
      btn.style.backgroundColor = 'hsl(180, 66%, 49%)'
      setCopied('Copy to Clipboard')
    }

    setTimeout(myTimer, 3000)
  }

  return (
    <>
      {/* Under Dekor Div */}

      <div className='underline-wrapper'>
        <div className='underline-div'></div>
      </div>

      {/* Shorten Main Div */}

      <div className='shortenlink-wrapper' id='shortening'>
        <div className='shortenlink-container'>
          <div className='shortenlink-actual'>
            <div className='shortenlink-form'>
              <input
                style={{ border: actualInput.length === 0 ? '2px solid red' : '' }}
                name='shorten-link'
                type='text'
                placeholder='Shorten a link here ...'
                value={actualInput}
                onChange={(e) => {
                  setActualInput(e.target.value)
                }}
              />
              <label
                className='error-label'
                style={{ display: actualInput.length === 0 ? 'block' : '' }}
                htmlFor='shorten-link'
              >
                Please add a link
              </label>
              <button onClick={() => fetchData()} className='btn-shorten'>
                Shorten it!
              </button>
            </div>
          </div>
        </div>

        {/* After Api call Container */}

        <div className='shortened-container' id='shortenedContainer'>
          <div className='original-link'>
            <p>{originalLink}</p>
          </div>
          <hr className='shortened-line' />

          <div className='shortened-link'>
            <p>{shortenedLink}</p>
          </div>
          <CopyToClipboard text={shortenedLink}>
            <button
              id='btn'
              onClick={() => {
                copyBtnStyle()
              }}
            >
              {copied}
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </>
  )
}
