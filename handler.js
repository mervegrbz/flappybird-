export default class handler {
    constructor(point) {
      document.addEventListener("keydown", event => {
        switch (event.keyCode) {
        case 32:
            
            point.jump();
            break;
       

      }});
  
      
    
  }
}