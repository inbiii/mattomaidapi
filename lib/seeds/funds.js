module.exports = db => {
  const funds = [
    {
      "city": "New York",
      "state": "New York",
      "monthlyRent": 4927,
      "averageSal": 5940.14,
      "updatedYear": "2021"
    },
    {
      "city": "Boston",
      "state": "Massachusetts",
      "monthlyRent": 4728,
      "averageSal": 5753.42,
      "updatedYear": "2021"
    },
    {
      "city": "Los Angeles",
      "state": "California",
      "monthlyRent": 4514,
      "averageSal": 5292.54,
      "updatedYear": "2021"
    },
    {
      "city": "San Francisco",
      "state": "California",
      "monthlyRent": 4084,
      "averageSal": 7866.39,
      "updatedYear": "2021"
    },
    {
      "city": "Jersey City",
      "state": "New Jersey",
      "monthlyRent": 3821,
      "averageSal": 6350.00,
      "updatedYear": "2021"
    },
    {
      "city": "Oakland",
      "state": "California",
      "monthlyRent": 3305,
      "averageSal": 5999.67,
      "updatedYear": "2021"
    },
    {
      "city": "San Diego",
      "state": "California",
      "monthlyRent": 3232,
      "averageSal": 5211.27,
      "updatedYear": "2021"
    },
    {
      "city": "Chicago",
      "state": "Illinois",
      "monthlyRent": 3065,
      "averageSal": 5549.29,
      "updatedYear": "2021"
    },
    {
      "city": "San Jose",
      "state": "California",
      "monthlyRent": 3034,
      "averageSal": 7318.50,
      "updatedYear": "2021"
    },
    {
      "city": "Scottsdale",
      "state": "Arizona",
      "monthlyRent": 3020,
      "averageSal": 6916.33,
      "updatedYear": "2021"
    }
  ]

  funds.forEach(fund => db.funds.insert(fund))
}
