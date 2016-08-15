/*
 * Created by CntChen 2016.08.15
 * write by ES6
 */

let CntTemplate = require('../builds/index').CntTemplate;

let contentTpl = `{{each lists_arr}}
    <li>{{$index}} - {{$value}}</li>
{{/each}}
{{each lists_obj}}
    <li>{{$index}} - {{$value.user}}</li>
{{/each}}`;

let mockdata = {
  lists_arr: [
    'aa',
    'bb',
    'cc',
    'dd'
  ],
  lists_obj: {
    a: {
      user: 'cntchen',
    },
    b: {
      user: 'cntchen',
    },
    c: {
      user: 'cntchen',
    },
    d: {
      user: 'cntchen',
    }
  },
};

console.log(CntTemplate(contentTpl, mockdata));