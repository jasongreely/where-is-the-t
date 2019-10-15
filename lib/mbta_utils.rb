require 'net/http'
require 'json'
require 'dotenv/load'

class MBTA_Utils
  def initialize()
    puts 'initing'
    @mbta_uri = ENV["mbta_uri"]
    puts @mbta_uri
    @mbta_key = ENV["mbta_key"]
    puts @mbta_key
  end

  def get_lines
    uri = URI(@mbta_uri)

    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true

    request = Net::HTTP::Get.new(uri)
    request["api_key"] = @mbta_key

    response = http.request(request)
    JSON.parse(response.read_body)
  end
end