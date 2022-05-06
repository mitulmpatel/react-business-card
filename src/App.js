import React from 'react';
import Bio from './components/Bio';
import ContactInfo from './components/ContactInfo';
import ProfilePhoto from './components/ProfilePhoto';
import SocialMedia from './components/SocialMedia';

export default function App () {
  return (
    <>
      <ProfilePhoto />
      <ContactInfo />
      <Bio />
      <SocialMedia />
    </>
  );
}