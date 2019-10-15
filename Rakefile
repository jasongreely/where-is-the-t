require 'bundler/setup'
Bundler.require(:default)

$LOAD_PATH << __dir__

require 'active_support/all'

require_rel 'lib/*.rb'

task :default do
  ruby 'lib/service.rb'
end