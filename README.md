# ireul-web

[![Build Status](https://travis-ci.org/gyng/ireul-web.svg)](https://travis-ci.org/gyng/ireul-web)

Rails (with React) client for [Ireul](https://github.com/infinityb/ireul/), a radio backend.

![Screenshot](http://i.imgur.com/SgSDlBG.png)

## Features
* Song database (48kHz OGG)
* Song requests with cooldowns
* Frosted background images for each song
* Cool interface
* 'Nice!' for playing songs

## Dev setup
0. [Install NodeJS](https://nodejs.org/en/download/)
1. [Install ImageMagick](http://www.imagemagick.org/index.php)
2. Clone
3. `bundle update && bundle install`
4. `rake db:migrate db:seed`
5. Configure `config/ireul.yml` with Ireul server url/port
6. `rails runner script/create_user.rb`
7. `bundle exec rails server`

## Notes and useful commands
* Login at `http://example.com/login`
* `rake db:fixtures:dump` dumps existing DB as fixtures
* `Gemfile.lock` is in `.gitignore` due to cross-platform issues [1](https://github.com/bundler/bundler-features/issues/4).
* [Importing songs](DEPLOYING.md#importing-songs)

### Windows
* Ruby22 + bcrypt — [1](https://github.com/codahale/bcrypt-ruby/issues/116), [2](https://www.alib.jp/entries/bcrypt_ext_load_error_on_ruby21x), make sure `git`, DevKit `dk/bin`, `dk/mingw/bin` are in PATH
* [ImageMagick](http://www.imagemagick.org/script/binary-releases.php#windows)

## Testing
`rake test`

## Deploying
See [DEPLOYING.md](DEPLOYING.md)

## License
MIT. See [LICENSE](LICENSE)
