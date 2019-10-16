require 'sinatra'
require 'json'
require_relative './MBTA_Utils.rb'

get '/' do
  mbta_utils = MBTA_Utils.new
  JSON.pretty_generate(mbta_utils.get_lines)
end