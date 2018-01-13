function translator(str) {
  return str.split('').map(function (char) {
    var d=Hangul.disassemble(char);
    if(d[3] && Hangul.isVowel(d[1]) && Hangul.isVowel(d[2])) {
      var tem=d[3];
      d[3]=d[2];
      d[2]=tem;
    }
    return Hangul.assemble(d); // 자모음을 다시 조립해서 글자를 반환
  }).join('');
}
window.addEventListener('DOMContentLoaded', function(){
  document.querySelector('.change').addEventListener('click', function() {
    const changedText = translator(document.querySelector('.original-text').value); // translator함수로 원 문장을 변형
    document.querySelector('.result-text').innerText = changedText; // 변형된 문장을 결과에 넣어준다
  })

});
