class Article < ActiveRecord::Base
  belongs_to :user
  before_save :sanitize_content

  def sanitize_content
    self.content = ActionController::Base.helpers.simple_format(content)
  end
end
