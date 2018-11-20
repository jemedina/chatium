import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friendsFilter',
  pure: false
})
export class FriendsFilterPipe implements PipeTransform {

  transform(items: any[], args?: any): any {
    args = args || "";
    //console.log(items.filter(item => item.name.toUpperCase().indexOf(args.findName.toUpperCase()) > -1));
    return  items.filter(item => item.name.toUpperCase().startsWith(args.toUpperCase()));
  }

}
