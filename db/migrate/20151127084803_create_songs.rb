class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :artist, index: true
      t.string :title

      t.timestamps null: false
    end
  end
end
