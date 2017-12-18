# == Schema Information
#
# Table name: cells
#
#  id         :integer          not null, primary key
#  value      :string           not null
#  table_id   :integer          not null
#  input      :boolean          default(FALSE), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class CellTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
