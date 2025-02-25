console.log('Js file loads with async attribute')
// Note:If async is not to be uesed
// Uncaught TypeError: 
// Cannot set properties of null (setting 'innerHTML')
// For solve it We should use defer or async attribute in loading
// scrcipt in head section of HTML
document.getElementById('asyncload').innerHTML = 'Hello Async'