import mint1 from '@/assets/images/mint1.png';
import mint2 from '@/assets/images/mint2.png';
import mint3 from '@/assets/images/mint3.png';


export const mintStages = [
  {
    "timeRange": [new Date('2023-12-20').valueOf(), new Date('2023-12-21').valueOf()],
    "total": 128,
    "items": [
      {
        "name": "Universe Factory",
        "price": "Free mint : 0 ETH",
        icon: mint1,
      },
      {
        "name": "Fubao Factory",
        "price": "Free mint : 0 ETH",
        icon: mint2,
      },
      {
        "name": "Penguin Factory",
        "price": "Free mint : 0 ETH",
        icon: mint3,
      }
    ]
  },
  {
    "timeRange": [new Date('2023-12-24').valueOf(), new Date('2023-12-25').valueOf()],
    "total": 888,
    "items": [
      {
        "name": "Universe Factory",
        "price": "WL mint : 0.02 ETH",
        icon: mint1,
      },
      {
        "name": "Universe Factory",
        "price": "WL mint : 0.02 ETH",
        icon: mint2,
      },
      {
        "name": "Universe Factory",
        "price": "WL mint : 0.02 ETH",
        icon: mint3,
      }
    ]
  }
]

export enum StageType {
  COMMING_SOOM,
  MINT,
  EXPIRED
}