export const msg: string = 'World';
import {AuthDataRequest} from '../proto/service_file_pb';
import {AuthServiceClient} from '../proto/service_file_pb_service';

const data = new AuthDataRequest();
new AuthServiceClient('localhost', {transport: null}).postAuthData(data, () => {});
