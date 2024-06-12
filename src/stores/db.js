import { defineStore } from "pinia";
import { reactive, computed } from "vue";

export const useDataStore = defineStore("data", () => {
  // 데이터 정의
  const state = reactive({
    data: [
      {
        no: 1,
        date: "2024.06.05 13:33",
        content: "지에스(GS)2",
        expense: 2300,
        income: 0,
        balance: 403238,
        category: "여가",
      },
      {
        no: 2,
        date: "2024.06.05 12:58",
        content: "롯데리아 건대입",
        expense: 10700,
        income: 0,
        balance: 405538,
        category: "경조사",
      },
      {
        no: 3,
        date: "2024.06.05 11:04",
        content: "쿠팡 주식회사",
        expense: 29680,
        income: 0,
        balance: 416238,
        category: "의료",
      },
      {
        no: 4,
        date: "2024.06.05 03:08",
        content: "우리카드결제대금",
        expense: 176950,
        income: 0,
        balance: 445918,
        category: "교통",
      },
      {
        no: 5,
        date: "2024.06.04 20:50",
        content: "쿠팡 주식회사",
        expense: 21730,
        income: 0,
        balance: 622868,
        category: "식비",
      },
      {
        no: 6,
        date: "2024.06.04 13:07",
        content: "맘스터치 롯데건",
        expense: 7100,
        income: 0,
        balance: 644598,
        category: "경조사",
      },
      {
        no: 7,
        date: "2024.06.03 13:29",
        content: "지에스(GS)2",
        expense: 2300,
        income: 0,
        balance: 651698,
        category: "교통",
      },
      {
        no: 8,
        date: "2024.06.03 13:11",
        content: "한촌설렁탕 군자",
        expense: 9500,
        income: 0,
        balance: 653998,
        category: "공과금",
      },
      {
        no: 9,
        date: "2024.06.03 08:39",
        content: "지에스(GS)2",
        expense: 4300,
        income: 0,
        balance: 663498,
        category: "공과금",
      },
      {
        no: 11,
        date: "2024.06.02 22:45",
        content: "카카오페이",
        expense: 23428,
        income: 0,
        balance: 467798,
        category: "경조사",
      },
      {
        no: 12,
        date: "2024.06.02 21:21",
        content: "생마차홍대입구역",
        expense: 22300,
        income: 0,
        balance: 491226,
        category: "의료",
      },
      {
        no: 13,
        date: "2024.06.02 18:22",
        content: "토스 hhhg",
        expense: 15000,
        income: 0,
        balance: 513526,
        category: "공과금",
      },
      {
        no: 14,
        date: "2024.06.02 00:07",
        content: "나인투원",
        expense: 750,
        income: 0,
        balance: 528526,
        category: "의료",
      },
      {
        no: 15,
        date: "2024.06.01 16:21",
        content: "코레일유통주식회",
        expense: 800,
        income: 0,
        balance: 529276,
        category: "경조사",
      },
      {
        no: 16,
        date: "2024.06.01 14:03",
        content: "빽다방 수원매탄",
        expense: 5800,
        income: 0,
        balance: 530076,
        category: "금융",
      },
      {
        no: 17,
        date: "2024.06.01 14:01",
        content: "두산할인마트",
        expense: 4500,
        income: 0,
        balance: 535876,
        category: "공과금",
      },
      {
        no: 19,
        date: "2024.06.01 09:37",
        content: "김윤정",
        expense: 50000,
        income: 0,
        balance: 152956,
        category: "의료",
      },
      {
        no: 20,
        date: "2024.06.01 02:00",
        content: "세븐일레븐 수원",
        expense: 2500,
        income: 0,
        balance: 202956,
        category: "의료",
      },
      {
        no: 21,
        date: "2024.06.01 01:52",
        content: "나인투원",
        expense: 6150,
        income: 0,
        balance: 205456,
        category: "여가",
      },
      {
        no: 22,
        date: "2024.05.31 13:05",
        content: "롯데리아 건대입",
        expense: 12500,
        income: 0,
        balance: 211606,
        category: "여가",
      },
      {
        no: 23,
        date: "2024.05.31 07:46",
        content: "카카오페이",
        expense: 12948,
        income: 0,
        balance: 224106,
        category: "교통",
      },
      {
        no: 24,
        date: "2024.05.31 03:17",
        content: "도시가스05x603",
        expense: 8200,
        income: 0,
        balance: 237054,
        category: "식비",
      },
      {
        no: 25,
        date: "2024.05.30 21:49",
        content: "대흥 할인마트",
        expense: 20010,
        income: 0,
        balance: 245254,
        category: "금융",
      },
      {
        no: 26,
        date: "2024.05.30 20:32",
        content: "쿠팡 주식회사",
        expense: 18200,
        income: 0,
        balance: 265264,
        category: "교통",
      },
      {
        no: 27,
        date: "2024.05.30 13:13",
        content: "하오츠",
        expense: 16500,
        income: 0,
        balance: 283464,
        category: "경조사",
      },
      {
        no: 28,
        date: "2024.05.29 13:14",
        content: "서울 뼈칼국수",
        expense: 9000,
        income: 0,
        balance: 299964,
        category: "의료",
      },
      {
        no: 29,
        date: "2024.05.29 11:16",
        content: "쿠팡 주식회사",
        expense: 9500,
        income: 0,
        balance: 308964,
        category: "의료",
      },
      {
        no: 30,
        date: "2024.05.29 08:42",
        content: "지에스(GS)2",
        expense: 2300,
        income: 0,
        balance: 318464,
        category: "여가",
      },
      {
        no: 31,
        date: "2024.05.29 08:25",
        content: "파리바게뜨군자역",
        expense: 3300,
        income: 0,
        balance: 320764,
        category: "금융",
      },
      {
        no: 32,
        date: "2024.05.28 23:47",
        content: "자유인들",
        expense: 35000,
        income: 0,
        balance: 324064,
        category: "교통",
      },
      {
        no: 33,
        date: "2024.05.28 21:38",
        content: "대흥 할인마트",
        expense: 18930,
        income: 0,
        balance: 359064,
        category: "금융",
      },
      {
        no: 34,
        date: "2024.05.28 17:00",
        content: "카카오페이",
        expense: 306000,
        income: 0,
        balance: 377994,
        category: "경조사",
      },
      {
        no: 35,
        date: "2024.05.28 16:07",
        content: "(주)카카오페이",
        expense: 100000,
        income: 0,
        balance: 683994,
        category: "공과금",
      },
      {
        no: 36,
        date: "2024.05.28 13:42",
        content: "씨유(CU) 화",
        expense: 2800,
        income: 0,
        balance: 783994,
        category: "교통",
      },
      {
        no: 38,
        date: "2024.05.28 08:30",
        content: "지에스(GS)2",
        expense: 2300,
        income: 0,
        balance: 86794,
        category: "여가",
      },
      {
        no: 39,
        date: "2024.05.28 08:12",
        content: "파리바게뜨군자역",
        expense: 2730,
        income: 0,
        balance: 89094,
        category: "여가",
      },
      {
        no: 40,
        date: "2024.05.27 12:57",
        content: "롯데리아 건대입",
        expense: 8500,
        income: 0,
        balance: 91824,
        category: "의료",
      },
      {
        no: 42,
        date: "2024.05.25 12:12",
        content: "맘스터치 건대로",
        expense: 4200,
        income: 0,
        balance: 324,
        category: "경조사",
      },
      {
        no: 44,
        date: "2024.05.25 08:41",
        content: "지에스(GS)2",
        expense: 1000,
        income: 0,
        balance: 2524,
        category: "교통",
      },
      {
        no: 45,
        date: "2024.05.24 22:26",
        content: "맥도날드안암점",
        expense: 1300,
        income: 0,
        balance: 3524,
        category: "여가",
      },
      {
        no: 46,
        date: "2024.05.24 22:21",
        content: "더헙(The H",
        expense: 6000,
        income: 0,
        balance: 4824,
        category: "식비",
      },
      {
        no: 47,
        date: "2024.05.24 19:42",
        content: "포토에이스",
        expense: 4000,
        income: 0,
        balance: 10824,
        category: "여가",
      },
      {
        no: 48,
        date: "2024.05.24 18:45",
        content: "연어사랑1",
        expense: 17000,
        income: 0,
        balance: 14824,
        category: "금융",
      },
      {
        no: 49,
        date: "2024.05.24 13:31",
        content: "지에스(GS)2",
        expense: 3500,
        income: 0,
        balance: 31824,
        category: "금융",
      },
      {
        no: 50,
        date: "2024.05.24 12:57",
        content: "맘스터치 건대로",
        expense: 9400,
        income: 0,
        balance: 35324,
        category: "식비",
      },
      {
        no: 10,
        date: "2024.06.02 23:20",
        content: "하대오",
        expense: 0,
        income: 200000,
        balance: 667798,
        category: "금융",
      },
      {
        no: 18,
        date: "2024.06.01 13:14",
        content: "최호준",
        expense: 0,
        income: 387420,
        balance: 540376,
        category: "봉급",
      },
      {
        no: 37,
        date: "2024.05.28 13:22",
        content: "특별장학금(성적우수",
        expense: 0,
        income: 700000,
        balance: 786794,
        category: "기타",
      },
      {
        no: 41,
        date: "2024.05.27 12:33",
        content: "하승범",
        expense: 0,
        income: 100000,
        balance: 100324,
        category: "기타",
      },
      {
        no: 43,
        date: "2024.05.25 12:04",
        content: "하승범",
        expense: 0,
        income: 2000,
        balance: 4524,
        category: "용돈",
      },
      {
        no: 51,
        date: "2024.05.24 12:57",
        content: "KB 국민은행",
        income: 44724,
        balance: 44724,
        category: "금융",
      },
    ],
  });

  // 데이터 추가 함수 정의
  const addData = (date, content, expense, income, balance, category) => {
    state.data.push({
      no: new Date.getTime(),
      date: date,
      content: content,
      expense: expense,
      income: income,
      balance: balance,
      category: category,
    });
  };

  // 데이터 삭제 함수 정의
  const deleteData = (no) => {
    let index = state.data.findIndex((content) => content.no === no);
    state.data.splice(index, 1);
  };

  // 데이터 수정 함수 정의
  const renewData = (date, content, expense, income, balance, category) => {
    let index = state.data.findIndex((content) => content.no === no);
    state.data[index] = {
      no,
      date,
      content,
      expense,
      income,
      balance,
      category,
    };
  };
  const data = computed(() => state.data);
  return { data, addData, deleteData, renewData };
});
