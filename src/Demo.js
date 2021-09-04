import React, {Component} from 'react'
import {Launcher} from 'react-chat-window'
import * as RiIcons from "react-icons/ri";
import download from './download.png';

 
class Demo extends Component {
 
  constructor() {
    super();
    this.state = {
      messageList: []
    };
  }
 
  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    })
  }
 
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: {
              text: 'hello' }
        } /*,
        {
            author: 'me',
            type: 'emoji',
            data: {
              code: 'someCode'
            }
          },
          {
            author: 'me',
            type: 'file',
            data: {
              url: 'somefile.mp3',
              fileName: 'Any old name'
            }
          }*/ 
        ]
      })
    }
  }
 
  render() {
    return (<div>
      <Launcher
        agentProfile={{
          teamName: 'Team Inspecto',
          imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
         }
    
    }
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    </div>)
  }
}

export default Demo;