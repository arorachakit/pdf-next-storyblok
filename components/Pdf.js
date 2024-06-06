import React from 'react';
import dynamic from 'next/dynamic';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react';
import Doc from './Doc'

import { PDFViewer } from '@react-pdf/renderer';


const Pdf = ({ blok }) => {
    // console.log(blok)
    return (
  <div style={{ width: '100%', height: '100vh' }}>
  <PDFViewer className='w-full h-full' {...storyblokEditable(blok)}>
    <Doc blok={blok} />
  </PDFViewer>
  </div>
);}

export default Pdf;

