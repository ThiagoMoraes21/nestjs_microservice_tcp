import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { Logger } from "@nestjs/common";
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MathService {
    private client: ClientProxy;
    private logger = new Logger('MathService');

    constructor() {
        this.client = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: '127.0.0.1',
                port: 8877,
            }
        });
        this.logger.log('connected...');
    }

    public accumulate(data: number[]): Observable<number> {
        this.logger.log('[accumulate] - ' + data);

        // .send<ReturnType, ParamType>(pattern, param)
        return this.client.send<number, number[]>('add', data);
    }
}