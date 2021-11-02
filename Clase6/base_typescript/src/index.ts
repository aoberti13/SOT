import { httpServer } from "./services/service";

httpServer.listen(8080, () => {
    console.log('Server up');
})