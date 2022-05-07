const data_hotels = require('./data/hoteis.json')
const split_input_data = require('./utils/split_input_data')
const Hotel = require('./entities/hotel')

function getCheapestHotel (input) { //DO NOT change the function's name.
    const {type_of_client, array_of_days} = split_input_data.split_input_data(input)

    const hotels = [Object.assign(new Hotel, {...data_hotels.array_of_hotels[0] }),
    Object.assign(new Hotel, {...data_hotels.array_of_hotels[1]}), 
    Object.assign(new Hotel, {...data_hotels.array_of_hotels[2] }) ]

    let cheapest_hotel = undefined
    let total_price_days = Number.MAX_VALUE

    hotels.forEach((hotel) => {
        let current_price_days = hotel.calculate_price_days(type_of_client, array_of_days)
        
        if(total_price_days === current_price_days){
            cheapest_hotel = hotel.classification > cheapest_hotel.classification ? hotel : cheapest_hotel
        } else if (total_price_days > current_price_days){
            cheapest_hotel = hotel
            total_price_days = current_price_days
          }
      });
    
    return cheapest_hotel.name
}

exports.getCheapestHotel = getCheapestHotel
