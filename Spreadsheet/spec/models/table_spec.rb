# == Schema Information
#
# Table name: tables
#
#  id         :integer          not null, primary key
#  size       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Table, type: :model do

  describe 'validations' do
    subject(:table) { Table.new(size: "3 2") }
    it { should validate_presence_of(:size) }
  end

  describe 'associations' do
    it { should have_many(:cells) }
  end
end
