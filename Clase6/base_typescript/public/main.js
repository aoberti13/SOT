console.log('Conectando cliente');
const clientWS = io.connect();

// let i = 0;
// const intervalId = setInterval(() => {

//     if (i < 4) {
//         const data = {
//             msg: 'hola',
//             data: new Date(),
//             i
//         };
//         clientWS.emit('message-sot', data);
//         i++
//     } else {
//         clearInterval(intervalId);
//     }
// }, 2000)

clientWS.on('all', (data) => {
    console.log(data);
})

