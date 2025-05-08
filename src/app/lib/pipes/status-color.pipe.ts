import { Pipe, PipeTransform } from '@angular/core';
import { Status } from '../types/status.type';

@Pipe({ name: 'statusColor' })
export class StatusColorPipe implements PipeTransform {
  transform(status: Status): string {
    return status === 'completed' ? 'green' : 'red';
  }
}
