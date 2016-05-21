require 'test_helper'

class ArticleTest < ActiveSupport::TestCase
  test 'it creates' do
    assert_difference('Article.count', 1) do
      Article.create(title: 'title', content: 'content', user_id: 1)
    end
  end
end
