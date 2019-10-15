require 'sinatra'
require 'json'
require 'figaro'
require_relative './MBTA_Utils.rb'
require 'dotenv/load'

get '/' do
  puts ENV["mbta_key"]
  mbta_utils = MBTA_Utils.new
  JSON.pretty_generate(mbta_utils.get_lines)
end