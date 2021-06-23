/*
* 문제 1: 암호해독!

* 모든 알고리즘을 해독할 수 있는 알고리즘 7원석를 보유한 알고리즘 제왕 파이와 썬은 죽기 전,
* 이 보물에 '암호'를 걸어 세계 어딘가에 묻어놨다고 공표하였다. 그가 남긴 문자는 아래와 같다.
*
* 섬으로 향하라!
* "  + -- + - + -  "
* "  + --- + - +  "
* "  + -- + - + -  "
* "  + -- + - + -  "
* "  + - + - + - +  "
* 해(1)와 달(0), Code의 세상 안으로! (En-Coding)
*/

function question1() {
	let result = '';

	const TEXT = ['  + -- + - + -  ', '  + --- + - +  ', '  + -- + - + -  ', '  + -- + - + -  ', '  + - + - + - +  '];
	TEXT.forEach((item) => {
		// 한 행의 공백을 제거하고, +를 1로 치환, -를 0으로 치환
		let binary = item.replace(/ /gi, '').replace(/\+/gi, '1').replace(/\-/gi, '0');
		// 2진수 형태의 문자 binary변수를 10진수로 만든다.
		let decimal = parseInt(binary, 2);
		// 10진수로 바뀐 수를 ASCII 코드로 바꿔 알파벳으로 만들어준다.
		result += String.fromCharCode(decimal);
	});
	return result;
}

console.log(question1());
