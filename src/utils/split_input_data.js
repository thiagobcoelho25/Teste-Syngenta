module.exports = {
split_input_data (input_data) { 
  const data_splited = input_data.trim().split(":")

  return {type_of_client: data_splited[0], array_of_days: data_splited[1].trim().split(",")}
}
}
