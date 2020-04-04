import React from "react";
import background from '../../assets/images/homebuyer.jpeg';

const homeContainerStyle = {
  width: '100%',
  height: '750px',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover'
};

export const HomeContainer = ({children}) => <div className={`container`} style={homeContainerStyle}>{children}</div>;

export const Container = ({fluid, children}) => <div className={`container`}>{children}</div>;