import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchQuery: string): any[] {
    if (!items || !searchQuery) {
      return items;
    }
    return items.filter(item =>
      item.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.prenom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.cin?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.numElecteur?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
}
