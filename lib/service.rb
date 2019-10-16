require 'sinatra'
require 'sinatra/cross_origin'
require 'json'
require_relative './MBTA_Utils.rb'

# TODO: affect prod?
set :bind, '0.0.0.0'

configure do
  enable :cross_origin
end

before do
  # TODO: tie in real env. prop
  response.headers['Access-Control-Allow-Origin'] = ENV["local_ng"]
end

options "*" do
  response.headers["Allow"] = "GET, PUT, POST, DELETE, OPTIONS"
  response.headers["Access-Control-Allow-Headers"] = "Authorization, Content-Type, Accept, X-User-Email, X-Auth-Token"
  #response.headers["Access-Control-Allow-Origin"] = "*"
  200
end

get '/' do
  mbta_utils = MBTA_Utils.new
  JSON.pretty_generate(mbta_utils.get_lines)
end