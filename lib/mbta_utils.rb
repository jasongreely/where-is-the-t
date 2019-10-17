require 'net/http'
require 'json'
require 'dotenv/load'

class MBTA_Utils
  def initialize()
    @mbta_uri = ENV["mbta_uri"]
    @mbta_key = ENV["mbta_key"]
  end

  def get_lines
    uri = URI(@mbta_uri + 'lines')

    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true

    request = Net::HTTP::Get.new(uri)
    request["api_key"] = @mbta_key

    response = http.request(request)
    body = JSON.parse(response.read_body)
    body["data"]
  end

  def get_stops(route)
    uri = URI(@mbta_uri + "stops?filter[route]=#{route}")

    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true

    request = Net::HTTP::Get.new(uri)
    request["api_key"] = @mbta_key

    response = http.request(request)
    body = JSON.parse(response.read_body)
    body["data"]
  end
end