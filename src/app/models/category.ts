export class Category {
  name: string;
  parent: number;
  id: number;
  level: number;
  fields: any[];

  constructor(title: string, level: number, id: number, parent?: number, fields?) {
    this.name = title;
    this.parent = parent;
    this.id = id;
    this.level = level;
    this.fields = fields;
  }
}
