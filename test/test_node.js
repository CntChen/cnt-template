/*
 * Created by CntChen 2016.07.19
 * write by ES6
 */

let CntTemplate = require('../builds/index').CntTemplate;

let contentTpl = `{{if isSinglePic}}
  <a {{if imgTargetUrl}}href="{{imgTargetUrl}}"{{/if}} class="full-img">
    <img src="{{imgUrl}}">
  </a>
{{else}}
  <div class="content-block content-wrap">
    {{if imgUrl}}
      <a {{if imgTargetUrl}}href="{{imgTargetUrl}}"{{/if}} class="img-wrap" style="background-image: url({{imgUrl}})"></a>
    {{/if}}
    {{if textTitle}}
      <h4>{{textTitle}}</h4>
    {{/if}}
    {{if detailText}}
      <p>{{detailText}}</p>
    {{/if}}
  </div>
  {{if buttonText}}
  <div class="content-block">
    <a class="button button-fill external" href="{{buttonUrl}}">{{buttonText}}</a>
  </div>
  {{first.second}}
  {{/if}}
{{/if}}`;

let mockdata = {
  buttonText: "我知道了<h1>Test</h1>",
  buttonUrl: null,
  detailText: "预计<strong>HH:MM-HH:MM</strong>期间暂停，给您带来不便，敬请谅解！期间暂停，给您带来不便，敬请谅解！期间暂停，给您带来不便，敬请谅解！",
  imgTargetUrl: null,
  imgUrl: "https://m-zl.mucfc.com/static/serverImgs/icon_arning_x3.png",
  textTitle: '期间暂停，给您带来不便，敬请谅解！',
  pageTitle: '哈哈哈哈',
  outlineText: null,
  title: null,
  isSinglePic: false,
  first: {
    second: "by CntChen"
  }
};

console.log(CntTemplate(contentTpl, mockdata));