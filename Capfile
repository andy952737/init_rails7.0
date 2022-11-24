# Load DSL and set up stages
require "capistrano/setup"

# Include default deployment tasks
require "capistrano/deploy"

# Load the SCM plugin appropriate to your project:
#
# require "capistrano/scm/hg"
# install_plugin Capistrano::SCM::Hg
# or
# require "capistrano/scm/svn"
# install_plugin Capistrano::SCM::Svn
# or  
require "capistrano/scm/git"
install_plugin Capistrano::SCM::Git
  
# Include for rvm
require "capistrano/rvm"    

# Include for bundler
require "capistrano/bundler"    

# Include for rails 
require "capistrano/rails"    

# Include for rails migratons
require "capistrano/rails/migrations"

# Include for passenger 
require "capistrano/passenger"  
 
# Include for yarn
require 'capistrano/yarn' 

# Include for rails assets:precompile
require "capistrano/rails/assets" 

# Include for rails assets:precompile
# require "capistrano/foreman" 

# Default settings
# set :foreman_use_sudo, false # Set to :rbenv for rbenv sudo, :rvm for rvmsudo or true for normal sudo
# set :foreman_roles, :all
# set :foreman_init_system, 'upstart'
# set :foreman_export_path, ->{ File.join(Dir.home, '.init') }
# set :foreman_app, -> { fetch(:application) }
# set :foreman_app_name_systemd, -> { "#{ fetch(:foreman_app) }.target" }
# set :foreman_options, ->{ {
#   app: application,
#   log: File.join(shared_path, 'log')
# } } 

# Include for delayed_job 
#require 'capistrano/delayed_job'

# Load custom tasks from `lib/capistrano/tasks` if you have any defined
Dir.glob("lib/capistrano/tasks/*.rake").each { |r| import r }

# Include tasks from other gems included in your Gemfile
#
# For documentation on these, see for example:
# 
#   https://github.com/capistrano/rvm
#   https://github.com/capistrano/rbenv
#   https://github.com/capistrano/chruby
#   https://github.com/capistrano/bundler
#   https://github.com/capistrano/rails
#   https://github.com/capistrano/passenger
# 
# require "capistrano/rbenv"
# require "capistrano/chruby" 