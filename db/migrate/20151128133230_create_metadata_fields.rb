class CreateMetadataFields < ActiveRecord::Migration
  def change
    create_table :metadata_fields do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
