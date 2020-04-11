import React from 'react';
import { Row } from '../components/Grid/Grid';

function NoMatch() {
  const divStyle = {
    // backgroundDiv: {
    //   background: "url()",
    //   backgroundSize: 'cover',
    //   width: '100%',
    //   height: '750px',
    // },

    emojiStyle: {
      textAlign: 'center',
      marginTop: '90px',
      marginBottom: '20px',
      fontSize: '10rem',
    },

    notFound: {
      textAlign: 'center',
      fontWeight: '400',
    }

  }
  return (
    <div style={divStyle.backgroundDiv}>
      <h1 style={divStyle.emojiStyle}>4<span role="img" aria-label="Face With Rolling Eyes Emoji">😔</span>4</h1>
      
      <h1 style={divStyle.notFound}>
      OOPS! PAGE NOT FOUND
      </h1>
    </div>
  );
}
// 🙄

export default NoMatch;