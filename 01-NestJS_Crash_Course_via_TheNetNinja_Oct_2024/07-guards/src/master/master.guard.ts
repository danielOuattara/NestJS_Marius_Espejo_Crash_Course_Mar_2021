import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class MasterGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    console.log('request = ', request);

    //validate request : authorization
    const hasBlackBelt = request.user.belts.includes('black');

    // return false;
    return hasBlackBelt;

    return true;
  }
}
