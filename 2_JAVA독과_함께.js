/*
 * 문제 2: JAVA독과 함께!
 *
 * 내 친구들이 징검다리를 건널꺼야! 하지만 징검다리는 버틸 수 있는 내구도에 한계가 있지!
 * 내 친구들의 몸무게, 돌의 내구도, 친구들의 점프력을 고려하여 내 친구 루비독, 피치피독, 씨-독, 코볼독이
 * 각각 다리를 건널 수 있는지 알아봐줘! 친구들은 더 추가될 수도, 덜 건널 수도 있어!
 *
 * 1. 각 돌들이 얼마나 버틸 수 있는지 배열로 주어진다. (내구도 0까지는 독의 몸무게를 버틸 수 있습니다. 0 미만이 되면 독은 살아남지 못합니다.)
 * 2. 각 독들의 개인정보가 객체 배열로 주어집니다. 개인정보느 보호되지 않습니다. 객체 생성을 위해 별도의 클래스가 필요합니다.
 *    메인 클래스 밖에 아래 크래스를 추가해 주세요.
 * ------------------------------------------------
 * class dog {
 *     String name;
 *     String age;
 *     int jump;
 *     int weight;
 *
 *     public dog (String name, String age, int jump, int weight) {
 *         this.name = name;
 *         this.age = age;
 *         this.jump = jump;
 *         this.weight = weight;
 *     }
 * }
 * ------------------------------------------------
 * 3. 각 돌에 독들이 착지할 때 돌의 내구도는 몸무게 만틈 줄어든다.
 *   ex) [1, 2, 1, 4] 각 돌마다 몸무게 1인 독 1마리 2마리 1마리 4마리의 착지를 버틸 수 있다.
 * 4. 독들의 점프력이 각자 다르다.
 *   ex) 점프력이 2라면 2칸씩 점프하여 착지한다.
 * 5. 각 독들은 순서대로만 다리를 건넌다.
 * ------------------------------------------------
 * $input 1
 * int[] stoneDurability = {1, 2, ,1, 4}
 * dog[] dogList = {
 *   new dog("루비독", "95년생", "3", "4"),
 *   new dog("피치독", "95년생", "3", "3"),
 *   new dog("씨-독", "72년생", "2", "1"),
 *   new dog("코볼독", "59년생", "1", "1"),
 * }
 * $output 1
 * 생존자 : ["씨-독"]
 *  $input 2
 * int[] stoneDurability = {5, 3, 4, 1, 3, 8, 3}
 * dog[] dogList = {
 *   new dog("루비독", "95년생", "3", "4"),
 *   new dog("피치독", "95년생", "3", "3"),
 *   new dog("씨-독", "72년생", "2", "1"),
 *   new dog("코볼독", "59년생", "1", "1"),
 * }
 * $output 2
 * 생존자 : ["루비독", "씨-독"]
 * ------------------------------------------------
 */
'use strict';

class Dog {
	constructor(name, age, jump, weight) {
		this.name = name;
		this.age = age;
		this.jump = jump;
		this.weight = weight;
	}
}

function question() {
	const stoneDurability = [1, 2, 1, 4];
	const dogList = [new Dog('루비독', '95년생', '3', '4'), new Dog('피치독', '95년생', '3', '3'), new Dog('씨-독', '72년생', '2', '1'), new Dog('코볼독', '59년생', '1', '1')];
	return func(stoneDurability, dogList);
}
function func(stoneDurability, dogList) {
	let list = [];
	dogList.forEach((dog) => {
		let position = -1;
		let check = false;

		while (position < stoneDurability.length) {
			position += parseInt(dog.jump);
			let stone = stoneDurability[position];
			if (stoneDurability.length < position) {
				check = true;
				break;
			} else {
				stoneDurability[position] = stone - dog.weight;
			}
			if (0 > stone - dog.weight) {
				break;
			}
		}
		if (check) {
			list.push(dog.name);
		}
	});
	return list;
}

console.log(question());
