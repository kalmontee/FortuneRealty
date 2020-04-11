import React from "react";
import background from '../../assets/images/homebuyer.jpeg';

const homeContainerStyle = {
  width: '100%',
  height: '750px',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover'
};

const aboutStyle = {
  background: "#f5f6fa",
  padding: '20px 0'
}

export const HomeContainer = ({ children }) => <div className={`home-container`} style={homeContainerStyle}>{children}</div>;

export const Container = ({ fluid, children }) => <main className={`row${fluid ? "-fluid" : ""}`, `container`}>{children}</main>;

export const AboutContainer = ({ children }) => <section style={aboutStyle} >{children}</section>;

export const Row = ({ fluid, flex, children }) => <div className={`row${fluid ? "-fluid" : ""}`, `row${flex ? " flex" : ""}`}>{children}</div>