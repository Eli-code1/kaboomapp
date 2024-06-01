import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

const KaboomHTML = require('./kaboomPlaceholder.html');

export default class MyInlineWeb extends Component {
  render() {
    return (
      <WebView
        source={KaboomHTML}
        style={{flex: 1}}
        incognito={true}
      />
    );
  }
}