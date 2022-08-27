import React, { useState, useEffect } from 'react'
import grapesjs from 'grapesjs';
// import "./styles/main.scss"

import gjsPresetWebpage from "grapesjs-preset-webpage"
import swiperComponent from './plugins/swiper';

const Editior = () => {
  const [editor, setEditor] = useState(null)

  const svgText = `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
  <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
  </svg>`;
  const svgLink = `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
<path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />
</svg>`;
  const navbarStyle = `<style>
  .nav{
    display: flex;
    flex-direction: row;
    color: red;
    text-align: center;
    font-size: 32px;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-suDEB7NnsY3U4ZrUXjeeEqPYr3e4SFPSbXNxokFu&s");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 15px;
    width: 100%;
    height: 300px;
    gap: 3px;
    left:0;


  }
  .navitem{
  padding: 10px;
  color: orange;
}
  </style>`
  const navbar = `<div class="nav">
                  <div class="navitem">Home</div>
                  <div class="navitem">About</div>
                  <div class="navitem">products</div>
                  
                  <div> About </div>
                  <svg style="width:48px;height:48px" viewBox="0 0 24 24">
  <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
  </svg>"
  </div>

                  ${navbarStyle}`
                
  const mainStyle = `body, html {
    margin: 0;
    height: 100%;
  }
  
  #editor {
    user-select: none;
    min-width: 45px;
    padding: 1em;
    box-sizing: border-box;
    min-height: 90px;
    cursor: all-scroll;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 3px;
    margin: 10px 2.5% 5px;
    box-shadow: 0 1px 0 0 rgb(0 0 0 / 15%);
    transition: all .2s ease 0s;
    transition-property: color;
  }
  
  #editor:hover {
    color: #d278c9;
  }`
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#editor",
      // plugins: [gjsPresetWebpage, swiperComponent],
      // pluginsOpts: {
      //   gjsPresetWebpage: {},
      //   swiperComponent: {},
      // },
      // canvas: {
      //   styles: ['https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css'],
      //   scripts: ["https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"]
      // },


      /// Avoid default panels
      blockManager: {
        appendTo: '#editor',
        blocks: [
          {
            id: 'image',
            label: 'Image',
            category: 'Basic',
            media: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
        </svg>`,
            // Use `image` component
            content: [
              { type: 'image' },
              `<div>put a name for image</div>`
            ],
            // The component `image` is activatable (shows the Asset Manager).
            // We want to activate it once dropped in the canvas.
            activate: true,
            // select: true, // Default with `activate: true`
          },
          // {
          //   id: 'text',
          //   label: 'text',
          //   media: `<svg style="width:48px;height:48px" viewBox="0 0 24 24">
          //   <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />
          //   </svg>`,
          //   // Use `image` component
          //   content: [{ type: 'text' },
          //   `<div>Type your Name here</div>`],
          //   // The component `image` is activatable (shows the Asset Manager).
          //   // We want to activate it once dropped in the canvas.
          //   activate: true,
          //   // select: true, // Default with `activate: true`
          // },
          {
            id: 'text',
            label: 'Text',
            category: 'Basic',
            media: svgText,
            activate: true,
            content: {
              type: 'text',
              content: 'Insert your text here',
              style: { padding: '10px', color: "red" },

            }
          },
          {
            id: 'navbar',
            label: 'navbar',
            category: 'Basic',
            media: svgLink,
            activate: true,
            content: {
              type: 'text',
              content: navbar,

            }
          },
          {
            label: 'Quote',
            category: 'Basic',
            attributes: { class: 'fa fa-quote-right' },
            content: `<blockquote class="quote">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit
              </blockquote>`
          }

        ],
      }


    })
    setEditor(editor);
  }, []);


  return (
    <div className="App">
      <div id='editor'></div>


    </div>
    
  )
}

export default Editior