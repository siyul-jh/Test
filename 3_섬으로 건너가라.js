/*
 * 문제 3: 섬으로 건너가라!
 *
 * 배에 탈 수 있는 사람의 수는 시간마다 다르다
 * 1. 한 배에는 탈 수 있는 인원이 정시에는 25명, 10분 마다 15명씩 탈 수 있습니다.
 * 2. 배는 매일 9시부터 21시 전까지(21시를 포함하지 않음) 10분 단위로 들어옵니다.
 * 3. 전체 대기 인원은 14000605명 입니다. 우리는 14000606번째와 14000706번째에 배를 타게 됩니다.
 * 앞사람이 아프거나, 대기를 못하고 빠질 경우 대기인원이 줄어들 수도 있습니다. 라이캣과 자바독이 다른 배를 타야 할 경우에는 뒷배를 타야 합니다.
 * 4. 1월은 1024일, 2월은 512일, 3월은 256일, 4월은 128일, 5월은 64일, 6월은 32일, 7월은 16일, 8월은 8일, 9월은 4일, 10월은 2일, 10월 까지 밖에 없습니다.
 * 5. 시간의 개념은 동일합니다. (하루는 24시간, 1시간 60분, 1분 60초)
 *   - 현재 날짜는 2021년 1월 1일입니다.
 * 6. 배에 타는 순간 자바독이 화장실이 급하다 하여 화장실에 갔으며, 현재 시간에 '분' 만큼 배 출발이 늦어졌습니다.
 * 7. 배는 휴일도 동일하게 운항됩니다. 배는 천재지변에 영향을 받지 않습니다.
 * 8. 라이캣과 자바독이 배에 타는 날짜를 구하세요.
 * Input : 14000605
 * output : 2025년 2월 413일 11시 0분 출발
 * Input : 1200202
 * output : 2020년 1월 1000일 11시 0분 출발
 * Output에 문제가 있다고 생각할 수 있지만.
 * 4번 보기를 보면 이해할 수 있다. 우리가 아는 태양력이 아닌것이다!
 */
/*
 * 1월은 1024일
 * 2월은 512일
 * 3월은 256일
 * 4월은 128일
 * 5월은 64일
 * 6월은 32일
 * 7월은 16일
 * 8월은 8일
 * 9월은 4일
 * 10월은 2일
 * 1년 2046일이다.
 */
// 9시 -> 25 / 9시 10분 -> 15 /
// 9시 20분 -> 15 / 9시 30분 -> 15 /
// 9시 40분 -> 15 / 9시 50분 -> 15 /
// 하루 1200명
'use strict';

function question() {
	// const waitPeoples = 14000605;
	const waitPeoples = 1200202;
	return func(waitPeoples);
}
function func(waitPeoples) {
	// 1시간동안 배가 출발하는 분
	let startMinArr = [25, 40, 55, 70, 85, 100];
	// 1년의 총 일수
	let yearDate = 0;
	for (let i = 10; i > 0; i--) {
		yearDate += 1 << i;
	}
	// 하루 탑승인원 수
	let dayNumPassengers = 1200;
	// 대기일
	let waitDate = waitPeoples / dayNumPassengers;
	// 연도
	let year = Math.floor(waitDate / yearDate);
	// 나머지 일수
	let remainDay = waitDate % yearDate;
	// 월
	let month = 0;
	for (let i = 10; i > 0; i--) {
		month++;
		let monthDay = 1 << i;
		if (remainDay < monthDay) {
			break;
		}
		remainDay -= monthDay;
	}
	// 일
	let day = Math.floor(remainDay);
	// 남은 인원 수
	let remainPeoples = waitPeoples % dayNumPassengers;
	// 시, 둘이 같은 배를 타야하기에 다음날로 넘어 갈 경우 9시 부터 출발한다.
	let hour = Math.floor(remainPeoples / 100 + 9);
	let rideMin = (remainPeoples % 100) + 1;
	let startMin = 0;

	for (let [idx, minItem] of startMinArr.entries()) {
		if (minItem > rideMin) {
			startMin = idx * 10;
			break;
		}
	}
	let now = new Date();
	let min = now.getMinutes() + startMin;

	if (min > 60) {
		min = min - 60;
		hour++;
	}

	return `${2020 + year}년 ${month}월 ${day}일 ${hour}시 ${min}분 출발`;
}

console.log(question());
