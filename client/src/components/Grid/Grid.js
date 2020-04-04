import React from "react";
import background from '../../assets/images/homebuyer.jpeg';

const homeContainerStyle = {
  width: '100%',
  height: '750px',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover'
};

export const HomeContainer = ({children}) => <div className={`home-container`} style={homeContainerStyle}>{children}</div>;

export const Container = ({children}) => <main className={`container`}>{children}</main>;

export const ContainerFluid = ({fluid, children}) => <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;