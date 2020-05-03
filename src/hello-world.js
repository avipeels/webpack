import HelloWorldButton from './components/hello-world-button/hello-world-button';
import Heading from './components/heading/heading';
import React from 'react';
const heading = new Heading();
heading.render('hello world');
const hwButton = new HelloWorldButton();
hwButton.render();