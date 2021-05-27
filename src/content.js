/*global chrome*/
/* src/content.js */
import React from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import App from './App';
// import Popup from './Popup';
import registerServiceWorker from './registerServiceWorker';
import { Button, message } from 'antd';
import 'antd/dist/antd.css';

class Main extends React.Component {
  render() {
    return (
      <Frame
        frameborder="0"
        className="frame"
        width="1200px"
        // height="550px"
        height="800px"
        head={[
          <link
            type="text/css"
            rel="stylesheet"
            href={chrome.runtime.getURL('/static/css/content.css')}
          ></link>,
          <link href="videojs.markers.plugin.css" rel="stylesheet" />,
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/videojs-markers/0.7.0/videojs.markers.css"
            rel="stylesheet"
          ></link>,
          <link
            href="//vjs.zencdn.net/6.1.0/video-js.css"
            rel="stylesheet"
          ></link>,
          <link
            href="https://players.brightcove.net/videojs-overlay/2/videojs-overlay.min.js"
            rel="stylesheet"
          ></link>,
          <link
            href="https://players.brightcove.net/videojs-overlay/2/videojs-overlay.css"
            rel="stylesheet"
          ></link>,
          <link
            href="path/to/videojs-overlay-hyperlink.css"
            rel="stylesheet"
          ></link>,
          <link
            href="https://cdn.ckeditor.com/4.16.0/standard/ckeditor.js"
            rel="stylesheet"
          ></link>,
        ]}
      >
        <FrameContextConsumer>
          {({ document, window }) => {
            return (
              <App document={document} window={window} hi={hi} isExt={true} />
            );
          }}
        </FrameContextConsumer>
      </Frame>
    );
  }
}

const app = document.createElement('div');
app.id = 'my-extension-root';
// let hi = localStorage.getItem('src');
let hi =
  'https://dongseo.commonscdn.com/contents3/dongseol01/606c570419ce9/contents/media_files/mobile/ssmovie.mp4';
// console.log(hi);
// console.log('src', window.localStorage.getItem('src'));
app.style.display = 'none';
app.style.width = '100%';
app.style.height = '50%';

// canvas.dongseo.ac.kr

// dcms.dongseo.ac.kr
// const li = document.getElementById("breadcrumbs")
// console.log("adf;lkajsdf;klj")
// li.innerHTML = "<button id = 'btn'>버튼입니다</button>";
// document.getElementById("btn")?.addEventListener('click' , btnclick)
// function btnclick(){
//   console.log("dddddd")
//   let tagname = document.getElementsByTagName("iframe")[1]
// let tagtag = tagname.contentWindow?.document.getElementsByTagName("div")[0].getElementsByClassName("xnbc-body")[0]
// }

// ReactDOM.render(<Popup />, document.getElementById('popup'));

ReactDOM.render(<Main />, app);

//   window.addEventListener('message' ,function(e){
//   console.log(e)
// })

const key = 'updatable';

const openMessage = () => {
  console.log('dddddddddddddddddd');
  message.loading({ content: 'Loading...', key });
  setTimeout(() => {
    message.success({ content: 'Loaded!', key, duration: 2 });
  }, 1000);
};

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === 'clicked_browser_action') {
    console.log('쿠ㅡ릭');
    //
    let tagname = document.getElementsByTagName('iframe')[1];
    let tagtag = tagname.contentWindow?.document
      .getElementsByTagName('div')[0]
      .getElementsByClassName('xnbc-body')[0];
    // let mainframe = tagname.contentWindow?.document
    //   .getElementsByTagName('div')[0]
    //   .getElementsByTagName('iframe')[0];
    // let mainframe2 =
    //   mainframe?.contentWindow?.document.getElementsByTagName('iframe')[0];
    console.log(app);
    app.style.display = 'block';
    tagtag.innerHTML = '';
    tagtag.appendChild(app);
    // console.log(
    //   'player-area',
    //   mainframe2.contentWindow.document.getElementById('player-area')
    // );
    // console.log(window.onload(mainframe2.getAttribute('src')));
    // toggle();
  }
});

function toggle() {
  if (app.style.display === 'none') {
    // let tagname = document.getElementsByTagName('iframe')[1];
    // let tagtag = tagname.contentWindow?.document
    //   .getElementsByTagName('div')[0]
    //   .getElementsByClassName('xnbc-body')[0];
    // let mainframe = tagname.contentWindow?.document
    //   .getElementsByTagName('div')[0]
    //   .getElementsByTagName('iframe')[0];
    // let mainframe2 =
    //   mainframe?.contentWindow?.document.getElementsByTagName('iframe')[0];
    // tagtag.innerHTML = '';
    // tagtag.appendChild(app);
    // app.style.display = 'block';
    // console.log(mainframe);
    // console.log(mainframe2);
    // console.log(
    //   mainframe2.contentWindow.document.getElementById('player-area')
    // );
    // let data = mainframe2?.contentWindow.document.getElementsByTagName('div');
    // // window.postMessage(data , "https://canvas.dongseo.ac.kr" )
  } else {
    app.style.display = 'none';
  }
}
