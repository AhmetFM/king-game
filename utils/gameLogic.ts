export type GAME_TYPE = {
  id:string,
  name:string,
  description:string,
  penaltyPerUnit?:number,
  rewardPerUnit?:number,
  unit:string,
  maxPenalty?:number,
  maxReward?:number
}

export const GAME_CONSTANTS:GAME_TYPE[] = [
    {
      "id": "koz",
      "name": "Koz",
      "description": "Amaç en fazla eli almaktır.",
      "rewardPerUnit": 50,
      "unit": "el",
      "maxReward":13
    },
    {
      "id": "el_almaz",
      "name": "El almaz",
      "description": "Bu oyunda amaç hiç el almamaktır. Yere atılan en büyük kâğıt o eli alır.",
      "penaltyPerUnit": 50,
      "unit": "el",
      "maxPenalty":13
    },
    {
      "id": "kupa_almaz",
      "name": "Kupa almaz",
      "description": "Amaç Kupa serisinden hiç kağıt almamaktır.",
      "penaltyPerUnit": 30,
      "unit": "kupa",
      "maxPenalty":13
    },
    {
      "id": "kiz_almaz",
      "name": "Kız almaz",
      "description": "Amaç kızları (hangi tür olursa olsun) almamaktır.",
      "penaltyPerUnit": 100,
      "unit": "kız",
      "maxPenalty":4
    },
    {
      "id": "erkek_almaz",
      "name": "Erkek almaz",
      "description": "Amaç papaz ve valeleri almamaktır.",
      "penaltyPerUnit": 60,
      "unit": "erkek",
      "maxPenalty":8
    },
    {
      "id": "son_iki",
      "name": "Son iki",
      "description": "Amaç son iki eli almamaktır.",
      "penaltyPerUnit": 180,
      "unit": "el",
      "maxPenalty":2
    },
    {
      "id": "rifki",
      "name": "Rıfkı",
      "description": "Amaç Kupa Papazı'nı almamaktır.",
      "penaltyPerUnit": 320,
      "unit": "rifki",
      "maxPenalty":1
    },
  ]