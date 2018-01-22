// variable to hold our message.
// we won't export this and it will be private
const message = 'Hello World';

// function to get the message and return it
// we will export this and it will be public
const getMessage = () => {
  console.log(message);
  return message;
};

/**
 Node implements commonJS for imports and exports.
 Node is setup that every class has its own "module" object that controls
 the exports and other module information. The exports object inside of
 the module contains everything public from this class. The name of the
 variable in the module.exports does not need to match the name of the
 variable in this class. For example you could do
 "module.exports.retrieveMessage = getMessage;" and it would be called
 retrieveMessage anywhere it was imported.
 In this case the getMessage function will be public for anyone who imports
 this module
* */
module.exports.getMessage = getMessage;
