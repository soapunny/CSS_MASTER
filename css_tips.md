<h1>CSS Tips</h1><hr/><br>

<h4># 선택자(Selectors)</h4>
<ul>
  <li>&:not(:nth-child(3)) : 3번째 자식이 아닌 모든 자식 선택자</li>
  <li>& > *:not(.footer) : 'footer' 클래스를 제외한 모든 다이렉트 자식 선택자</li>
</ul>
<br><br>

<h4># 애니메이션(Animation)</h4>
<pre>
  <code>@keyframes first_animation {
        from{
            transform: translateX(100%)
        }
        to{
            transform: translateX(-100%);
        }
  }</code>
</pre>
<ul>
  <li>@keyframes를 통해 animation을 먼저 등록한다.</li>
  <li>keyframes 함수 안에는 from{} to{} 20%{} 100%{} 등 진행도에 따라 다양한 속성을 지정할 수 있다.</li>
  <li>transform: translateX() 속성은 0%가 콘텐트의 시작, -100%는 콘텐츠가 전부다 지나간 후 그리고 100%는 콘텐츠가 지나가기 전이다. </li>
</ul>
<br><br>

<pre>
  <code>animation-name: first_animation;
  animation-duration: 15s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  </code>
</pre>
<ul>
  <li>animation-name은 @keyframe 함수명을 입력한다.</li>
  <li>animation-duration은 애니메이션이 진행 될 총 시간이다.</li>
  <li>animation-timing-function은 애니메이션의 시간별 상태전환을 지정한다. linear은 일정하게, ease는 느림-빠름-느림 순</li>
  <li>animation-iteration-count은 애니메이션의 반복횟수를 지정한다. </li>
</ul>
<br><br>
