import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroImage',
  standalone: true
})
export class HeroImagePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
