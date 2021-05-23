import { createConnections } from 'typeorm';

createConnections().then(() => {
    console.log('databases connected');
});
