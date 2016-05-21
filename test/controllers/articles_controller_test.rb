require 'test_helper'

class ArticlesControllerTest < ActionController::TestCase
  class WithAuthorization < ArticlesControllerTest
    setup do
      @article = articles(:one)
      @input_attributes = {
        title: 'my title',
        content: 'my content'
      }
      stub_user_model
      force_authorize
    end

    test 'should get index' do
      get :index
      assert_response :success
      assert_not_nil assigns(:articles)
    end

    test 'should get new' do
      get :new
      assert_response :success
    end

    test 'should get news' do
      get :new
      assert_response :success
    end

    test 'should create article' do
      assert_difference('Article.count', 1) do
        post :create, article: @input_attributes
      end

      assert_response :redirect
    end

    test 'should show article' do
      get :show, id: @article
      assert_response :success
    end

    test 'should get edit' do
      get :edit, id: @article
      assert_response :success
    end

    test 'should update article' do
      patch :update, id: @article, article: @input_attributes
      assert_redirected_to article_path
    end

    test 'should destroy article' do
      assert_difference('Article.count', -1) do
        delete :destroy, id: @article
      end

      assert_redirected_to articles_path
    end
  end

  class WithoutAuthorization < ArticlesControllerTest
    setup do
      @article = articles(:one)
      stub_user_model
    end

    test 'should not get new without authorization' do
      get :new
      assert_redirected_to login_url
    end

    test 'should not create article without authorization' do
      assert_no_difference('Article.count') do
        post :create, article: {}
      end

      assert_redirected_to login_url
    end

    test 'should not get edit without authorization' do
      get :edit, id: @article
      assert_redirected_to login_url
    end

    test 'should not update article without authorization' do
      patch :update, id: @article, article: @input_attributes
      assert_redirected_to login_url
    end

    test 'should not destroy article without authorization' do
      assert_no_difference('Article.count') do
        delete :destroy, id: @article
      end

      assert_redirected_to login_url
    end
  end
end
