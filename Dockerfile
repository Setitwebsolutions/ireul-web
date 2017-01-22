FROM ruby:2.3-slim

MAINTAINER gyng <ng.guoyou@gmail.com>

WORKDIR /app

RUN apt-get update \
  && apt-get install -qq -y \
    build-essential \
    nodejs \
    libpq-dev \
    imagemagick \
    git \
  && gem install bundler --no-ri --no-rdoc

COPY Gemfile /app/
RUN bundle install --without development test

COPY . .

RUN bundle exec rake assets:precompile

CMD bundle exec unicorn -c config/unicorn.rb
