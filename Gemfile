source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 4.2'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Use ActiveModel has_secure_password
gem 'bcrypt'

gem 'pg'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
  gem 'rspec-mocks'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'
  gem 'rubocop'
  gem 'capistrano-rails'
  gem 'capistrano-passenger'
end

group :test do
  # Required for Travis CI
  gem 'rake'
end

group :production do
  gem 'unicorn'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Windows compatability requirement
gem 'nokogiri', '>= 1.6.7'

gem 'kaminari'
gem 'lodash-rails'
gem 'paperclip', '~> 4.3'
gem 'react-rails', '~> 1.7.1'

gem 'ogg', '0.0.5', git: 'https://github.com/infinityb/ruby-ogg.git'

# Own fork of ireul ruby client, at least until it's its own repo/published
# Bundler had a problem with finding the correct path for the gemspec
gem 'ireul', '0.0.6', git: 'https://github.com/gyng/ireul.git', branch: 'gemspec'
