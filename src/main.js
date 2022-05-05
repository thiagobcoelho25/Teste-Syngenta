const split_input_data = require('./utils/split_input_data')

function getCheapestHotel (input) { //DO NOT change the function's name.
    const {type_of_client, array_of_days} = split_input_data.split_input_data(input)

    let most_cheap_hotel = split_input_data.calculate_most_cheap(type_of_client, array_of_days)

    return most_cheap_hotel
}

exports.getCheapestHotel = getCheapestHotel
