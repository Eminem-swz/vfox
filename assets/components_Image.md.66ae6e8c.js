import{_ as t,c as d,o as e,a as r}from"./app.2d0a5a59.js";const b='{"title":"Image \u56FE\u7247","description":"","frontmatter":{},"headers":[{"level":2,"title":"Props","slug":"props"},{"level":3,"title":"mode \u7684\u5408\u6CD5\u503C","slug":"mode-\u7684\u5408\u6CD5\u503C"},{"level":2,"title":"Events","slug":"events"}],"relativePath":"components/Image.md","lastUpdated":1637918371112}',a={},o=r('<h1 id="image-\u56FE\u7247" tabindex="-1">Image \u56FE\u7247 <a class="header-anchor" href="#image-\u56FE\u7247" aria-hidden="true">#</a></h1><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>src</td><td>string</td><td></td><td>\u5426</td><td>\u56FE\u7247\u8D44\u6E90\u5730\u5740</td></tr><tr><td>mode</td><td>string</td><td>&#39;scaleToFill&#39;</td><td>\u5426</td><td>\u56FE\u7247\u88C1\u526A\u3001\u7F29\u653E\u7684\u6A21\u5F0F</td></tr><tr><td>aspect-ratio</td><td>boolean</td><td></td><td>\u5426</td><td>\u9650\u5236\u5BBD\u9AD8\u6BD4\uFF0C\u8BBE\u7F6E\u4E86\u8BE5\u9879\uFF0C\u53EA\u8981\u5BBD\u5EA6\u8BBE\u5B9A\uFF0C\u9AD8\u5EA6\u4F1A\u6309\u9020\u6BD4\u4F8B\u663E\u793A\uFF0C\u5982 1 \u4E3A\u6B63\u65B9\u5F62</td></tr><tr><td>lazy-load</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u56FE\u7247\u61D2\u52A0\u8F7D\uFF0C\u5728\u5373\u5C06\u8FDB\u5165\u4E00\u5B9A\u8303\u56F4(preload=1.3)\u65F6\u624D\u5F00\u59CB\u52A0\u8F7D</td></tr></tbody></table><h3 id="mode-\u7684\u5408\u6CD5\u503C" tabindex="-1">mode \u7684\u5408\u6CD5\u503C <a class="header-anchor" href="#mode-\u7684\u5408\u6CD5\u503C" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>scaleToFill</td><td>\u7F29\u653E\u6A21\u5F0F\uFF0C\u4E0D\u4FDD\u6301\u7EB5\u6A2A\u6BD4\u7F29\u653E\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u7684\u5BBD\u9AD8\u5B8C\u5168\u62C9\u4F38\u81F3\u586B\u6EE1 <code>image</code> \u5143\u7D20</td></tr><tr><td>aspectFit</td><td>\u7F29\u653E\u6A21\u5F0F\uFF0C\u4FDD\u6301\u7EB5\u6A2A\u6BD4\u7F29\u653E\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u7684\u957F\u8FB9\u80FD\u5B8C\u5168\u663E\u793A\u51FA\u6765\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53EF\u4EE5\u5B8C\u6574\u5730\u5C06\u56FE\u7247\u663E\u793A\u51FA\u6765\u3002</td></tr><tr><td>aspectFill</td><td>\u7F29\u653E\u6A21\u5F0F\uFF0C\u4FDD\u6301\u7EB5\u6A2A\u6BD4\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u4FDD\u8BC1\u56FE\u7247\u7684\u77ED\u8FB9\u80FD\u5B8C\u5168\u663E\u793A\u51FA\u6765\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u56FE\u7247\u901A\u5E38\u53EA\u5728\u6C34\u5E73\u6216\u5782\u76F4\u65B9\u5411\u662F\u5B8C\u6574\u7684\uFF0C\u53E6\u4E00\u4E2A\u65B9\u5411\u5C06\u4F1A\u53D1\u751F\u622A\u53D6\u3002</td></tr><tr><td>widthFix</td><td>\u7F29\u653E\u6A21\u5F0F\uFF0C\u5BBD\u5EA6\u4E0D\u53D8\uFF0C\u9AD8\u5EA6\u81EA\u52A8\u53D8\u5316\uFF0C\u4FDD\u6301\u539F\u56FE\u5BBD\u9AD8\u6BD4\u4E0D\u53D8</td></tr><tr><td>top</td><td>\u88C1\u526A\u6A21\u5F0F\uFF0C\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u9876\u90E8\u533A\u57DF</td></tr><tr><td>bottom</td><td>\u88C1\u526A\u6A21\u5F0F\uFF0C\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u5E95\u90E8\u533A\u57DF</td></tr><tr><td>center</td><td>\u88C1\u526A\u6A21\u5F0F\uFF0C\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u4E2D\u95F4\u533A\u57DF</td></tr><tr><td>left</td><td>\u88C1\u526A\u6A21\u5F0F\uFF0C\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u5DE6\u8FB9\u533A\u57DF</td></tr><tr><td>right</td><td>\u88C1\u526A\u6A21\u5F0F\uFF0C\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u53F3\u8FB9\u533A\u57DF</td></tr><tr><td>top left</td><td>\u88C1\u526A\u6A21\u5F0F\uFF0C\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u5DE6\u4E0A\u8FB9\u533A\u57DF</td></tr><tr><td>top right</td><td>\u88C1\u526A\u6A21\u5F0F\uFF0C\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u53F3\u4E0A\u8FB9\u533A\u57DF</td></tr><tr><td>bottom left</td><td>\u88C1\u526A\u6A21\u5F0F\uFF0C\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u5DE6\u4E0B\u8FB9\u533A\u57DF</td></tr><tr><td>bottom right</td><td>\u88C1\u526A\u6A21\u5F0F\uFF0C\u4E0D\u7F29\u653E\u56FE\u7247\uFF0C\u53EA\u663E\u793A\u56FE\u7247\u7684\u53F3\u4E0B\u8FB9\u533A\u57DF</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u63CF\u8FF0</th><th>\u56DE\u8C03\u51FD\u6570\u53C2\u6570</th></tr></thead><tbody><tr><td>error</td><td>\u5F53\u9519\u8BEF\u53D1\u751F\u65F6\u89E6\u53D1</td><td>Error</td></tr><tr><td>load</td><td>\u5F53\u56FE\u7247\u8F7D\u5165\u5B8C\u6BD5\u65F6\u89E6\u53D1</td><td>{ height, width, src }</td></tr><tr><td>click</td><td>\u70B9\u51FB\u65F6\u89E6\u53D1</td><td>Event</td></tr></tbody></table>',7),h=[o];function s(l,i,n,c,p,_){return e(),d("div",null,h)}var g=t(a,[["render",s]]);export{b as __pageData,g as default};
