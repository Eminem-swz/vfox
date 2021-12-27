import{_ as n,c as a,o as s,a as t}from"./app.9d79263e.js";const f='{"title":"Form/FormFooter/FormItem \u8868\u5355","description":"","frontmatter":{},"headers":[{"level":2,"title":"Import","slug":"import"},{"level":2,"title":"Form Slots","slug":"form-slots"},{"level":3,"title":"default","slug":"default"},{"level":3,"title":"footer","slug":"footer"},{"level":2,"title":"FormFooter Slots","slug":"formfooter-slots"},{"level":3,"title":"default","slug":"default-1"},{"level":2,"title":"FormItem Props","slug":"formitem-props"},{"level":2,"title":"FormItem Slots","slug":"formitem-slots"},{"level":3,"title":"default","slug":"default-2"},{"level":2,"title":"\u652F\u6301\u8868\u5355\u7684\u7EC4\u4EF6","slug":"\u652F\u6301\u8868\u5355\u7684\u7EC4\u4EF6"},{"level":2,"title":"\u4E0E Formily \u914D\u5408","slug":"\u4E0E-formily-\u914D\u5408"},{"level":3,"title":"\u5B89\u88C5","slug":"\u5B89\u88C5"},{"level":3,"title":"\u5BF9 FormItem \u505A\u4E0B\u9002\u914D","slug":"\u5BF9-formitem-\u505A\u4E0B\u9002\u914D"},{"level":3,"title":"\u8BBE\u8BA1\u8868\u5355","slug":"\u8BBE\u8BA1\u8868\u5355"},{"level":3,"title":"\u9644\u5F55\uFF1A","slug":"\u9644\u5F55\uFF1A"}],"relativePath":"components/Form.md","lastUpdated":1640530429629}',p={},o=t(`<h1 id="form-formfooter-formitem-\u8868\u5355" tabindex="-1">Form/FormFooter/FormItem \u8868\u5355 <a class="header-anchor" href="#form-formfooter-formitem-\u8868\u5355" aria-hidden="true">#</a></h1><p>\u5BC4\u8BED\uFF1A\u8868\u5355\u8FD9\u5757\u4E00\u76F4\u6CA1\u6709\u80FD\u6DF1\u5EA6\u53BB\u601D\u8003\uFF0C\u4E4B\u524D\u505A\u8FC7\u4E00\u822C\u8DDF\u5176\u4ED6 UI \u5E93\u4E00\u6837\u6821\u9A8C\uFF0C\u4F46\u662F\u90FD\u89C9\u5F97\u4E0D\u6EE1\u610F\uFF0C\u73B0\u53EA\u4FDD\u7559\u6700\u7B80\u5355\u6700\u5E03\u5C40\u529F\u80FD\u3002</p><p>\u6CE8\uFF1A</p><ul><li>\u8FD9\u51E0\u4E2A\u7EC4\u4EF6\u4E3B\u8981\u805A\u7126\u4E8E\u5E03\u5C40\u3002</li><li>\u5982\u679C\u60F3\u8981\u590D\u6742\u7684\u8868\u5355\u8BBE\u8BA1\u6216\u8005\u6821\u9A8C\u529F\u80FD\uFF0C\u53EF\u4EE5\u501F\u52A9 <a href="https://formilyjs.org/zh-CN/guide" target="_blank" rel="noopener noreferrer">formilyjs</a> \u6765\u5B9E\u73B0\u3002</li></ul><h2 id="import" tabindex="-1">Import <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><div class="language-"><pre><code>import { Form, FormFooter, FormItem } from &#39;vfox&#39;
</code></pre></div><p>\u5177\u4F53\u7684\u5F15\u5165\u65B9\u5F0F\u53EF\u4EE5\u53C2\u8003<a href="./../#\u5F15\u5165\u7EC4\u4EF6">\u5F15\u5165\u7EC4\u4EF6</a>\u3002</p><h2 id="form-slots" tabindex="-1">Form Slots <a class="header-anchor" href="#form-slots" aria-hidden="true">#</a></h2><h3 id="default" tabindex="-1">default <a class="header-anchor" href="#default" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-form&gt;
  &lt;fx-input type=&quot;text&quot; /&gt;
&lt;/fx-form&gt;
</code></pre></div><h3 id="footer" tabindex="-1">footer <a class="header-anchor" href="#footer" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-form&gt;
  &lt;template #footer&gt;
    &lt;fx-button form-type=&quot;submit&quot;&gt;\u63D0\u4EA4&lt;/fx-button&gt;
  &lt;/template&gt;
&lt;/fx-form&gt;
</code></pre></div><h2 id="formfooter-slots" tabindex="-1">FormFooter Slots <a class="header-anchor" href="#formfooter-slots" aria-hidden="true">#</a></h2><h3 id="default-1" tabindex="-1">default <a class="header-anchor" href="#default-1" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-form-footer&gt;
  &lt;fx-button form-type=&quot;submit&quot;&gt;\u63D0\u4EA4&lt;/fx-button&gt;
&lt;/fx-form-footer&gt;
</code></pre></div><h2 id="formitem-props" tabindex="-1">FormItem Props <a class="header-anchor" href="#formitem-props" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5FC5\u586B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>error</td><td>string/string[]</td><td></td><td>\u5426</td><td>\u9519\u8BEF\u63D0\u793A\u4FE1\u606F</td></tr><tr><td>label</td><td>string</td><td></td><td>\u5426</td><td>\u8BBE\u7F6E\u8BE5\u884C\u540D\u79F0\uFF0C\u6BD4\u5982 <code>\u6635\u79F0</code></td></tr><tr><td>required</td><td>boolean</td><td>false</td><td>\u5426</td><td>\u662F\u5426\u5FC5\u586B\uFF0C\u8BBE\u7F6E <code>true</code> \u540E label \u4F1A\u5C55\u793A\u5FC5\u586B<code>*</code></td></tr></tbody></table><h2 id="formitem-slots" tabindex="-1">FormItem Slots <a class="header-anchor" href="#formitem-slots" aria-hidden="true">#</a></h2><h3 id="default-2" tabindex="-1">default <a class="header-anchor" href="#default-2" aria-hidden="true">#</a></h3><div class="language-"><pre><code>&lt;fx-form-item&gt;
  &lt;fx-input type=&quot;text&quot; /&gt;
&lt;/fx-form-item&gt;
</code></pre></div><h2 id="\u652F\u6301\u8868\u5355\u7684\u7EC4\u4EF6" tabindex="-1">\u652F\u6301\u8868\u5355\u7684\u7EC4\u4EF6 <a class="header-anchor" href="#\u652F\u6301\u8868\u5355\u7684\u7EC4\u4EF6" aria-hidden="true">#</a></h2><ul><li><a href="./Input.html">Input</a></li><li><a href="./Radio.html#radiogroup">RadioGroup</a></li><li><a href="./Checkbox.html#checkboxgroup">CheckboxGroup</a></li><li><a href="./Switch.html">Switch</a></li><li><a href="./Stepper.html">Stepper</a></li><li><a href="./Slider.html">Slider</a></li><li><a href="./Range.html">Range</a></li><li><a href="./Rate.html">Rate</a></li><li><a href="./Calendar.html">Calendar</a></li><li><a href="./DatePicker.html">DatePicker</a></li><li><a href="./Cascader.html">Cascader</a></li><li><a href="./Picker.html">Picker</a></li><li><a href="./ImageUploader.html">ImageUploader</a></li></ul><h2 id="\u4E0E-formily-\u914D\u5408" tabindex="-1">\u4E0E <strong>Formily</strong> \u914D\u5408 <a class="header-anchor" href="#\u4E0E-formily-\u914D\u5408" aria-hidden="true">#</a></h2><p>\u5173\u4E8E <strong>Formily</strong> \u7684\u4ECB\u7ECD\u53EF\u4EE5\u67E5\u770B\u963F\u91CC\u5DF4\u5DF4\u7684<a href="https://formilyjs.org/zh-CN" target="_blank" rel="noopener noreferrer">\u5B98\u7F51</a>\u3002</p><h3 id="\u5B89\u88C5" tabindex="-1">\u5B89\u88C5 <a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a></h3><div class="language-"><pre><code>npm install --save @formily/core @formily/vue
</code></pre></div><h3 id="\u5BF9-formitem-\u505A\u4E0B\u9002\u914D" tabindex="-1">\u5BF9 <code>FormItem</code> \u505A\u4E0B\u9002\u914D <a class="header-anchor" href="#\u5BF9-formitem-\u505A\u4E0B\u9002\u914D" aria-hidden="true">#</a></h3><p><code>FormilyFormItem.ts</code>:</p><div class="language-TypeScript"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> FormItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> connect<span class="token punctuation">,</span> mapProps <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@formily/vue&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> isVoidField <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@formily/core&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>
  FormItem<span class="token punctuation">,</span>
  <span class="token function">mapProps</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span> validateStatus<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token string">&#39;label&#39;</span><span class="token punctuation">,</span> required<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">(</span>props<span class="token punctuation">,</span> field<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isVoidField</span><span class="token punctuation">(</span>field<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> props
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>field<span class="token punctuation">)</span> <span class="token keyword">return</span> props

      <span class="token keyword">const</span> <span class="token function-variable function">getMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>field<span class="token punctuation">.</span>validating<span class="token punctuation">)</span> <span class="token keyword">return</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>props<span class="token punctuation">.</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> props<span class="token punctuation">.</span>error
        <span class="token keyword">if</span> <span class="token punctuation">(</span>field<span class="token punctuation">.</span>selfErrors<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> field<span class="token punctuation">.</span>selfErrors
        <span class="token comment">// if (field.selfWarnings.length) return split(field.selfWarnings)</span>
        <span class="token comment">// if (field.selfSuccesses.length) return split(field.selfSuccesses)</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        error<span class="token operator">:</span> <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span>
<span class="token punctuation">)</span>
</code></pre></div><h3 id="\u8BBE\u8BA1\u8868\u5355" tabindex="-1">\u8BBE\u8BA1\u8868\u5355 <a class="header-anchor" href="#\u8BBE\u8BA1\u8868\u5355" aria-hidden="true">#</a></h3><div class="language-Vue"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormProvider</span> <span class="token attr-name">:form</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>form<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Field</span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nickname<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6635\u79F0<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">required</span>
      <span class="token attr-name">:component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[Input, { placeholder: <span class="token punctuation">&#39;</span>\u8BF7\u8F93\u5165\u6635\u79F0<span class="token punctuation">&#39;</span> }]<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:decorator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[FormilyFormItem]<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Field</span>
      <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>gender<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u6027\u522B<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">required</span>
      <span class="token attr-name">:component</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[
        RadioGroup,
        {
          options: genderOptions
        }
      ]<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:decorator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>[FormilyFormItem]<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FormConsumer</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#default</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ form }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>exp-form-json<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{
          JSON.stringify(form.values, null, 2)
        }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-form-footer</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fx-button</span>
            <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>
              () =&gt; {
                form.submit(onSubmit)
              }
            <span class="token punctuation">&quot;</span></span>
            <span class="token punctuation">&gt;</span></span>\u63D0\u4EA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-button</span>
          <span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fx-form-footer</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormConsumer</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>FormProvider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> multiOptions<span class="token punctuation">,</span> regionOptions <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;../Picker/data&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>
  Input<span class="token punctuation">,</span>
  RadioGroup<span class="token punctuation">,</span>
  Dialog<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vfox&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createForm<span class="token punctuation">,</span> setValidateLanguage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@formily/core&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> FormProvider<span class="token punctuation">,</span> Field<span class="token punctuation">,</span> FormConsumer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@formily/vue&#39;</span>
<span class="token keyword">import</span> FormilyFormItem <span class="token keyword">from</span> <span class="token string">&#39;./FormilyFormItem&#39;</span>

<span class="token function">setValidateLanguage</span><span class="token punctuation">(</span><span class="token string">&#39;zh-CN&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token string">&#39;ExpForm&#39;</span><span class="token punctuation">,</span>
  components<span class="token operator">:</span> <span class="token punctuation">{</span> FormProvider<span class="token punctuation">,</span> Field<span class="token punctuation">,</span> FormConsumer <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      FormilyFormItem<span class="token punctuation">,</span>
      Input<span class="token punctuation">,</span>
      RadioGroup<span class="token punctuation">,</span>
      form<span class="token operator">:</span> <span class="token function">createForm</span><span class="token punctuation">(</span><span class="token punctuation">{</span> validateFirst<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

      genderOptions<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&#39;\u7537&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&#39;\u5973&#39;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  methods<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">onBaseSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Dialog<span class="token punctuation">.</span><span class="token function">showDialog</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        showCancel<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
        content<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">nickname: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>baseForm<span class="token punctuation">.</span>nickname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
        gender: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>baseForm<span class="token punctuation">.</span>gender<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">
        </span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u9644\u5F55\uFF1A" tabindex="-1">\u9644\u5F55\uFF1A <a class="header-anchor" href="#\u9644\u5F55\uFF1A" aria-hidden="true">#</a></h3><ul><li><a href="https://vue.formilyjs.org/" target="_blank" rel="noopener noreferrer">Formily Vue Library</a></li><li><a href="https://vue.formilyjs.org/guide/concept.html#%E4%B8%89%E7%A7%8D%E5%BC%80%E5%8F%91%E6%A8%A1%E5%BC%8F" target="_blank" rel="noopener noreferrer">\u66F4\u591A\u5F00\u53D1\u6A21\u5F0F</a></li><li><a href="https://formilyjs.org/zh-CN/guide/advanced/validate" target="_blank" rel="noopener noreferrer">\u8868\u5355\u6821\u9A8C</a></li></ul>`,33),e=[o];function l(c,r,u,i,k,d){return s(),a("div",null,e)}var g=n(p,[["render",l]]);export{f as __pageData,g as default};