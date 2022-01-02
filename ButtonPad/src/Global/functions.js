export function Test(){
    console.log('test');
    var ws = new WebSocket('ws://192.168.56.10');
    ws.onopen = () => {
        // connection opened
        ws.send('something');  // send a message
      };
}