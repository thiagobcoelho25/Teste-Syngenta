const data_hotels = require("../data/hoteis.json")

module.exports = {
split_input_data (input_data) { 
  const data_splited = input_data.trim().split(":")

  return {type_of_client: data_splited[0], array_of_days: data_splited[1].trim().split(",")}
},

calculate_most_cheap (type_of_client, array_of_days) { 
  let index_most_cheap_hotel = undefined
  let value_dailys = Number.MAX_VALUE
  
  if (type_of_client === "Regular") { 
    data_hotels.array_of_hotels.forEach((hotel, index) => {
      let sum_price_days = this.calculate_price_days(hotel.daily_rate['Regular'].week, array_of_days)
      
      if(value_dailys === sum_price_days){
        if(index_most_cheap_hotel !== undefined){
          data_hotels.array_of_hotels[index_most_cheap_hotel].classification < data_hotels.array_of_hotels[index].classification
          index_most_cheap_hotel = index
        }
      }
      
      if (value_dailys > sum_price_days){
        index_most_cheap_hotel = index
        value_dailys = sum_price_days
      }
    });
  } else {
    data_hotels.array_of_hotels.forEach((hotel, index) => {
      let sum_price_days = this.calculate_price_days(hotel.daily_rate['Reward'].week, array_of_days)
      
      if(value_dailys === sum_price_days){
        if(index_most_cheap_hotel !== undefined){
          data_hotels.array_of_hotels[index_most_cheap_hotel].classification < data_hotels.array_of_hotels[index].classification
          index_most_cheap_hotel = index
        }
      }
      
      if (value_dailys > sum_price_days){
        index_most_cheap_hotel = index
        value_dailys = sum_price_days
      }
    });
  }

  return data_hotels.array_of_hotels[index_most_cheap_hotel].name
},

calculate_price_days (hotel_daily_rate, array_of_days) { 
  let sum = 0
  for( let i = 0; i < array_of_days.length; i++){
    const date = new Date(array_of_days[i])
    sum = sum + hotel_daily_rate[date.getDay()]
  }
  return sum
}
}
