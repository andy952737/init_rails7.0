require "test_helper"

class Backend::PostsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get backend_posts_index_url
    assert_response :success
  end
end
