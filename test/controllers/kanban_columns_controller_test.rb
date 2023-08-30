require "test_helper"

class KanbanColumnsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @kanban_column = kanban_columns(:one)
  end

  test "should get index" do
    get kanban_columns_url
    assert_response :success
  end

  test "should get new" do
    get new_kanban_column_url
    assert_response :success
  end

  test "should create kanban_column" do
    assert_difference("KanbanColumn.count") do
      post kanban_columns_url, params: { kanban_column: { name: @kanban_column.name, position: @kanban_column.position } }
    end

    assert_redirected_to kanban_column_url(KanbanColumn.last)
  end

  test "should show kanban_column" do
    get kanban_column_url(@kanban_column)
    assert_response :success
  end

  test "should get edit" do
    get edit_kanban_column_url(@kanban_column)
    assert_response :success
  end

  test "should update kanban_column" do
    patch kanban_column_url(@kanban_column), params: { kanban_column: { name: @kanban_column.name, position: @kanban_column.position } }
    assert_redirected_to kanban_column_url(@kanban_column)
  end

  test "should destroy kanban_column" do
    assert_difference("KanbanColumn.count", -1) do
      delete kanban_column_url(@kanban_column)
    end

    assert_redirected_to kanban_columns_url
  end
end
