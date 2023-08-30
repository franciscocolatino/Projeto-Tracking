require "application_system_test_case"

class KanbanColumnsTest < ApplicationSystemTestCase
  setup do
    @kanban_column = kanban_columns(:one)
  end

  test "visiting the index" do
    visit kanban_columns_url
    assert_selector "h1", text: "Kanban columns"
  end

  test "should create kanban column" do
    visit kanban_columns_url
    click_on "New kanban column"

    fill_in "Name", with: @kanban_column.name
    fill_in "Position", with: @kanban_column.position
    click_on "Create Kanban column"

    assert_text "Kanban column was successfully created"
    click_on "Back"
  end

  test "should update Kanban column" do
    visit kanban_column_url(@kanban_column)
    click_on "Edit this kanban column", match: :first

    fill_in "Name", with: @kanban_column.name
    fill_in "Position", with: @kanban_column.position
    click_on "Update Kanban column"

    assert_text "Kanban column was successfully updated"
    click_on "Back"
  end

  test "should destroy Kanban column" do
    visit kanban_column_url(@kanban_column)
    click_on "Destroy this kanban column", match: :first

    assert_text "Kanban column was successfully destroyed"
  end
end
