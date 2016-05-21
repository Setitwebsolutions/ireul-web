class Article < ActiveRecord::Base
  belongs_to :user
  before_save :sanitize_content

  def sanitize_content
    self.content = ActionController::Base.helpers.sanitize(content,
      tags: %w(a ul li ol strong em code pre br marquee img video iframe),
      attributes: %w(href class style width height src frameborder allowfullscreen))
  end
end
