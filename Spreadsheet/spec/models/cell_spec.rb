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

require 'rails_helper'

RSpec.describe Cell, type: :model do
    subject(:cell) { Cell.new(value: "B2", table_id: 1, input: false) }
  
    describe 'validations' do
        it { should validate_presence_of(:value) }
        it { should validate_presence_of(:table_id) }
    end

    describe 'associations' do
        it { should belong_to(:table) }
    end
end
