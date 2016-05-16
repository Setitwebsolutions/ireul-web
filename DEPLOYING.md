# Production setup

## First run

### On the server
1. Install Ruby, NodeJS (with [rbenv](https://github.com/rbenv/rbenv) or otherwise)
2. `mkdir /var/www`
3. `chown /var/www <deploy>` give permissions to deploying user (in this example, `deploy` is the user)

### On a dev machine
1. `cp config/deploy/production.rb.template config/deploy/production.rb`
2. Configure `config/deploy/production.rb`, `config/deploy.rb`
3. Set up required SSH keys: Put your `id_rsa` in `~/.ssh`
4. `bundle install`
5. `cap -T` to view available tasks
6. `cap production deploy`
7. `cap production bundler:install`
8. `cap production deploy:migrate`
9. `cap production deploy:seed`
10. `cap production deploy:compile_assets`

### Back on the server
1. Set up production secret key: [instructions](http://stackoverflow.com/a/26172408)
2. Configure `config/ireul.yml`
3. Configure `config/database.yml` if not using SQLite. [Guide](http://edgeguides.rubyonrails.org/configuring.html#configuring-a-database)

### Back on the dev machine
1. `cap production passenger:start_sudo`

## Subsequent deploys
(Not fully tried and tested)

### On a dev machine
1. `cap production deploy`
2. Whatever needs running (assets, migrations)
3. `cap production passenger:restart` or `cap production passenger:stop_sudo`, `cap production passenger:start_sudo`

# Importing songs

## Convert

Only 48kHz OGG songs are supported.

Single file:

    oggenc $FILEPATH --min-bitrate 80 --max-bitrate 140 --bitrate 128 --resample 48000

Directory:

    find *.flac -exec oggenc {} --min-bitrate 80 --max-bitrate 140 --bitrate 128 --resample 48000 \;

## Ingest

There is a Rails script to add songs, with attached images, into the database. The ingested songs are stored in Paperclip's upload directory `public/system`.

```xml
rails runner script/ingest.rb <root_path> <song_glob_pattern> <in_dir_image_glob_pattern>
```

### Examples

```
# Directory structure:
  sourcedir/
    - song1.ogg
    - song2.ogg
    - image.jpg

$ RAILS_ENV=<env> rails runner script/ingest.rb sourcedir "*.ogg" "*.{gif,png,jpg,jpeg,bmp}"
```

```
# Directory structure:
  sourcedir/
    artist1/
      album/
        - song1.ogg
    artist2/
      album/
        - song1.ogg
        - song2.ogg
        - image.jpg
      album2/
        - song1.ogg
        - cover.png

$ RAILS_ENV=<env> rails runner script/ingest.rb sourcedir "*/*.ogg" "*.{gif,png,jpg,jpeg,bmp}"
```
