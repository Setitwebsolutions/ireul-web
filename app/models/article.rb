class Article < ActiveRecord::Base
  belongs_to :user
  before_save :format_content

  def format_content
    self.content = ActionController::Base.helpers.simple_format(content, {}, sanitize: false)
  end
end
