require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
  test 'it creates' do
    assert_difference('Article.count', 1) do
      Article.create(title: 'title', content: 'content', user_id: 1)
    end
  end

  test 'it sanitizes content on save' do
    a = Article.create(
      title: 'title',
      content: 'content <div></div><a lmao href="url">a link</a>',
      user_id: 1)
    assert_equal(a.content, 'content <a href="url">a link</a>')
  end
end
