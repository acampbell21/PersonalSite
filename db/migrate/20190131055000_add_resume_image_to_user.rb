class AddResumeImageToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :resume_image, :string
  end
end
