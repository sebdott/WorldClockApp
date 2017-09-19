const cities = [   
    {
        Id: 1,
        City: '纽约 / New York ',
        TimeZoneAdd: -4
    },
    {
        Id: 3,
        City: '伦敦 / London',
        TimeZoneAdd: 1
    },
    {
        Id: 2,
        City: '东京 / Tokyo',
        TimeZoneAdd: 9
    },
    {
        Id: 4,
        City: '北京 / Beijing',
        TimeZoneAdd: 8
    },
    {
        Id: 5,
        City: '上海 / Shanghai',
        TimeZoneAdd: 8
    },
    
];

class CitiesApi {
    static 
    loadApiValue() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Object.assign([], cities));
        }, 1000);
      });
    }
}

export default CitiesApi;